import { IcRoundMenu, IcRoundPerson } from "@/icones"
import Image from "next/image"

export function NavBar() {
  return (
    <div className="flex justify-between">
      <div className="flex">
        <IcRoundMenu />

        <Image src="/logo.png" alt="Logo" width={150} height={150} />
      </div>
      <IcRoundPerson />
    </div>
  )
}
