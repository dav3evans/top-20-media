import Card from '@components/Card'

type ErrorProps = {
  errorMessage?: string
}
const Loading = ({ errorMessage }: ErrorProps) => {
  return (
    <Card>
      <div className="flex-1">
        {errorMessage
          ? errorMessage
          : 'There was an error fetching the data, please refresh and try again.'}
      </div>
    </Card>
  )
}

export default Loading
