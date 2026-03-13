import { Link, Navigate, useNavigate } from 'react-router-dom'
import { importForm } from '../../hooks/importForm'
import { useLogoinMuation } from '../../hooks/useLogin';
import { toast } from "react-toastify";
import { useAuthStore } from '../../stores/authStore';
import { useRef } from 'react';

export default function Login() {
	const { mbID } = useAuthStore();
	if (mbID) {
		window.location.href="/";
	}

	 const {formVal, handleChange} = importForm({
        mbid: "",
        password: ""

	 });
	const mbidRef = useRef(null);
	const passwordRef = useRef(null);
	const inputkeyDown = (e) => {
      
		const inp1= mbidRef.current;
		const inp2= passwordRef.current;
     	const chk = e.target.name;
		const key = e.key;
		if (key !=="Enter") {
			return;
		}

		if (chk === "mbid") {  
			inp2.focus();  
		} else if (chk === "password") {
			handleLogin();  
		} 
	}

	const {isPending, mutate} = useLogoinMuation();

	const handleLogin = () => {
		//console.log(formVal);
		//return;
        const {mbid, password} = formVal;
        if (!mbid) {
            toast.error("아이디를 입력해주세요");
            return;
        }

		if (!password) {
            toast.error("비밀번호를 입력해주세요");
            return;
        }

        mutate(formVal, {
            onSuccess: () => {
                // 새로고침 + 홈url로 
                // 토스트상태 유지하려고  setTimeout 적용했습니다.

				
                setTimeout(() => {                    
                    window.location.href="/";
                }, 2500);
				
				// window.location.href="/";
				
            },
			onError: () => {

			}
        })
    }

  return (
    <div id="mb_login" className="mbskin">
	<div className="mbskin_box">
		<h1>로그인</h1>
		<div className="mb_log_cate">
			<h2><span className="sound_only">회원</span>로그인</h2>
			<Link to="/register" className="join">회원가입</Link>
		</div>
		
		<fieldset id="login_fs">
			<legend>회원로그인{}</legend>
			
			<input 
				type="text"  
				id="login_id" 
				className="frm_input required" 
				size="20" 
				placeholder="아이디"
                name="mbid"
                value={formVal.mbid}
                onChange={handleChange}
				ref={mbidRef}
				onKeyDown={inputkeyDown}
			/>
			
			<input 
				type="password" 
				id="login_pw" 
				className="frm_input required" 
				size="20" 
				name="password"
				placeholder="비밀번호"
                value={formVal.password}
                onChange={handleChange}
				ref={passwordRef}
				onKeyDown={inputkeyDown}
			 />
			<button 			
				className="btn_submit"
                onClick={handleLogin}
                disabled={isPending}>{isPending ? "로그인 중": "로그인"}</button>			
		</fieldset>
	</div>        
</div>
  )
}
