/*
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
*/

import { useState } from "react"
import { useSearchProducts } from "./useProducts";

// enabled 기능, 멀티 key
export default function ReactQuery03() {
    const [inputVal, setInputVal] = useState("");
    const [nameKeyword, setNameKeyword] = useState(null);
    const handleClick = () => {
        setNameKeyword(inputVal);
        setInputVal("");
    }
    const [ products, isLoading, isError, error]= useSearchProducts(nameKeyword);
    
  return (
    <div>
        <input 
          type="text" 
          placeholder="검색어 업력"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        />
        <button onClick={handleClick}>검색</button>
        <table>
            <thead>
                <tr>
                    <th>번호</th>
                    <th>가격</th>
                    <th>상품명</th>
                </tr>
            </thead>
            <tbody>
               {
                products?.map((p)=> {
                    return (
                        <tr key={p.id}>
                            <td>{p.id}</td>
                            <td>{p.name}</td>
                            <td>{p.price}</td>
                        </tr>
                    )
                })
               }    
            </tbody>
        </table>
    </div>
  )
}
