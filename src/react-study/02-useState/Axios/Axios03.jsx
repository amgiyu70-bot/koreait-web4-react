import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { getUserApi } from './apis/study.Api';

export default function Axios03() {

     // 작성한 api 함수를 import해서 reponse들을 
     // 아래에 return에 렌더링 시켜주세요
    const [users, setUsers] = useState([]);

    const getUsers = async () => {

        const res = await getUserApi();
        console.log(res.data);
        setUsers(res.data);

        /*
         axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
           // console.log(response.data);
            setUsers(response.data);
        })
            */

    }
    useEffect(async () => {

        getUsers();

    }, []);
  return (
    <div>
        <h2>사용자 목록</h2>
        {/* 아래의 div 카드라고 생각하시고
        서버에서 받아온 데이터를  map  으로 렌더링시켜주세요  */}
       
            {
               users.map((u) => {
                const {id, name, username, email} = u;
                    return (
                         <div key={id}>
                            <h3>유저이름: {name} </h3>
                            <p>아이디: {username}</p>
                            <p>이메일: {email}</p>
                        </div>
                    )
               })     
            }
           
        
    </div>
  )
}
