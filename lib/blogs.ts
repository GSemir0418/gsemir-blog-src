import path from "path";
import fs from "fs";
import matter from "gray-matter";

export type BlogDataType = {
  id: string;
  title: string;
  date: string;
  author?: string;
  lastmod?: string;
  draft?: string;
  categories?: string[];
  tags?: string[];
  contentHtml?: string;
};

const blogsDirectory = path.join(process.cwd(), "blogs");

// 按时间顺序获取全部博客 meta 数据
export function getSortedBlogsData() {
  // 获取全部文件名
  const fileNames = fs.readdirSync(blogsDirectory);

  const allBlogsData: BlogDataType[] = fileNames.map((fileName) => {
    // 删除.md后缀
    const id = fileName.replace(/\.md$/, "");

    // 将blog meta读取并解析为字符串
    const fullPath = path.join(blogsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // 使用 gray-matter 解析 metadata 部分
    const matterResult = matter(fileContents);
    // 整合数据与文件名
    return {
      id,
      ...(matterResult.data as Omit<BlogDataType, "id">),
    };
  });
  // Sort posts by date
  return allBlogsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

// 获取全部 blog 名称（作为 getStaticPaths 返回值）
export function getAllBlogIds() {
  const fileNames = fs.readdirSync(blogsDirectory);
  return fileNames.map((item) => {
    return { params: { id: item.replace(/\.md$/, "") } };
  });
}

// 根据 id 获取 blogs 数据
export async function getBlogById(id: string) {
  const fullPath = path.join(blogsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);
  // 使用remark将md转换为html字符串
  // const processedContent = await remark()
  //   .use(html,{ sanitize: false })
  //   .process(matterResult.content);
  // const contentHtml = processedContent.toString();
  const contentHtml = matterResult.content;

  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}

// 获取全部 categories
export function getAllCategories() {
  const allMetaData = getSortedBlogsData();
  const categoryList = allMetaData
    .map((metaData) => metaData.categories)
    .flat(1);
  return Array.from(new Set(categoryList));
}

// 获取全部 categories (作为 getStaticPaths 返回值)
export function getAllCategoryIds() {
  const allMetaData = getSortedBlogsData();
  const categoryList = Array.from(
    new Set(allMetaData.map((metaData) => metaData.categories).flat(1))
  );
  return categoryList.map((item) => ({
    params: { id: item },
  }));
}

// 根据 category 获取文章列表
export function getBlogListByCategory(id: string) {
  const allMetaData = getSortedBlogsData();
  return allMetaData.filter(metaData=>metaData.categories?.some(item=>item===id))
}
