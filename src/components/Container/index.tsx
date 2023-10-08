import classNames from "classnames";
import { ComponentProps } from "react";

export type ContainerProps = ComponentProps<'div'> & {
  className?: string;
  children: React.ReactNode;
};

export function Container({ children, className }: ContainerProps) {
  return (
    <div className={classNames(["px-4 pt-14 pb-10 h-auto relative", className ])}>
      {children}
    </div>
  )
}