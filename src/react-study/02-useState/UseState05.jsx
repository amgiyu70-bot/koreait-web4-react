import React, { useState } from 'react'

export default function UseState05() {

    const [todos, setTodos] = useState([]);
    const [inpV, setInV] = useState("");

    // 정의해놓은 상태들로
    // input에 To-do를 입력하면
    // ul안에 li들로  Todo들이 보이게 만들어 주세요

    const hChge = (e) => {
        const val = e.target.value;
        
       // setInV("");
        setInV(val);

    }

    const hClk = () => {
        console.log(inpV);
        // [] -> ["빨래하기"]
        //  push 원본이 수정되는 메서드

        // 1. setter 에는 새객체를 넣어줘야 함
        //todos.push(inpV);  // push 사용 안함
        // 2. prev는 배역, 객체도 기억하고 있으니 spread 권장

        /*
        const neTodos = [...todos, inpV];
        setTodos(neTodos);
        */
       setTodos( (prev) => [...prev, inpV]);
       setInV("");

    }

  return (
    <div>
        <input 
            type='text' 
            // value가 inpV
            // 변경되면 inpV이 바뀌어야 함
            value={inpV}
            onChange={hChge}
            placeholder='To-Do 입력'
        />
        <button onClick={hClk}>To-Do 추가</button>
        <ul>
            {/* [<li>빨래 하기</li>, <li>티비 보기</li>] */}

            {
                todos.map( (todo, i) => {
                    // key로 index를 넣으면 안됌
                    // 리액트가 리스트로 렌더링할대
                    // 실제 데이터를 기준으로 변경을 감지하는게 아니라
                    // key를 기준으로 변경을 감지함
                    return <li key={i} >{todo}</li>
               } )
            }
        </ul>
    </div>
  )
}
