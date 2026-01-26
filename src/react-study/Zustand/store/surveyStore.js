// serveyStore.js
import {create} from "zustand";


export const useSurveyStore = create((set) => {
  return {
    surveyData: {
      // step1
      name: "",
      age: "",
      gender: "",
      
      // step2
      satisfaction: "",
      recommend: "",
      email: ""
    },

    // zustand가 제공해주는 set함수도 이전상태를 기억한다
    // 함수형 업데이트가 가능하다.
    setSurveyInfo: (objData) => set((prev) => {
      // js 객체는 key중복시 이후값이 이전값 덮어쓴다
      return {
        ...prev,
        surveyData: {...prev.surveyData, ...objData}
      }
    }),
    
    // 이메일만 업데이트 할 수 있는 setter
    setEmail: (email) => set((prev) => {
      return {
        ...prev,
        surveyData: {...prev.surveyData, email}
      }
    }),
  }
})