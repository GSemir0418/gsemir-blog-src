import axios from "axios"
import { http } from "../http"

export default function Home() {
  const handleBtnClick = () => {
    http.get('http://localhost:4000/v1/post').then(res => {
      console.log(res)
    })
  }
  return (
    <>
      <div>Gsemir Blog</div>
      <p><button onClick={handleBtnClick}>get Posts</button></p>
    </>
  )
}
