import React, { useState } from 'react'

export default function UseState03() {

    const [formData, setFormData] = useState({
        name: "",
        major: "",
    });


    const [name, setName] = useState("");
    const [major, setMajor] = useState("");

    // onClick, onChange와 같은 이벤트 속성에
    // 등록된 함수는 첫번째 매개변수에
    // 리엑트가 알아서 이벤트 객체를 넣어준다.
    const handleNameChage = (event) =>{

        const target = event.target;
        const value = target.value;
        setName(value);
    };

    const handleMajorChage = (e) =>{
        const value = e.target.value;
        setMajor(value);
        
    };

    const handleInputChange =(e) =>{

        // name 속성을 잘 이용해서보세요
        // -> 두개의  input wnd 어떤 input 인지 식별
        // setFormData()에 js 객체를 업데이트!
        //const name = e.target.name;
        //const value = e.target.value;

        const {name, value} = e.target;
        console.log(name)
        // name === "name" -> name Input
        // name === "major" -> major Input
        const newFormData = {

            ...formData, // 기존값 복사
            [name] : value, // 바뀐 값만 업데이트 

        };

        setFormData(newFormData);


    };
  return (
    <div>
        <input 
            type="text"
            // value 에 name을 넣어놨기때문에
            // 업데이트할때마다 setter로  name 을 업데이트해줘야 함
            value={formData.name}
            name="name"
            placeholder="이름입력"
            onChange={handleInputChange}
         />
        <input 
            type="text" 
            value={formData.major}
            name="major"
            placeholder='이름입력'
            onChange={handleInputChange}
        />
        <p>이름: {formData.name}</p>
        <p>전공: {formData.major}</p>
    </div>
  )
}
