/** @jsxImportSource @emotion/react */
import * as s from "./styles";
import { useQueryClient } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react'
import { useForm } from '../../../../hooks/useForm';
import { useUpdateUser } from "../../hooks/useMyPage";

export default function FormInput({setIsPasswordMode}) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [errors, setErrors] = useState({});
  const queryClient = useQueryClient();
  // useQuery쿼리키를 통해 캐싱된 전역데이터 가져오기 ok
  const user = queryClient.getQueryData(["getMyInfo"]);
  const {formVal, handleChange, setFormVal} = useForm({
    name: "",
    email: ""
  });
  const {mutate, isPending} = useUpdateUser();
  

  // user가 로드되는데 걸리는 시간존재
  useEffect(() => {
    if(!!user) {
      setFormVal({
        name: user.name,
        email: user.email
      })
    }
  }, [user])


  // 수정 완료 버튼
  const handleUpdateClick = () => {
    if (isPending) return;
    // validation
    mutate(formVal,  {
      onSuccess: ()=> setIsEditMode(false),
      onError: (error) => {
        // validation 에러
        if (error.response.status === 400 && Array.isArray(error.response.data)) {
          let backendError = {};
          for(let errorObj of error.response.data) {
            backendError = {...backendError, ...errorObj};
            setErrors(backendError);
          }
        }
      }
    });
  }

  return (
    <>
      <div css={s.inputGroup}>
        <label css={s.label}>이름</label>
        <input 
          css={s.input(isEditMode)}
          type="text" 
          name='name'
          value={formVal.name}
          onChange={handleChange}
          placeholder='이름을 입력하세요'
          disabled={!isEditMode}
        />
        {errors.name && <div css={s.errorMessage}>{errors.name}</div>}
      </div>
      <div css={s.inputGroup}>
        <label css={s.label}>이메일</label>
        <input
          css={s.input(isEditMode)}
          type="email"
          name='email'
          value={formVal.email}
          onChange={handleChange}
          placeholder='이메일을 입력하세요'
          disabled={!isEditMode}
        />
         {errors.email && <div css={s.errorMessage}>{errors.email}</div>}
      </div>
      <button 
        onClick={() => setIsPasswordMode(true)}
        css={s.changePasswordButton}>비밀번호 변경</button>
      {
        isEditMode
        ? (
          <div css={s.buttonGroup}>
            <button 
              css={s.cancelButton}
              onClick={() => setIsEditMode(false)}
              disabled={isPending}
            >
              취소하기
            </button>
            <button
              css={s.saveButton}
              onClick={handleUpdateClick}
              disabled={isPending}>수정완료</button>
          </div>
        )
        : <button 
            css={s.editButton}
            onClick={() => setIsEditMode(true)}
          >
            수정하기
          </button>
      }
    </>
  )
}