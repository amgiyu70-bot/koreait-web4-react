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

//import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
//import Study from "./react-study/Study";
//import MyToast from "./react-study/Zustand/MyToast";
import Check from "./check";
//import Main from "./mini-project/Main";
/*
// 쿼리클라이언트 - get요청 결과 데이터를 전역상태로 들고 있음
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // 쿼리 옵션을 널을 수 있음
      // staleTime - 신선한 상태로 유지되는 시간 (기본 0)
      // refetchOnWindowFocus - 윈도우 포커스시 자동 리패치 (기본 true)
    }
  }
});
*/
//const queryClient = new QueryClient();

function App() {

  return (
    // QueryClientProvider : 쿼리 클라이언트를 하위 컴포넌트에서 사용할 수 있게 제공
    // useQuery, useMutation 훅을 사영가능
    
    //<QueryClientProvider client={queryClient}>
    //  <MyToast />
    //  <Study />
    //</QueryClientProvider>
   
    //<Main />
    <Check />
  )
}

export default App
