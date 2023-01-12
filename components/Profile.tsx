import Image from "next/image"
export const Profile = () => {
  return (
    <>
      <h1>GSemir`s Blog</h1>
      <Image alt="GSemir" width={100} height={100} src="images/profile.svg"></Image>
    </>
  )
}