'use server'

/*
 * iTunes API is very inconsistent and does not provide a stable endpoint for fetching top albums.
 * Instead we're using the RSS feed which is an older approach but more reliable.
 */

type AlbumItem = {
  'im:name': { label: string }
  'im:artist': { label: string }
  'im:image': { label: string; attributes: { height: string } }[]
  'im:releaseDate': { label: string; attributes: { label: string } }
}

type Album = {
  title: string
  artist: string
  image: string
  releaseDate: string
}

export async function fetchAlbums(): Promise<Album[]> {
  const url = 'https://itunes.apple.com/gb/rss/topalbums/limit=20/json'

  try {
    const reponse = await fetch(url)
    const data = await reponse.json()

    return data.feed.entry.map((item: AlbumItem) => ({
      title: item['im:name'].label,
      artist: item['im:artist'].label,
      image: item['im:image'][item['im:image'].length - 1].label,
      releaseDate: item['im:releaseDate'].label,
    }))
  } catch (error) {
    console.error('Error fetching data:', error)
    return []
  }
}
