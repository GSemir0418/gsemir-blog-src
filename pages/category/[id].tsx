import type { GetStaticPaths, GetStaticProps, NextPage } from "next"
import Link from "next/link"
import { Layout } from "../../components/Layout"
import { BlogDataType, getAllCategoryIds, getBlogListByCategory } from "../../lib/blogs"

const CategoryBlog: NextPage<{ blogList: BlogDataType[] }> = ({ blogList }) => {
  return <Layout>
    <h2>Blog</h2>
    <ul>
      {blogList.map(({ id, date, title }) => (
        <li key={id}>
          <Link href={`/post/${id}`}>{title}</Link>
          <br />
          {id}
          <br />
          {date}
        </li>
      ))}
    </ul>
  </Layout>
}
export default CategoryBlog


export const getStaticPaths: GetStaticPaths = async () => {
  const ids = getAllCategoryIds()
  return {
    paths: ids,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const blogList = getBlogListByCategory(params?.id as string);
  return {
    props: {
      blogList,
    },
  };
}
