// axios 라이브러리

import axios from "axios";
import { useEffect, useState } from "react"

/* - fetch() 함수 와 다른점
    1. 400번 or 500번 
*/

// githo
export default function Axios01() {
    // 1. api로 받아온 데어터를 저장할 샅태
    const [product, setProduct] = useState([]);
    // 2. 데이터를 다시 불러올지 결정하는 상태
    const [refetch, setRefetch] = useState(false);
    useEffect(() => {

        // api 호출시 첫 렌더링 1회만 요청
        // get요청 aixio.get (컨트로로 주소)

        // get()은 promise 반환함
        axios.get("http://localhost:8080/product/all")
        .then((response) => {
            console.log(response.data);
            setProduct(response.data);
        })
    },[refetch]);

    // refetch 의 상태가 변할때마다 실행


  return (
    <div>
        <button onClick={(prev) => setRefetch(!prev)}>재요청</button>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>상품명</th>
                    <th>가격</th>
                </tr>
            </thead>
            <tbody>
                {
                    product.map((p) => {
                        const {id, name, price} = p;
                        return (
                            <tr>
                                <td>{id}</td>
                                <td>{name}</td>
                                <td>{price}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
