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
import UseState03 from "./react-study/02-useState/UseState03"

function App() {

  return (
  <>
    {/* App01 호출 */}  
    { /*
    <첫번째 />
    <두번째 />
    <세번째 />
    <네번째 />
    <h1>111</h1>
    <App05 />
    <App06 />
    */ }

    <UseState03 />
    </>
  )
}

export default App
