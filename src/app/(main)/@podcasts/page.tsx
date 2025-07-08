import { fetchMedia } from '@/actions/fetchMediaActions'
import MediaList from '@components/MediaList'

export default async function Albums() {
  const mediaItems = await fetchMedia('podcasts')

  return <MediaList items={mediaItems} title="Podcasts" />
}
