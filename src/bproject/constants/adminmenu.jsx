import Admin from "../pages/admin/Admin";
import CategoryEdit from "../pages/admin/CategoryEdit";
import CategoryForm from "../pages/admin/CategoryForm";
import CategoryList from "../pages/admin/CategoryList";
import ItemEdit from "../pages/admin/ItemEdit";
import ItemForm from "../pages/admin/ItemForm";
import ItemList from "../pages/admin/ItemList";
import ItemQnaEdit from "../pages/admin/ItemQnaEdit";
import ItemQnaList from "../pages/admin/ItemQnaList";
import ItemUseEdit from "../pages/admin/ItemUseEdit";
import ItemUseList from "../pages/admin/ItemUseList";
import MemberEdit from "../pages/admin/MemberEdit";
import MemberForm from "../pages/admin/MemberForm";
import MemberList from "../pages/admin/MemberList";
import OrderForm from "../pages/admin/OrderForm";
import OrderList from "../pages/admin/OrderList";
import Test01 from "../pages/admin/Test01";

// 전체 라우트
export const ADMI_ROUTES =[
    {
        id: "admin",
        path: "/admin",
        element: <Admin title="관리자메인" />,
        code: ""
    },
    {
        id: "memberlist",
        path: "/admin/memberlist",
        element: <MemberList title="회원관리" />
    },
    {
        id: "memberedit",
        path: "/admin/memberform",
        element: <MemberForm title="회원가입" />
    },
    {
        id: "memberedit",
        path: "/admin/memberedit",
        element: <MemberEdit title="회원수정" />
    },
    {
        id: "orderlist",
        path: "/admin/orderlist",
        element: <OrderList title="주문내역" />
    },
    {
        id: "orderform",
        path: "/admin/orderform",
        element: <OrderForm title="주문내역 수정" />
    },
    {
        id: "itemlist",
        path: "/admin/itemlist",
        element: <ItemList title="상품관리" />
    },
    {
        id: "itemform",
        path: "/admin/itemform",
        element: <ItemForm title="상품등록" />
    },
    {
        id: "itemedit",
        path: "/admin/itemedit",
        element: <ItemEdit title="상품수정" />
    },
    {
        id: "itemqna",
        path: "/admin/itemqna",
        element: <ItemQnaList title="상품문의" />
    },
    {
        id: "itemqnaedit",
        path: "/admin/itemqnaedit",
        element: <ItemQnaEdit title="상품문의 수정" />
    },
    {
        id: "itemuse",
        path: "/admin/itemuse",
        element: <ItemUseList title="상품후기" />
    },
    {
        id: "itemuseedit",
        path: "/admin/itemuseedit",
        element: <ItemUseEdit title="상품후기 수정" />
    },
    {
        id: "category",
        path: "/admin/category",
        element: <CategoryList title="상품분류" />
    },
    {
        id: "categoryform",
        path: "/admin/categoryform",
        element: <CategoryForm title="상품분류 등록" />
    },
    {
        id: "categoryedit",
        path: "/admin/categoryedit",
        element: <CategoryEdit title="상품분류 수정" />
    },
    {
        id: "test01",
        path: "/admin/test01",
        element: <Test01 title="상품분류 수정" />
    },
]