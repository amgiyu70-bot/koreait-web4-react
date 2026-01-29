import { useState, useEffect } from 'react'
import { getTestApi } from './api/test';

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

export default function Test05() {
    const [users, setUsers] = useState([]);



       const getUsersL = async () => {
          const res = await getTestApi();
          console.log(res.data);
         // console.log("2");
          setUsers(res.data);
        }

      useEffect(() => {
        getUsersL();
      },[]);

  const cardStyle = css`
    border: 1px solid #dbdbdb;
    width: 250px;
    padding: 15px;
    margin: 10px 0;
    cursor: pointer;
    &:hover {
      background-color: #eee;
    }
  `;

   

  // https://jsonplaceholder.typicode.com/posts?userId=3
  return (
    <div>
      <h2>사용자 목록</h2>
      {/* 아래의 div를 카드 컴포넌트라고 생각하시고 
        서버에서 받아온 데이터를 map으로 렌더링시켜주세요
      */}
      {
        
      users.map((u) => {
        const {id, name, username, email} = u;
        return (
          <div 
            css={cardStyle} 
            key={id}
          >
            <h3>이름: {name}</h3>
            <p>아이디: {username}</p>
            <p>이메일: {email}</p>
          </div>
        )
         
      })
      }
      
    </div>
  )
}