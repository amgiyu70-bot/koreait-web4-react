/*
 리액트에서는  실제  dom조각을 사용하지 않길 바람
 (Vdom <=> dom 비교하는 매커니즘 때문)
 브라우저 기능을 써야 가능한 경우가 존재
 -> 대표적으로 : focus(), click()
*/

import { useRef, useState } from "react"

export default function UseRef02() {

    const [value, setValue] = useState("");
    // dom객체에 직접 접근할 때 사용한다.
    const div1Ref = useRef(null);
    const div2Ref = useRef(null);
    const div3Ref = useRef(null);

    const handlekeyDown = (e) => {
        // 실제 dom 객체 ? current에 있음
       const div1= div1Ref.current;
       const div2= div2Ref.current;
       const div3= div3Ref.current;

       const key = e.key;
       if (key !=="Enter") {
            return;
       }
       // 엔터키 일때
       if (value === "1") {
            div1.focus();
       } else if (value === "2") {
            div2.focus();

       } else if (value === "3") {
            div2.focus();

       }
    }

    const input1Ref = useRef(null);
    const input2Ref = useRef(null);
    const input3Ref = useRef(null);

     const inputkeyDown = (e) => {
       
       const inp1= input1Ref.current;
       const inp2= input2Ref.current;
       const inp3= input3Ref.current;

       
        const chk = e.target.name;

        console.log(chk);

         const key = e.key;
       if (key !=="Enter") {
            return;
       }

        
        if (chk === "1") {

             inp2.focus();

        } else if (chk === "2") {
             inp3.focus();

        } else if (chk === "3") {
            inp1.focus();
        }
           
     }

     const handlekeyDown2 = (e) => {
        //  dom 객체를 가져오느 방법
        // 1. 이벤트로 가져오기
        // 2. Ref current 로 가져오기

        if (e.key !== "Enter") {
            return;
        }

        const tartet = e.target;
        if (tartet === input1Ref.current) {
            input2Ref.current.focus();
        
        } else if (tartet === input2Ref.current) {
            input3Ref.current.focus();
        
        }
     }

     // 이멘트핸들러에 매개변수 하나 더!
     const handlekeyDown3 = (e, nextRef) => {
        if (e.key === "Enter" && nextRef) {
            nextRef.current.focus();
        }

     }

  return (
    <>
        <div>
            <input 
                type="number" 
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={handlekeyDown}
                placeholder="1~ 3 입력"

            />

            { /* jsx 태그에  ref속성르로 실제 dom객체를 useRef변수에 대입 
            div태그는 원래 focus() 대상이 아님
            그래서tabIndex 써줌
            */}
            <div ref={div1Ref} tabIndex={0}>1번</div>
            <div ref={div2Ref} tabIndex={0}>2반</div>
            <div ref={div3Ref} tabIndex={0}> 3번</div>
        </div>
        {/* 1번에서 enter => 2번으로 focus() */}
        {/* 2번에서 enter => 3번으로 focus() */}

        {/* 
        <div>
            <input type="text" name="1" placeholder="1번" ref={input1Ref}  onKeyDown={inputkeyDown} />
            <input type="text" name="2" placeholder="2번" ref={input2Ref}  onKeyDown={inputkeyDown}  />
            <input type="text" name="3" placeholder="3번" ref={input3Ref}  onKeyDown={inputkeyDown}  />
        </div>

        */}
         {/* 
         <div>
            <input type="text" name="1" placeholder="1번" ref={input1Ref}  onKeyDown={handlekeyDown2} />
            <input type="text" name="2" placeholder="2번" ref={input2Ref}  onKeyDown={handlekeyDown2}  />
            <input type="text" name="3" placeholder="3번" ref={input3Ref}   />
        </div>
        */}
        <div>
            <input type="text" name="1" placeholder="1번" ref={input1Ref}  
            onKeyDown={(e) => handlekeyDown3(e, input2Ref)} />
            <input type="text" name="2" placeholder="2번" ref={input2Ref}  
            onKeyDown={(e) => handlekeyDown3(e, input3Ref)} />
            <input type="text" name="3" placeholder="3번" ref={input3Ref}   />
        </div>
    </>
  )
}
