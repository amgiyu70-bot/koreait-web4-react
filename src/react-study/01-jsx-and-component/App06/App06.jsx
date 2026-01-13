import MenuList from "./MenuList";

export default function App06() {
    const menus = {
        adults: ["맥주", "소주"],
        child: ["우유", "사이다"]
    }

    const user ={
        name : "홍길동",
        age : 25
    }

    let title; // 어른용 메뉴", "어린이  메뉴"
    let menukey;
    if (user.age > 19) {

        title = "어른용 메뉴";
        menukey = "adults";
         
    } else {
        title = "어린이 메뉴";
        menukey = "child";

    }
  return (
    <div>
        <h1>연습문자</h1>
        {/* menulist 에 user의  age 를 고려하여 props 를 전달하느 코드를 작성하시요*/}
        <MenuList title={title} menus={menus[menukey]}/>
    </div>
  )
}
