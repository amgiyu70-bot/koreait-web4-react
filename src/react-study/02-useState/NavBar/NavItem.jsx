//import React from 'react'

// css -> css in js
// emotion or style-component
// mui
export default function NavItem({id, label, isActive, onClick}) {
  return (
    <li 
         onClick={()=> onClick(id)}
         // 상태에 따라 서로 다른 스타일 적용 가능
         style={{cursor: "pointer", fontWeight: isActive ? "500":"200"}}>

        {label}
    </li>
  )
}
