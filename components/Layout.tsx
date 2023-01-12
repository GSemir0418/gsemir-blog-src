import type { ReactNode } from 'react'
import style from '../styles/Layout.module.scss'
type Props = {
  children: ReactNode
}
export const Layout: React.FC<Props> = ({ children }) => {
  return <div className={style.container}>{children}</div>
}