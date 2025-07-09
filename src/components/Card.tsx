import { cn } from '@/lib/utils'

type CardProps = {
  children: React.ReactNode
  className?: string
}

const Card = ({ children, className }: CardProps) => (
  <div
    className={cn(
      'flex-start flex flex-col flex-1 gap-8 p-8 border-2 rounded-lg bg-gradient-to-b from-white/5 to-white/10 max-w-[410px] w-full',
      className
    )}
  >
    {children}
  </div>
)

export default Card
