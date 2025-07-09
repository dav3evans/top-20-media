export type MediaType = 'albums' | 'audiobooks' | 'podcasts'

export type RawMediaItemType = {
  'im:name': { label: string }
  'im:artist': { label: string }
  'im:image': { label?: string }[]
  'im:releaseDate': { attributes: { label: string } }
}

export type MediaItemType = {
  position: number
  title: string
  artist: string
  image: string
  releaseDate: string
}
