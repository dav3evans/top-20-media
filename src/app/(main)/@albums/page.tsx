import { fetchMedia } from '@/actions/fetchMediaActions'
import MediaList from '@/components/MediaList'
import NoResults from '@/components/NoResults'
import Error from '@/components/Error'

export default async function AlbumsList({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined }
}) {
  const awaitedParams = await searchParams
  const visible = awaitedParams.podcasts !== 'false'
  if (!visible) return null

  let allAlbums = []
  try {
    allAlbums = await fetchMedia('albums')
  } catch (error) {
    console.error('AlbumsList: fetchMedia failed', error)
    return <Error errorMessage="Unable to fetch albums, please refresh and try again." />
  }

  const filter = awaitedParams.filter?.toLowerCase() || ''
  const filtered = allAlbums.filter((album) => {
    return Object.values(album).some((value) => String(value).toLowerCase().includes(filter))
  })

  if (filtered.length === 0) {
    return <NoResults />
  }

  return <MediaList items={filtered} title="Albums" />
}
