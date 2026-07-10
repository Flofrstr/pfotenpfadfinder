import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    absolute: '404: This page could not be found.',
  },
}

export default function NotFound() {
  return (
    <div
      className="flex h-screen flex-col items-center justify-center text-center"
      style={{
        fontFamily:
          'system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
      }}
    >
      <div>
        <h1 className="next-error-h1 m-0 mr-5 inline-block border-r border-black/30 px-0 py-0 pr-6 align-top text-2xl leading-[49px] font-medium dark:border-white/30">
          404
        </h1>
        <div className="inline-block">
          <h2 className="m-0 text-sm leading-[49px] font-normal">This page could not be found.</h2>
        </div>
      </div>
    </div>
  )
}
