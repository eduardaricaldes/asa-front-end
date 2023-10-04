import { Component } from "react"

type CardProsp = {
  children: React.ReactNode;
}

export default function Card({ children }: CardProsp) {
  return (
    <div className="card w-full mb-5 py-1 px-2">
      { children }
    </div>
  )
} 