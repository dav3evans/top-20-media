'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useState, useTransition, useEffect } from 'react'
import { Input } from '@/components/ui/input'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'

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
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-12">
      <div className="flex gap-2 h-[50px]">
        <Input
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Search the charts..."
          className="p-2 flex-1 h-full text-2xl"
          id="search-filter"
        />
        <Label htmlFor="search-filter" className="sr-only">
          Search here
        </Label>
        <Button
          type="submit"
          className="bg-teal-800 text-2xl text-white h-full px-4 py-2 rounded-sm cursor-pointer"
          disabled={isPending}
        >
          Search
        </Button>
        <Button
          type="button"
          className="bg-gray-500 text-2xl text-white h-full px-4 py-2 rounded-sm cursor-pointer"
          onClick={() => {
            setFilter('')
            router.replace('?', { scroll: false })
          }}
          aria-label="Clear search"
        >
          Clear
        </Button>
      </div>

      <div className="flex gap-8 justify-center">
        <div className="flex items-center gap-3">
          <Switch
            id="albums"
            className="cursor-pointer"
            aria-labelledby="albumsLabel"
            checked={albumsVisible}
            onCheckedChange={() => handleFilterToggle('albums', albumsVisible)}
          />
          <Label id="albumsLabel" htmlFor="albums" className="text-lg">
            Show Albums
          </Label>
        </div>
        {/* Technically a false positive accessibility warning here. Being reported on an input that is aria-hidden */}
        <div className="flex items-center gap-3">
          <Switch
            id="audiobooks"
            className="cursor-pointer"
            aria-labelledby="audiobooksLabel"
            checked={audiobooksVisible}
            onCheckedChange={() => handleFilterToggle('audiobooks', audiobooksVisible)}
          />
          <Label id="audiobooksLabel" htmlFor="audiobooks" className="text-lg">
            Show Audiobooks
          </Label>
        </div>

        <div className="flex items-center gap-3">
          <Switch
            id="podcasts"
            className="cursor-pointer"
            aria-label="show postcasts"
            aria-labelledby="podcastsLabel"
            checked={podcastsVisible}
            onCheckedChange={() => handleFilterToggle('podcasts', podcastsVisible)}
          />
          <Label id="podcastsLabel" htmlFor="podcasts" className="text-lg">
            Show Podcasts
          </Label>
        </div>
      </div>
    </form>
  )
}
