import React from 'react'

export default function Orderform() {
  return (
    <div id="container">

                        {/* .shop-content 시작 */}
        
<form name="forderform" id="forderform" method="post" action="http://127.0.0.1/shop/shop/orderformupdate.php" >
<div id="sod_frm" className="sod_frm_pc">
    {/* 주문상품 확인 시작 */}
    <div className="tbl_head03 tbl_wrap od_prd_list">
        <table id="sod_list">
        <thead>
        <tr>
            <th scope="col">상품명</th>
            <th scope="col">총수량</th>
            <th scope="col">판매가</th>
            <th scope="col">소계</th>
            <th scope="col">포인트</th>
            <th scope="col">배송비</th>
        </tr>
        </thead>
        <tbody>
        
        <tr>

            <td className="td_prd">
                <div className="sod_img"><img src="http://127.0.0.1/shop/data/item/1770986271/thumb-01jpg_80x80.jpg" width="80" height="80" alt="" /></div>
                <div className="sod_name">
                    <input type="hidden" name="it_id[0]" value="1770986271" />
                    <input type="hidden" name="it_name[0]" value="상품01" />
                    <input type="hidden" name="it_price[0]" value="10000" />
                    <input type="hidden" name="cp_id[0]"  />
                    <input type="hidden" name="cp_price[0]" value="0" />
                                        <b>상품01</b><div className="sod_opt"><ul>
<li>상품01 1개 (+0원)</li>
</ul></div>                    
                 </div>
            </td>
            <td className="td_num">1</td>
            <td className="td_numbig  text_right">10,000</td>
            <td className="td_numbig  text_right"><span className="total_price">10,000</span></td>
            <td className="td_numbig  text_right">0</td>
            <td className="td_dvr">선불</td>
        </tr>

                </tbody>
        </table>
    </div>

        {/* 주문상품 확인 끝*/}

    <div className="sod_left">
        <input type="hidden" name="od_price" value="10000" />
        <input type="hidden" name="org_od_price" value="10000" />
        <input type="hidden" name="od_send_cost" value="4000" />
        <input type="hidden" name="od_send_cost2" value="0" />
        <input type="hidden" name="item_coupon" value="0" />
        <input type="hidden" name="od_coupon" value="0" />
        <input type="hidden" name="od_send_coupon" value="0" />
        <input type="hidden" name="od_goods_name" value="상품01" />
		<input type="hidden" name="req_tx" value="pay" />
		<input type="hidden" name="site_cd" value="T0000" />
		<input type="hidden" name="site_name" value="회사명" />
		<input type="hidden" name="def_site_cd" value="T0000" />
		<input type="hidden" name="pay_method"  />
		<input type="hidden" name="ordr_idxx" value="2026021417083982" />
		<input type="hidden" name="good_name" value="상품01" />
		<input type="hidden" name="good_mny" value="0" />

    


        {/* 주문하시는 분 입력 시작 */}
        <section id="sod_frm_orderer">
            <h2>주문하시는 분</h2>

            <div className="tbl_frm01 tbl_wrap">
                <table>
                <tbody>
                <tr>
                    <th scope="row"><label htmlFor="od_name">이름<strong className="sound_only"> 필수</strong></label></th>
                    <td><input type="text" name="od_name"  id="od_name" className="frm_input required"  /></td>
                </tr>

                
                <tr>
                    <th scope="row"><label htmlFor="od_tel">전화번호<strong className="sound_only"> 필수</strong></label></th>
                    <td><input type="text" name="od_tel"  id="od_tel"  className="frm_input required" maxLength={20} /></td>
                </tr>
                <tr>
                    <th scope="row"><label htmlFor="od_hp">핸드폰</label></th>
                    <td><input type="text" name="od_hp"  id="od_hp" className="frm_input" maxLength={20} /></td>
                </tr>
                <tr>
                    <th scope="row">주소</th>
                    <td>
                        <label htmlFor="od_zip" className="sound_only">우편번호<strong className="sound_only"> 필수</strong></label>
                        <input type="text" name="od_zip"  id="od_zip"  className="frm_input required" size="8" maxLength={6} placeholder="우편번호" />
                        <button type="button" className="btn_address" >주소 검색</button><br />
                        <input type="text" name="od_addr1"  id="od_addr1"  className="frm_input frm_address required" size="60" placeholder="기본주소" />
                        <label htmlFor="od_addr1" className="sound_only">기본주소<strong className="sound_only" > 필수</strong></label><br />
                        <input type="text" name="od_addr2"  id="od_addr2" className="frm_input frm_address" size="60" placeholder="상세주소" />
                        <label htmlFor="od_addr2" className="sound_only">상세주소</label>
                        <br />
                        <input type="text" name="od_addr3"  id="od_addr3" className="frm_input frm_address" size="60"  placeholder="참고항목" />
                        <label htmlFor="od_addr3" className="sound_only">참고항목</label><br />
                        <input type="hidden" name="od_addr_jibeon"  />
                    </td>
                </tr>
                <tr>
                    <th ><label htmlFor="od_email">E-mail<strong className="sound_only"> 필수</strong></label></th>
                    <td><input type="text" name="od_email"  id="od_email"  className="frm_input required" size="35" maxLength={100} /></td>
                </tr>

                                </tbody>
                </table>
            </div>
        </section>
        {/* 주문하시는 분 입력 끝*/}

        {/* 받으시는 분 입력 시작 */}
        <section id="sod_frm_taker">
            <h2>받으시는 분</h2>

            <div className="tbl_frm01 tbl_wrap">
                <table>
                <tbody>
                                <tr>
                    <th scope="row">배송지선택</th>
                    <td>
						<div className="order_choice_place">
                        <input type="radio" name="ad_sel_addr" value="same" id="ad_sel_addr_same" />
						<label htmlFor="ad_sel_addr_same">주문자와 동일</label>
						<input type="radio" name="ad_sel_addr" value="new" id="od_sel_addr_new" />
						<label htmlFor="od_sel_addr_new">신규배송지</label>
						<a href="http://127.0.0.1/shop/shop/orderaddress.php" id="order_address" className="btn_frmline">배송지목록</a>						</div>
                    </td>
                </tr>
                                <tr>
                    <th scope="row"><label htmlFor="ad_subject">배송지명</label></th>
                    <td>
                        <input type="text" name="ad_subject" id="ad_subject" className="frm_input" maxLength={20} />
                        <input type="checkbox" name="ad_default" id="ad_default" value="1" />
                        <label htmlFor="ad_default">기본배송지로 설정</label>
                    </td>
                </tr>
                                <tr>
                    <th scope="row"><label htmlFor="od_b_name">이름<strong className="sound_only"> 필수</strong></label></th>
                    <td><input type="text" name="od_b_name" id="od_b_name"  className="frm_input required" maxLength={20} /></td>
                </tr>
                <tr>
                    <th scope="row"><label htmlFor="od_b_tel">전화번호<strong className="sound_only"> 필수</strong></label></th>
                    <td><input type="text" name="od_b_tel" id="od_b_tel"  className="frm_input required" maxLength={20} /></td>
                </tr>
                <tr>
                    <th scope="row"><label htmlFor="od_b_hp">핸드폰</label></th>
                    <td><input type="text" name="od_b_hp" id="od_b_hp" className="frm_input" maxLength={20} /></td>
                </tr>
                <tr>
                    <th scope="row">주소</th>
                    <td id="sod_frm_addr">
                        <label htmlFor="od_b_zip" className="sound_only">우편번호<strong className="sound_only"> 필수</strong></label>
                        <input type="text" name="od_b_zip" id="od_b_zip"  className="frm_input required" size="8" maxLength={6} placeholder="우편번호" />
                        <button type="button" className="btn_address" >주소 검색</button><br />
                        <input type="text" name="od_b_addr1" id="od_b_addr1"  className="frm_input frm_address required" size="60" placeholder="기본주소" />
                        <label htmlFor="od_b_addr1" className="sound_only">기본주소<strong> 필수</strong></label><br />
                        <input type="text" name="od_b_addr2" id="od_b_addr2" className="frm_input frm_address" size="60" placeholder="상세주소" />
                        <label htmlFor="od_b_addr2" className="sound_only">상세주소</label>
                        <br />
                        <input type="text" name="od_b_addr3" id="od_b_addr3"  className="frm_input frm_address" size="60" placeholder="참고항목" />
                        <label htmlFor="od_b_addr3" className="sound_only">참고항목</label><br />
                        <input type="hidden" name="od_b_addr_jibeon"  />
                    </td>
                </tr>
                <tr>
                    <th scope="row"><label htmlFor="od_memo">전하실말씀</label></th>
                    <td><textarea name="od_memo" id="od_memo"></textarea></td>
                </tr>
                </tbody>
                </table>
            </div>
        </section>
        {/* 받으시는 분 입력 끝*/}
    </div>

    <div className="sod_right">
        {/* 주문상품 합계 시작 */}
        <div id="sod_bsk_tot">
            <ul>
                <li className="sod_bsk_sell">
                    <span>주문</span>
                    <strong>10,000</strong>원
                </li>
                <li className="sod_bsk_coupon">
                    <span>쿠폰할인</span>
                    <strong id="ct_tot_coupon">0</strong>원
                </li>
                <li className="sod_bsk_dvr">
                    <span>배송비</span>
                    <strong>4,000</strong>원
                </li>
                <li className="sod_bsk_point">
                    <span>포인트</span>
                    <strong>0</strong>점
                </li>
               <li className="sod_bsk_cnt">
                    <span>총계</span>
                                        <strong id="ct_tot_price">14,000</strong>원
                </li>

            </ul>
        </div>
        {/* 주문상품 합계 끝*/}


        {/* 결제정보 입력 시작 */}
        
        <section id="sod_frm_pay">
            <h2>결제정보</h2>

            <div className="pay_tbl">
                <table>
                <tbody>
                                
                <tr>
                    <th>추가배송비</th>
                    <td><strong id="od_send_cost2">0</strong>원<br />(지역에 따라 추가되는 도선료 등의 배송비입니다.)</td>
                </tr>
                </tbody>
                </table>
            </div>
            <div id="od_tot_price">
                <span>총 주문금액</span>
                <strong className="print_price">14,000</strong>원
            </div>

            <div id="od_pay_sl">
				<div className="od_pay_buttons_el">
                <h3>결제수단</h3>
                <p id="sod_frm_pt_alert"><strong>무통장입금</strong> 이외의 결제 수단으로 결제하시는 경우 포인트를 적립해드리지 않습니다.</p><fieldset id="sod_frm_paysel"><legend>결제방법 선택</legend>
				<input type="radio" id="od_settle_bank" name="od_settle_case" value="무통장"/> 
				<label htmlFor="od_settle_bank" className="lb_icon bank_icon">무통장입금</label>
				<div id="settle_bank" style={{display: 'none'}}><label htmlFor="od_bank_account" className="sound_only">입금할 계좌</label>
				<input type="hidden" name="od_bank_account" value="OO은행 12345-67-89012 예금주명" />OO은행 12345-67-89012 예금주명
			<br /><label htmlFor="od_deposit_name">입금자명</label> 
			<input type="text" name="od_deposit_name" id="od_deposit_name" size="10" maxLength={20} /></div></fieldset>            </div>
        </div></section>
        {/* 결제 정보 입력 끝*/}

        
<div id="display_pay_button" className="btn_confirm">
    <input type="button" value="주문하기"  className="btn_submit" />
    <a href="javascript:history.go(-1);" className="btn01">취소</a>
</div>
<div id="display_pay_process" style={{display: 'none'}}>
    <img src="http://127.0.0.1/shop/shop/img/loading.gif" alt="" />
    <span>주문완료 중입니다. 잠시만 기다려 주십시오.</span>
</div>
            </div>

</div>
</form>

      </div>  
      
  )
}
