import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";



const instance = axios.create({
  baseURL: "http://gnbiz8888.liodesign.kr/react/user"
});

// 메인 상품 리스트
export const getMainItemlist = (iType, limit) => {
  return useQuery({
    queryKey: ["getMainItemlist", iType, limit],
    queryFn: async () => {
      const response = await instance.get(`/mainItemList?iType=${iType}&limit=${limit}`);
      return response?.data;
    },
    refetchOnMount: false,   // 마운트 시 재요청 금지
    refetchOnWindowFocus: false, // 포커스 시 재요청 금지
    refetchOnReconnect: false,   // 네트워크 재연결 시 재요청 금지,
    retry: 0
  });
}

// 상품 리스트
export const getItemList = (iType, page) => {
  //console.log(`/itemList?iType=${iType}&page=${page}`)
  return useQuery({
    queryKey: ["getItemList",iType, page],
    queryFn: async () => {      
       const response = await instance.get(`/itemList?iType=${iType}&page=${page}`);
       return response?.data;
    },
    refetchOnMount: false,   // 마운트 시 재요청 금지
    refetchOnWindowFocus: false, // 포커스 시 재요청 금지
    refetchOnReconnect: false,   // 네트워크 재연결 시 재요청 금지,
  }); 
}

// ---------------------
// 장바구니 STR
// ---------------------
export const cartUpdateAPI = async (dto) => {    
    //console.log(dto);
    const response = await instance.post("/cartUpdate", dto); 
    return response?.data;
}
// 장바구니 담기
export const cartUpdate = () => {
  return useMutation({
        mutationFn: cartUpdateAPI,
        onSuccess: (data) => {
            
          // 장바구니 카운트  
            document.getElementById("cartCnt").innerHTML=data.cartCnt;
            
            const error = data.error;
            const msg = data.msg;

            if (error!==0) { 
                toast.error(msg);
                throw new Error(msg);
            }   
            toast.success("장바구니에 담았습니다.");          

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


// 장바구니 카운트
export const getCartCnt = (mb_id) => {

    //console.log(mb_id);
    return useQuery({
        queryKey: ["getCartCnt", mb_id],
        queryFn: async () => {
        const response = await instance.get(`/cartCnt?mb_id=${mb_id}`);
       // console.log(response.data);
        return response.data;
        },
        refetchOnMount: false,   // 마운트 시 재요청 금지
        refetchOnWindowFocus: false, // 포커스 시 재요청 금지
        refetchOnReconnect: false,   // 네트워크 재연결 시 재요청 금지,
        retry: 0
    });
}


// 장바구니 리스트
export const getCartList= (mb_id, ct_direct, times) => {

    console.log(times);
    return useQuery({
        queryKey: ["getCartList", mb_id, ct_direct, times],
        queryFn: async () => {
        const response = await instance.get(`/cartList?mb_id=${mb_id}&ct_direct=${ct_direct}`);
        //console.log(response.data);
        return response.data;
        },
        staleTime: 0, // 즉시 stale 상태로 변경
        gcTime: 0,    // inactive 시 즉시 캐시에서 제거
    });
}


// 장바구니 삭제
export const getCartDel = async (dto) => {       
    const response = await instance.post("/cartDel", dto); 
    return response?.data;
}

// ---------------------
// 장바구니 END
// ---------------------


// 상품 내용
export const getItemView = (it_id) => {
  
       // console.log(`/itemView?it_id=${it_id}`);
    return useQuery({
        queryKey: ["getItemView", it_id],
        queryFn: async (t_id) => {          
        const response = await instance.get(`/itemView?it_id=${it_id}`);

       // console.log(it_id);
        return response.data;
        },
       // staleTime: 5 * 60 * 1000,  // 5분,
        //retry: 0
    });
}

// 회원 정보
export const getMember = (mb_id) => {
    return useQuery({
        queryKey: ["getMember", mb_id],
        queryFn: async () => {          
        const response = await instance.get(`/memView?mb_id=${mb_id}`);
        return response.data;
        },
        staleTime: 5 * 60 * 1000,  // 5분,
        retry: 1
    });
}

// 주문 하기
const orderUpdateAPI = async (dto) => {    
    console.log(dto);
    const response = await instance.post("/orderUpdate", dto); 
    return response?.data;
}

export const orderUpdate = () => {
    const nav = useNavigate();

  return useMutation({
        mutationFn: orderUpdateAPI,
        onSuccess: (data) => {
            //console.log(data);
                     
            const error = data.error;
            const msg = data.msg;
            const oId = data.oId;

            // 카트 카운트  
            document.getElementById("cartCnt").innerHTML=data.cartCnt;

            if (error!==0) { 
                toast.error(msg);
                throw new Error(msg);
            }   
            toast.success("정상적으로 주문 되었습니다."); 
            nav(`/orderview/${oId}`);         

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


// ---------------------
// 주문 관리 STR
// ---------------------
// 주문정보
export const getOrder = (mb_id, o_id, times) => {
    return useQuery({
        queryKey: ["getOrder", mb_id, o_id, times],
        queryFn: async () => {          
        const response = await instance.get(`/order?mb_id=${mb_id}&o_id=${o_id}`);
        return response.data;
        },
        staleTime: 5 * 60 * 1000,  // 5분,
        retry: 0
    });
}

// 주문내용
export const getOrderDtail= (mb_id, o_id, times) => {

    //console.log(mb_id);
    return useQuery({
        queryKey: ["getOrderDtail", mb_id, o_id, times],
        queryFn: async () => {
        const response = await instance.get(`/orderDtail?mb_id=${mb_id}&o_id=${o_id}`);
        //console.log(response.data);
        return response.data;
        },
        // 데이터가 5분(300,000ms) 동안 stale(오래된 것) 상태로 변하지 않음
        staleTime: 5 * 60 * 1000, 
        // 캐시 데이터가 메모리에서 사라지는 시간(기본값 5분)을 길게 설정
        gcTime: 10 * 60 * 1000
    });
}


// 주문 리스트
export const getOrderList = (mb_id, page, cLimit) => {
  return useQuery({
    queryKey: ["getOrderList",mb_id, page, cLimit],
    queryFn: async () => {      
       const response = await instance.get(`/orderList?mb_id=${mb_id}&page=${page}&cLimit=${cLimit}`);
       return response?.data;
    },
        // 데이터가 5분(300,000ms) 동안 stale(오래된 것) 상태로 변하지 않음
        staleTime: 5 * 60 * 1000, 
        // 캐시 데이터가 메모리에서 사라지는 시간(기본값 5분)을 길게 설정
        gcTime: 10 * 60 * 1000
  }); 
}


// 주문 취소
export const getOrderCancel = async (dto) => {       
    const response = await instance.post("/orderCancel", dto); 
    return response?.data;
}

// ---------------------
// 주문 관리 DND
// ---------------------


// 회원가입 수정
const memberUpdateAPI = async (dto) => {    
   // console.log(dto);
    const response = await instance.post("/memUpdate", dto); 
    return response?.data;
}
export const memberUpdate = () => {
    const nav = useNavigate();

  return useMutation({
        mutationFn: memberUpdateAPI,
        onSuccess: (data) => {
            //console.log(data);
                     
            const error = data.error;
            const msg = data.msg;
            const mode = data.mode;
            const mb_name = data.mb_name;            
            const dataToPass = { id: 1, mb_name: mb_name };   
            if (error!==0) { 
                toast.error(msg);
                throw new Error(msg);
            }   
            toast.success(msg); 

            if (mode=='ins') {
                nav('/regresult', { state: dataToPass });  
            } else {
                nav('/mypage');  
            }       

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

// ----------------------
// 상품 후기 STR
// ----------------------
// 상품 후기 카운트
export const getItemUseCnt = (it_id, times) => {
    return useQuery({
        queryKey: ["getItemUseCnt", it_id, times],
        queryFn: async () => {
        const response = await instance.get(`/itemUseCnt?it_id=${it_id}`);
        return response?.data;
        },
        // 데이터가 5분(300,000ms) 동안 stale(오래된 것) 상태로 변하지 않음
        staleTime: 5 * 60 * 1000, 
        // 캐시 데이터가 메모리에서 사라지는 시간(기본값 5분)을 길게 설정
        gcTime: 10 * 60 * 1000
    });
}

// 상품후기 내역
export const getItemUseList = (it_id, times) => {
    return useQuery({
        queryKey: ["getItemUseList", it_id, times],
        queryFn: async () => {
        const response = await instance.get(`/itemUseList?it_id=${it_id}`);
        return response?.data;
        },
        // 데이터가 5분(300,000ms) 동안 stale(오래된 것) 상태로 변하지 않음
        staleTime: 5 * 60 * 1000, 
        // 캐시 데이터가 메모리에서 사라지는 시간(기본값 5분)을 길게 설정
        gcTime: 10 * 60 * 1000
    });
}

export const itemUseUpdate2 = (dto) => {
    return useQuery({
        queryKey: ["itemUseUpdate2"],
        queryFn: async (dto) => {
        const response = await instance.post(`/itemUseList`);
        return response?.data;
        },
        // 데이터가 5분(300,000ms) 동안 stale(오래된 것) 상태로 변하지 않음
        staleTime: 5 * 60 * 1000, 
        // 캐시 데이터가 메모리에서 사라지는 시간(기본값 5분)을 길게 설정
        gcTime: 10 * 60 * 1000
    });
}

// 상품후기 등록 수정
const itemUseUpdateAPI = async (dto) => {    
   // console.log(dto);
    const response = await instance.post("/itemUseUpdate", dto); 
    return response?.data;
}
export const itemUseUpdate = () => {
    const nav = useNavigate();

    return useMutation({
        mutationFn: itemUseUpdateAPI,
        onSuccess: (data) => {                     
            const error = data.error;
            const msg = data.msg;
           
            if (error!==0) { 
                toast.error(msg);
                throw new Error(msg);
            }   
            toast.success(msg); 

                  },
        onError: (error) => {
           // console.log(error.message);
           // const errorMsg = error?.response?.data;
           // console.log(errorMsg);
            // 토스트로 에러메세지
            const errorMsg = "시스템 에러";
            toast.error(errorMsg);
        }
    })
}

// 상품 후기 삭제
export const getItemUseDel = async (dto) => {       
    const response = await instance.post("/itemUseDel", dto); 
    return response?.data;
}
// ----------------------
// 상품 후기 END
// ----------------------


// ----------------------
// 상품 QNA STR
// ----------------------
// 상품 QNA 카운트
export const getItemQnaCnt = (it_id, times) => {
    return useQuery({
        queryKey: ["getItemQnaCnt", it_id, times],
        queryFn: async () => {
        const response = await instance.get(`/itemQnaCnt?it_id=${it_id}`);
        return response?.data;
        },
        // 데이터가 5분(300,000ms) 동안 stale(오래된 것) 상태로 변하지 않음
        staleTime: 5 * 60 * 1000, 
        // 캐시 데이터가 메모리에서 사라지는 시간(기본값 5분)을 길게 설정
        gcTime: 10 * 60 * 1000
    });
}


// 상품 QNA 내역
export const getItemQnaList = (it_id, times) => {
    return useQuery({
        queryKey: ["getItemQnaList", it_id, times],
        queryFn: async () => {
        const response = await instance.get(`/itemQnaList?it_id=${it_id}`);
        return response?.data;
        },
        // 데이터가 5분(300,000ms) 동안 stale(오래된 것) 상태로 변하지 않음
        staleTime: 5 * 60 * 1000, 
        // 캐시 데이터가 메모리에서 사라지는 시간(기본값 5분)을 길게 설정
        gcTime: 10 * 60 * 1000
    });
}

// 상품후기 등록 수정
const itemQnaUpdateAPI = async (dto) => {    
   // console.log(dto);
    const response = await instance.post("/itemQnaUpdate", dto); 
    return response?.data;
}
export const itemQnaUpdate = () => {
    const nav = useNavigate();

    return useMutation({
        mutationFn: itemQnaUpdateAPI,
        onSuccess: (data) => {                     
            const error = data.error;
            const msg = data.msg;
           
            if (error!==0) { 
                toast.error(msg);
                throw new Error(msg);
            }   
            toast.success(msg); 

                  },
        onError: (error) => {
           // console.log(error.message);
           // const errorMsg = error?.response?.data;
           // console.log(errorMsg);
            // 토스트로 에러메세지
            const errorMsg = "시스템 에러";
            toast.error(errorMsg);
        }
    })
}

// 상품 후기 삭제
export const getItemQnaDel = async (dto) => {       
    const response = await instance.post("/itemQnaDel", dto); 
    return response?.data;
}
// ----------------------
// 상품 QNA END
// ----------------------