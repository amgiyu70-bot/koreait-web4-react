import React, { useEffect, useState } from 'react'

export default function Memerform() {
    const [formV, setFormV] = useState({
        mid: "",
        pwd: "",
        email: "",
        hp: "",
    });

    
  const [submit, setSubmit] = useState(false);

    const [errors, setErrors] = useState({});
    const [msg, setMsg] = useState(null);
    const oChg = (e) => {
        const {name, value} = e.target;

        setFormV ((prev) => {
            return {
                ...prev,
                [name] : value,
            }

        });


    };

    const chkSub = (e) => {
        e.preventDefault(); // 새로고침 방지
        setSubmit(true);

        
    }


    useEffect (() => {
      
        console.log(submit);;

        if (!submit) return;

       

        if (formV.mid.length < 5) {
            setMsg("아이디는 5자 이상");
            setSubmit(false);
            console.log("mid");
            return;
        }

        const regex = /^[a-zA-Z0-9]{5,20}$/;
        if (!regex.test(formV.mid)){
            setMsg("아이디는 영문 소문자로 시작하며 4~16자의 영문 소문자와 숫자만 가능합니다.");
             setSubmit(false);
            console.log("mid");
            return;
        }


        if (formV.pwd.length < 8) {
            setMsg("비밀번호는 8자 이상");
            setSubmit(false);            
            console.log("pwd");
            return;
        }

        if (!formV.email.includes("@")) {
            setMsg("이메일 형식이 올바르지 않습니다");
            setSubmit(false);          
            console.log("email");
            return;
        }

        if (formV.hp.length<10) {
             setMsg("핸드폰번호를 입력해주세요");
             setSubmit(false);       
            console.log("hp");
            return ;
        }

       

       

        // 에러가 없으면 서버 전송
        if (Object.keys(errors).length === 0) {
        console.log("서버 전송", formV);
        // axios.post("/api/join", form)
        }

        


    },[submit, formV]);

  
    
  return (
    <div>
        <table>
            <thead></thead>
            <tbody>
            <tr>
                <th>아이디</th>
                <td>
                    <input 
                    type="text" 
                    name="mid"
                    placeholder="아이디 입력"
                    value={formV.mid}
                    onChange={oChg}
                    />
                </td>
            </tr>
            <tr>
                <th>비밀번호</th>
                <td>
                    <input 
                    type="password" 
                    name="pwd"
                    placeholder="아이디 입력"
                    value={formV.pwd}
                    onChange={oChg}
                    />
                </td>
            </tr>
            <tr>
                <th>이메일</th>
                <td>
                    <input 
                    type="email" 
                    name="email" 
                    placeholder="이메일 입력"
                    value={formV.email}
                    onChange={oChg}
                    />
                </td>
            </tr>
            <tr>
                <th>핸드폰</th>
                <td>
                    <input 
                    type="text" 
                    name="hp" 
                    placeholder="핸드폰 입력"
                    value={formV.hp}
                    onChange={oChg}
                    />
                </td>
            </tr>
            <tr>
                <th colSpan="2" onClick={chkSub}><button >회원가입</button></th>
            </tr>
            </tbody>
        </table>
        {msg? <p>{msg}</p>:"" }
    </div>
  )
}
