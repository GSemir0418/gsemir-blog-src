import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Layout } from "../../components/Layout";
import { BlogDataType, getAllBlogIds, getBlogById } from "../../lib/blogs";
import { PrismAsync as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import ReactMarkdown from "react-markdown";
import { ArticleTitle } from "../../components/ArticleTitle";

const CodeBlock: React.FC<any> = (codeProps) => {
  const { inline, children } = codeProps
  if (inline) return <code>{children[0]}</code>
  return (
    <SyntaxHighlighter
      style={dark}
      language={'typescript'}
    >
      {children[0] as string}
    </SyntaxHighlighter>
  );
};

const Article: NextPage<{ blogData: BlogDataType }> = ({ blogData }) => {
  const { title, date, tags, author, contentHtml } = blogData
  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <ArticleTitle title={title} date={date} author={author} tags={tags} />
      <ReactMarkdown
        className="markdown-body"
        components={{ code: CodeBlock }}
      >
        {contentHtml as string}
      </ReactMarkdown>
      <Link href="/">Back to home</Link>
    </Layout>
  )
}

export default Article

// 动态路由中必须要包含两个函数：getStaticProps getStaticPaths
// getStaticPaths 返回一个id可能值的数组，用于动态生成不同的html
// getStaticProps 根据id获取页面数据

export const getStaticPaths: GetStaticPaths = async () => {
  const ids = getAllBlogIds()
  return {
    paths: ids,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const blogData = await getBlogById(params?.id as string);
  return {
    props: {
      blogData,
    },
  };
}