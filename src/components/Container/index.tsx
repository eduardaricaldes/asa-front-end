import { ComponentProps } from "react";

export type ContainerProps = ComponentProps<'div'> & {
  children: React.ReactNode;
};

export function Container({ children }: ContainerProps) {
  return (
    <div className="px-4 py-14">
      {children}
    </div>
  )
}