

export default function OrderList({title}) {
  return (
    <>
	<h1 id="container_title">{title}</h1>
    <div className="container_wr">
        <div className="local_ov01 local_ov">
            <a href="/shop/adm/shop_admin/orderlist.php" className="ov_listall">전체목록</a> <span className="btn_ov01"><span className="ov_txt">전체 주문내역</span><span className="ov_num"> 1건</span></span>
        </div>

        <form name="frmorderlist" className="local_sch01 local_sch">
            <input type="hidden" name="doc" value="" />
            <input type="hidden" name="sort1" value="od_id" />
            <input type="hidden" name="sort2" value="desc" />
            <input type="hidden" name="page" value="1" />
            <input type="hidden" name="save_search" value="" />

            <label htmlFor="sel_field" className="sound_only">검색대상</label>
            <select name="sel_field" id="sel_field">
                <option value="od_id" selected="selected">주문번호</option>
                <option value="mb_id">회원 ID</option>
                <option value="od_name">주문자</option>
                <option value="od_tel">주문자전화</option>
                <option value="od_hp">주문자핸드폰</option>
                <option value="od_b_name">받는분</option>
                <option value="od_b_tel">받는분전화</option>
                <option value="od_b_hp">받는분핸드폰</option>
                <option value="od_deposit_name">입금자</option>
                <option value="od_invoice">운송장번호</option>
            </select>

            <label htmlFor="search" className="sound_only">검색어<strong className="sound_only"> 필수</strong></label>
            <input type="text" name="search" value="" id="search" required="" className="required frm_input" autocomplete="off" />
            <input type="submit" value="검색" className="btn_submit" />

        </form>

        <form className="local_sch03 local_sch">
            <div>
                <strong>주문상태</strong>
                <input type="radio" name="od_status" value="" id="od_status_all" checked="checked" />
                <label htmlFor="od_status_all">전체</label>
                <input type="radio" name="od_status" value="주문" id="od_status_odr" />
                <label htmlFor="od_status_odr">주문</label>
                <input type="radio" name="od_status" value="입금" id="od_status_income" />
                <label htmlFor="od_status_income">입금</label>
                <input type="radio" name="od_status" value="준비" id="od_status_rdy" />
                <label htmlFor="od_status_rdy">준비</label>
                <input type="radio" name="od_status" value="배송" id="od_status_dvr" />
                <label htmlFor="od_status_dvr">배송</label>
                <input type="radio" name="od_status" value="완료" id="od_status_done" />
                <label htmlFor="od_status_done">완료</label>
                <input type="radio" name="od_status" value="전체취소" id="od_status_cancel" />
                <label htmlFor="od_status_cancel">전체취소</label>
                <input type="radio" name="od_status" value="부분취소" id="od_status_pcancel" />
                <label htmlFor="od_status_pcancel">부분취소</label>
            </div>

            <div>
                <strong>결제수단</strong>
                <input type="radio" name="od_settle_case" value="" id="od_settle_case01" checked="checked" />
                <label htmlFor="od_settle_case01">전체</label>
                <input type="radio" name="od_settle_case" value="무통장" id="od_settle_case02" />
                <label htmlFor="od_settle_case02">무통장</label>
                <input type="radio" name="od_settle_case" value="가상계좌" id="od_settle_case03" />
                <label htmlFor="od_settle_case03">가상계좌</label>
                <input type="radio" name="od_settle_case" value="계좌이체" id="od_settle_case04" />
                <label htmlFor="od_settle_case04">계좌이체</label>
                <input type="radio" name="od_settle_case" value="휴대폰" id="od_settle_case05" />
                <label htmlFor="od_settle_case05">휴대폰</label>
                <input type="radio" name="od_settle_case" value="신용카드" id="od_settle_case06" />
                <label htmlFor="od_settle_case06">신용카드</label>
                <input type="radio" name="od_settle_case" value="간편결제" id="od_settle_case07" />
                <label htmlFor="od_settle_case07" data-tooltip-text="NHN_KCP 간편결제 : PAYCO, 네이버페이, 카카오페이(NHN_KCP), 애플페이(NHN_KCP) 
    LG유플러스 간편결제 : PAYNOW 
    KG 이니시스 간편결제 : KPAY, 삼성페이, LPAY, 카카오페이(KG이니시스)">PG간편결제</label>
                <input type="radio" name="od_settle_case" value="KAKAOPAY" id="od_settle_case08" />
                <label htmlFor="od_settle_case08">KAKAOPAY</label>
            </div>

            <div>
                <strong>기타선택</strong>
                <input type="checkbox" name="od_misu" value="Y" id="od_misu01" />
                <label htmlFor="od_misu01">미수금</label>
                <input type="checkbox" name="od_cancel_price" value="Y" id="od_misu02" />
                <label htmlFor="od_misu02">반품,품절</label>
                <input type="checkbox" name="od_refund_price" value="Y" id="od_misu03" />
                <label htmlFor="od_misu03">환불</label>
                <input type="checkbox" name="od_receipt_point" value="Y" id="od_misu04" />
                <label htmlFor="od_misu04">포인트주문</label>
                <input type="checkbox" name="od_coupon" value="Y" id="od_misu05" />
                <label htmlFor="od_misu05">쿠폰</label>
            </div>

            <div className="sch_last">
                <strong>주문일자</strong>
                <input type="text" id="fr_date" name="fr_date" value="" className="frm_input hasDatepicker" size="10" maxlength="10" /> ~
                <input type="text" id="to_date" name="to_date" value="" className="frm_input hasDatepicker" size="10" maxlength="10" />
                <button type="button" onclick="javascript:set_date('오늘');">오늘</button>
                <button type="button" onclick="javascript:set_date('어제');">어제</button>
                <button type="button" onclick="javascript:set_date('이번주');">이번주</button>
                <button type="button" onclick="javascript:set_date('이번달');">이번달</button>
                <button type="button" onclick="javascript:set_date('지난주');">지난주</button>
                <button type="button" onclick="javascript:set_date('지난달');">지난달</button>
                <button type="button" onclick="javascript:set_date('전체');">전체</button>
                <input type="submit" value="검색" className="btn_submit" />
            </div>
        </form>

        <form name="forderlist" id="forderlist" onsubmit="return forderlist_submit(this);" method="post" autocomplete="off">
            <input type="hidden" name="search_od_status" value="" />

            <div className="tbl_head01 tbl_wrap">
                <table id="sodr_list">
                    <caption>주문 내역 목록</caption>
                    <thead>
                        <tr>
                            <th scope="col" rowspan="3">
                                <label htmlFor="chkall" className="sound_only">주문 전체</label>
                                <input type="checkbox" name="chkall" value="1" id="chkall" />
                            </th>
                            <th scope="col" id="th_ordnum" rowspan="2" colspan="2"><a href="/shop/adm/shop_admin/orderlist.php?sort1=od_id&amp;sort2=asc&amp;page=1&amp;od_status=&amp;od_settle_case=&amp;od_misu=&amp;od_cancel_price=&amp;od_refund_price=&amp;od_receipt_point=&amp;od_coupon=&amp;fr_date=&amp;to_date=&amp;sel_field=od_id&amp;search=&amp;save_search=">주문번호</a></th>
                            <th scope="col" id="th_odrer">주문자</th>
                            <th scope="col" id="th_odrertel">주문자전화</th>
                            <th scope="col" id="th_recvr">받는분</th>
                            <th scope="col" rowspan="3">주문합계<br />선불배송비포함</th>
                            <th scope="col" rowspan="3">입금합계</th>
                            <th scope="col" rowspan="3">주문취소</th>
                            <th scope="col" rowspan="3">쿠폰</th>
                            <th scope="col" rowspan="3">미수금</th>
                            <th scope="col" rowspan="3">보기</th>
                        </tr>
                        <tr>
                            <th scope="col" id="th_odrid">회원ID</th>
                            <th scope="col" id="th_odrcnt">주문상품수</th>
                            <th scope="col" id="th_odrall">누적주문수</th>
                        </tr>
                        <tr>
                            <th scope="col" id="odrstat">주문상태</th>
                            <th scope="col" id="odrpay">결제수단</th>
                            <th scope="col" id="delino">운송장번호</th>
                            <th scope="col" id="delicom">배송회사</th>
                            <th scope="col" id="delidate">배송일시</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="orderlist bg0">
                            <td rowspan="3" className="td_chk">
                                <input type="hidden" name="od_id[0]" value="2026021421003646" id="od_id_0" />
                                <label htmlFor="chk_0" className="sound_only">주문번호 2026021421003646</label>
                                <input type="checkbox" name="chk[]" value="0" id="chk_0" />
                            </td>
                            <td headers="th_ordnum" className="td_odrnum2" rowspan="2" colspan="2">
                                <a href="http://127.0.0.1/shop/shop/orderinquiryview.php?od_id=2026021421003646&amp;uid=f7c391cb74b79d0da49cdbc0e1146470" className="orderitem">20260214-21003646</a>
                                <span className="list_test">테스트</span>
                            </td>
                            <td headers="th_odrer" className="td_name"><span className="sv_wrap"><a href="http://127.0.0.1/shop/bbs/profile.php?mb_id=chk01" className="sv_member" title="홍길삼 자기소개" target="_blank" rel="nofollow" onclick="return false;"> 홍길삼</a><span className="sv"><a href="http://127.0.0.1/shop/bbs/memo_form.php?me_recv_mb_id=chk01" rel="nofollow" onclick="win_memo(this.href); return false;">쪽지보내기</a>
                                        <a href="http://127.0.0.1/shop/bbs/formmail.php?mb_id=chk01&amp;name=%ED%99%8D%EA%B8%B8%EC%82%BC&amp;email=mJyiaZeUctbJo9aQxqWl" onclick="win_email(this.href); return false;" rel="nofollow">메일보내기</a>
                                        <a href="http://127.0.0.1/shop/bbs/profile.php?mb_id=chk01" onclick="win_profile(this.href); return false;" rel="nofollow">자기소개</a>
                                        <a href="http://127.0.0.1/shop/bbs/new.php?mb_id=chk01" className="link_new_page" onclick="check_goto_new(this.href, event);" rel="nofollow">전체게시물</a>
                                        <a href="http://127.0.0.1/shop/adm/member_form.php?w=u&amp;mb_id=chk01" target="_blank" rel="nofollow">회원정보변경</a>
                                        <a href="http://127.0.0.1/shop/adm/point_list.php?sfl=mb_id&amp;stx=chk01" target="_blank" rel="nofollow">포인트내역</a></span><noscript className="sv_nojs"><span className="sv"><a href="http://127.0.0.1/shop/bbs/memo_form.php?me_recv_mb_id=chk01" rel="nofollow" onclick="win_memo(this.href); return false;">쪽지보내기</a>
                                            <a href="http://127.0.0.1/shop/bbs/formmail.php?mb_id=chk01&amp;name=%ED%99%8D%EA%B8%B8%EC%82%BC&amp;email=mJyiaZeUctbJo9aQxqWl" onclick="win_email(this.href); return false;" rel="nofollow">메일보내기</a>
                                            <a href="http://127.0.0.1/shop/bbs/profile.php?mb_id=chk01" onclick="win_profile(this.href); return false;" rel="nofollow">자기소개</a>
                                            <a href="http://127.0.0.1/shop/bbs/new.php?mb_id=chk01" className="link_new_page" onclick="check_goto_new(this.href, event);" rel="nofollow">전체게시물</a>
                                            <a href="http://127.0.0.1/shop/adm/member_form.php?w=u&amp;mb_id=chk01" target="_blank" rel="nofollow">회원정보변경</a>
                                            <a href="http://127.0.0.1/shop/adm/point_list.php?sfl=mb_id&amp;stx=chk01" target="_blank" rel="nofollow">포인트내역</a></span></noscript></span></td>
                            <td headers="th_odrertel" className="td_tel">010-1111-1111</td>
                            <td headers="th_recvr" className="td_name"><a href="/shop/adm/shop_admin/orderlist.php?sort1=od_id&amp;sort2=desc&amp;sel_field=od_b_name&amp;search=홍길삼">홍길삼</a></td>
                            <td rowspan="3" className="td_num td_numsum">23,000</td>
                            <td rowspan="3" className="td_num_right">0</td>
                            <td rowspan="3" className="td_numcancel0 td_num">0</td>
                            <td rowspan="3" className="td_num_right">0</td>
                            <td rowspan="3" className="td_num_right">23,000</td>
                            <td rowspan="3" className="td_mng td_mng_s">
                                <a href="./orderform.php?od_id=2026021421003646&amp;od_status=&amp;od_settle_case=&amp;od_misu=&amp;od_cancel_price=&amp;od_refund_price=&amp;od_receipt_point=&amp;od_coupon=&amp;fr_date=&amp;to_date=&amp;sel_field=od_id&amp;search=&amp;save_search=&amp;sort1=od_id&amp;sort2=desc&amp;page=1" className="mng_mod btn btn_02"><span className="sound_only">2026021421003646 </span>보기</a>
                            </td>
                        </tr>
                        <tr className="bg0">
                            <td headers="th_odrid">
                                <a href="/shop/adm/shop_admin/orderlist.php?sort1=od_id&amp;sort2=desc&amp;sel_field=mb_id&amp;search=chk01">chk01</a>
                            </td>
                            <td headers="th_odrcnt">1건</td>
                            <td headers="th_odrall">1건</td>
                        </tr>
                        <tr className="bg0">
                            <td headers="odrstat" className="odrstat">
                                <input type="hidden" name="current_status[0]" value="주문" />
                                주문
                            </td>
                            <td headers="odrpay" className="odrpay">
                                <input type="hidden" name="current_settle_case[0]" value="무통장" />
                                무통장
                            </td>
                            <td headers="delino" className="delino">
                                - </td>
                            <td headers="delicom">
                                - </td>
                            <td headers="delidate">
                                - </td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr className="orderlist">
                            <th scope="row" colspan="3">&nbsp;</th>
                            <td>&nbsp;</td>
                            <td>1건</td>
                            <th scope="row">합 계</th>
                            <td>23,000</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>23,000</td>
                            <td></td>
                        </tr>
                    </tfoot>
                </table>
            </div>

            <div className="local_cmd01 local_cmd">
            </div>

            <div className="local_desc02 local_desc">
                <p>
                    &lt;무통장&gt;인 경우에만 &lt;주문&gt;에서 &lt;입금&gt;으로 변경됩니다. 가상계좌는 입금시 자동으로 &lt;입금&gt;처리됩니다.<br />
                    &lt;준비&gt;에서 &lt;배송&gt;으로 변경시 &lt;에스크로배송등록&gt;을 체크하시면 에스크로 주문에 한해 PG사에 배송정보가 자동 등록됩니다.<br />
                    <strong>주의!</strong> 주문번호를 클릭하여 나오는 주문상세내역의 주소를 외부에서 조회가 가능한곳에 올리지 마십시오.
                </p>
            </div>

        </form>



    </div>
    </>
  )
}
