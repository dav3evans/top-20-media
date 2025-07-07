'use server'

/*
 * iTunes API is very inconsistent and does not provide a stable endpoint for fetching top albums.
 * Instead we're using the RSS feed which is an older approach but more reliable.
 */

type MediaType = 'albums' | 'audiobooks' | 'podcasts'

type MediaItem = {
  'im:name': { label: string }
  'im:artist': { label: string }
  'im:image': { label?: string }[]
  'im:releaseDate': { attributes: { label: string } }
}
type Media = {
  title: string
  artist: string
  image: string
  releaseDate: string
}

export async function fetchMedia(MediaType: MediaType): Promise<Media[]> {
  const url = `https://itunes.apple.com/gb/rss/top${MediaType}/limit=20/json`

  try {
    const response = await fetch(url)
    const data = await response.json()

    return data.feed.entry.map((item: MediaItem) => ({
      title: item['im:name'].label,
      artist: item['im:artist'].label,
      image: item['im:image'][item['im:image'].length - 1].label || '',
      releaseDate: item['im:releaseDate'].attributes.label || '',
    }))
  } catch (error) {
    console.error('Error fetching data:', error)
    throw new Error('Failed to fetch media data from iTunes feed')
    return []
  }
}
