
import {Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { getOrder, getOrderCancel, getOrderDtail } from "./js/userQuery";
import { useAuthStore } from "../../stores/authStore";
import noImage from "../../img/no_image.gif";
import { useState } from "react";
import parse from 'html-react-parser';

export default function Orderview() {    
    const {id} = useParams();
    const nav = useNavigate(); 
    const {mbID, mbName} = useAuthStore();
    const [close, setClose] = useState(0);
    
    const location = useLocation();
    const reData = location.state;    
    let times = (reData?.times)? reData?.times: "";  

    const {data: item, isLoing, isError, error} = getOrderDtail(mbID, id, times); 
    const {data: od} = getOrder(mbID, id, times);  
    
    if (item && item?.length===0) {
        toast.error("해상 경로가 잘못 되었습니다.");
        nav("/");
        //console.log(item);
    }
    
    const dataToPass = { times: Date.now() };
    const clickCancel = async (o_id) => {
        if (window.confirm('정말 취소 하시겠습니까? ')) {
            const jsonData = {
                mode: 'cancle'
                ,mb_id: mbID
                ,o_id: o_id
            };

            try {
                const response = await getOrderCancel(jsonData);

                if (response?.error!=0) {
                    toast.error(response?.msg);
                } else {
                    toast.success(response?.msg);
                }
                
                 nav(`/orderview/${id}`,  { state: dataToPass });

            } catch(error) {
                toast.error("실행 에러");
            }
        }
    }

    return (
<div id="container">
    {/* .shop-content 시작 */}
    <div className="hop-content">          
        {/* 주문상세내역 시작 */}
        <div id="sod_fin">
            <div id="sod_fin_no">주문번호 <strong>{id}</strong></div>
            <section id="sod_fin_list">
                <h2>주문하신 상품</h2>                            
                <div class="tbl_head03 tbl_wrap">
                    <table>
                        <thead>
                            <tr className="th_line">
                                <th scope="col" id="th_itname">상품명</th>
                                <th scope="col" id="th_itqty">총수량</th>
                                <th scope="col" id="th_itprice">판매가</th>
                                <th scope="col" id="th_itpt">포인트</th>
                                <th scope="col" id="th_itsd">배송비</th>
                                <th scope="col" id="th_itsum">소계</th>
                                <th scope="col" id="th_itst">상태</th>
                            </tr>
                        </thead>
                        <tbody>
                        {                                
                        item && item.length === 0
                        ? ""                    
                        :
                        item?.map((it, idx) =>{
                            const {it_id, it_name, od_qty, od_price, od_point, od_delivery_price, od_status, it_img1} = it;

                            let sPrice = (parseInt(od_price)*parseInt(od_qty)) + parseInt(od_delivery_price);
                        return(
                            <tr>
                                <td headers="th_itopt" className="td_prd">
                                    <div className="sod_img"><img src={it_img1? `http://gnbiz8888.liodesign.kr/react/upload/${it_img1}`:noImage} width="55" height="55" alt="" /></div>
                                    <div className="sod_name">
                                        <Link to={`/temview/${it_id}`}>{it_name}</Link><br />
                                        <br /><br />
                                    </div>
                                </td>
                                <td headers="th_itqty" className="td_mngsmall">{od_qty}</td>
                                <td headers="th_itprice" className="td_numbig text_right">{parseInt(od_price).toLocaleString()}</td>
                                <td headers="th_itpt" className="td_numbig text_right">{parseInt(od_point).toLocaleString()}</td>
                                <td headers="th_itsd" className="td_dvr">{parseInt(od_delivery_price).toLocaleString()}</td>
                                <td headers="th_itsum" className="td_numbig text_right">{sPrice.toLocaleString()}</td>
                                <td headers="th_itst" className="td_mngsmall">{od_status}</td>
                            </tr>)
                            })			
                        }
                        </tbody>
                    </table>
                </div>
            
            <div id="sod_sts_wrap">
                <button type="button" id="sod_sts_explan_open" class="btn_frmline" onClick={() =>setClose(1)}>상태설명보기</button>
                <div id="sod_sts_explan1" className={close===0? '_hidden':''}>
                    <dl id="sod_fin_legend">
                        <dt>주문</dt>
                        <dd>주문이 접수되었습니다.
                        </dd><dt>입금</dt>
                        <dd>입금(결제)이 완료 되었습니다.
                        </dd><dt>준비</dt>
                        <dd>상품 준비 중입니다.
                        </dd><dt>배송</dt>
                        <dd>상품 배송 중입니다.
                        </dd><dt>완료</dt>
                        <dd>상품 배송이 완료 되었습니다.
                    </dd></dl>
                    <button type="button" id="sod_sts_explan_close" class="btn_frmline" onClick={() =>setClose(0)}>상태설명닫기</button>
                </div>
            </div>
            </section>
            <div className="sod_left">
                <h2>결제/배송 정보</h2>
                
                <section id="sod_fin_orderer">
                    <h3>주문하신 분</h3>

                    <div class="tbl_head01 tbl_wrap">
                        <table>                        
                            <tbody>
                                <tr>
                                    <th scope="row">이 름</th>
                                    <td>{od?.o_name}</td>
                                </tr>
                                <tr>
                                    <th scope="row">전화번호</th>
                                    <td>{od?.o_tel}</td>
                                </tr>
                                <tr>
                                    <th scope="row">핸드폰</th>
                                    <td>{od?.o_hp}</td>
                                </tr>
                                <tr>
                                    <th scope="row">주 소</th>
                                    <td>({od?.o_zip}) {od?.o_addr1} {od?.o_addr2}</td>
                                </tr>
                                <tr>
                                    <th scope="row">E-mail</th>
                                    <td>{od?.o_email}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
                <section id="sod_fin_receiver">
                    <h3>받으시는 분</h3>
                    <div class="tbl_head01 tbl_wrap">
                        <table>                
                            <tbody>
                                <tr>
                                    <th scope="row">이 름</th>
                                    <td>{od?.o_b_name}</td>
                                </tr>
                                <tr>
                                    <th scope="row">전화번호</th>
                                    <td>{od?.o_b_tel}</td>
                                </tr>
                                <tr>
                                    <th scope="row">핸드폰</th>
                                    <td>{od?.o_b_hp}</td>
                                </tr>
                                <tr>
                                    <th scope="row">주 소</th>
                                    <td>({od?.o_b_zip}) {od?.o_b_addr1} {od?.o_b_addr2}</td>
                                </tr>
                                <tr>
                                    <th scope="row">전하실 말씀</th>
                                    <td>
                                    {
                                    item && od?.o_memo
                                    ? parse(od?.o_memo)
                                    : ""
                                    }  </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <section id="sod_fin_dvr">
                    <h3>배송정보</h3>

                    <div class="tbl_head01 tbl_wrap">
                        <table>
                            <tbody>
                                <tr>
                                <td class="empty_table">아직 배송하지 않았거나 배송정보를 입력하지 못하였습니다.</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
            <div className="sod_right">
                <ul id="sod_bsk_tot2">
                    <li className="sod_bsk_dvr">
                        <span>주문총액</span>
                        <strong>{parseInt(od?.o_price).toLocaleString()} 원</strong>
                    </li>
                    <li className="sod_bsk_dvr">
                        <span>배송비</span>
                        <strong>{parseInt(od?.o_delivery_price).toLocaleString()} 원</strong>
                    </li>
                    <li className="sod_bsk_cnt">
                        <span>총계</span>
                        <strong>{parseInt(od?.o_total_price).toLocaleString()}  원</strong>
                    </li>
                    <li className="sod_bsk_point">
                        <span>적립포인트</span>
                        <strong>{parseInt(od?.o_total_point).toLocaleString()} 점</strong>
                    </li>
                    
                    <li className="sod_fin_tot"><span>총 구매액</span><strong>{parseInt(od?.o_total_price).toLocaleString()}원</strong></li>
                    {
                    od && od?.o_state=="주문"
                    ? <>
                    <li className="sod_fin_tot">
                        <span>미결제액</span>
                        <strong>{parseInt(od?.o_total_price).toLocaleString()}원</strong>
                    </li>            
                    <li id="alrdy" className="sod_fin_tot">
                        <span>결제액</span>
                        <strong>0원</strong>
                    </li>
                    </>
                    : ""
                    }
                </ul>
                
                <section id="sod_fin_pay">
                    <h3>결제정보</h3>
                    <ul>
                        <li>
                            <strong>주문번호</strong>
                            <span>{id}</span>
                        </li>
                        <li>
                            <strong>주문일시</strong>
                            <span>{od?.o_datetime}</span>
                        </li>
                        <li>
                            <strong>결제방식</strong>
                            <span>{od?.o_type}</span>
                        </li>
                        <li>
                            <strong>결제금액</strong>
                            <span>{od && od?.o_state=="주문"? "아직 입금되지 않았거나 입금정보를 입력하지 못하였습니다.": parseInt(od?.o_total_price).toLocaleString()}</span>
                        </li>
                        <li>
                            <strong>입금자명</strong>
                            <span>{od?.o_account_name}</span>
                        </li>
                        <li>
                            <strong>입금계좌</strong>
                            <span>OO은행 12345-67-89012 예금주명</span>
                        </li>
                        </ul>
                </section>
                {od?.o_state=="주문" && <section id="sod_fin_cancel">
                    <button type="button" className="sod_fin_c_btn" onClick={(e)=>clickCancel(id)}>주문 취소하기</button>
                </section>
                }               
            </div>                
        </div>
        {/* 주문상세내역 끝 */}
    </div>  
    {/* .shop-content 끝 */}
</div>
  )
}
