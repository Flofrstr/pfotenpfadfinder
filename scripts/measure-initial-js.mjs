import { readFile } from 'node:fs/promises'
import { gzipSync } from 'node:zlib'

const baseUrl = process.env.PERF_BASE_URL ?? 'http://127.0.0.1:3000'
const showDetails = process.argv.includes('--details')
const routes = [
  { path: '/', limitKilobytes: 220 },
  { path: '/impressum', limitKilobytes: 200 },
  { path: '/datenschutz', limitKilobytes: 200 },
]

function initialScriptUrls(html) {
  const urls = new Set()

  for (const match of html.matchAll(
    /<script\b[^>]*\bsrc=["']([^"']+\.js(?:\?[^"']*)?)["'][^>]*>/gi,
  )) {
    if (/\bnomodule\b/i.test(match[0])) continue
    urls.add(match[1])
  }

  return [...urls]
}

async function measureRoute({ path, limitKilobytes }) {
  const response = await fetch(new URL(path, baseUrl))
  if (!response.ok) throw new Error(`${path} antwortet mit HTTP ${response.status}.`)

  const scripts = initialScriptUrls(await response.text())
  let rawBytes = 0
  let gzipBytes = 0
  const assets = []

  for (const scriptUrl of scripts) {
    const pathname = new URL(scriptUrl, baseUrl).pathname
    const prefix = '/_next/static/chunks/'
    if (!pathname.startsWith(prefix)) continue

    const file = new URL(`../.next/static/chunks/${pathname.slice(prefix.length)}`, import.meta.url)
    const content = await readFile(file)
    const compressedBytes = gzipSync(content, { level: 9 }).byteLength
    rawBytes += content.byteLength
    gzipBytes += compressedBytes
    assets.push({ pathname, rawBytes: content.byteLength, gzipBytes: compressedBytes })
  }

  const gzipKilobytes = gzipBytes / 1024
  const result = {
    path,
    scripts: scripts.length,
    rawKilobytes: rawBytes / 1024,
    gzipKilobytes,
    limitKilobytes,
    passed: gzipKilobytes < limitKilobytes || (path === '/' && gzipKilobytes <= limitKilobytes),
    assets,
  }

  return result
}

const results = await Promise.all(routes.map(measureRoute))

for (const result of results) {
  const state = result.passed ? 'PASS' : 'FAIL'
  console.log(
    `${state} ${result.path}: ${result.gzipKilobytes.toFixed(1)} KB gzip ` +
      `(${result.rawKilobytes.toFixed(1)} KB raw, ${result.scripts} initial scripts; ` +
      `limit ${result.limitKilobytes} KB)`,
  )

  if (showDetails) {
    for (const asset of result.assets.toSorted((a, b) => b.gzipBytes - a.gzipBytes)) {
      console.log(`  ${(asset.gzipBytes / 1024).toFixed(1).padStart(5)} KB gzip  ${asset.pathname}`)
    }
  }
}

if (results.some(result => !result.passed)) process.exitCode = 1
