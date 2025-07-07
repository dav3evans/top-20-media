import type { Media } from '../app/actions'
import MediaItem from './MediaItem'

type MediaListProps = {
  items: Media[]
  title: string
}

export default function MediaList({ items, title }: MediaListProps) {
  return (
    <section className="flex flex-col flex-1 gap-8">
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
