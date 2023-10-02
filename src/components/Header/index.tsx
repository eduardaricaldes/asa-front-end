import { ComponentProps } from 'react'
import Title from '@/components/Title'


export type HeaderProps = ComponentProps<'header'> &{
}

export default function Header({...props }: HeaderProps) {
  return(
    <header className="bg-green w-screen h-10 sm:max-h-52 md:max-h-52 relative px-4">
      <Title title='Pessoas Assistidas' />
    </header>
  )
}
