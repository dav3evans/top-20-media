import { ReactNode } from 'react'
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
      {children}
      <section className="flex gap-[32px]">
        {audiobooks}
        {albums}
        {podcasts}
      </section>
    </main>
  )
}
