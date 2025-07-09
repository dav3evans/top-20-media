import { fetchMedia } from '@/actions/fetchMediaActions'
import MediaList from '@/components/MediaList'
import NoResults from '@/components/NoResults'
import Error from '@/components/Error'

export default async function AudiobooksList({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined }
}) {
  const awaitedParams = await searchParams

  const visible = awaitedParams.audiobooks !== 'false'
  if (!visible) return null

  let allAudiobooks = []
  try {
    allAudiobooks = await fetchMedia('albums')
  } catch (error) {
    console.error('Audiobooks: fetchMedia failed', error)
    return <Error errorMessage="Unable to fetch audiobooks, please refresh and try again." />
  }

  const filter = awaitedParams.filter?.toLowerCase() || ''
  const filtered = allAudiobooks.filter((audiobook) => {
    return Object.values(audiobook).some((value) => String(value).toLowerCase().includes(filter))
  })

  if (filtered.length === 0) {
    return <NoResults />
  }

  return <MediaList items={filtered} title="Audiobooks" />
}
