import { ChangeEvent } from "react";
import searchIcon from "@/assets/lupa.svg";
import Image from "next/image";

export type SearchBarProps = {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="search-bar">
      <input type="text" value={value} onChange={onChange} placeholder="Buscar..."/>
      <label className="icon-search">
        <Image src={searchIcon} alt="search icon" className="w-4 max-w-6"  />
      </label>
    </div>
  )
}