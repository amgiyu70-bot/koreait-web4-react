import React, { useState } from 'react'

export default function Usestate02() {
    // setter를 호출하면 컴포넌트는 재호출된다.
    //let myNum = 5; // 재호출시 myNum에는 다시 5가 담김
   const [count, setCont] =  useState(0);

    const chkClck01 = () => {
       // myNum++;
       // console.log(myNum);
        setCont(count+1);
        
    };

     const chkClck02 = () => {
      //  myNum--;        
       // console.log(myNum);
        setCont(count-1);
        
    };

  return (

    // +1버튼을 누르면 h3태그에 있는 숫자가 +1되도록
    // -1버튼을 누르면 h3태그에 있는 숫자가 -1되도록
    // but1.addEventListener('click', () => () )
    <div>
        <h1>카운터</h1>
        <h3>{count} </h3>
        <button onClick={chkClck01}>+1</button>

        <button onClick={ () => setCont(count+1) }>+1</button>

        
        <button onClick={chkClck02}>-1</button>
    </div>
  )
}
