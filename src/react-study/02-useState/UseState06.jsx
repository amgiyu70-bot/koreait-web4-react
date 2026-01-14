import React, { memo, useState } from 'react'

export default function UseState06() {

    const [memos, setMemos] = useState([]);
    const [inputVal, setInputVal] = useState("");
    const [done, SetDone] = useState(false);

    //const [chkV, setCkV] = useState([]);

     
    // [{id: Date.now(), text: "빨래하기"}, {}, {}] 

    const handleInputChange = (e) => {

        const value = e.target.value;
        setInputVal(value);

    }
    const addMemoClick = () => {
        setMemos( (prev) =>{

            return [...prev,
                { 
                    id : Date.now(), 
                    text: inputVal,
                    done : done,
                }
            ]



        });      
        
        

    }

    const handCheckClick = (e) => {

        // 체크박스 체크시     true 담겨임음, <> 체키 X -> false
        const chkVal = e.target.checked;
        SetDone(chkVal);
    }

    // 체크박는 우리가 추가한 만큼 생기기 때문에
    // 데이터식별이 필요함. -> id 를 매개변소로 받아야 한다.
    const handleToggleDone = (id) => {
        console.log(id);
        // {id:~, text:~, done:!true}
        const newMemos = memos.map((memo) =>{
            if(memo.id===id) {
                 return {
                    ...memo,
                    done: !memo.done
                 }
            } else {
                return memo;
            }

        });

        setMemos(newMemos);
    };

    // setMemos  를 호출!
    const handleAllCheck =() =>{

        
        const newCheck = memos.map((memo) =>{

            return {
                    ...memo,
                    done: true
                 }

        });

        setMemos(newCheck);       

    }

    const handleAllUnCheck = () => {

          const newUnCheck = memos.map((memo) =>{

            return {
                    ...memo,
                    done: false
                 }

        });

         setMemos(newUnCheck);

    }
    
  return (
    <div>
        <input 
            type="text"
            value ={inputVal}
            onChange={handleInputChange} 
            />
        <input type="checkbox"  checked={done} onChange={handCheckClick} />
        <button onClick={addMemoClick}>메모 추가하기</button>
        <button onClick={handleAllCheck}>모두체크하기</button>
        <button onClick={handleAllUnCheck}>모두케크해제</button>
        <ul>
            {
                memos.map( (memos) => {
                    // return <li key={memos.id} >{memos.text}</li>
                    // {id: 20560114, text: "빨래하기", done: true}
                    const {id, text, done} = memos;
                   // return <li key={id} >{text}</li>

                    return (

                        // memos 기준으로 렌더링된 결과
                        // -> setMemos를 호출해야 된다!
                        <li key={id} >
                            {text}
                            <input 
                                type='checkbox' 
                                checked={done}
                                // () => fx() : fx()를 호출하는 함수
                                // fx(id) : 호출결과
                                // {}로 함수를 전달할때, 매개변수도 같이줘야 할때
                                // () =>  fx(매개변수)로 작성!
                                onChange={() => handleToggleDone(id)}
                             />                        
                        </li>
                        );
               } )
            }
        </ul>
        <ul>
            { /* 체크가 된 meme의 text들이 <li>빨래하기</li> */ }
            {
                memos.filter(memo=>{
                    return memo.done;
                }).map((memo) => {
                    return <li key={memo.id}>{memo.text}</li>
                })
            }
        </ul>
    </div>
  )
}
