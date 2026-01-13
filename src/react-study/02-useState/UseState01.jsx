import React, { useState } from 'react'


// js에서는 이벤트리스너를 사용해서 크릭을 감지했었음
export default function UseState01() {
    // 리액트는 컴포넌트마다 따로 데이터를 저장하는 곳이 잇음
    // 그곳에 접근하게 만들어주는 함수가 useState
    let myName ="홍길동";

    // 배열를 리턴해붑니다. [현재리액트가 저장하고 있는값,  setter]
    // 생성자처럼 초기데이터를 넣을줄 수 있음
    const [name, setName] = useState();

    

    // 리액트는 가상  dom를 가지고 있다.
    // 데이터 변경이 되었을때 컴포넌트를 재 호출하는 식으로 업데이트를 한다.
    const handleChangeNameClick = () => {
        console.log("이름변경 버튼 클릭된!");
        myName ="김길동";

        // 일반변수에는 값은 변경되었으나 리액트가 감지 안됌
        // seeter를 호출하면 변경을 감지

        setName(myName);
        // 변경을 감지하면 값을 업데이트하고
        // 화면을 다시 그린다.
        console.log(myName);

    }
  return (
    <div>
        <div>{name}</div>
        {/*  onClick or coChange */}
        {/* 이벤트 발생시 호출할 함수를 전달한다. */}
        <button onClick={handleChangeNameClick}> 이름변경</button>
    </div>
  )
}
