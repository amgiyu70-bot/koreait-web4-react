import React, { useState } from 'react'
import Modal from './Modal'

export default function ModalContainer() {
    const [isOpen, setIsOpen] = useState(false);
    const post = {
        title: "첫번째 게시물",
        content: "첫번째 게시물을 클릭하셨습니다."
    }
    const chkOpen = () => {
       console.log()

       setIsOpen(true)

    }

    // 열기버튼 -> 모달 보이기
    // 모달안에 닫기번튼 -> 모달 사라지기
  return (
    <div>
        <button onClick={()=>setIsOpen(ture) }>모달열기</button>
        { /* isOpen ?? <Modal  /> }
        { /* isOpen ?? <Modal  /> */ }
        <Modal isOpen={isOpen} post={post}  
        onClick={()=>setIsOpen(false)} />
    </div>
  )
}
