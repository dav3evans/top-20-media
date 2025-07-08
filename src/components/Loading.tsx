type LoadingProps = {
  loadingText?: string
}
const Loading = ({ loadingText }: LoadingProps) => {
  return <div className="flex-1">{loadingText ? loadingText : 'Loading...'}</div>
}

export default Loading
