import { useState } from "react";
import { useAuthStore } from "../../stores/authStore";
import { getOrderList } from "./js/userQuery";
import { Link } from "react-router-dom";

export default function OrderList() {
    
    const {mbID, mbName} = useAuthStore();
    const [page, setPage] = useState(1); 

    
	
	const pageList = (v) => {
		setPage(v);
	}

    const {data: item, isLoing, isError, error} = getOrderList(mbID, page, 0); 
	const total = (item && item?.mode[0]?.total> 0) ? item?.mode[0]?.total:0;
	const total_page = (item && item?.mode[0]?.total_page> 0)? item?.mode[0]?.total_page: 0;

	if (isLoing) {
		return <h1>로딩중</h1>
	}

	if (isError) {
		console.log(error.message);
		return <h1>에러발생</h1>
	}

	const results = [];
	for ( let i = 1; i <= total_page; i++)   {
		
		if (i===page) {
				results.push( 
			<strong class="pg_current">{i}</strong>                
			);
		} else {
			results.push( <span class="pg_page fcolor02 cusorP"  onClick={() => pageList(i)}>{i}</span>);
		}

	}

    return (
<div id="container">
    <div className="shop-content">
        <div id="wrapper_title">주문내역조회</div> 
        <div id="sod_v">
            <div className="tbl_head03 tbl_wrap">
                <table>
                    <thead>
                        <tr>
                            <th scope="col">주문서번호</th>
                            <th scope="col">주문일시</th>
                            <th scope="col">상품수</th>
                            <th scope="col">주문금액</th>
                            <th scope="col">입금액</th>
                            <th scope="col">미입금액</th>
                            <th scope="col">상태</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                        item && item?.mode[0]?.total === 0
                        ? <tr><td colspan="7"><p class="sct_noitem">등록된 상품이 없습니다.</p></td></tr>
                        :
                        item?.data?.map((it, id) =>{	
                        const {o_id, o_datetime, o_order_count, o_total_price, o_state} = it;
                        
                        let inPrice = o_state=='주문' ? 0:parseInt(o_total_price).toLocaleString();
                        let noPrice = o_state=='주문' ? parseInt(o_total_price).toLocaleString():0;
                        return(	
                        <tr>
                            <td>
                                <Link to={`/orderview/${o_id}`}>{o_id}</Link>
                            </td>
                            <td>{o_datetime}</td>
                            <td className="td_numbig">{o_order_count}</td>
                            <td className="td_numbig text_right">{parseInt(o_total_price).toLocaleString()}원</td>
                            <td className="td_numbig text_right">{inPrice}원</td>
                            <td className="td_numbig text_right">{noPrice}원</td>
                            <td><span className="status_01">{o_state}</span></td>
                        </tr>)
                         })}

                    </tbody>
                </table>
            </div>

            {
         total_page> 1     
        ?   <nav className="pg_wrap">
            <span className="pg">
                <span className="pg_page pg_start cusorP" onClick={() => pageList(1)}>처음</span>
                {results}
                 <span className="pg_page pg_end cusorP"  onClick={() => pageList(total_page)}>맨끝</span>
            </span>
        </nav>
       
        : ""
          }  
        <div id="sct_thtml"></div>
        </div>

    </div>
</div>
    )
}
