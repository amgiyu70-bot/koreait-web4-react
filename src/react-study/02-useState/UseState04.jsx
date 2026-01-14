import React, { useState } from 'react'

export default function UseState04() {

    const [count, setCount] = useState(0);
    const increse = () => {
        //setCount(count+1);
       // setCount(count+1);
        // coount 가 2씩 증가할까
        // -> 두번 호출해도 setter들은 리액트가
        // batch처리를 하기때문에
        // 그때의 count 갓은 둘다  0으로 동일

        // 함수형 업데이트
        // setter 에 함수를 매개변수로 전달 가능
        // 리액트가 첫번째 매개변수에 이전값을 넣어준다.
        // 이전값을 쓰는경우 함수형 업데이트를 하는게 권장
        setCount((prev) => prev+1);
        setCount((prev) => prev+1);
    }

    const decrease = () => {
        // 값이 하나만 바뀌는 경우
        // 함수형 업데이트하지 않아도  ok
        // 복잡해질 가능성 때문에
        // 함수형업데이트 쓰는 슴관이 좀 더 권장
        setCount(count-1);
    }
  return (
    <div>
        <h1>
             <h3>{count} </h3>
            <button onClick={increse}>+1</button>
            <button onClick={decrease}>-1</button>
        </h1>
    </div>
  )
}
