import { fetchMedia } from '@/actions/fetchMediaActions'
import MediaList from '@components/MediaList'

export default async function Albums() {
  const albums = await fetchMedia('albums')

  return <MediaList items={albums} title="Albums" />
}
