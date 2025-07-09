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
        {albums}
        {audiobooks}
        {podcasts}
      </section>
    </main>
  )
}
