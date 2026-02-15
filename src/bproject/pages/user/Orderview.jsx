

export default function Orderview() {
  return (
    <div id="container">

                        {/* .shop-content 시작 */}
        <div className="hop-content">
           
            {/* 글자크기 조정 display:none 되어 있음 끝 */}
{/* 주문상세내역 시작 */}
<div id="sod_fin">
    <div id="sod_fin_no">주문번호 <strong>2026021421003646</strong></div>
    <section id="sod_fin_list">
        <h2>주문하신 상품</h2>

                
        <div class="tbl_head03 tbl_wrap">
			<table>
	            <thead>
	            <tr class="th_line">
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
	            	            	            <tr>
	                <td headers="th_itopt" class="td_prd">
	                	<div className="sod_img"><img src="http://127.0.0.1/shop/data/item/1770986271/thumb-01jpg_55x55.jpg" width="55" height="55" alt="" /></div>
	                	<div className="sod_name">
		                	<a href="http://127.0.0.1/shop/shop/item.php?it_id=1770986271">상품01</a><br />
		                	<div className="sod_opt">상품01</div>
	                	</div>
	                </td>
	                <td headers="th_itqty" class="td_mngsmall">2</td>
	                <td headers="th_itprice" class="td_numbig text_right">10,000</td>
	                <td headers="th_itpt" class="td_numbig text_right">0</td>
	                <td headers="th_itsd" class="td_dvr">선불</td>
	                <td headers="th_itsum" class="td_numbig text_right">20,000</td>
	                <td headers="th_itst" class="td_mngsmall">주문</td>
	            </tr>
	            	            </tbody>
            </table>
        </div>
        
        <div id="sod_sts_wrap">
            <span className="ound_only">상품 상태 설명</span>
            <button type="button" id="sod_sts_explan_open" class="btn_frmline">상태설명닫기</button>
            <div id="sod_sts_explan" style={{display: 'block'}}>
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
                <button type="button" id="sod_sts_explan_close" class="btn_frmline">상태설명닫기</button>
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
                    <td>홍길삼</td>
                </tr>
                <tr>
                    <th scope="row">전화번호</th>
                    <td>010-1111-1111</td>
                </tr>
                <tr>
                    <th scope="row">핸드폰</th>
                    <td>010-1111-1111</td>
                </tr>
                <tr>
                    <th scope="row">주 소</th>
                    <td>(47215) 부산 부산진구 거제대로 1, 11111 (양정동)</td>
                </tr>
                <tr>
                    <th scope="row">E-mail</th>
                    <td>chk012@test.com</td>
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
                    <td>홍길삼</td>
                </tr>
                <tr>
                    <th scope="row">전화번호</th>
                    <td>010-1111-1111</td>
                </tr>
                <tr>
                    <th scope="row">핸드폰</th>
                    <td>010-1111-1111</td>
                </tr>
                <tr>
                    <th scope="row">주 소</th>
                    <td>(47215) 부산 부산진구 거제대로 1, 11111 (양정동)</td>
                </tr>
                                <tr>
                    <th scope="row">전하실 말씀</th>
                    <td>전하실말씀</td>
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
                <strong>20,000 원</strong>
            </li>
                                                <li className="sod_bsk_dvr">
                <span>배송비</span>
                <strong>3,000 원</strong>
            </li>
                                                            <li className="sod_bsk_cnt">
                <span>총계</span>
                <strong>23,000 원</strong>
            </li>
            <li className="sod_bsk_point">
                <span>적립포인트</span>
                <strong>0 점</strong>
            </li>
            
            <li className="sod_fin_tot"><span>총 구매액</span><strong>23,000원</strong></li>
            <li className="sod_fin_tot"><span>미결제액</span>
<strong>23,000원</strong></li>            <li id="alrdy" className="sod_fin_tot">
            	<span>결제액</span>
                <strong>0원</strong>
                            </li>
        </ul>
        
        <section id="sod_fin_pay">
            <h3>결제정보</h3>
            <ul>
	            <li>
	                <strong>주문번호</strong>
	                <span>2026021421003646</span>
	            </li>
	            <li>
	                <strong>주문일시</strong>
	                <span>2026-02-14 21:05:29</span>
	            </li>
	            <li>
	                <strong>결제방식</strong>
	                <span>무통장</span>
	            </li>
	            <li>
	                <strong>결제금액</strong>
	                <span>아직 입금되지 않았거나 입금정보를 입력하지 못하였습니다.</span>
	            </li>
	            	            <li>
	                <strong>입금자명</strong>
	                <span>홍길삼</span>
	            </li>
	            <li>
	                <strong>입금계좌</strong>
	                <span>OO은행 12345-67-89012 예금주명</span>
	            </li>
	                        </ul>
        </section>

        <section id="sod_fin_cancel">
                        <button type="button" className="sod_fin_c_btn">주문 취소하기</button>
			<div id="sod_cancel_pop">	
	            <div id="sod_fin_cancelfrm">
	            	<h2>주문취소</h2>
	                <form method="post" action="./orderinquirycancel.php" >
	                <input type="hidden" name="od_id" value="2026021421003646" />
	                <input type="hidden" name="token" value="55df828e5d380980425c5f43ff2ce64c" />
	
	                <label htmlFor="cancel_memo" className="ound_only">취소사유</label>
	                <input type="text" name="cancel_memo" id="cancel_memo" required="" class="frm_input required" size="40" maxLength={100} placeholder="취소사유" />
	                <input type="submit" value="확인" class="btn_frmline" />
	                </form>
	                <button className="sod_cls_btn"><span className="ound_only">닫기</span><i class="fa fa-times" aria-hidden="true"></i></button>
		        </div>
		        <div className="sod_fin_bg"></div>
			</div>
			

                    </section>
    </div>

    
</div>
{/* 주문상세내역 끝 */}



        </div>  {/* .shop-content 끝 */}
	</div>
  )
}
