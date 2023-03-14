import style from '../styles/Profile.module.scss'
export const Profile = () => {
  return (
    <div className={style.container}>
      <div className={style.name}>
        <p>GSemir</p>
      </div>
      <div className={style.info}>
        <p>前端开发工程师</p>
        <p>React, Vue3, TypeScript, Nextjs, Umijs, Vite, Docker, Ruby, Rails</p>
      </div>
      <div className={style.footer}>
        <span onClick={() => {
          document.querySelector('#blog-home')?.scrollIntoView({
            block: 'start',
            inline: 'nearest',
            behavior: 'smooth'
          })
        }}>blog</span>
        <span>github</span>
        <span>old</span>
      </div>
      {/* <Image alt="GSemir" width={100} height={100} src="images/profile.svg"/> */}
    </div>
  )
}