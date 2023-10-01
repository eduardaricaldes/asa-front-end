import Image from "next/image"
import imageASA from "@/assets/images/white-logo.svg"

export default function Home() {
  return (
    <div className="h-screen w-screen bg-green flex flex-col justify-center items-center">
      <div className="h-40 w-40 relative">
        <Image src={imageASA} alt="white logo image" fill/>
      </div>
      <span className="text-white font-thin mt-5 w-24 text-center text-normal">Ação Social Adventista</span>
    </div>
  )
}
