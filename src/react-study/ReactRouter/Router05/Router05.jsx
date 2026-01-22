import React from 'react'
import { BrowserRouter, Route, Routes, Link, useParams, useSearchParams, useNavigate } from 'react-router-dom'
import { useToastStore } from '../../Zustand/store/toastStore'

export default function Router05() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<OrderList />} />
            <Route path="/order" element={<OrderDetail />} />
        </Routes>
    </BrowserRouter>
  )
}

// url: "/"

/*
const orders = [
        {product: "노트북", quantity: 1, status: "배송중"},
        {product: "키보트", quantity: 2, status: "배송완료"},
        {product: "마우스", quantity: 3, status: "주문접수"},
    ]
        */

function OrderList() {

    const {showToast} = useToastStore();
    
    const orders = [
        {product: "노트북", quantity: 1, status: "배송중"},
        {product: "키보트", quantity: 2, status: "배송완료"},
        {product: "마우스", quantity: 3, status: "주문접수"},
    ]

    return (
        <div>
            <h1>주문목록</h1>
            <button onClick={()=>showToast("라우터 테스트")}>토스트 테스트</button>
            <div>
                {/* orders를 map을 사용하여 카드형식으로 뿌려주세요
                    상품이름만 보이면 됩니다.
                */}
                {orders.map((od) => {
                     const {product, quantity, status} = od;
                     const url = `/order?product=${product}&quantity=${quantity}&status=${status}`;
                    return (
                        <div>
                       <Link to={url}>{od.product}</Link>
                       </div>
                        
                    )

                }) }
            </div>
        </div>
    )
}


// url: /order
function OrderDetail() {
    // props가 아니라 url로 데이터를 전달받아
    // 각 정보를 렌더링해주세요

   // const { product, quantity, status} = useParams(); // url에서 id 추출
    
        // 쿼리스트링에서 뽐아온 테디터 -> string
       const [searchParams] = useSearchParams();
       const product = searchParams.get("product");
       const quantity = searchParams.get("quantity");
       const status = searchParams.get("status");

     //  console.log(orders[0][`product`]);


         const navigate = useNavigate();

    return (
        <div>
            <h1>주문 상세 페이지</h1>
            <div>
                <p>상품명: {product}</p>
                <p>주문 수량:  {quantity}</p>
                <p>배송 상태:   {status}</p>
            </div>
            <button onClick={() => navigate("/")}>목록으로</button>
        </div>
    )
}