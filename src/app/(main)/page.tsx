'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useState, useTransition, useEffect } from 'react'
import { Input } from '@/components/ui/input'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'

export default function MediaPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [isPending, startTransition] = useTransition()

  const [filter, setFilter] = useState(searchParams.get('filter') || '')

  const albumsVisible = searchParams.get('albums') !== 'false'
  const audiobooksVisible = searchParams.get('audiobooks') !== 'false'
  const podcastsVisible = searchParams.get('podcasts') !== 'false'

  const updateSearchParam = (key: string, value: string | null) => {
    const params = new URLSearchParams(searchParams)

    if (value === null) {
      params.delete(key)
    } else {
      params.set(key, value)
    }

    startTransition(() => {
      router.replace(`?${params.toString()}`, { scroll: false })
    })
  }

  const handleFilterToggle = (key: string, current: boolean) => {
    updateSearchParam(key, current ? 'false' : null)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    updateSearchParam('filter', filter || null)
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-6">
      <div className="flex gap-2">
        <Input
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Search the charts..."
          className="border p-2 flex-1"
          id="search-filter"
        />
        <Label htmlFor="search-filter" className="sr-only">
          Search here
        </Label>
        <button
          type="submit"
          className="bg-black text-white px-4 py-2 cursor-pointer"
          disabled={isPending}
        >
          Search
        </button>
        <button
          type="button"
          className="cursor-pointer"
          onClick={() => {
            setFilter('')
            router.replace('?', { scroll: false })
          }}
        >
          Reset Search
        </button>
      </div>

      <div className="flex gap-8 justify-center">
        <div className="flex items-center gap-2">
          <Switch
            id="albums"
            className="cursor-pointer"
            aria-labelledby="albumsLabel"
            checked={albumsVisible}
            onCheckedChange={() => handleFilterToggle('albums', albumsVisible)}
          />
          <Label id="albumsLabel" htmlFor="albums">
            Show Albums
          </Label>
        </div>
        {/* Technically a false positive accessibility warning here. Being reported on an input that is aria-hidden */}
        <div className="flex items-center gap-2">
          <Switch
            id="audiobooks"
            className="cursor-pointer"
            aria-labelledby="audiobooksLabel"
            checked={audiobooksVisible}
            onCheckedChange={() => handleFilterToggle('audiobooks', audiobooksVisible)}
          />
          <Label id="audiobooksLabel" htmlFor="audiobooks">
            Show Audiobooks
          </Label>
        </div>

        <div className="flex items-center gap-2">
          <Switch
            id="podcasts"
            className="cursor-pointer"
            aria-label="show postcasts"
            aria-labelledby="podcastsLabel"
            checked={podcastsVisible}
            onCheckedChange={() => handleFilterToggle('podcasts', podcastsVisible)}
          />
          <Label id="podcastsLabel" htmlFor="podcasts">
            Show Podcasts
          </Label>
        </div>
      </div>
    </form>
  )
}
