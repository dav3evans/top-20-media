import { MediaItemType } from '@/types/mediaTypes'

const MediaItem = ({ position, title, artist, image, releaseDate }: MediaItemType) => {
  return (
    <div className="media-item flex items-start md:items-stretch md:flex-col gap-4">
      <div className="relative shrink-0 max-w-[70px] md:max-w-none">
        <span className="bg-teal-700 self-start  flex shrink-0 items-center justify-center absolute w-10 h-10 -left-2 -bottom-2 md:w-20 md:h-20 md:left-0 md:bottom-0 text-white font-bold text-4xl">
          <span className="sr-only">Chart position</span>
          {position}
        </span>
        <img src={image} alt={title} className="media-item-image w-full" />
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="font-bold text-lg leading-6">{title}</h3>
        <p className="text-lg">{artist}</p>
        <p className="mt-2">Release Date: {releaseDate}</p>
      </div>
    </div>
  )
}

export default MediaItem
