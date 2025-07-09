import Card from '@components/Card'

type LoadingProps = {
  loadingText?: string
}
const Loading = ({ loadingText }: LoadingProps) => {
  return (
    <Card>
      <div className="flex-1">{loadingText ? loadingText : 'Loading...'}</div>
    </Card>
  )
}

export default Loading
