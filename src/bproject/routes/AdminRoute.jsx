
import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../stores/authStore";

export default function AdminRoute() {
   // Zustand로 권한훅 - token, 로그인여부 저장
    const { isAdmin } = useAuthStore();
  
    // 권한이 없다면
    if(isAdmin!=1) {
      // 라우터라이브러리에서 제공하는 컴포넌트
      // url 이동(변경)만 담당
      // replace: /mypage로 이동한 히스토리를 /signin으로 대체
      return <Navigate to="/" replace />
    }
  
  return (
     <Outlet />
  )
}
