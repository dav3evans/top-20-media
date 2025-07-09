import type { Media } from '@actions/fetchMediaActions'
import MediaItem from './MediaItem'

type MediaListProps = {
  items: Media[]
  title: string
}

const MediaList = ({ items, title }: MediaListProps) => {
  return (
    <section className="flex flex-col flex-1 gap-8 p-4 border-2 rounded-lg bg-gradient-to-b from-white/5 to-white/10">
      <h2 className="text-xl font-semibold">{title}</h2>
      {items.map((item, index) => (
        <MediaItem
          key={item.title}
          title={item.title}
          artist={item.artist}
          image={item.image}
          releaseDate={item.releaseDate}
        />
      ))}
    </section>
  )
}

export default MediaList
