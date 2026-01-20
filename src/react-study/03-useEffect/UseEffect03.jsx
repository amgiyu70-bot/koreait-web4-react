import React, { useEffect, useState } from 'react'

export default function UseEffect03() {

    const [temp, setTemp] = useState(8);
    const [msg, setMsg] = useState("");

    // 10 도 미만 -> 추워요
    // 10 ~25 -> 좋은 날씨
    // 25 초과 -> 더워요
   
    const chkTemp = (e) => {
        const val = e.target.name;

        if (val=="+") {
            setTemp((prev) => prev+1);
        } else {

             setTemp((prev) => prev-1);

        }

      
    }
      

    /*
    const incre = () => {
        console.log(e.target.name)
        setTemp((prev) => prev+1);

    }

     const decre = () => {
        setTemp((prev) => prev-1);

    }
    */

    useEffect(()=>{
        if (temp<10) {
            setMsg("추워요");
        } else if (temp>26) {
             setMsg("더워요");
        } else {
             setMsg("좋은 날씨");

        }

    }, [temp])
  return (
    
    <>
        <h2>에어컨</h2>
        <div>{temp}</div>
        {/*
        <button name="+" onClick={incre}>+1</button>
        <button name="-" onClick={decre}> -1</button>
        */ }

        <button name="+" onClick={chkTemp}>+1</button>
        <button name="-" onClick={chkTemp}> -1</button>
        <h3>{msg}</h3>

    </>
  )
}
