import type { Media } from '@actions/fetchMediaActions'
import MediaItem from '@components/MediaItem'
import Card from '@components/Card'

type MediaListProps = {
  items: Media[]
  title: string
}

const MediaList = ({ items, title }: MediaListProps) => {
  return (
    <Card>
      <h2 className="text-3xl font-semibold">{title}</h2>
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
    </Card>
  )
}

export default MediaList
