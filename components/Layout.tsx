import type { CSSProperties, ReactNode } from 'react'
import style from '../styles/Layout.module.scss'
type Props = {
  children: ReactNode
  style?: CSSProperties
}
export const Layout: React.FC<Props> = ({ children, style:s }) => {
  return <div className={style.container} style={s}>{children}</div>
}