
import Main from '../pages/user/Main';
import Login from '../pages/login/Login';
import Register from '../pages/member/register';
import RegisterForm from '../pages/member/RegisterForm';
import RegisterResult from '../pages/member/RegisterResult';
import Itemlist from '../pages/user/Itemlist';
import Itemview from '../pages/user/Itemview';
import Cart from '../pages/user/Cart';
import Orderform from '../pages/user/Orderform';
import Orderview from '../pages/user/Orderview';
import Mypage from '../pages/user/Mypage';
import RegisterEdit from '../pages/user/RegisterEdit';

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


// 전체공개 라우트
export const PUBLIC_ROUTES =[
    ...MENU_ITEM,
    {
        id: "home",
        path: "/",
        element: <Main />
    },
    {
        id: "login",
        path: "/login",
        element: <Login />
    },
    {
        id: "register",
        path: "/register",
        element: <Register />
    },
    {
        id: "regform",
        path: "/regform",
        element: <RegisterForm />
    },
    {
        id: "regresult",
        path: "/regresult",
        element: <RegisterResult />
    } ,
    {
        id: "itemlist",
        path: "/itemlist",
        element: <Itemlist />
    },
    {
        id: "itemview",
        path: "/itemview",
        element: <Itemview />
    }
]

// 로그인해야 가능한 라우트
// Protected Routes
export const PROTECTED_ROUTES =[
    {
        id: "mypage",
        path: "/mypage",
        element: <Mypage />
    },
    {
        id: "cart",
        path: "/cart",
        element: <Cart />
    },
    {
        id: "orderform",
        path: "/orderform",
        element: <Orderform />
    },
    {
        id: "orderview",
        path: "/orderview",
        element: <Orderview />
    },
    {
        id: "regedit",
        path: "/regedit",
        element: <RegisterEdit />
    }
]