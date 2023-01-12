import Head from "next/head";
import Link from "next/link";

export default function Article() {
  return (
    <>
      <Head>
        <title>Post 1</title>
      </Head>
      <div>Post 1</div>
      <Link href="/">Back to home</Link>
    </>
  )
}