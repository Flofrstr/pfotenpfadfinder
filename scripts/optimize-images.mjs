#!/usr/bin/env node

/**
 * Bildoptimierungs-Skript für Pfotenpfadfinder
 *
 * Dieses Skript komprimiert die Originalbilder und erstellt WebP-Versionen.
 *
 * Installation:
 * npm install --save-dev sharp
 *
 * Verwendung:
 * node scripts/optimize-images.mjs
 */

import { readdir, stat } from 'fs/promises'
import { join, extname } from 'path'

const PUBLIC_DIR = './public'
const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png']
const TARGET_QUALITY = 85

async function optimizeImages() {
  console.log('🖼️  Bildoptimierung gestartet...\n')

  try {
    // Dynamischer Import von sharp
    const sharp = await import('sharp')

    const files = await readdir(PUBLIC_DIR)

    for (const file of files) {
      const filePath = join(PUBLIC_DIR, file)
      const fileStats = await stat(filePath)

      if (!fileStats.isFile()) continue

      const ext = extname(file).toLowerCase()
      if (!IMAGE_EXTENSIONS.includes(ext)) continue

      console.log(`📸 Verarbeite: ${file}`)

      const image = sharp.default(filePath)
      const metadata = await image.metadata()

      // Originalgröße
      const originalSize = fileStats.size / 1024

      // WebP-Version erstellen
      const webpPath = filePath.replace(ext, '.webp')
      await image.webp({ quality: TARGET_QUALITY }).toFile(webpPath)

      const webpStats = await stat(webpPath)
      const webpSize = webpStats.size / 1024

      // AVIF-Version erstellen (optional, kann langsam sein)
      const avifPath = filePath.replace(ext, '.avif')
      await image.avif({ quality: TARGET_QUALITY }).toFile(avifPath)

      const avifStats = await stat(avifPath)
      const avifSize = avifStats.size / 1024

      console.log(`  ✅ Original: ${originalSize.toFixed(2)} KB`)
      console.log(
        `  ✅ WebP: ${webpSize.toFixed(2)} KB (${((1 - webpSize / originalSize) * 100).toFixed(1)}% kleiner)`,
      )
      console.log(
        `  ✅ AVIF: ${avifSize.toFixed(2)} KB (${((1 - avifSize / originalSize) * 100).toFixed(1)}% kleiner)`,
      )
      console.log(`  📐 Abmessungen: ${metadata.width}x${metadata.height}\n`)
    }

    console.log('✨ Bildoptimierung abgeschlossen!')
    console.log('\n💡 Tipp: Next.js wird diese optimierten Bilder automatisch verwenden.')
  } catch (error) {
    if (error.code === 'ERR_MODULE_NOT_FOUND') {
      console.error('❌ Sharp ist nicht installiert.')
      console.error('Bitte installieren Sie es mit: npm install --save-dev sharp')
      process.exit(1)
    }
    throw error
  }
}

optimizeImages().catch(console.error)
