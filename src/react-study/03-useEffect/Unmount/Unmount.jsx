import React, { useState } from 'react'
import A from './A';
import B from './B';


/*
- 렌더링(계산)하고 난 이후
1. 실제 domdp 컨포넌트가 필요 -> 마운트 ->  useEffect들 실행 -> 마운트 종료
2. 의존성에 있는 상태변화 -> 업데이트 -> useEffect들(상태를 구동하는) 실행
3. 실제dom에 컴포넌트가 필요 없음 -> useEffect의 return 함수들 실행 -> 언마운트  
(1 -> 2 -> 3() -> (1 -> 2 -> 3) ... : 컴포넌트이 생명주기
*/
export default function Unmount() {
    const [showA, setShowA] = useState(true);
    const toggle = () => {
        setShowA((prev) => !prev);
    }

  return (
    // <></> fragment 
    <>
    <button onClick={toggle}>컴포넌트전환</button>
    {showA ? <A /> : <B />}
    </>
  );
}
