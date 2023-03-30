import { useEffect, useRef } from 'react'
import style from '../styles/Profile.module.scss'

export const Profile = () => {
  const profileRef = useRef<HTMLDivElement>(null)
  const nameRef = useRef<HTMLDivElement>(null)
  const handleClick = () => {
    document.querySelector('#blog-home')?.scrollIntoView({
      block: 'start',
      inline: 'nearest',
      behavior: 'smooth'
    })
  }
  useEffect(() => {
    const nameElem = nameRef.current 
    const profileElem = profileRef.current
    if (nameElem && profileElem) {
      profileElem.addEventListener('mousemove', (e) => {
        const rect = nameElem.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        const cx = rect.width / 2
        const cy = rect.height / 2
        const dx = x - cx
        const dy = y - cy
        const tiltx = (dy / cy) * 5
        const tilty = -(dx / cx) * 5
        nameElem.style.transform = `perspective(1000px) rotateX(${tiltx}deg) rotateY(${tilty}deg)`
      })
    }
    return () => {
      profileElem?.removeEventListener('mousemove',()=>{})
    }
  }, [])
  return (
    <div className={style.container} ref={profileRef}>
      <div className={style.name} ref={nameRef}>
        <p>GSemir</p>
      </div>
      <div className={style.footer}>
        <span
          className={style.blogIcon}
          onClick={handleClick} />
        <span
          className={style.githubIcon}
        />
        <span
          className={style.wechatIcon}
        />
      </div>
      <div className={style.info}>
        <p>Some Info</p>
      </div>
      {/* <Image alt="GSemir" width={100} height={100} src="images/profile.svg"/> */}
    </div>
  )
}