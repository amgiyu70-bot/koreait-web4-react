import React from "react";

// 컴폰넌트는 첫글자가 대문자이어야 한다 (class 처럼)
// 파일이름 .jsx 과 동일한 이름이어야 한다.

export default function App03 () {
    const age = 20;
    const forAdults =["맥주", "와인", "위스키"];
    const forChildren = ["우유", "당근주스", "사이다"];
    // ager가 19세 초과면, 성인 else 어린이

    const isAdult = age > 19;
    const menuTitle = isAdult ? "성인 메뉴" : "어린이 메뉴";
    let menus;

    // age가 19세 초과면, 성인 else  어린이
    if (isAdult) {
        menus = forAdults;

    } else {
        menus = forChildren;
    }

    // 조건판단은  retrun 웨에 작성하는게 권장됨.
    return (
        <div>
            <h1>메뉴</h1>

            <h2>
                {/* 성인이면 "성인 메뉴", 어린이면 "어린이 메뉴" */}
                {menuTitle}        
            </h2>

            <ul>
                {/* 성인이면 forAdults 메뉴들을 li로 출력 */}
                {
                    /*
                    forAdults.map((vlaue, idx) => {
                        return <li key={index}>{vlaue}</li> 
                    })
                    */
                }


                {/* 어린이면 forChildren 메뉴들을 li로 출력 */}
                {
                    /*
                    forChildren.map((vlaue, idx) => {
                        return <li key={idx}>{vlaue}</li> 
                    })
                    */

                    menus.map((vlaue, idx) => {
                        return <li key={idx}>{vlaue}</li> 
                    })
                }

            </ul>
        </div>
    )
}