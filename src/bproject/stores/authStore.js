// authStore.js
import { create } from "zustand";

// accessToken을 로그인 성공시 서버에서 받아옴
// localStorage에 저장


// 전역상태도 새로고침하면 사라짐
export const useAuthStore = create((set) => {
  // 초기화 시 localStorage 체크
  // 새로고침해도 localStorage에 존재하면 로그인유지
  const accessToken = sessionStorage.getItem("accessToken");
  const mbID = sessionStorage.getItem("mbID");
  const mbName = sessionStorage.getItem("mbName");
  const mbLevel = sessionStorage.getItem("mbLevel");
  const isAdmin = sessionStorage.getItem("isAdmin");

  //const sessionSearch = sessionStorage.getItem("accessToken");

  return {
    isAuthenticated: !!accessToken, // token존재시 true
    //isAuthenticated: true, // token존재시 true
    accessToken: accessToken,
    mbID: mbID,
    mbName: mbName,
    mbLevel: mbLevel,
    isAdmin: isAdmin,

    // 로그인, 로그아웃 mutation에서 onSuccess시 호출될것
    // setter를 활용한 로그인, 로그아웃 함수
    login: (loginData) => {
      const { accessToken, mbID, mbName, mbLevel, isAdmin } = loginData;
      sessionStorage.setItem("accessToken", accessToken);
      sessionStorage.setItem("mbID", mbID);
      sessionStorage.setItem("mbName", mbName);
      sessionStorage.setItem("mbLevel", mbLevel);
      sessionStorage.setItem("isAdmin", isAdmin);
      set({
        isAuthenticated: true,
        accessToken: accessToken,
        mbID: mbID,
        mbName: mbName,
        mbLevel: mbLevel,
        isAdmin: isAdmin,
      });
    },
    logout: () => {
      sessionStorage.removeItem("accessToken");
      sessionStorage.removeItem("mbID");
      sessionStorage.removeItem("mbName");
      sessionStorage.removeItem("mbLevel");
      sessionStorage.removeItem("isAdmin");
      set({
        isAuthenticated: false,
        accessToken: null,
        mbID: null,
        mbName: null,
        mbLevel: null,
        isAdmin: null,
      })
    },
    /*
    // 토큰 업데이트 - 인터셈터용
    setToken: (newAccessToken) => {
      if (newAccessToken) {
        localStorage.setItem("accessToken", newAccessToken);
      } else {
        console.log("리플래쉬 실패");
        localStorage.removeItem("acessToken");
      }
      set({accessToken: newAccessToken, isAuthenticated: !!accessToken })
    }
      */
  }
});