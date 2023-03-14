import Link from "next/link"
import type { BlogDataType } from "../lib/blogs"
type Props = {
	blogsListData: BlogDataType[]
}
export const BlogHome: React.FC<Props> = ({ blogsListData }) => {
	return (
		<div id='blog-home' style={{ height: '100vh' }} >
			<h2>Blog</h2>
			<Link href={'/category'}>Categories</Link>
			<ul>
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
		</div>
	)
}