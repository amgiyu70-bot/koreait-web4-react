/** @jsxImportSource @emotion/react */
import * as s from "./styles";
import logo from "../../../assets/only_logo.svg";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useSigninMuation } from "./hooks/useSignin";
import { toast } from "react-toastify";
//import { useRef, useState } from "react"


export default function Signin() {
    const {formVal, handleChange} = useForm({
        username: "",
        password: ""
    });
    const {isPending, mutate} = useSigninMuation();

   
    /*
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);

    const inputkeyDown = (e) => {
        const inp1= usernameRef.current;
        const inp2= passwordRef.current;
        const chk = e.target.name;

        //console.log(chk);
        const key = e.key;
        if (key !=="Enter") {
            return;
        }

        if (chk === "username") {  
            inp2.focus();  
        } else if (chk === "password") {
            handleSignin();
        }
    }
        */


    const handleSignin = () => {
        const {username, password} = formVal;
        if (!username || !password) {
            // 토스트
            return;
        }

        mutate(formVal, {
            onSuccess: () => {
                // 새로고침 + 홈url로 
                // 토스트상태 유지하려고  setTimeout 적용했습니다.
                setTimeout(() => {                    
                    window.location.href="/";
                }, 2500);
            }
        })
    }


  return (
    <div css={s.container}>
        <div css={s.signinBox}>
            <div css={s.logoBox}>
                <img src={logo} alt="logo" css={s.logo} />
            </div>
            
            <h1 css={s.title}>로그인</h1>
            <div css={s.formBox}>
                <div css={s.inputBox}>
                    <label >아이디</label>
                    <input 
                        type="text" 
                        name="username"
                        value={formVal.username}
                        onChange={handleChange}
                        placeholder="아이디를 입력하세요"
                    />
                </div>
                <div css={s.inputBox}>
                    <label >패스워드</label>
                     <input 
                        type="password" 
                        name="password"
                        value={formVal.password}
                        onChange={handleChange}
                        placeholder="패스워드를 입력하세요"
                    />
                </div>
                <button 
                    css={s.btn} 
                    onClick={handleSignin}
                    disabled={isPending}
                >{isPending ? "로그인 중": "로그인"}</button>
                <div css={s.signupTextBox}>
                    <span css={s.signupText}>계정이 없으신가요?</span>
                    <Link css={s.signupLink} to="/signup">회원가입</Link>
                </div>
            </div>
        </div>
    </div>
  )
}
