import { create } from "zustand";

export const useCurrentBook = create((set) =>{

    return {
        book : {
            title: "",
            author: "",
            price: 0
        },
    // book을 교체할 수 있오록
    // setter를 이용하여 함수를 만들어 주세요
        // zustand의 set 또한 userState처럼 함수형 업데이트 ok
        // -> prev값을 기억한다.
        setBook : (newBook) => set({book: newBook}),
        setBook2 : (newBook) => set((prev) => {
            return {
                ...prev,
                book : newBook
            }
        }),

        //  set을 써서 전역상태인 book의 필드
        // 일부만 업데이트 가능할까?
    }


})