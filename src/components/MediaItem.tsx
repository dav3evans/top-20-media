import type { Media } from '../actions/fetchMediaActions'

const MediaItem = ({ position, title, artist, image, releaseDate }: Media) => {
  return (
    <div className="media-item flex gap-4 relative">
      <span className="bg-teal-700 self-start w-10 h-10 flex shrink-0 items-center justify-center absolute -left-2 -top-2 text-white font-bold">
        <span className="sr-only">Chart position</span>
        {position}
      </span>
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
