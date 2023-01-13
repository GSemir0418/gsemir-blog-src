import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { remark } from "remark";
import html from 'remark-html';

export type BlogDataType = { [key: string]: any };

const blogsDirectory = path.join(process.cwd(), "blogs");

// 按时间顺序获取全部博客meta数据
export function getSortedBlogsData() {
  // 获取全部文件名
  const fileNames = fs.readdirSync(blogsDirectory);

  const allPostsData: BlogDataType[] = fileNames.map((fileName) => {
    // 删除.md后缀
    const id = fileName.replace(/\.md$/, "");

    // 将blog内容读取并解析为字符串
    const fullPath = path.join(blogsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // 使用 gray-matter 解析 metadata 部分
    const matterResult = matter(fileContents);
    console.log("111", matterResult);
    // 整合数据与文件名
    return {
      id,
      ...matterResult.data,
    };
  });
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

// 获取全部blog名称（作为getStaticPaths返回值）
export function getAllBlogIds() {
  const fileNames = fs.readdirSync(blogsDirectory);
  return fileNames.map((item) => {
    return { params: { id: item.replace(/\.md$/, "") } };
  });
}

// 根据id获取blogs数据
export async function getBlogById(id: string) {
  const fullPath = path.join(blogsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);

  // 使用remark将md转换为html字符串
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}
