import { useQuery } from "@tanstack/react-query"
import axios from "axios";


export default function ReactQuery01() {

    // js에서 비구조할당시 
    const sample = {
        a: 1,
        b: 2
    }
    // a를 aa라고 부르겠다, b를 bb라고 부르겠다
    const {a: aa, b: bb} = sample;

    const {
        data: products, // get요청 결과 data as  products - data 를 products로 불려라
        error, // error 객체
        isLoading, // 데이터 요청만 간 경우(응답오는 동안)
        isError, // 에러 여부
    } = useQuery({
        // get요청 결과를 key-value형태로 전역 저장
        // 전역저장소에서 key로 조회
        // 다른컨포넌트에서 같은 key로 저장시, get요청 안하고 재 사용 - 캐싱 기능
        //  getAllProduct 컨트롤러를 적어주는게 좋다.
        queryKey: ["getAllProduct"],
        // api 요청함수를 정의
        queryFn: async () => {
            const url = "http://localhost:8080/product/all";
            const response = await axios.get(url);
            return response.data;
        },
        // 선택옵션들
        staleTime: 0, // 데이터 신선도 설정
        // A -> B -> C
        // B가 A의 요청결과를 필요로 할때 !!A의 요청결과
        enabled: true, // false면 수도으로만  실행
        retry: 3, // 실패시 재시도 횟수
        gcTime: 5 * 60 * 1000 // 캐시 메모리 보관시간 기본 5분
    });

    if (isLoading) {
        return (
            <div>로딩 중입니다....</div>
        )
    }

  return (
    <div>
        <h1>상품목록</h1>
        <table>
            <thead>
                <tr>
                    <th>번호</th>
                    <th>상품명</th>
                    <th>가격</th>
                </tr>
            </thead>
            <tbody>
                {
                    // products undifind 일때 products? 해줌
                   // products.map((p) =>{  일때 
                   /*
                   if (isLoading) {
         return (
            <div>로딩 중입니다....</div>
        )
    }
                   */
                    products?.map((p) =>{
                        return (
                            <tr key={p.id}>
                                <td>{p.id}</td>
                                <td>{p.name}</td>
                                <td>{p.price}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
