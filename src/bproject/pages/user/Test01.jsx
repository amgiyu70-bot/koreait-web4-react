import React from 'react';

function FormInput() {
  const handleSubmit = (event) => {
    event.preventDefault(); // 폼 제출 시 페이지 새로고침 방지
    
    // 1. FormData 객체 생성
    const formData = new FormData(event.target);
    
    // 2. name 속성을 이용해 값 가져오기
    const username = formData.get('username');
    
    console.log(`제출된 이름: ${username}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" defaultValue="1" />
      <button type="submit">제출</button>
    </form>
  );
}

export default FormInput;


