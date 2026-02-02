import ProductItem from "./ProductItem";
import { useGetAllProducts } from "./useProducts"


export default function ReactQuery05() {
  // axios 와 다른점 - 부모컨포넌트에서 상태를 저장 하지 않은
  // RQ가 전역으로 저장하고 있다
  const {data: product, isLoing, isError, error} = useGetAllProducts();
  if (isLoing) {
    return <h1>로딩중</h1>

  }

  if (isError) {
    console.log(error.message);
    return <h1>에러발생</h1>

  }
  return (
    <div>
        <table>
          <thead>
            <tr>
              <th>번호</th>
              <th>상품명</th>
              <th>가격</th>
              <th>수정/삭제</th>
            </tr>
          </thead>
          <tbody>
            {
              product?.map((p) =>{
                return <ProductItem key={p.id} product={p} />
              })
            }
          </tbody>
        </table>
    </div>
  )
}
