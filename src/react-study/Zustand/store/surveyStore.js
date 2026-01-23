// serveyStore.js

import { create } from "zustand";


export const useSurVeyStore= create(()=>{
    return {
        surveryDate: {
            // step1
            name: "",
            age: "",
            gender: "",
            
            // step2
            satisfaction : "",
            recommend : "",
            email: "",
        
        },

         // 

         /*
         {
            // step1
            name: "",
            age: "",
            gender: "",
            
          
            name: name,
            age : age,
            gender: gender
       
        
        }
         */


       setSurVeyInfo : (objData) => set((prev) => {

            // js 객체는 key중복시 이후값이 이전값 덮어쓴다.
            return {
                ...prev,
                surveryDate : {...prev.surveryDate, ...objData}
            }
        }),
        //  이메이만 업데이트 할수 있는   set
        setEmail: (email) => set((prev) => {
            return {
                ...prev,
                surveryDate: {...prev.surveryDate, email}
            }
        }),

        
    }

   
})