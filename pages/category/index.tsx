import { GetStaticProps, NextPage } from "next"
import Link from "next/link"
import { Layout } from "../../components/Layout"
import { getAllCategories } from "../../lib/blogs"

const Categories: NextPage<{ categoryList: string[] }> = ({ categoryList }) => {
  return (
    <Layout>
      <h1>Categories</h1>
      <ul>
        {
          categoryList.map(category => {
            return <li key={category}>
              <Link href={`/category/${category}`}>{category}</Link>
            </li>
          })
        }
      </ul>
    </Layout>
  )
}

export default Categories

export const getStaticProps: GetStaticProps = () => {
  const categoryList = getAllCategories()
  console.log(categoryList)
  return {
    props: {
      categoryList
    }
  }
}
