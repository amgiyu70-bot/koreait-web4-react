import React, { useState } from 'react'

export default function Test03() {
  const [author, setAthor] = useState("");
      const [comment, setComment] = useState(null);
      const comments = [
          {author: "홍길동", title:"배송 빨라요"},
          {author: "홍길일", title:"배송 느려요"},
          {author: "홍깅이", title:"아자스"},
          {author: "홍길삼", title:"포장 꼼꼼해요"},
          {author: "홍길사", title:"생각보다 크기가 작아요"},
  
      ]
  
      const cChage = (e) => {
  
          const value = e.target.value;
  
          setAthor(value);     
      }

     
      const chkSherch = (e) => {

        
  
          //setComment(author);
  
          // 탐색 -> for, find, filter
  
          let found = null;
  
          for (let i=0; i< comments.length; i++) {
              let comment = comments[i];
              if (comment.author===author) {

                alert(comment.author);
                  setComment(comment);
              }
  
          }
  
          // 2. 리슽.find()
          // 순회하면서 함수의  return 값이 true인 요소를 리턴
          found = comments.find((comment) =>{
              return comment.author === author;
          });
         // setComment(found);
  
  
          // 3. fiter
          found = comments.filter((comment)=>{
              return comment.author === author;
          });
  
          //setComment(found.length> 0 ? found[0]: null);        
  
      }
          
    return (
      <div>
          <h1>리뷰 검색</h1>
          <input 
          type='text' 
          value={author} 
          placeholder='작성자 이름을 입력하세요'
          onChange={cChage} 
          onBlur={chkSherch}/>
         { /* <button onClick={chkSherch}>검색해가</button> */ }
          { /* 검색결과가 있으면, <h2>title</h2>을 보여주세요 */}
          { /* 없으면,  <h2>찾을수 없습니다.</h2> */}
          <h2>
          {
              !!comment ? comment.title : "해당 작성자의 글을 찾을 수 없습니다."
          }
          </h2>
      </div>
    )
}
