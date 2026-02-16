

export default function OrderForm({title}) {
  return (
    <>
	<h1 id="container_title">{title}</h1>
    <div className="container_wr">
        <section id="anc_sodr_list">
            <h2 className="h2_frm">주문상품 목록</h2>
            <ul className="anchor">
                <li><a href="#anc_sodr_list">주문상품 목록</a></li>
                <li><a href="#anc_sodr_pay">주문결제 내역</a></li>
                <li><a href="#anc_sodr_chk">결제상세정보 확인</a></li>
                <li><a href="#anc_sodr_paymo">결제상세정보 수정</a></li>
                <li><a href="#anc_sodr_memo">상점메모</a></li>
                <li><a href="#anc_sodr_orderer">주문하신 분</a></li>
                <li><a href="#anc_sodr_taker">받으시는 분</a></li>
            </ul>
            <div className="local_desc02 local_desc">
                <p>
                    현재 주문상태 <strong>주문</strong>
                    |
                    주문일시 <strong>2026-02-14 21:05 (토)</strong>
                    |
                    주문총액 <strong>23,000</strong>원
                </p>
            </div>

            <form name="frmorderform" method="post" action="./orderformcartupdate.php">
                <input type="hidden" name="od_id" value="2026021421003646" />
                <input type="hidden" name="mb_id" value="chk01" />
                <input type="hidden" name="od_email" value="chk012@test.com" />
                <input type="hidden" name="sort1" value="od_id" />
                <input type="hidden" name="sort2" value="desc" />
                <input type="hidden" name="sel_field" value="od_id" />
                <input type="hidden" name="search" value="" />
                <input type="hidden" name="page" value="1" />
                <input type="hidden" name="pg_cancel" value="0" />

                <div className="tbl_head01 tbl_wrap">
                    <table>
                        <caption>주문 상품 목록</caption>
                        <thead>
                            <tr>
                                <th scope="col">상품명</th>
                                <th scope="col">
                                    <label htmlFor="sit_select_all" className="sound_only">주문 상품 전체</label>
                                    <input type="checkbox" id="sit_select_all" />
                                </th>
                                <th scope="col">옵션항목</th>
                                <th scope="col">상태</th>
                                <th scope="col">수량</th>
                                <th scope="col">판매가</th>
                                <th scope="col">소계</th>
                                <th scope="col">쿠폰</th>
                                <th scope="col">포인트</th>
                                <th scope="col">배송비</th>
                                <th scope="col">포인트반영</th>
                                <th scope="col">재고반영</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td rowSpan="1" className="td_left">
                                    <a href="./itemform.php?w=u&amp;it_id=1770986271"><img src="http://127.0.0.1/shop/data/item/1770986271/thumb-01jpg_50x50.jpg" width="50" height="50" alt="" /> 상품01</a>
                                </td>
                                <td rowSpan="1" className="td_chk">
                                    <label htmlFor="sit_sel_0" className="sound_only">상품01 옵션 전체선택</label>
                                    <input type="checkbox" id="sit_sel_0" name="it_sel[]" />
                                </td>
                                <td className="td_left">
                                    <label htmlFor="ct_chk_0" className="sound_only">상품01</label>
                                    <input type="checkbox" name="ct_chk[0]" id="ct_chk_0" value="0" className="sct_sel_0" />
                                    <input type="hidden" name="ct_id[0]" value="4" />
                                    상품01
                                </td>
                                <td className="td_mngsmall">주문</td>
                                <td className="td_num">
                                    <label htmlFor="ct_qty_0" className="sound_only">상품01 수량</label>
                                    <input type="text" name="ct_qty[0]" id="ct_qty_0" value="2"  className="frm_input required" size="5" />
                                </td>
                                <td className="td_num_right ">10,000</td>
                                <td className="td_num_right">20,000</td>
                                <td className="td_num_right">0</td>
                                <td className=" td_num_right">0</td>
                                <td className="td_sendcost_by">선불</td>
                                <td className="td_mngsmall">아니오</td>
                                <td className="td_mngsmall">아니오</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="btn_list02 btn_list">
                    <p>
                        <input type="hidden" name="chk_cnt" value="1" />
                        <strong>주문 및 장바구니 상태 변경</strong>
                        <input type="submit" name="ct_status" value="주문"  className="btn_02 color_01" />
                        <input type="submit" name="ct_status" value="입금"  className="btn_02 color_02" />
                        <input type="submit" name="ct_status" value="준비"  className="btn_02 color_03" />
                        <input type="submit" name="ct_status" value="배송"  className="btn_02 color_04" />
                        <input type="submit" name="ct_status" value="완료"  className="btn_02 color_05" />
                        <input type="submit" name="ct_status" value="취소"  className="btn_02 color_06" />
                        <input type="submit" name="ct_status" value="반품"  className="btn_02 color_06" />
                        <input type="submit" name="ct_status" value="품절"  className="btn_02 color_06" />
                    </p>
                </div>

                <div className="local_desc01 local_desc">
                    <p>주문, 입금, 준비, 배송, 완료는 장바구니와 주문서 상태를 모두 변경하지만, 취소, 반품, 품절은 장바구니의 상태만 변경하며, 주문서 상태는 변경하지 않습니다.</p>
                    <p>개별적인(이곳에서의) 상태 변경은 모든 작업을 수동으로 처리합니다. 예를 들어 주문에서 입금으로 상태 변경시 입금액(결제금액)을 포함한 모든 정보는 수동 입력으로 처리하셔야 합니다.</p>
                </div>

            </form>


        </section>

        <div className="od_test_caution">주의) 이 주문은 테스트용으로 실제 결제가 이루어지지 않았으므로 절대 배송하시면 안됩니다.</div>

        <section id="anc_sodr_pay">
            <h2 className="h2_frm">주문결제 내역</h2>
            <ul className="anchor">
                <li><a href="#anc_sodr_list">주문상품 목록</a></li>
                <li><a href="#anc_sodr_pay">주문결제 내역</a></li>
                <li><a href="#anc_sodr_chk">결제상세정보 확인</a></li>
                <li><a href="#anc_sodr_paymo">결제상세정보 수정</a></li>
                <li><a href="#anc_sodr_memo">상점메모</a></li>
                <li><a href="#anc_sodr_orderer">주문하신 분</a></li>
                <li><a href="#anc_sodr_taker">받으시는 분</a></li>
            </ul>

            <div className="tbl_head01 tbl_wrap">
                <strong className="sodr_nonpay">미수금 23,000원</strong>

                <table>
                    <caption>주문결제 내역</caption>
                    <thead>
                        <tr>
                            <th scope="col">주문번호</th>
                            <th scope="col">결제방법</th>
                            <th scope="col">주문총액</th>
                            <th scope="col">배송비</th>
                            <th scope="col">포인트결제</th>
                            <th scope="col">총결제액</th>
                            <th scope="col">쿠폰</th>
                            <th scope="col">주문취소</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>2026021421003646</td>
                            <td className="td_paybybig">무통장</td>
                            <td className="td_numbig td_numsum">23,000원</td>
                            <td className="td_numbig">3,000원</td>
                            <td className="td_numbig">0점</td>
                            <td className="td_numbig td_numincome">0원</td>
                            <td className="td_numbig td_numcoupon">0원</td>
                            <td className="td_numbig td_numcancel">0원</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>

        <section className="">
            <h2 className="h2_frm">결제상세정보</h2>
            <ul className="anchor">
                <li><a href="#anc_sodr_list">주문상품 목록</a></li>
                <li><a href="#anc_sodr_pay">주문결제 내역</a></li>
                <li><a href="#anc_sodr_chk">결제상세정보 확인</a></li>
                <li><a href="#anc_sodr_paymo">결제상세정보 수정</a></li>
                <li><a href="#anc_sodr_memo">상점메모</a></li>
                <li><a href="#anc_sodr_orderer">주문하신 분</a></li>
                <li><a href="#anc_sodr_taker">받으시는 분</a></li>
            </ul>
            <form name="frmorderreceiptform" action="./orderformreceiptupdate.php" method="post" autocomplete="off">
                <input type="hidden" name="od_id" value="2026021421003646" />
                <input type="hidden" name="sort1" value="od_id" />
                <input type="hidden" name="sort2" value="desc" />
                <input type="hidden" name="sel_field" value="od_id" />
                <input type="hidden" name="search" value="" />
                <input type="hidden" name="page" value="1" />
                <input type="hidden" name="od_name" value="홍길삼" />
                <input type="hidden" name="od_hp" value="010-1111-1111" />
                <input type="hidden" name="od_tno" value="" />
                <input type="hidden" name="od_escrow" value="0" />
                <input type="hidden" name="od_pg" value="kcp" />

                <div className="compare_wrap">

                    <section id="anc_sodr_chk" className="compare_left">
                        <h3>결제상세정보 확인</h3>

                        <div className="tbl_frm01">
                            <table>
                                <caption>결제상세정보</caption>
                                <colgroup>
                                    <col className="grid_3" />
                                    <col />
                                </colgroup>
                                <tbody>
                                    <tr>
                                        <th scope="row">계좌번호</th>
                                        <td>OO은행 12345-67-89012 예금주명</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">무통장 입금액</th>
                                        <td>0원</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">입금자</th>
                                        <td>홍길삼</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">입금확인일시</th>
                                        <td>
                                            입금 확인일시를 체크해 주세요.
                                        </td>
                                    </tr>





                                    <tr>
                                        <th scope="row">주문금액할인</th>
                                        <td>0원</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">포인트</th>
                                        <td>0점</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">결제취소/환불액</th>
                                        <td>0원</td>
                                    </tr>
                                    <tr>
                                        <th scope="row"><label htmlFor="od_send_cost">배송비</label></th>
                                        <td>
                                            <input type="text" name="od_send_cost" value="3000" id="od_send_cost" className="frm_input" size="10" /> 원
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row"><label htmlFor="od_send_cost2">추가배송비</label></th>
                                        <td>
                                            <input type="text" name="od_send_cost2" value="0" id="od_send_cost2" className="frm_input" size="10" /> 원
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section id="anc_sodr_paymo" className="compare_right">
                        <h3>결제상세정보 수정</h3>

                        <div className="tbl_frm01">
                            <table>
                                <caption>결제상세정보 수정</caption>
                                <colgroup>
                                    <col className="grid_3" />
                                    <col />
                                </colgroup>
                                <tbody>

                                    <tr>
                                        <th scope="row"><label htmlFor="od_bank_account">계좌번호</label></th>
                                        <td><select name="od_bank_account" id="od_bank_account">
                                                <option value="">선택하십시오</option>
                                                <option value="OO은행 12345-67-89012 예금주명" selected="selected">OO은행 12345-67-89012 예금주명</option>
                                            </select> </td>
                                    </tr>

                                    <tr>
                                        <th scope="row"><label htmlFor="od_receipt_price">무통장 입금액</label></th>
                                        <td>
                                            <input type="checkbox" id="od_receipt_chk" value="23000"  />
                                            <label htmlFor="od_receipt_chk">결제금액 입력</label><br /> 
                                            <input type="text" name="od_receipt_price" value="0" id="od_receipt_price" className="frm_input" /> 원
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row"><label htmlFor="od_deposit_name">입금자명</label></th>
                                        <td>

                                            {/* 입금완료 알림톡 전송 */}

                                            <input type="text" name="od_deposit_name" value="홍길삼" id="od_deposit_name" className="frm_input" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row"><label htmlFor="od_receipt_time">입금 확인일시</label></th>
                                        <td>
                                            <input type="checkbox" name="od_bank_chk" id="od_bank_chk" value="2026-02-16 18:59:36" />
                                            <label htmlFor="od_bank_chk">현재 시간으로 설정</label><br />
                                            <input type="text" name="od_receipt_time" value="" id="od_receipt_time" className="frm_input" maxLength={19} />
                                        </td>
                                    </tr>





                                    <tr>
                                        <th scope="row"><label htmlFor="od_receipt_point">포인트 결제액</label></th>
                                        <td><input type="text" name="od_receipt_point" value="0" id="od_receipt_point" className="frm_input" size="10" /> 점</td>
                                    </tr>
                                    <tr>
                                        <th scope="row"><label htmlFor="od_refund_price">결제취소/환불 금액</label></th>
                                        <td>
                                            <input type="text" name="od_refund_price" value="0" id="od_refund_price" className="frm_input" size="10" /> 원
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row"><label htmlFor="od_invoice">운송장번호</label></th>
                                        <td>

                                            {/* 배송 알림톡 전송 */}

                                            <input type="text" name="od_invoice" value="" id="od_invoice" className="frm_input" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row"><label htmlFor="od_delivery_company">배송회사</label></th>
                                        <td>
                                            <input type="checkbox" id="od_delivery_chk" value=""  />
                                            <label htmlFor="od_delivery_chk">기본 배송회사로 설정</label><br />
                                            <input type="text" name="od_delivery_company" id="od_delivery_company" value="0" className="frm_input" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row"><label htmlFor="od_invoice_time">배송일시</label></th>
                                        <td>
                                            <input type="checkbox" id="od_invoice_chk" value="2026-02-16 18:59:36"  />
                                            <label htmlFor="od_invoice_chk">현재 시간으로 설정</label><br />
                                            <input type="text" name="od_invoice_time" id="od_invoice_time" value="" className="frm_input" maxLength={19} />
                                        </td>
                                    </tr>

                                    <tr>
                                        <th scope="row"><label htmlFor="od_send_mail">메일발송</label></th>
                                        <td>
                                            <span className="frm_info">주문자님께 입금, 배송내역을 메일로 발송합니다.<br />메일발송시 상점메모에 기록됩니다.</span> <input type="checkbox" name="od_send_mail" value="1" id="od_send_mail" /> 메일발송
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </section>

                </div>

                <div className="btn_confirm01 btn_confirm">
                    <input type="submit" value="결제/배송내역 수정" className="btn_submit btn" />
                    <a href="./personalpayform.php?popup=yes&amp;od_id=2026021421003646" id="personalpay_add" className="btn btn_02">개인결제추가</a>
                    <a href="./orderlist.php?od_status=&amp;od_settle_case=&amp;od_misu=&amp;od_cancel_price=&amp;od_refund_price=&amp;od_receipt_point=&amp;od_coupon=&amp;fr_date=&amp;to_date=&amp;sel_field=od_id&amp;search=&amp;save_search=&amp;sort1=od_id&amp;sort2=desc&amp;page=1" className="btn btn_02">목록</a>
                </div>
            </form>
        </section>

        <section id="anc_sodr_memo">
            <h2 className="h2_frm">상점메모</h2>
            <ul className="anchor">
                <li><a href="#anc_sodr_list">주문상품 목록</a></li>
                <li><a href="#anc_sodr_pay">주문결제 내역</a></li>
                <li><a href="#anc_sodr_chk">결제상세정보 확인</a></li>
                <li><a href="#anc_sodr_paymo">결제상세정보 수정</a></li>
                <li><a href="#anc_sodr_memo">상점메모</a></li>
                <li><a href="#anc_sodr_orderer">주문하신 분</a></li>
                <li><a href="#anc_sodr_taker">받으시는 분</a></li>
            </ul>
            <div className="local_desc02 local_desc">
                <p>
                    현재 열람 중인 주문에 대한 내용을 메모하는곳입니다.<br />
                    입금, 배송 내역을 메일로 발송할 경우 함께 기록됩니다.
                </p>
            </div>

            <form name="frmorderform2" action="./orderformupdate.php" method="post">
                <input type="hidden" name="od_id" value="2026021421003646" />
                <input type="hidden" name="sort1" value="od_id" />
                <input type="hidden" name="sort2" value="desc" />
                <input type="hidden" name="sel_field" value="od_id" />
                <input type="hidden" name="search" value="" />
                <input type="hidden" name="page" value="1" />
                <input type="hidden" name="mod_type" value="memo" />

                <div className="tbl_wrap">
                    <label htmlFor="od_shop_memo" className="sound_only">상점메모</label>
                    <textarea name="od_shop_memo" id="od_shop_memo" rows="8"></textarea>
                </div>

                <div className="btn_confirm01 btn_confirm">
                    <input type="submit" value="메모 수정" className="btn_submit btn" />
                </div>

            </form>
        </section>

        <section>
            <h2 className="h2_frm">주문자/배송지 정보</h2>
            <ul className="anchor">
                <li><a href="#anc_sodr_list">주문상품 목록</a></li>
                <li><a href="#anc_sodr_pay">주문결제 내역</a></li>
                <li><a href="#anc_sodr_chk">결제상세정보 확인</a></li>
                <li><a href="#anc_sodr_paymo">결제상세정보 수정</a></li>
                <li><a href="#anc_sodr_memo">상점메모</a></li>
                <li><a href="#anc_sodr_orderer">주문하신 분</a></li>
                <li><a href="#anc_sodr_taker">받으시는 분</a></li>
            </ul>
            <form name="frmorderform3" action="./orderformupdate.php" method="post">
                <input type="hidden" name="od_id" value="2026021421003646" />
                <input type="hidden" name="sort1" value="od_id" />
                <input type="hidden" name="sort2" value="desc" />
                <input type="hidden" name="sel_field" value="od_id" />
                <input type="hidden" name="search" value="" />
                <input type="hidden" name="page" value="1" />
                <input type="hidden" name="mod_type" value="info" />

                <div className="compare_wrap">

                    <section id="anc_sodr_orderer" className="compare_left">
                        <h3>주문하신 분</h3>

                        <div className="tbl_frm01">
                            <table>
                                <caption>주문자/배송지 정보</caption>
                                <colgroup>
                                    <col className="grid_4" />
                                    <col />
                                </colgroup>
                                <tbody>
                                    <tr>
                                        <th scope="row"><label htmlFor="od_name"><span className="sound_only">주문하신 분 </span>이름</label></th>
                                        <td><input type="text" name="od_name" value="홍길삼" id="od_name"  className="frm_input required" /></td>
                                    </tr>
                                    <tr>
                                        <th scope="row"><label htmlFor="od_tel"><span className="sound_only">주문하신 분 </span>전화번호</label></th>
                                        <td><input type="text" name="od_tel" value="010-1111-1111" id="od_tel"  className="frm_input required" /></td>
                                    </tr>
                                    <tr>
                                        <th scope="row"><label htmlFor="od_hp"><span className="sound_only">주문하신 분 </span>핸드폰</label></th>
                                        <td><input type="text" name="od_hp" value="010-1111-1111" id="od_hp" className="frm_input" /></td>
                                    </tr>
                                    <tr>
                                        <th scope="row"><span className="sound_only">주문하시는 분 </span>주소</th>
                                        <td>
                                            <label htmlFor="od_zip" className="sound_only">우편번호</label>
                                            <input type="text" name="od_zip" value="47215" id="od_zip"  className="frm_input required" size="5" />
                                            <button type="button" className="btn_frmline" >주소 검색</button><br />
                                            <span id="od_win_zip" style={{display:"block"}}></span>
                                            <input type="text" name="od_addr1" value="부산 부산진구 거제대로 1" id="od_addr1"  className="frm_input required" size="35" />
                                            <label htmlFor="od_addr1">기본주소</label><br />
                                            <input type="text" name="od_addr2" value="11111" id="od_addr2" className="frm_input" size="35" />
                                            <label htmlFor="od_addr2">상세주소</label>
                                            <br />
                                            <input type="text" name="od_addr3" value="(양정동)" id="od_addr3" className="frm_input" size="35" />
                                            <label htmlFor="od_addr3">참고항목</label>
                                            <input type="hidden" name="od_addr_jibeon" value="R" /><br />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row"><label htmlFor="od_email"><span className="sound_only">주문하신 분 </span>E-mail</label></th>
                                        <td><input type="text" name="od_email" value="chk012@test.com" id="od_email"  className="frm_input required" size="30" /></td>
                                    </tr>
                                    <tr>
                                        <th scope="row"><span className="sound_only">주문하신 분 </span>IP Address</th>
                                        <td>127.0.0.1</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section id="anc_sodr_taker" className="compare_right">
                        <h3>받으시는 분</h3>

                        <div className="tbl_frm01">
                            <table>
                                <caption>받으시는 분 정보</caption>
                                <colgroup>
                                    <col className="grid_4" />
                                    <col />
                                </colgroup>
                                <tbody>
                                    <tr>
                                        <th scope="row"><label htmlFor="od_b_name"><span className="sound_only">받으시는 분 </span>이름</label></th>
                                        <td><input type="text" name="od_b_name" value="홍길삼" id="od_b_name"  className="frm_input required" /></td>
                                    </tr>
                                    <tr>
                                        <th scope="row"><label htmlFor="od_b_tel"><span className="sound_only">받으시는 분 </span>전화번호</label></th>
                                        <td><input type="text" name="od_b_tel" value="010-1111-1111" id="od_b_tel"  className="frm_input required" /></td>
                                    </tr>
                                    <tr>
                                        <th scope="row"><label htmlFor="od_b_hp"><span className="sound_only">받으시는 분 </span>핸드폰</label></th>
                                        <td><input type="text" name="od_b_hp" value="010-1111-1111" id="od_b_hp" className="frm_input required" /></td>
                                    </tr>
                                    <tr>
                                        <th scope="row"><span className="sound_only">받으시는 분 </span>주소</th>
                                        <td>
                                            <label htmlFor="od_b_zip" className="sound_only">우편번호</label>
                                            <input type="text" name="od_b_zip" value="47215" id="od_b_zip"  className="frm_input required" size="5" />
                                            <button type="button" className="btn_frmline" >주소 검색</button><br />
                                            <input type="text" name="od_b_addr1" value="부산 부산진구 거제대로 1" id="od_b_addr1"  className="frm_input required" size="35" />
                                            <label htmlFor="od_b_addr1">기본주소</label>
                                            <input type="text" name="od_b_addr2" value="11111" id="od_b_addr2" className="frm_input" size="35" />
                                            <label htmlFor="od_b_addr2">상세주소</label>
                                            <input type="text" name="od_b_addr3" value="(양정동)" id="od_b_addr3" className="frm_input" size="35" />a
                                            <label htmlFor="od_b_addr3">참고항목</label>
                                            <input type="hidden" name="od_b_addr_jibeon" value="R" /><br />
                                        </td>
                                    </tr>


                                    <tr>
                                        <th scope="row">전달 메세지</th>
                                        <td>전하실말씀</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                </div>

                <div className="btn_confirm01 btn_confirm">
                    <input type="submit" value="주문자/배송지 정보 수정" className="btn_submit btn " />
                    <a href="./orderlist.php?od_status=&amp;od_settle_case=&amp;od_misu=&amp;od_cancel_price=&amp;od_refund_price=&amp;od_receipt_point=&amp;od_coupon=&amp;fr_date=&amp;to_date=&amp;sel_field=od_id&amp;search=&amp;save_search=&amp;sort1=od_id&amp;sort2=desc&amp;page=1" className="btn">목록</a>
                </div>

            </form>
        </section>

    </div>
    </>
  )
}
