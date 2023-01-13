import Head from "next/head"
import Link from "next/link"
import Script from "next/script"
import { Layout } from "../components/Layout"
import { Profile } from "../components/Profile"
import { getSortedBlogsData } from '../lib/blogs';
import type { BlogDataType } from '../lib/blogs';
type Props = {
  blogsListData: BlogDataType[]
}
const Home: React.FC<Props> = ({ blogsListData }) => {
  return (
    <Layout>
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
      <section>
        <h2 >Blog</h2>
        <ul >
          {blogsListData.map(({ id, date, title }) => (
            <li key={id}>
              <Link href={`/post/${id}`}>{title}</Link>
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
export default Home

export async function getStaticProps() {
  const blogsListData = getSortedBlogsData();
  return {
    props: {
      blogsListData,
    },
  };
}