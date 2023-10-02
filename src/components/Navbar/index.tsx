import Image from "next/image"
import imageASA from "@/assets/images/white-logo.svg"
import imageMenu from "@/assets/images/menu.svg"

export default function Navbar() {
  return (
    <div className="bg-green flex justify-between w-screen py-7 px-4">
      <div className="h-5 w-5 relative menu">
        <Image src={imageMenu} alt="white menu image" fill/>
      </div>
      <h1 className="text-white text-center uppercase">Ingleses</h1>
      <div className="h-6 w-6 relative">
        <Image src={imageASA} alt="white logo image" fill/>
      </div>
    </div>
  )
}