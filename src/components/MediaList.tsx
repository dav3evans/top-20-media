import type { Media } from '@actions/fetchMediaActions'
import MediaItem from './MediaItem'

type MediaListProps = {
  items: Media[]
  title: string
}

const MediaList = ({ items, title }: MediaListProps) => {
  return (
    <div>
      <h2 className="text-xl font-semibold">{title}</h2>
      {items.map((item) => (
        <MediaItem
          key={item.title}
          position={item.position}
          title={item.title}
          artist={item.artist}
          image={item.image}
          releaseDate={item.releaseDate}
        />
      ))}
    </div>
  )
}

export default MediaList
