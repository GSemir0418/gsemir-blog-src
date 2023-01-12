import Link from "next/link"
import { Profile } from "../components/Profile"

export default function Home() {
  return (
    <>
      <Profile/>
      <p><Link href={'/post/1'}>Post 1</Link></p>
    </>
  )
}
