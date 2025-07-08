import { fetchMedia } from '@/actions/fetchMediaActions'
import MediaList from '@/components/MediaList'
import NoResults from '@/components/NoResults'

export default async function AudiobooksList({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined }
}) {
  const visible = searchParams.audiobooks !== 'false'
  if (!visible) return null

  const allAudiobooks = await fetchMedia('audiobooks')
  const filter = searchParams.filter?.toLowerCase() || ''
  const filtered = allAudiobooks.filter((album) => album.title.toLowerCase().includes(filter))

  if (filtered.length === 0) {
    return <NoResults />
    // This replaces the list - we need to move those styles into a container and then reference that here.
  }

  return <MediaList items={filtered} title="Audiobooks" />
}
