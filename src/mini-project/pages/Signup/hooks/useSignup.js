// useSignup.js

import { useMutation } from "@tanstack/react-query"
import {signupAPI} from "../../../apis/endpoints/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const useSignupMutation = () => {
  const navigator = useNavigate();

  return useMutation({
    mutationFn: signupAPI,
    onSuccess: () => {
      //console.log("회원가입 완료") // 전역토스트
      toast.success("회원가입 성공!");
      navigator("/signin");
    },
    onError: (error) => {
      // 서버에서 내려주는 validation에러는
      // 상태로 처리할것임
     // console.log(error.response);
      const msg = error.response.data;
     // console.log(msg); // 전역토스트
      toast.error(msg);
    }
  })

}

export const useSignupValidation = (formVal) => {
  const {username, password, passwordConfirm, name, email} = formVal;
  // 목료: 빈값 체크, 비번-비번확인 동일하니지 체크
  // 검증실패한 필드는 newError객체에 key-value형태로 업데이트
  const newError = {};
  if (!username.trim()) {
    newError.username = "아이디를 입력해주세요.";
  }
  if (!password.trim()) {
    newError.password = "비밀번호를 입력해주세요";
  }
  if (!passwordConfirm.trim()) {
    newError.passwordConfirm = "비밀번호확인을 입력해주세요";
  } else if (password !== passwordConfirm) {
    newError.passwordConfirm ="비밀번호가 일치하지 않습니다.";
  }
  if (!name.trim()) {
    newError.name = "이름을 입력해주세요";
  }
  if (!email.trim()) {
    newError.email = "이메일을 입력해주세요";
  }
  
  // 검살를 모드 통과했다면 -> newError: {}
  // 비어있는 js객체라면 keys의 결과는; []
  const isAllValidate = Object.keys(newError).length === 0;

  return {newError, isAllValidate}

}