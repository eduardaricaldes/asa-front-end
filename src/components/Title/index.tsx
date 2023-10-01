import { ComponentProps } from "react"


export type TitleProps = ComponentProps<'div'> & {
  title: string;
}

export default function Title({ title }: TitleProps) {
  return(
    <div className="bg-white title absolute bottom-0">
      <h1 className="text-green-dark font-bold px-3 py-2 text-lg text-center">{title}:</h1>
    </div>
  )
}