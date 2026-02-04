// 상단 header navbar 일반메뉴들

import Home from "../pages/Home/Home"
import Signup from "../pages/Signup/Signup"

// 
export const  MENU_ITEM = [
    {
        id: 1,
        name: "페이지1",
        path: "/page1",
        element: <>패이지1</>
    },
    {
        id: 2,
        name: "페이지2",
        path: "/page2",
        element: <>패이지2</>
    },{
        id: 3,
        name: "페이지3",
        path: "/page3",
        element: <>패이지3</>
    }
]


// 전체곤개 라우트
export const PUBLIC_ROUTES =[
    ...MENU_ITEM,
    {
        id: "home",
        path: "/",
        element: <Home />
    },
    {
        id: "signin",
        path: "/signin",
        element: <>로그인화면</>
    },
    {
        id: "signup",
        path: "/signup",
        element: <Signup />
    }
]

// 로그인해야 가능한 라우트
// Protected Routes
export const PROTECTED_ROUTES =[
    {
        id: "mypage",
        path: "/mypage",
        element: <>마이페이지</>
    }
]