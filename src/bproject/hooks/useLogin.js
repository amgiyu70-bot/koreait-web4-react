import { useMutation } from "@tanstack/react-query"
import { loginAPI } from "../apis/auth"
import { useAuthStore } from "../stores/authStore"
import { toast } from "react-toastify";

export const useLogoinMuation = () => {
    const {login} = useAuthStore();
    return useMutation({
        mutationFn: loginAPI,
        onSuccess: (data) => {
            const accessToken = data.accessToken;
            const mbID = data.mbID;
            const mbName = data.mbName;
            const mbLevel = data.mbLevel;
            const isAdmin = data.isAdmin;
            const error = data.error;
            const msg = data.msg;

            if (error!==0) { 
                toast.error(msg);
                throw new Error(msg);
            }
           
            login({
                accessToken: accessToken,
                mbID: mbID,
                mbName: mbName,
                mbLevel: mbLevel,
                isAdmin: isAdmin
            });
            // 전역토스트 - 로그인성공
            // warning / success / error
            toast.success("로그인 성공");

        },
        onError: (error) => {
           // console.log(error.message);
            const errorMsg = error.response.data;
           // console.log(errorMsg);
            // 토스트로 에러메세지
            toast.error(errorMsg);
        }
    })
}