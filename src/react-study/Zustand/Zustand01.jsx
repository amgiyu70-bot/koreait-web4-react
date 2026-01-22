import React, { useState } from 'react'


// npm install zustand
// 원리 -> 자바스크립트(클로저)
// 전역상태관리 라이브러리 :  Redux(어려움), Zutand(쉬움), Recoil(사라짐), Zotai(중)
//  -> useState와는 분리된 상태저장소

/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import { useModalStore } from './store/modalStore';
import { useToastStore } from './store/toastStore';

export default function Zustand01() {
  // 모달버튼이 동작하게 완정해주세요
  const [isOpen, setIsOpen] = useState(false);

  // openModal => 전역상태 isModal
  const {openModal} = useModalStore();
  const {showToast} =  useToastStore();
  const modalHidden = css`
    display: none;
  `;

  const handleClick = () => {
    

    setIsOpen( true);
    //console.log(isOpen);

  }


  return (
    <div>
      <h1>모달</h1>
      <button onClick={openModal}>모달열기</button>
      <button onClick={() =>showToast("Z01에서 토스트띄웁니다.")}>토스트 뛰우기</button>
      <Container1 />
      
    </div>
  )
}

function Container1() {
  return (
    <div>
       C1이 C2호출
      <Container2   />
    </div>
  )
}

function Container2() {

  return (
    <div >
      C2가 C3 호출
      <Container3  />
    </div>
  )
}

function Container3() {
  const {isModalOpen, closeModal} = useModalStore();
  return (
    <div>
      {
        isModalOpen &&
      
      <div css={modalOverlay}>
        <div css={modalContent}>
          <h2>MODAL</h2>
          <p>MODAL TEX</p>
          <button onClick={closeModal}>닫기</button>
        </div>
      </div>
      }
    </div>
  )
}

const modalOverlay = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const modalContent = css`
  width: 60vw;
  height: 50vh;
  background-color: white;
  padding: 20px;
  border-radius: 8px;

  /* & css가 적용된 자기 자신 */
  & > button {
    cursor: pointer;

  }
`;