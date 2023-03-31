import Head from "next/head"
import { Layout } from "../components/Layout"
import { Profile } from "../components/Profile"
import { getSortedBlogsData } from '../lib/blogs';
import type { BlogDataType } from '../lib/blogs';
import { BlogHome } from "../components/BlogHome";
type Props = {
  blogsListData: BlogDataType[]
}
const Home: React.FC<Props> = ({ blogsListData }) => {
  return (
    <>
      <Head><title>GSemir Blog</title></Head>
      <Profile style={{ scrollSnapAlign: 'start', scrollSnapStop: 'always' }} />
      <Layout style={{ scrollSnapAlign: 'start', scrollSnapStop: 'always' }}>
        <BlogHome blogsListData={blogsListData} />
      </Layout>
    </>
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