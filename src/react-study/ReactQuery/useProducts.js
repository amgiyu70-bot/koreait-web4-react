// 코드 분리
// => 아토믹 컨포넌트
// 1. 로직 (return 이전코드)은 커스텀 훅들을 js파일로 분리
// 2. return이후 코드 -> 여러컨포넌트
// 여러컨포넌트 !== 여러 jsx파일

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";


// 커스텀 훅
// useQuery 코드를 js 파일로 분리
export const useSearchProducts = (nameKeyword) => {

    const { data, 
        isLoading,
        isError,
        error} = useQuery({
        // 컨트롤러 이름, 쿼리 스트링 다 넣어줘도 됨 (예 nameKeyword)
        // 컨트롤러 이름, userId or contentId
        queryKey: ["searchProducts", nameKeyword],
        queryFn: async () => {
            const url = "http://localhost:8080/product/search";
            const res = await axios.get(url, {
                params: {nameKeyword: nameKeyword}
            });
            return res.data;

        },
        enabled: !!nameKeyword // 검색어가 빈값이 아닐경우만 get요청
    });

    return [data, isLoading, isError, error];

}

// 상품다건 등록
export const useAddBulkProducts = () => {
    //  생성 X, 부모컴포넌트에 있는 client를 참조
    const queryClient = useQueryClient();

    // get요청 이외에 요청의 주도귄은 내가 가짐
    // useMutation은 정의만 되어있고 실제로 호출하려면 umtate() 로 함
    // mutate가 mutationFn 이다.
   return useMutation({
        mutationFn: async (products) => {
            const url = "http://localhost:8080/product/add/bulk";
            const res = await axios.post(url, products);
            return res.data;

        },
        // 성공시 실행할 함수 정의
        onSuccess: () => {
            // productsㄹ르 포함한 모든  key 전역데이터들이
            // 무효화 (stale(상한)상태) -> get요청 일어남
            queryClient.invalidateQueries({
                // 무효화할 key가 부분일치만 해도 무효화
                queryKey: ["getAllProduct"]
            })

        },
        // 에러시 실행할 함수
        onError: () => {
            console.log("에러 발생!");
        }
    });
}