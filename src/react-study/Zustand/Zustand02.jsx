import React, { useState } from 'react'
import { useCurrentBook } from './store/bookStore';

export default function Zustand02() {

    const [formm, setForm] = useState({      
            title: "",
            author: "",
            price: 0          
    });

    const {setBook} = useCurrentBook();

    const hadleChage = (e) => {
        const {name, value} = e.target;
        setForm((prev) => {

            if (name === "price") {
               // value = parseInt(value);
            }
            return {
                ...prev,
                [name]: value
            }
        })

    }
    const handleSubmit = () => {

        setBook({...form});

         setForm ({
            title: "",
            author: "",
            price: 0
            });

    }

  return (
    <div>
        <h2>책 정보 입력</h2>
        <input 
            type="text" 
            name = "title"
            placeholder='책제목'
            onChange={hadleChage}
            value={formm.title}


        />
        <input 
            type="text" 
            name = "author"
            placeholder='저자'
            onChange={hadleChage}
            value={formm.author}


        />
        <input 
            type="text" 
            name = "price"
            placeholder='가격'
            onChange={hadleChage}
            value={formm.price}


        />
         <button onClick={handleSubmit}>입력완료</button>
         <ShowBook />
    </div>
  )
}

// 전역 상태에  정보 가져오기
function ShowBook() {
    const {book} = useCurrentBook();
    const {title, author, price} = book;
    return (
        <div>
            <h3>현재 저장되 책 정보</h3>
            <p>제목: {title}</p>
            <p>저자: {author}</p>
            <p>가격: {price}원</p>
        </div>
    )
}