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
    <main className="">
      {/* Suspense needed here because of useSearchParams() in the client page component */}
      <Suspense>{children}</Suspense>
      <section className="flex flex-col md:flex-row gap-8 items-center justify-center md:items-start">
        {albums}
        {audiobooks}
        {podcasts}
      </section>
    </main>
  )
}
