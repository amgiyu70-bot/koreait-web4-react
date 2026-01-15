import React, { use, useState } from 'react'

export default function UseState08() {

    const [todos, setsTods] = useState([]);
    const [inptVal, setInputVal] = useState("");

    const addTodoCick = () =>{
        setsTods( (pre) => [...pre, inptVal]);
        setInputVal("");

    }
    const handleInputCange = (e) => {
        const value=e.target.value;
        setInputVal(value);

    }

  return (
    <div>
        <input 
        type="test"
         value={inptVal}
          onChange={handleInputCange}
            placeholder='할일 입력!'/>
        <button onClick={addTodoCick}>항 일 추가하기</button>
        { /*  추가된게 없어면, <p>"항링이 없습니다." */ }
        {
            /* 요소가 하나 이상라면,
            <ul>
                <li>1</li>
                ....
            </ul>
            */
        }
        { /* 간접적인 상태 -> useState로 보과하지 마세요 */ }
        {
        todos.length > 0 ? 
        <ul>
            {todos.map((todo, i)=> {

                return <li key={i}>{todo}</li>

            })}
        </ul> 
        : <p>할일이 없습니다.</p>
    }
    </div>
  )
}
