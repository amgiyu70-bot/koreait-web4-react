import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const instance = axios.create({
  //baseURL: "http://tour.amiweb.kr/react"
  baseURL: "http://gnbiz8888.liodesign.kr/react/admin"
});


// 최근 회원 리스트
export const getMemberMainAList = () => {
  return useQuery({
    queryKey: ["getMemberMain"],
    queryFn: async () => {
      const response = await instance.get('/mainMember');
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
        const response = await instance.get('/memberCnt');
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
        const response = await instance.get('/mainOrder');
        return response?.data;
        }
    });
}


// 최근 상품 문의 내역
export const getItemQnaMainList = () => {
  return useQuery({
        queryKey: ["getIemQna"],
        queryFn: async () => {
        const response = await instance.get('/mainItemQna');
        return response?.data;
        }
    });
}

// ------------------------
// 회원관리 STR
// ------------------------
// 회원 리스트
export const getMemberList = (stx, sfl, page, search) => {
 // console.log(`/memberList?stx=${stx}&sfl=${sfl}&page=${page}`);
  return useQuery({
    queryKey: ["getMemberList",  stx, page, search],
    queryFn: async () => {      
       const response = await instance.get(`/memberList?stx=${stx}&sfl=${sfl}&page=${page}`);

       console.log(`/memberList?stx=${stx}&sfl=${sfl}&page=${page}`);
       return response?.data;
    },
   // refetchOnMount: false,   // 마운트 시 재요청 금지
   // refetchOnWindowFocus: false, // 포커스 시 재요청 금지
   // refetchOnReconnect: false,   // 네트워크 재연결 시 재요청 금지,
    retry: 3
  });
}

//  회원가입 수정
const memberUpdateAPI = async (dto) => {    
   //console.log(dto);
    const response = await instance.post("/memUpdate", dto); 
    return response?.data;
}
export const memberUpdate = () => {
  const nav = useNavigate();
  return useMutation({
        mutationFn: memberUpdateAPI,
        onSuccess: (data) => {
            console.log(data);
                     
            const error = data.error;
            const msg = data.msg;
            const mb_id = data.mb_id;    
            const sfl = data.sfl;  
            const page = data.page;  
            const stx = data.stx;         
            const dataToPass = { mb_id: mb_id, sfl: sfl, page: page, stx: stx };  

            if (error!==0) { 
                toast.error(msg);
                throw new Error(msg);
            }   
            toast.success(msg); 

            nav('/admin/memberedit', { state: dataToPass });   

        },
        onError: (error) => {
           // console.log(error.message);
            const errorMsg = error?.response?.data;
           // console.log(errorMsg);
            // 토스트로 에러메세지
            toast.error(errorMsg);
        }
    })
}

