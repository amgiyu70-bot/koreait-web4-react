import React, { useEffect, useState } from 'react'

export default function UseEffect04() {

    const [formVal, setFomrmVal] = useState({
        email : "",
        password: "",
    });

    // {email : "@을 넣어주세요"}
    const [errorMsg, setErrorMsg] = useState({})
    const [isDisabled, SetIsDisabled] = useState(false);

    // 이벤트객체로 현재 입혁하고 있는 input 특정하여
    // setForm에 js객체를 업데이트
    const inputChageHanlder = (e) => {

        const {name, value} = e.target;

        setFomrmVal((prev) => {

            return {
                ...prev,
                [name] : value,

            }

        })
        /*
        if (e.target.name=="email") {
             
        } else {

        }
            */

    }

    useEffect(() => {
        SetIsDisabled(() => true);
        const newErrorMsg = {}
        if (formVal.email.length>0 && !formVal.email.includes("@")) {
            newErrorMsg.email = "이메일 형식에 맞게 입력";
        }

        if (formVal.email.length>0 && !formVal.password.length <8) {
            newErrorMsg.password = "비밀번호는  8자 이상";
        }

         setErrorMsg(newErrorMsg);

        // 만약에 newErrorMsg가 빈 {} fkaus
        // -> 장 입력했승
        // -> 버튼 활성화
        const keys = Object.keys(newErrorMsg); // key 들만 리스트로 반환
        if (formVal.email && formVal.password && keys.length===0) {
            SetIsDisabled(false);
        }
       
        
        // 1. 이메일 @
       // SetIsDisabled(true);
    })
  return (
    <div>
        <div>
            <input 
            type="email" 
            name="email" 
            placeholder='이메일'
            value={formVal.email}
            onChange={inputChageHanlder}
            />
            {errorMsg.email && <p>{errorMsg.email}</p>}
        </div>
        <div>
             <input 
            type="password" 
            name="password" 
            placeholder='비밀번호'
            value={formVal.password}
            onChange={inputChageHanlder}
            />
             {errorMsg.password && <p>{errorMsg.password}</p>}
        </div>
        {/* 유효성 통과 */}
        <button disabled={isDisabled}
        onClick={() => alert("가입 성공")}>가입하기</button>
    </div>
  )
}
