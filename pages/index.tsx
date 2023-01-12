import Link from "next/link"

export default function Home() {
  return (
    <>
      <div>Gsemir Blog</div>
      <p><Link href={'/post/1'}>Post 1</Link></p>
    </>
  )
}
