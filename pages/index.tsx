import Head from "next/head"
import Link from "next/link"
import Script from "next/script"
import { Profile } from "../components/Profile"

export default function Home() {
  return (
    <>
      <Head>
        <title>GSemir Blog</title>
      </Head>
      {/* 加载第三方js */}
      <Script
        src="https://cdn.bootcdn.net/ajax/libs/axios/1.2.2/axios.min.js"
        // 浏览器闲置时加载
        strategy="lazyOnload"
        onLoad={() => {
          console.log('axios is now loaded')
        }}
      />
      <Profile />
      <p><Link href={'/post/1'}>Post 1</Link></p>
    </>
  )
}
