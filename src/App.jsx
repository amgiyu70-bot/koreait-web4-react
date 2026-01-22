// defalt 로 export 하면 값이 하나로 결정되어 있어서
// import 하는 쪽에서 사용하기 편한 이름으로 지정 가능

// import App01 from "./react-study/01-jsx-and-component/Appol";
//import 첫번째 from "./react-study/01-jsx-and-component/App01";
//import 두번째 from "./react-study/01-jsx-and-component/App02";
//import 세번째 from "./react-study/01-jsx-and-component/App03";
//import 네번째 from "./react-study/01-jsx-and-component/App04/App04";
//import App05 from "./react-study/01-jsx-and-component/App05/App05-01";
//import App06 from "./react-study/01-jsx-and-component/App06/App06";
//import UseState01 from "./react-study/02-useState/UseState01";
//import Usestate02 from "./react-study/02-useState/Usestate02";
//import UseState03 from "./react-study/02-useState/UseState03";
//import UseState04 from "./react-study/02-useState/UseState04";
//import UseStaate05 from "./react-study/02-useState/UseState05";
//import UseState06_me from "./react-study/02-useState/UseState06_me";
//import UseState06 from "./react-study/02-useState/UseState06";

import Study from "./react-study/Study";
import MyToast from "./react-study/Zustand/MyToast";

function App() {

  return (
    <>
      <MyToast />
      <Study />
    </>
  )
}

export default App
