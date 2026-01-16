import React, { useState } from 'react'



export default function Test01() {

  const [ids, setIds] = useState("");
  const [pwd, setPwd] = useState("");
  const [error, setError] =useState(null);
  const handleLogin = () => {
    if(!ids) {
        setError("아이디를 입력하세요!");
    } else if (!pwd) {
      setError("비밀번호를 입력하세요");
    } else {

      setError("");
    }
}

  return (
    <div>
        <ul>
            
            <input type="text"  placeholder="아이디 입력" value={ids} onChange={(e) => setIds(e.target.value)}  />
            <input type="password" placeholder="비밀번호" value={pwd} onChange={(e) => setPwd(e.target.value)} />
            <button onClick={handleLogin}>로그인</button>
            
            <h2>{error}</h2>
        </ul>
    </div>
  )
}
