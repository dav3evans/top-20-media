import { fetchMedia } from '@/actions/fetchMediaActions'
import MediaList from '@/components/MediaList'
import NoResults from '@/components/NoResults'

export default async function PodcastsList({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined }
}) {
  // Without this we'll get an error about waiting for these before using them.
  // This is because the searchParams are not available immediately in the server component.
  const awaitedParams = await searchParams

  const visible = awaitedParams.albums !== 'false'
  if (!visible) return null

  const allPodcasts = await fetchMedia('podcasts')

  const filter = awaitedParams.filter?.toLowerCase() || ''
  const filtered = allPodcasts.filter((podcast) => {
    return Object.values(podcast).some((value) => String(value).toLowerCase().includes(filter))
  })

  if (filtered.length === 0) {
    return <NoResults />
  }

  return <MediaList items={filtered} title="Podcasts" />
}
