import { fetchMedia } from '@/actions/fetchMediaActions'
import MediaList from '@components/MediaList'

import { wait } from '@lib/wait'

export default async function Albums() {
  await wait(2000)
  const albums = await fetchMedia('audiobooks')

  return <MediaList items={albums} title="Audiobooks" />
}
