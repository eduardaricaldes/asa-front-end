import { ComponentProps } from 'react';
import Title from '@/components/Title';

export type HeaderProps = ComponentProps<'header'> & {
  children?: React.ReactNode;
  title: string;
};

export default function Header({ children, title, ...props }: HeaderProps) {
  return (
    <header className="bg-green w-screen min-h-10 h-auto sm:max-h-52 md:max-h-52 relative px-4 pb-10">
      <Title title={title} />
      {children}
    </header>
  );
}
