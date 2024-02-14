import { useEffect } from "react";

export default function Hobbies() {
  useEffect(()=>{document.querySelector('html').classList.add('html_img')
    return()=>{document.querySelector('html').classList.remove('html_img')}
  }, [])

  return (
    <div>Hobbies</div>
  )
}