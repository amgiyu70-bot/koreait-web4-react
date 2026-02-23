import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const instance = axios.create({
  baseURL: "http://127.0.0.1/react"
});


// 최근 회원 리스트
export const getMemberMainAList = () => {
  return useQuery({
    queryKey: ["getMemberMain"],
    queryFn: async () => {
      const response = await instance.get('/admin/mainMember');
      return response?.data;
    },
    refetchOnMount: false,   // 마운트 시 재요청 금지
    refetchOnWindowFocus: false, // 포커스 시 재요청 금지
    refetchOnReconnect: false,   // 네트워크 재연결 시 재요청 금지,
    enabled: false, // 자동 실행 금지
    retry: 0
  });
}

// 전체 회원수
export const getMemberTotalCnt = () => {
    return useQuery({
        queryKey: ["getMemberTotal"],
        queryFn: async () => {
        const response = await instance.get('/admin/memberCnt');
        return response?.data;
        },
        // 데이터가 5분(300,000ms) 동안 stale(오래된 것) 상태로 변하지 않음
        staleTime: 5 * 60 * 1000, 
        // 캐시 데이터가 메모리에서 사라지는 시간(기본값 5분)을 길게 설정
        gcTime: 10 * 60 * 1000
    });
}


// 최근 주문내역
export const getOrderMainList = () => {
    return useQuery({
        queryKey: ["getOrderMain"],
        queryFn: async () => {
        const response = await instance.get('/admin/mainOrder');
        return response?.data;
        }
    });
}


// 최근 상품 문의 내역
export const getItemQnaMainList = () => {
  return useQuery({
        queryKey: ["getIemQna"],
        queryFn: async () => {
        const response = await instance.get('/admin/mainItemQna');
        return response?.data;
        }
    });
}


// 회원 리스트
export const getMemberList = (stx, sfl, page) => {
  console.log(stx);
  return useQuery({
    queryKey: ["getMemberList",stx, page],
    queryFn: async () => {      
       const response = await instance.get(`/admin/memberList?sfl=mb_id&stx=${stx}&sfl=${sfl}&page=${page}`);
       return response?.data;
    },
    refetchOnMount: false,   // 마운트 시 재요청 금지
    refetchOnWindowFocus: false, // 포커스 시 재요청 금지
    refetchOnReconnect: false,   // 네트워크 재연결 시 재요청 금지,
    retry: 0
  });
}
 


// 커스텀 훅
// useQuery 코드를 js파일로 분리
export const getMemberSearch = (stx, sfl, page) => {
  const {data, isLoading, error, isError} = useQuery({
    // 컨트롤러 이름, 쿼리스트링변수들
    // 컨트롤러 이름, userId or contentId...
    queryKey: ["getMemberSearch", stx, sfl, page],
    queryFn: async () => {
      const url = "http://127.0.0.1/react/admin/memberList";
      const res = await axios.get(url, {
        params: { stx: stx }
      });
      return res.data;
    },
    // 검색어가 빈값이 아닐때 get요청!
    //enabled: !!nameKeyword
  });

  return [data, isLoading, error, isError];
}



// 상품 qna 리스트
export const getItemQnaList = (stx, sfl, page) => {
  console.log(stx);
  return useQuery({
    queryKey: ["getItemQnaList",stx, page],
    queryFn: async () => {      
       const response = await instance.get(`/admin/itemQnaList?sfl=mb_id&stx=${stx}&sfl=${sfl}&page=${page}`);
       return response?.data;
    },
    refetchOnMount: false,   // 마운트 시 재요청 금지
    refetchOnWindowFocus: false, // 포커스 시 재요청 금지
    refetchOnReconnect: false,   // 네트워크 재연결 시 재요청 금지,
    retry: 0
  });
}