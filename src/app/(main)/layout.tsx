import { ReactNode, Suspense } from 'react'
export default function MainLayout({
  children,
  audiobooks,
  albums,
  podcasts,
}: {
  children: ReactNode
  audiobooks: ReactNode
  albums: ReactNode
  podcasts: ReactNode
}) {
  return (
    <main className="m-auto max-w-[1280px] flex flex-col gap-8">
      {/* Suspense needed here because of useSearchParams() in the client page component */}
      <Suspense>{children}</Suspense>
      <section className="flex gap-8">
        <div className="flex flex-col flex-1 gap-8 p-4 border-2 rounded-lg bg-gradient-to-b from-white/5 to-white/10">
          {albums}
        </div>
        <div className="flex flex-col flex-1 gap-8 p-4 border-2 rounded-lg bg-gradient-to-b from-white/5 to-white/10">
          {audiobooks}
        </div>
        <div className="flex flex-col flex-1 gap-8 p-4 border-2 rounded-lg bg-gradient-to-b from-white/5 to-white/10">
          {podcasts}
        </div>
      </section>
    </main>
  )
}
