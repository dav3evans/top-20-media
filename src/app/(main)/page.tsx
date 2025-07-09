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
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-8 md:mb-12">
      <div className="flex flex-wrap gap-2 md:h-[50px]">
        <Input
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Search the charts..."
          className="p-2 h-full text-2xl w-full md:w-auto md:flex-1"
          id="search-filter"
        />
        <Label htmlFor="search-filter" className="sr-only">
          Search here
        </Label>
        <Button
          type="submit"
          className="bg-teal-800 text-2xl text-white font-light h-full px-4 py-2 rounded-sm cursor-pointer flex-1 md:flex-none"
          disabled={isPending}
        >
          Search
        </Button>
        <Button
          type="button"
          className="bg-gray-500 text-2xl text-white font-light h-full px-4 py-2 rounded-sm cursor-pointer flex-1 md:flex-none"
          onClick={() => {
            setFilter('')
            router.replace('?', { scroll: false })
          }}
          aria-label="Clear search"
        >
          Clear
        </Button>
      </div>

      <div
        role="group"
        aria-labelledby="media-type-label"
        className="flex flex-row gap-4 md:gap-8 justify-center items-center"
      >
        <h3 id="media-type-label" className="-mr-2 text-xl font-semibold sr-only">
          Filter by:
        </h3>
        <div className="flex flex-col md:flex-row items-center gap-2">
          <Label id="albumsLabel" htmlFor="albums" className="text-lg">
            Albums
          </Label>
          <Switch
            id="albums"
            className="cursor-pointer"
            aria-labelledby="albumsLabel"
            checked={albumsVisible}
            onCheckedChange={() => handleFilterToggle('albums', albumsVisible)}
          />
        </div>
        {/* Technically a false positive accessibility warning here. Being reported on an input that is aria-hidden */}
        <div className="flex flex-col md:flex-row items-center gap-2">
          <Label id="audiobooksLabel" htmlFor="audiobooks" className="text-lg">
            Audiobooks
          </Label>
          <Switch
            id="audiobooks"
            className="cursor-pointer"
            aria-labelledby="audiobooksLabel"
            checked={audiobooksVisible}
            onCheckedChange={() => handleFilterToggle('audiobooks', audiobooksVisible)}
          />
        </div>

        <div className="flex flex-col md:flex-row items-center gap-2">
          <Label id="podcastsLabel" htmlFor="podcasts" className="text-lg">
            Podcasts
          </Label>
          <Switch
            id="podcasts"
            className="cursor-pointer"
            aria-label="show postcasts"
            aria-labelledby="podcastsLabel"
            checked={podcastsVisible}
            onCheckedChange={() => handleFilterToggle('podcasts', podcastsVisible)}
          />
        </div>
      </div>
    </form>
  )
}
