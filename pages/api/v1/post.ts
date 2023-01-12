// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Post = {
  title: string;
  content: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Post[]>
) {
  res.status(200).json([
    { title: "第一篇博客", content: "内容" },
    { title: "第二篇博客", content: "内容2" },
  ]);
}
