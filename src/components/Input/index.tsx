import classNames from "classnames";
import { ChangeEvent } from "react";

interface InputProps<T> {
  id?: string;
  className?: string;
  label: string;
  name: string
  type: string;
  placeholder?: string;
  value: T;
  onChange: (value: T) => void;
  required?: boolean;
}

export default function Input<T>({ className, name, type, label, placeholder, value, onChange, required }: InputProps<T>) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value as T);
  };

  return (
    <div className={classNames(['input', className])}>
      <label className="text-gray">{label}</label>
      <input
        name={name}
        type={type}
        value={value as any}
        placeholder={placeholder}
        onChange={handleChange}
        required={required || false}
      />
    </div>
  )
}