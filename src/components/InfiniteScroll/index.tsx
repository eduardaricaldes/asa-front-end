
type InfiniteScrollProps = {
  children: React.ReactNode;
}

export default function InfiniteScroll({ children }: InfiniteScrollProps) {
  return (
    <div className="w-full h-auto mt-10">
      {children}
    </div>
  )
}