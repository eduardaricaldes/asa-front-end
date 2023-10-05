import classNames from "classnames";

export type ButtonProsp = {
  type: "button" | "submit" | "reset";
  children: React.ReactNode | string;
  className?: string;
  onClick?: () => void;
  disabled?: boolean | undefined
}

export default function Button({ type, children, className, onClick, disabled = false, ...props }: ButtonProsp) {
  return (
    <>
      <button className={classNames(['button', className])} type={type} onClick={onClick} disabled={disabled} {...props}>{children}</button>
    </>
  )
}