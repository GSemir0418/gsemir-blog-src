import style from '../styles/GlobalHeader.module.scss'

export const GlobalHeader = () => {
  return <nav className={style.container}>
    <span className={style.title}>GSemir</span>
    <span className={style.buttons}>
      <a className={style.item}>HOME</a>
      <a className={style.item}>Categories</a>
      <a className={style.item}>OldBLogs</a>
    </span>
    <span className={style.about}>
      <a>github</a>
      <a>email</a>
    </span>
  </nav>
}