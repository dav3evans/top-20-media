import { fetchMedia } from './actions'
import MediaList from '@/components/MediaList'

const homePage = async () => {
  console.log('albums', await fetchMedia('albums'))
  console.log('audiobooks', await fetchMedia('audiobooks'))
  console.log('podcasts', await fetchMedia('podcasts'))

  const albums = await fetchMedia('albums')
  const audiobooks = await fetchMedia('audiobooks')
  const podcasts = await fetchMedia('podcasts')

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start max-w-[1280px]">
        <h1>Top 20.</h1>
        <div className="flex gap-4 w-full">
          <MediaList items={albums} title="Top 20 Albums" />
          <MediaList items={audiobooks} title="Top 20 Audiobooks" />
          <MediaList items={podcasts} title="Top 20 Podcasts" />
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  )
}

export default homePage
