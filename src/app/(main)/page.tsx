import { Input } from '@components/ui/input'
import { Switch } from '@components/ui/switch'
import { Button } from '@components/ui/button'
import { Label } from '@/components/ui/label'

export default async function () {
  return (
    <div>
      <h1>Top 20 page - search and filtering here</h1>
      <div className="flex flex-nowrap gap-4 mb-4">
        <Input />
        <Button>Filter charts</Button>
      </div>
      <div className="flex w-full gap-4 justify-center">
        <Label htmlFor="switch-albums">Show Albums</Label>
        <Switch checked id="switch-albums" />
        <Label htmlFor="switch-audiobooks">Show Audiobooks</Label>
        <Switch checked id="switch-albums" />
        <Label htmlFor="switch-albums">Show Podcasts</Label>
        <Switch checked id="switch-albums" />
      </div>
    </div>
  )
}
