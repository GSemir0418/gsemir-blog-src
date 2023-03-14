import moment from 'moment'
import type { BlogDataType } from '../lib/blogs'
import style from '../styles/ArticleTitle.module.scss'

export const ArticleTitle: React.FC<Partial<BlogDataType>> = ({ title, date, author, tags }) => {
    const dateString = moment(date).format('YYYY.MM.DD')
    return (
        <div>
            <div className={style.title}>{title}</div>
            <div className={style.detail}>
                <span>{author}</span>
                <span>{dateString}</span>
                {tags && <span>{tags?.join(', ')}</span>}
            </div>
        </div>
    )
}