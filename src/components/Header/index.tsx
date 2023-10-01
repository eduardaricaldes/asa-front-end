import { ComponentProps } from 'react'
import Navbar from '@/components/Navbar'
import Title from '@/components/Title'


export type HeaderProps = ComponentProps<'header'> & {

}

export default function Header({ ...props }: HeaderProps) {
  return(
    <div className="bg-green w-screen h-60 sm:h-60 md:h-96 relative py-7 px-4">
      <Navbar />
      <Title title='Pessoas Assistidas' />
    </div>
  )
}