import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Study from "./Study";
import MyToast from "./Zustand/MyToast";


const queryClient = new QueryClient();
export default function ReactStudy() {
  return (
    // QueryClientProvider : 쿼리 클라이언트를 하위 컴포넌트에서 사용할 수 있게 제공
    // useQuery, useMutation 훅을 사영가능
    
    <QueryClientProvider client={queryClient}>
      <MyToast />
      <Study />
    </QueryClientProvider>
  )
}
