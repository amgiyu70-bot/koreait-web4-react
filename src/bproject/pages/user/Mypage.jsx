import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../stores/authStore";
import { getMember, getOrderList } from "./js/userQuery";
import { AiFillMoneyCollect } from "react-icons/ai";
export default function Mypage() {
    const {mbID, mbName} = useAuthStore();
    const {data: mem} = getMember(mbID);  

    const {logout} = useAuthStore();
    const  navigate = useNavigate();

    const {data: item, isLoing, isError, error} = getOrderList(mbID, 1, 5);     

    //console.log(item);

	const handleLogout = () => {
		logout();
		navigate("/") // 홈화면으로 
	}

    const state = new Array();
    state["주문"] = "status_01";
    state["입급"] = "status_02";
    state["준비"] = "status_03";
    state["완료"] = "status_04";
    state["배송"] = "status_05";
    state["취소"] = "status_06";
    state["반품"] = "status_06";
    state["품절"] = "status_06";
    return (
<div id="container">
    {/* .shop-content 시작 { */}
    <div className="shop-content">
        <div id="wrapper_title">마이페이지</div>
        {/* 마이페이지 시작 { */}
        <div id="smb_my">

        {/* 회원정보 개요 시작 { */}
        <section id="smb_my_ov">
            <h2>회원정보 개요</h2>
            
            <div className="smb_me">
                <strong className="my_ov_name">{mem?.mb_name}</strong><br />
                <Link to="/regedit"><button className="btn02">정보수정</button></Link> &nbsp;
                <button onClick={handleLogout} className="btn01">로그아웃</button>
            </div>
            
            <ul id="smb_private">
                <li>
                    <a href="javascript:void(0)"  className="win_point">
                        <AiFillMoneyCollect size={18} /> 포인트
                        <strong>{parseInt(mem?.mb_point).toLocaleString()}</strong>
                    </a>
                </li>
            </ul>
            
            <h3>내정보</h3>
            <dl className="op_area">
                <dt>연락처</dt>
                <dd>{mem?.mb_tel}</dd>
                <dt>E-Mail</dt>
                <dd>{mem?.mb_email}</dd>
                <dt>최종접속일시</dt>
                <dd>{mem?.mb_today_login}</dd>
                <dt>회원가입일시</dt>
                <dd>{mem?.mb_datetime}</dd>
                <dt id="smb_my_ovaddt">주소</dt>
                <dd id="smb_my_ovaddd">({mem?.mb_zip}) {mem?.mb_addr1} {mem?.mb_addr2}</dd>
            </dl>           
        </section>
        {/* } 회원정보 개요 끝 */}

        <div id="smb_my_list">
            {/* 최근 주문내역 시작 { */}
            <section id="smb_my_od">
                <h2>주문내역조회</h2>                
                {/* 주문 내역 목록 시작 { */}
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
                        <td><span className={ state[o_state]}>{o_state}</span></td>
                    </tr>)
                    })}

                        </tbody>
                    </table>
                </div>
                {/* } 주문 내역 목록 끝 */}	
                <div className="smb_my_more">
                    <Link to="/orderlist">더보기</Link>
                </div>
            </section>
            {/* } 최근 주문내역 끝 */}       
           
        </div>
        </div>  
        {/* } 마이페이지 끝 */}
    </div>  
    {/* } .shop-content 끝 */}
</div>
  )
}
