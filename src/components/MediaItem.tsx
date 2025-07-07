type MediaItemProps = {
  title: string
  artist: string
  image?: string
  releaseDate: string
}

const MediaItem = ({ title, artist, image, releaseDate }: MediaItemProps) => {
  return (
    <div className="media-item flex gap-4 relative">
      <img src={image} alt={title} className="media-item-image" />
      <div className="media-item-details">
        <h3 className="media-item-title">{title}</h3>
        <p className="media-item-artist">{artist}</p>
        <p className="media-item-release-date">{releaseDate}</p>
      </div>
    </div>
  )
}

export default MediaItem
