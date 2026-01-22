/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import { useEffect } from "react";
import { useToastStore } from "./store/toastStore";

const toastStyle = css`
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: #777;
  color: white;
  padding: 12px 20px;
  border-radius: 8px;
  opacity: 0.8;
`;

export default function MyToast() {
   const {isVisible, hideToast, message} = useToastStore();
    useEffect(() => {

        if (isVisible) {
            // useEffect 의 전체코드는 toast전역상태가  true일때만
            const timer = setTimeout(()=>{
                // toast 전액상태를 false로 바꿔주세요 함수 호출/ 
                hideToast();
            },2500);

            return () => clearTimeout(timer);

            console.log("1");
        }

     }, [isVisible]);

     if (!isVisible) {
        return null;
     }


     // 조건문으로 toast전역상태가 flase이면 return null
  return (

    // 메세지도 전역으로 관리가능? O
    <div css={toastStyle}>{message}</div>
  )
}
