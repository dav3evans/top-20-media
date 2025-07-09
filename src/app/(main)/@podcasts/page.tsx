import { fetchMedia } from '@/actions/fetchMediaActions'
import MediaList from '@/components/MediaList'
import NoResults from '@/components/NoResults'
import Error from '@/components/Error'

export default async function PodcastsList({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined }
}) {
  const awaitedParams = await searchParams

  const visible = awaitedParams.albums !== 'false'
  if (!visible) return null

  let allPodcasts = []
  try {
    allPodcasts = await fetchMedia('albums')
  } catch (error) {
    console.error('Podcasts: fetchMedia failed', error)
    return <Error errorMessage="Unable to fetch podcasts, please refresh and try again." />
  }

  const filter = awaitedParams.filter?.toLowerCase() || ''
  const filtered = allPodcasts.filter((podcast) => {
    return Object.values(podcast).some((value) => String(value).toLowerCase().includes(filter))
  })

  if (filtered.length === 0) {
    return <NoResults />
  }

  return <MediaList items={filtered} title="Podcasts" />
}
