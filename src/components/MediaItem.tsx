import type { Media } from '../actions/fetchMediaActions'

const MediaItem = ({ position, title, artist, image, releaseDate }: Media) => {
  return (
    <div className="media-item flex flex-col gap-4">
      <div className="relative">
        <span className="bg-teal-700 self-start w-20 h-20 flex shrink-0 items-center justify-center absolute left-0 -bottom-0 text-white font-bold text-4xl">
          <span className="sr-only">Chart position</span>
          {position}
        </span>
        <img src={image} alt={title} className="media-item-image w-full" />
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-lg">{artist}</p>
        <p className="mt-2">Release Date: {releaseDate}</p>
      </div>
    </div>
  )
}

export default MediaItem
