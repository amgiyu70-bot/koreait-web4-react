import React, { useState } from 'react'

// 조건부 렌더링 - UI 상태 or 권한 상태
export default function Usestate07() {
    
    // 로그인상태
    const [isLogin, setIsLogin] = useState(false); 
    const [accT, setAccT] = useState(null);
    const toggle = () => {
        setIsLogin( (pre) =>!pre);
    }

    const getTClick = () => {
        setAccT("토큰이에요!");
    }

    // js 의 모든 값은 boolean값이 될수 있다
    // a가 truthy면 b가 평가
    // a && b
    // 값 && 함수(컴포넌트) -> 값이  truthy 일때만 컴포넌트가 호출
  return (

    // 삼항 연산자
    // && 연산자 -> 보이거나 안보이거나
    <div>
        <button onClick={toggle}>{isLogin ? "로그아웃": "로그인"}</button>
        <h2>{isLogin ? "어서오세요": "로그인이 필요합니다."}</h2>
        <button onClick={getTClick}>토큰 가져오기</button>
        {accT && <p>토큰 갱신 성공!</p> }
    </div>
  )
}
