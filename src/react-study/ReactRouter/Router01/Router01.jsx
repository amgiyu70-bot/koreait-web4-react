// react Router
// 설치 : npm install react-router-dom
// 월래 url 을 바꾸면> get요청
// 라우터 라이브러리: url을 바꾸면? 컴포넌트 호츨

import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom"

export default function Router01() {
    // 라우팅만 하는 컴포넌트
  return (
    /*
        BrowserRouter : 리액트라우터 취상위 컴포넌트
        - 이 컴포넌트 내부에서만 url 라우팅 (Link, Route)이 가능
        - url이 변경될 때 브라우저가 작동하는 기본작동을 막고
        리액트 방식(컴포넌트호출)으로 작동하게 해줌

        Routes: 여러 Route들을 그룹화하는 컨테이너
        -> if-else if문
        Route: url경로와 컴포넌트를 매칭
        - path: url경로
        - element: 해당경로에서 렌더링할 컴포넌트
    */
   // 도전! profile 및 contact가 현재 사위 가우터에 있는데
   // UserRouter 라는 하위 라이터를 만들어서 처리 해주주세요
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainPage />} />           {/* if */}
            {/*<Route path="/profile" element={<ProfilePage />} /> */} {/* if else */}
            {/*<Route path="/contact" element={<ContactPage />} /> */} {/* if else */}
            <Route path="/user/*" element={<UserRouter />} />
            {/* path="/경로" 하위경로는 하위라우터에게 위임 */}
            <Route path="/shop/*" element={<ShopRouter />} />
            {/* path="/*" -> 정으되지 않는 모든 경로의 처리 (else) */}
            <Route path="/*" element={<h1>여러페이지(404)</h1>} />
        </Routes>
    </BrowserRouter>
    
  )
}

function ShopRouter() {

    // 하위라우터
    // 하위라우터에서는 /shop/* 들어온 요청 처리
    // 여기서 path느 products or cart이지 "/shop/products" or /shop;/cart 가 아님!!
    // 이미 상위에  /shop까지는 처리 했기 때몬
    return (
        <div>
            <h1>쇼핑 영역입니다.</h1>
            <Routes>
                <Route path="products" element={<ProductsPage />} />
                <Route path="cart" element={<CartPage />} />
            </Routes>
        </div>
    )

}
// UserRouter or AuthRouter
function UserRouter() {
    const accessToken = "토큰입니다.";
    // 권한검사 -> 토큰검사
    // 1. accessToken 이 있으면 -> 허용
    // 2. accessToken 이 없으면 -> 로그인페이지
    if (!accessToken) {
        return(<h1>로그인페이지 컴포넌트</h1>);
    }
    // 3. accessToken 이 만료 -> 재요청(refresh)


    return (
        <Routes>
            <Route path="profile" element={<ProfilePage />} />
            <Route path="contact" element={<ContactPage />} />
        </Routes>
    )
}

function MainPage () {
    // a -> 페이지 전체가 새로고침: 상태가 초가화됨
    // 상태를 초기화해야하느 경우: 로그인 -> 메인페이지
    // Link -> 컴포넌트 교체만 일어남: 상태가 유지
    return (
        <div>
            <h1>메인페이지</h1>
            <nav>
                {/*
                <a href="/profile">프로필</a>
                <a href="/contact">연락처</a>
                <Link to="/profile">프로필</Link>
                <Link to="/contact">연락처</Link>
                */}

                
                <Link to="/user/profile">프로필</Link>
                <Link to="/user/contact">연락처</Link>
            </nav>
        </div>
    )
}


function ProfilePage () {
    // 리액트라우터 훅
    // 리턴된 것은 함수!
    const navigate = useNavigate();

    const handleSaveProfile = () => {
        alert("프로필 저장이 완료되었습니다.");

        // 저장완료후 메인페이지로 자동 이동
        navigate("/"); // 멈포넌트만 교체
    }

    const handleCancle = () => {
        /*
        라아터 대상들은 BrowserRouter에 감싸져 있음
        BrowserRouter는 함수호출 순서를 상태로 가지고 있음
        -> 방문기록을 상태로 가지고 있음

        navigate(-1) -> 바로 직전페이지(뒤로가기) 이동
        navigage(-2) -> 2단계 이전페이지로 이동
        */
       navigate(-1);
    }

    return (

        <div>
            <div>
                <h1>프로필 페이지</h1>
                <button onClick={handleSaveProfile}>저장하고 메인으로</button>
                <button onClick={handleCancle}>취소(뒤로가기)</button>
            </div>
        </div>
    )
}


function ContactPage () {

    const navigate = useNavigate();       
    const confirmClick = () => {
        const result = confirm("전송하시겠습니까?");
    if (result) {
        navigate("/"); // 멈포넌트만 교체
        } 
    }

    // 전송버튼을 누르면
    // confirm으로 전송하시겠습니까?
    // true명 전송왼료 ! alert 후 메인으로 이동
    // 메인으로-> 라우팅되게 변경
    return (
        <div>
            <h1>연락처 페이지</h1>
            <button onClick={confirmClick}>전송</button>
            <Link to="/">메인으로</Link>
        </div>
    )
}

function ProductsPage() {
    return (
        <div>
            <h1>상품목록</h1>
            <p>입고예정</p>
            <Link to="/shop/cart">장바구니로 이동</Link>
        </div>
    )
}

function CartPage () {
    return (
        <div>
            <h1>장바구니</h1>
            <p>상품 확인하세요</p>
            <Link to="/shop/products">상품목록으로 이동</Link>
        </div>
    )

}