// 커스텀 훅
// useQuery 코드를 js파일로 분리
export const getMemberSearch = (stx, sfl, page) => {
  const {data, isLoading, error, isError} = useQuery({
    // 컨트롤러 이름, 쿼리스트링변수들
    // 컨트롤러 이름, userId or contentId...
    queryKey: ["getMemberSearch", stx, sfl, page],
    queryFn: async () => {
      const url = "http://tour.amiweb.kr/react/admin/memberList";
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

// ------------------------
// 회원관리 END
// ------------------------ 


// ------------------------
// 상품 qna STR
// ------------------------
// 상품 qna 리스트
export const getItemQnaList = (stx, sfl, page, times) => {
  //console.log(`/admin/itemQnaList?stx=${stx}&sfl=${sfl}&page=${page}`);
  return useQuery({
    queryKey: ["getItemQnaList",stx, page, times],
    queryFn: async () => {      
       const response = await instance.get(`/itemQnaList?stx=${stx}&sfl=${sfl}&page=${page}`);
       return response?.data;
    },
    refetchOnMount: false,   // 마운트 시 재요청 금지
    refetchOnWindowFocus: false, // 포커스 시 재요청 금지
    refetchOnReconnect: false,   // 네트워크 재연결 시 재요청 금지,
    retry: 0
  }); 
}

// 상품 qna 정보
export const getItemQna = (iq_id) => {
    return useQuery({
        queryKey: ["getItemQna", iq_id],
        queryFn: async () => {          
        const response = await instance.get(`/itemQnaView?iq_id=${iq_id}`);
        return response?.data;
        },
        staleTime: 5 * 60 * 1000,  // 5분,
        retry: 1
    });
}

//  상품 qna 수정
const itemQnaUpdateAPI = async (dto) => {    
   //console.log(dto);
    const response = await instance.post("/itemQnaUpdate", dto); 
    return response?.data;
}
export const itemQnaUpdate = () => {
  const nav = useNavigate();
  return useMutation({
        mutationFn: itemQnaUpdateAPI,
        onSuccess: (data) => {
            console.log(data);                     
            const error = data.error;
            const msg = data.msg;
            const iq_id = data.iq_id;    
            const sfl = data.sfl;  
            const page = data.page;  
            const stx = data.stx;         
            const dataToPass = { iq_id: iq_id, sfl: sfl, page: page, stx: stx };  

            if (error!==0) { 
                toast.error(msg);
                throw new Error(msg);
            }   
            toast.success(msg); 

            nav('/admin/itemqnaedit', { state: dataToPass });   

        },
        onError: (error) => {
           // console.log(error.message);
            const errorMsg = error?.response?.data;
           // console.log(errorMsg);
            // 토스트로 에러메세지
            toast.error(errorMsg);
        }
    })
}

// 상품 qna 삭제
export const getItemQnaDel = async (dto) => {       
    const response = await instance.post("/itemQnaDel", dto); 
    return response?.data;
}
// ------------------------
// 상품 qna END
// -----------------------


// ------------------------
// 상품 후기 STR
// ------------------------
// 상품 후기 리스트
export const getItemUseList = (stx, sfl, page, times) => {
  return useQuery({
    queryKey: ["getItemUseList",stx, page, times],
    queryFn: async () => {      
       const response = await instance.get(`/itemUseList?stx=${stx}&sfl=${sfl}&page=${page}`);
       return response?.data;
    },
    refetchOnMount: false,   // 마운트 시 재요청 금지
    refetchOnWindowFocus: false, // 포커스 시 재요청 금지
    refetchOnReconnect: false,   // 네트워크 재연결 시 재요청 금지,
    retry: 0
  }); 
}


// 상품 후기 정보
export const getItemUse = (is_id) => {
    return useQuery({
        queryKey: ["getItemUse", is_id],
        queryFn: async () => {          
        const response = await instance.get(`/itemUseView?is_id=${is_id}`);
        return response?.data;
        },
        staleTime: 5 * 60 * 1000,  // 5분,
        retry: 1
    });
}

//  상품 후기 수정
const itemUseUpdateAPI = async (dto) => {    
   //console.log(dto);
    const response = await instance.post("/itemUseUpdate", dto); 
    return response?.data;
}
export const itemUseUpdate = () => {
  const nav = useNavigate();
  return useMutation({
        mutationFn: itemUseUpdateAPI,
        onSuccess: (data) => {
            console.log(data);                     
            const error = data.error;
            const msg = data.msg;
            const is_id = data.is_id;    
            const sfl = data.sfl;  
            const page = data.page;  
            const stx = data.stx;         
            const dataToPass = { is_id: is_id, sfl: sfl, page: page, stx: stx };  

            if (error!==0) { 
                toast.error(msg);
                throw new Error(msg);
            }   
            toast.success(msg); 

            nav('/admin/itemuseedit', { state: dataToPass });   

        },
        onError: (error) => {
           // console.log(error.message);
            const errorMsg = error?.response?.data;
           // console.log(errorMsg);
            // 토스트로 에러메세지
            toast.error(errorMsg);
        }
    })
}

// 상품 후기 삭제
export const getItemUseDel = async (dto) => {       
    const response = await instance.post("/itemUseDel", dto); 
    return response?.data;
}

// 상품 후기 확인
export const getItemUseState = async (dto) => {       
    const response = await instance.post("/itemUseState", dto); 
    return response?.data;
}
// ------------------------
// 상품 후기 END
// ------------------------


// ------------------------
// 상품 관리 STR
// ------------------------
// 상품 리스트
export const getItemList = (stx, sfl, page, times) => {
  return useQuery({
    queryKey: ["getItemList",stx, page, times],
    queryFn: async () => {      
       const response = await instance.get(`/itemList?stx=${stx}&sfl=${sfl}&page=${page}`);
       return response?.data;
    },
    refetchOnMount: false,   // 마운트 시 재요청 금지
    refetchOnWindowFocus: false, // 포커스 시 재요청 금지
    refetchOnReconnect: false,   // 네트워크 재연결 시 재요청 금지,
    retry: 0
  }); 
}

//  상품 수정
const itemAPI = async (dto) => {    
   //console.log(dto);
   
    const response = await instance.post("/itemUpdate", dto, {
        headers: {
            'Content-Type': 'multipart/form-data'
        },
    }); 


    //console.log(response?.data);
    
   //const response = await instance.post("/itemUpdate", dto); 
    return response?.data;
}
export const itemUpdate = () => {
  const nav = useNavigate();
  return useMutation({
        mutationFn: itemAPI,
        onSuccess: (data) => {
           // console.log(data);                     
            const error = data.error;
            const msg = data.msg;
            const it_id = data.it_id;    
            const sfl = data.sfl;  
            const page = data.page;  
            const stx = data.stx;         
            const dataToPass = { it_id: it_id, sfl: sfl, page: page, stx: stx, times: Date.now()};                  

            if (error!==0) { 
                toast.error(msg);
                throw new Error(msg);
            }   
            toast.success(msg); 

           // nav('/admin/itemform');   
           nav('/admin/itemedit', { state: dataToPass });

            

        },
        onError: (error) => {
           // console.log(error.message);
            const errorMsg = error.response?.data;
           // console.log(errorMsg);
            // 토스트로 에러메세지
            toast.error(errorMsg);
        }
    })
}


// 상품정보
export const getItem = (it_id, times) => {
    return useQuery({
        queryKey: ["getItem", it_id, times],
        queryFn: async () => {          
        const response = await instance.get(`/item?it_id=${it_id}`);
        return response?.data;
        },
       // staleTime: 5 * 60 * 1000,  // 5분,
        retry: 1
    });
}


// 상품 file
export const getItemFileDel = async (dto) => {       
    const response = await instance.post("/itemFileDel", dto); 

    //console.log(response?.data);
    return response?.data;
}


// 상품  삭제
export const getItemDel = async (dto) => {       
    const response = await instance.post("/itemDel", dto); 
    return response?.data;
}

// 상품  삭제
export const getItemSelUpdate = async (dto) => {       
    const response = await instance.post("/itemSelUpdate", dto); 
    return response?.data;
}


// 상품 상태 변경
export const getItemState = async (dto) => {       
    const response = await instance.post("/itemState", dto); 
    return response?.data;
}
// ------------------------
// 상품 관리 END
// ------------------------

// ------------------------
// 주문 STR
// ------------------------
// 주문 리스트
export const getOrderList = (stx, sfl, page, sdate, edate, status, settle, search) => {
  return useQuery({
    queryKey: ["getOrderList",stx, sfl, page, search],
    queryFn: async () => {      
       const response = await instance.get(`/orderList?stx=${stx}&sfl=${sfl}&page=${page}&sdate=${sdate}&edate=${edate}&status=${status}&settle=${settle}`);
       return response?.data;
    },
    refetchOnMount: false,   // 마운트 시 재요청 금지
    refetchOnWindowFocus: false, // 포커스 시 재요청 금지
    refetchOnReconnect: false,   // 네트워크 재연결 시 재요청 금지,
    retry: 0
  }); 
}

// 주문내용
export const getOrderDtails= (o_id, times) => {

    //console.log(mb_id);
    return useQuery({
        queryKey: ["getOrderDtails", o_id, times],
        queryFn: async () => {
        const response = await instance.get(`/orderDtails?o_id=${o_id}`);
        //console.log(response.data);
        return response.data;
        },
        // 데이터가 5분(300,000ms) 동안 stale(오래된 것) 상태로 변하지 않음
        staleTime: 5 * 60 * 1000, 
        // 캐시 데이터가 메모리에서 사라지는 시간(기본값 5분)을 길게 설정
        gcTime: 10 * 60 * 1000
    });
}

// 주문정보
export const getOrders = (o_id, times) => {
    return useQuery({
        queryKey: ["getOrder", o_id, times],
        queryFn: async () => {          
        const response = await instance.get(`/orders?o_id=${o_id}`);
        return response.data;
        },
        staleTime: 5 * 60 * 1000,  // 5분,
        retry: 0
    });
}

// 주문 취소 정보
export const getOrdersCancelLog = (o_id, times) => {
    return useQuery({
        queryKey: ["getOrdersCancelLog", o_id, times],
        queryFn: async () => {          
        const response = await instance.get(`/ordersCancelLog?o_id=${o_id}`);
        return response.data;
        },
        staleTime: 5 * 60 * 1000,  // 5분,
        retry: 0
    });
}


// 상품 주문 업데이트
export const getOrderUdate = async (dto) => {       
    const response = await instance.post("/orderUpdate", dto); 
    return response?.data;
}



export const orderUpdate = () => {
  const nav = useNavigate();
  return useMutation({
        mutationFn: getOrderUdate,
        onSuccess: (data) => {
            console.log(data);                     
            const error = data.error;
            const msg = data.msg;
            const o_id = data.o_id;    
            const sfl = data.sfl;  
            const page = data.page;  
            const stx = data.stx;         
            const dataToPass = { o_id: o_id, sfl: sfl, page: page, stx: stx, times: Date.now() };  

            if (error!==0) { 
                toast.error(msg);
                throw new Error(msg);
            }   
            toast.success(msg); 

            nav('/admin/orderform', { state: dataToPass });   

        },
        onError: (error) => {
           // console.log(error.message);
            const errorMsg = error?.response?.data;
           // console.log(errorMsg);
            // 토스트로 에러메세지
            toast.error(errorMsg);
        }
    })
}
// ------------------------
// 주문 END
// ------------------------



// ------------------------------
// 상품분류 STR
// ------------------------------
// 상품분류 목록
export const getCateList = (stx, sfl, page, mode) => {
  return useQuery({
    queryKey: ["getCateList",stx, page, mode],
    queryFn: async () => {      
       const response = await instance.get(`/categoryList?stx=${stx}&sfl=${sfl}&page=${page}`);
       return response?.data;
    },
    refetchOnMount: false,   // 마운트 시 재요청 금지
    refetchOnWindowFocus: false, // 포커스 시 재요청 금지
    refetchOnReconnect: false,   // 네트워크 재연결 시 재요청 금지,
    retry: 0
  }); 
}


//  상품분류 등록 수정
const categoryUpdateAPI = async (dto) => {    
   //console.log(dto);
    const response = await instance.post("/cateUpdate", dto); 
    return response?.data;
}
export const categoryUpdate = () => {
  const nav = useNavigate();
  return useMutation({
        mutationFn: categoryUpdateAPI,
        onSuccess: (data) => {
            console.log(data);

            const error = data.error;
            const msg = data.msg;

            if (error!==0) { 
                toast.error(msg);
                throw new Error(msg);
            }   
            toast.success(msg); 
            nav('/admin/category');   

        },
        onError: (error) => {
           // console.log(error.message);
            const errorMsg = error?.response?.data;
           // console.log(errorMsg);
            // 토스트로 에러메세지
            toast.error(errorMsg);
        }
    })
}

// 상품분류 보기
export const getCategory = (ca_id) => {
    return useQuery({
        queryKey: ["getCategory", ca_id],
        queryFn: async () => {          
        const response = await instance.get(`/cateView?ca_id=${ca_id}`);
        return response.data;
        },
        staleTime: 5 * 60 * 1000,  // 5분,
        retry: 1
    });
}

// 상품분류 삭제
export const getCateDel = async (dto) => {       
    const response = await instance.post("/cateDel", dto); 
    return response?.data;
}


// 카테고리 셀
export const getCategorySel = () => {
  return useQuery({
    queryKey: ["getCategorySel"],
    queryFn: async () => {
      const response = await instance.get('/categorySel');
      return response?.data;
    }
  });
}
// ------------------------------
// 상품분류 END
// ------------------------------