

export default function ItemEdit({title}) {
  return (
    <>
	<h1 id="container_title">{title}</h1>
    <div className="container_wr">
        <form name="fitemform" action="./itemformupdate.php" method="post" enctype="MULTIPART/FORM-DATA" autocomplete="off" >

            <input type="hidden" name="w" value="u" />
            <input type="hidden" name="sca" value="" />
            <input type="hidden" name="sst" value="" />
            <input type="hidden" name="sod" value="" />
            <input type="hidden" name="sfl" value="" />
            <input type="hidden" name="stx" value="" />
            <input type="hidden" name="page" value="1" />

            <section id="anc_sitfrm_cate">
                <h2 className="h2_frm">상품분류</h2>
                <ul className="anchor">
                    <li><a href="#anc_sitfrm_cate">상품분류</a></li>
                    <li><a href="#anc_sitfrm_skin">스킨설정</a></li>
                    <li><a href="#anc_sitfrm_ini">기본정보</a></li>
                    <li><a href="#anc_sitfrm_compact">요약정보</a></li>
                    <li><a href="#anc_sitfrm_cost">가격 및 재고</a></li>
                    <li><a href="#anc_sitfrm_sendcost">배송비</a></li>
                    <li><a href="#anc_sitfrm_img">상품이미지</a></li>
                    <li><a href="#anc_sitfrm_relation">관련상품</a></li>
                    <li><a href="#anc_sitfrm_event">관련이벤트</a></li>
                    <li><a href="#anc_sitfrm_optional">상세설명설정</a></li>
                    <li><a href="#anc_sitfrm_extra">여분필드</a></li>
                </ul>
                <div className="local_desc02 local_desc">
                    <p>기본분류는 반드시 선택하셔야 합니다. 하나의 상품에 최대 3개의 다른 분류를 지정할 수 있습니다.</p>
                </div>

                <div className="tbl_frm01 tbl_wrap">
                    <table>
                        <caption>상품분류 입력</caption>
                        <colgroup>
                            <col className="grid_4" />
                            <col />
                        </colgroup>
                        <tbody>
                            <tr>
                                <th scope="row"><label htmlFor="ca_id">기본분류</label></th>
                                <td>
                                    <select name="ca_id" id="ca_id" onchange="categorychange(this.form)">
                                        <option value="">선택하세요</option>
                                        <option value="10" selected="">남성복</option>
                                    </select>
                                
                                </td>
                            </tr>


                        </tbody>
                    </table>
                </div>
            </section>





            <section id="anc_sitfrm_ini">
                <h2 className="h2_frm">기본정보</h2>
                <ul className="anchor">
                    <li><a href="#anc_sitfrm_cate">상품분류</a></li>
                    <li><a href="#anc_sitfrm_skin">스킨설정</a></li>
                    <li><a href="#anc_sitfrm_ini">기본정보</a></li>
                    <li><a href="#anc_sitfrm_compact">요약정보</a></li>
                    <li><a href="#anc_sitfrm_cost">가격 및 재고</a></li>
                    <li><a href="#anc_sitfrm_sendcost">배송비</a></li>
                    <li><a href="#anc_sitfrm_img">상품이미지</a></li>
                    <li><a href="#anc_sitfrm_relation">관련상품</a></li>
                    <li><a href="#anc_sitfrm_event">관련이벤트</a></li>
                    <li><a href="#anc_sitfrm_optional">상세설명설정</a></li>
                    <li><a href="#anc_sitfrm_extra">여분필드</a></li>
                </ul>
                <div className="tbl_frm01 tbl_wrap">
                    <table>
                        <caption>기본정보 입력</caption>
                        <colgroup>
                            <col className="grid_4" />
                            <col />
                            
                        </colgroup>
                        <tbody>
                            <tr>
                                <th scope="row">상품코드</th>
                                <td >
                                    <input type="hidden" name="it_id" value="1770986271" />
                                    <span className="frm_ca_id">1770986271</span>
                                    <a href="http://127.0.0.1/shop/shop/item.php?it_id=1770986271" className="btn_frmline">상품확인</a>
                                    <a href="http://127.0.0.1/shop/adm/shop_admin/itemuselist.php?sfl=a.it_id&amp;stx=1770986271" className="btn_frmline">사용후기</a>
                                    <a href="http://127.0.0.1/shop/adm/shop_admin/itemqalist.php?sfl=a.it_id&amp;stx=1770986271" className="btn_frmline">상품문의</a>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row"><label htmlFor="it_name">상품명</label></th>
                                <td >
                                    <span className="frm_info">HTML 입력이 불가합니다.</span> <input type="text" name="it_name" value="상품01" id="it_name"  className="frm_input required" size="95" />
                                </td>
                            </tr>
                            <tr>
                                <th scope="row"><label htmlFor="it_basic">기본설명</label></th>
                                <td>
                                    <span className="frm_info">상품명 하단에 상품에 대한 추가적인 설명이 필요한 경우에 입력합니다. HTML 입력도 가능합니다.</span> <input type="text" name="it_basic" value="상품01 입니다." id="it_basic" className="frm_input" size="95" />
                                </td>
                            
                            </tr>
                            <tr>
                                <th scope="row"><label htmlFor="it_order">출력순서</label></th>
                                <td>
                                    <span className="frm_info">숫자가 작을 수록 상위에 출력됩니다. 음수 입력도 가능하며 입력 가능 범위는 -2147483648 부터 2147483647 까지입니다.<br /><b>입력하지 않으면 자동으로 출력됩니다.</b></span> <input type="text" name="it_order" value="0" id="it_order" className="frm_input" size="12" />
                                </td>
                                
                            </tr>
                            <tr>
                                <th scope="row">상품유형</th>
                                <td>
                                    <span className="frm_info">메인화면에 유형별로 출력할때 사용합니다.<br />이곳에 체크하게되면 상품리스트에서 유형별로 정렬할때 체크된 상품이 가장 먼저 출력됩니다.</span> <input type="checkbox" name="it_type1" value="1" checked="" id="it_type1" />
                                    <label htmlFor="it_type1">히트 <img src="http://127.0.0.1/shop/shop/img/icon_hit.gif" alt="" /></label>
                                    <input type="checkbox" name="it_type2" value="1" checked="" id="it_type2" />
                                    <label htmlFor="it_type2">추천 <img src="http://127.0.0.1/shop/shop/img/icon_rec.gif" alt="" /></label>
                                    <input type="checkbox" name="it_type3" value="1" checked="" id="it_type3" />
                                    <label htmlFor="it_type3">신상품 <img src="http://127.0.0.1/shop/shop/img/icon_new.gif" alt="" /></label>
                                    <input type="checkbox" name="it_type4" value="1" checked="" id="it_type4" />
                                    <label htmlFor="it_type4">인기 <img src="http://127.0.0.1/shop/shop/img/icon_best.gif" alt="" /></label>
                                    <input type="checkbox" name="it_type5" value="1" checked="" id="it_type5" />
                                    <label htmlFor="it_type5">할인 <img src="http://127.0.0.1/shop/shop/img/icon_discount.gif" alt="" /></label>
                                </td>
                            
                            </tr>





                            <tr>
                                <th scope="row"><label htmlFor="it_use">판매가능</label></th>
                                <td>
                                    <span className="frm_info">잠시 판매를 중단하거나 재고가 없을 경우에 체크를 해제해 놓으면 출력되지 않으며, 주문도 받지 않습니다.</span> <input type="checkbox" name="it_use" value="1" id="it_use" checked="" /> 예
                                </td>
                                
                            </tr>


                            <tr>
                                <th scope="row">상품설명</th>
                                <td > </td>
                            </tr>



                        </tbody>
                    </table>
                </div>
            </section>





            

            <section id="anc_sitfrm_cost">
                <h2 className="h2_frm">가격 및 재고</h2>
                <ul className="anchor">
                    <li><a href="#anc_sitfrm_cate">상품분류</a></li>
                    <li><a href="#anc_sitfrm_skin">스킨설정</a></li>
                    <li><a href="#anc_sitfrm_ini">기본정보</a></li>
                    <li><a href="#anc_sitfrm_compact">요약정보</a></li>
                    <li><a href="#anc_sitfrm_cost">가격 및 재고</a></li>
                    <li><a href="#anc_sitfrm_sendcost">배송비</a></li>
                    <li><a href="#anc_sitfrm_img">상품이미지</a></li>
                    <li><a href="#anc_sitfrm_relation">관련상품</a></li>
                    <li><a href="#anc_sitfrm_event">관련이벤트</a></li>
                    <li><a href="#anc_sitfrm_optional">상세설명설정</a></li>
                    <li><a href="#anc_sitfrm_extra">여분필드</a></li>
                </ul>

                <div className="tbl_frm01 tbl_wrap">
                    <table>
                        <caption>가격 및 재고 입력</caption>
                        <colgroup>
                            <col className="grid_4" />
                            <col />
                        </colgroup>
                        <tbody>
                            <tr>
                                <th scope="row"><label htmlFor="it_price">판매가격</label></th>
                                <td>
                                    <input type="text" name="it_price" value="10000" id="it_price" className="frm_input" size="8" /> 원
                                </td>

                            </tr>
                            <tr>
                                <th scope="row"><label htmlFor="it_cust_price">시중가격</label></th>
                                <td>
                                    <span className="frm_info">입력하지 않으면 상품상세페이지에 출력하지 않습니다.</span> <input type="text" name="it_cust_price" value="10000" id="it_cust_price" className="frm_input" size="8" /> 원
                                </td>

                            </tr>

                            <tr>
                                <th scope="row"><label htmlFor="it_point">포인트</label></th>
                                <td>
                                    <span className="frm_info">주문완료후 환경설정에서 설정한 주문완료 설정일 후 회원에게 부여하는 포인트입니다.<br />또, 포인트부여를 '아니오'로 설정한 경우 신용카드, 계좌이체로 주문하는 회원께는 부여하지 않습니다.</span> <input type="text" name="it_point" value="0" id="it_point" className="frm_input" size="8" /> <span id="it_point_unit">점</span>
                                </td>
                            
                            </tr>

                            <tr>
                                <th scope="row"><label htmlFor="it_soldout">상품품절</label></th>
                                <td>
                                    <span className="frm_info">잠시 판매를 중단하거나 재고가 없을 경우에 체크해 놓으면 품절상품으로 표시됩니다.</span> <input type="checkbox" name="it_soldout" value="1" id="it_soldout" /> 예
                                </td>
                            
                            </tr>

                            <tr>
                                <th scope="row"><label htmlFor="it_stock_qty">재고수량</label></th>
                                <td>
                                    <span className="frm_info"><b>주문관리에서 상품별 상태 변경에 따라 자동으로 재고를 가감합니다.</b> 재고는 규격/색상별이 아닌, 상품별로만 관리됩니다.<br />재고수량을 0으로 설정하시면 품절상품으로 표시됩니다.</span> <input type="text" name="it_stock_qty" value="99999" id="it_stock_qty" className="frm_input" size="8" /> 개
                                </td>
                                
                            </tr>

                            <tr>
                                <th scope="row"><label htmlFor="it_buy_min_qty">최소구매수량</label></th>
                                <td>
                                    <span className="frm_info">상품 구매시 최소 구매 수량을 설정합니다.</span> <input type="text" name="it_buy_min_qty" value="0" id="it_buy_min_qty" className="frm_input" size="8" /> 개
                                </td>
                            
                            </tr>
                            <tr>
                                <th scope="row"><label htmlFor="it_buy_max_qty">최대구매수량</label></th>
                                <td>
                                    <span className="frm_info">상품 구매시 최대 구매 수량을 설정합니다.</span> <input type="text" name="it_buy_max_qty" value="0" id="it_buy_max_qty" className="frm_input" size="8" /> 개
                                </td>
                            
                            </tr>



                        </tbody>
                    </table>
                </div>
            </section>


            <section id="anc_sitfrm_sendcost">
                <h2 className="h2_frm">배송비</h2>
                <ul className="anchor">
                    <li><a href="#anc_sitfrm_cate">상품분류</a></li>
                    <li><a href="#anc_sitfrm_skin">스킨설정</a></li>
                    <li><a href="#anc_sitfrm_ini">기본정보</a></li>
                    <li><a href="#anc_sitfrm_compact">요약정보</a></li>
                    <li><a href="#anc_sitfrm_cost">가격 및 재고</a></li>
                    <li><a href="#anc_sitfrm_sendcost">배송비</a></li>
                    <li><a href="#anc_sitfrm_img">상품이미지</a></li>
                    <li><a href="#anc_sitfrm_relation">관련상품</a></li>
                    <li><a href="#anc_sitfrm_event">관련이벤트</a></li>
                    <li><a href="#anc_sitfrm_optional">상세설명설정</a></li>
                    <li><a href="#anc_sitfrm_extra">여분필드</a></li>
                </ul>
                <div className="local_desc02 local_desc">
                    <p>쇼핑몰설정 &gt; 배송비유형 설정보다 <strong>개별상품 배송비설정이 우선</strong> 적용됩니다.</p>
                </div>

                <div className="tbl_frm01 tbl_wrap">
                    <table>
                        <caption>배송비 입력</caption>
                        <colgroup>
                            <col className="grid_4" />
                            <col />
                        </colgroup>
                        <tbody>
                            <tr>
                                <th scope="row"><label htmlFor="it_sc_type">배송비 유형</label></th>
                                <td>
                                    <span className="frm_info">배송비 유형을 선택하면 자동으로 항목이 변환됩니다.</span> <select name="it_sc_type" id="it_sc_type">
                                        <option value="0" selected="selected">쇼핑몰 기본설정 사용</option>
                                        <option value="1">무료배송</option>
                                        <option value="2">조건부 무료배송</option>
                                        <option value="3">유료배송</option>
                                        <option value="4">수량별 부과</option>
                                    </select>
                                </td>
                                <td rowspan="1" id="sc_grp" className="td_grpset">
                                    <input type="checkbox" name="chk_ca_it_sendcost" value="1" id="chk_ca_it_sendcost" />
                                    <label htmlFor="chk_ca_it_sendcost">분류적용</label>
                                    <input type="checkbox" name="chk_all_it_sendcost" value="1" id="chk_all_it_sendcost" />
                                    <label htmlFor="chk_all_it_sendcost">전체적용</label>
                                </td>
                            </tr>
                            <tr id="sc_con_method" className="_hidden">
                                <th scope="row"><label htmlFor="it_sc_method">배송비 결제</label></th>
                                <td>
                                    <select name="it_sc_method" id="it_sc_method">
                                        <option value="0" selected="selected">선불</option>
                                        <option value="1">착불</option>
                                        <option value="2">사용자선택</option>
                                    </select>
                                </td>
                            </tr>
                            <tr id="sc_con_basic" className="_hidden">
                                <th scope="row"><label htmlFor="it_sc_price">기본배송비</label></th>
                                <td>
                                    <span className="frm_info">무료배송 이외의 설정에 적용되는 배송비 금액입니다.</span> <input type="text" name="it_sc_price" value="0" id="it_sc_price" className="frm_input" size="8" /> 원
                                </td>
                            </tr>
                            <tr id="sc_con_minimum" className="_hidden">
                                <th scope="row"><label htmlFor="it_sc_minimum">배송비 상세조건</label></th>
                                <td>
                                    주문금액 <input type="text" name="it_sc_minimum" value="0" id="it_sc_minimum" className="frm_input" size="8" /> 이상 무료 배송
                                </td>
                            </tr>
                            <tr id="sc_con_qty" className="_hidden">
                                <th scope="row"><label htmlFor="it_sc_qty">배송비 상세조건</label></th>
                                <td>
                                    <span className="frm_info">상품의 주문 수량에 따라 배송비가 부과됩니다. 예를 들어 기본배송비가 3,000원 수량을 3으로 설정했을 경우 상품의 주문수량이 5개이면 6,000원 배송비가 부과됩니다.</span> 주문수량 <input type="text" name="it_sc_qty" value="0" id="it_sc_qty" className="frm_input" size="8" /> 마다 배송비 부과
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                
            </section>


            <section id="anc_sitfrm_img">
                <h2 className="h2_frm">이미지</h2>
                <ul className="anchor">
                    <li><a href="#anc_sitfrm_cate">상품분류</a></li>
                    <li><a href="#anc_sitfrm_skin">스킨설정</a></li>
                    <li><a href="#anc_sitfrm_ini">기본정보</a></li>
                    <li><a href="#anc_sitfrm_compact">요약정보</a></li>
                    <li><a href="#anc_sitfrm_cost">가격 및 재고</a></li>
                    <li><a href="#anc_sitfrm_sendcost">배송비</a></li>
                    <li><a href="#anc_sitfrm_img">상품이미지</a></li>
                    <li><a href="#anc_sitfrm_relation">관련상품</a></li>
                    <li><a href="#anc_sitfrm_event">관련이벤트</a></li>
                    <li><a href="#anc_sitfrm_optional">상세설명설정</a></li>
                    <li><a href="#anc_sitfrm_extra">여분필드</a></li>
                </ul>

                <div className="tbl_frm01 tbl_wrap">
                    <table>
                        <caption>이미지 업로드</caption>
                        <colgroup>
                            <col className="grid_4" />
                            <col />
                        </colgroup>
                        <tbody>
                            <tr>
                                <th scope="row"><label htmlFor="it_img1">이미지 1</label></th>
                                <td>
                                    <input type="file" name="it_img1" id="it_img1" />
                                    <label htmlFor="it_img1_del"><span className="sound_only">이미지 1 </span>파일삭제</label>
                                    <input type="checkbox" name="it_img1_del" id="it_img1_del" value="1" />
                                    <span className="sit_wimg_limg1"><img src="http://127.0.0.1/shop/data/item/1770986271/thumb-01jpg_25x25.jpg" width="25" height="25" alt="" /><button type="button" id="it_limg1_view" className="btn_frmline sit_wimg_view">이미지1 확인</button></span>
                                    <div id="limg1" className="banner_or_img sit_wimg">
                                        <img src="http://127.0.0.1/shop/data/item/1770986271/01jpg.jpg" className="shop_item_preview_image" /> <button type="button" className="sit_wimg_close">닫기</button>
                                    </div>
                                    
                                </td>
                            </tr>





                        </tbody>
                    </table>
                </div>
            </section>





            <section id="anc_sitfrm_extra">
                <h2>여분필드 설정</h2>
                <ul className="anchor">
                    <li><a href="#anc_sitfrm_cate">상품분류</a></li>
                    <li><a href="#anc_sitfrm_skin">스킨설정</a></li>
                    <li><a href="#anc_sitfrm_ini">기본정보</a></li>
                    <li><a href="#anc_sitfrm_compact">요약정보</a></li>
                    <li><a href="#anc_sitfrm_cost">가격 및 재고</a></li>
                    <li><a href="#anc_sitfrm_sendcost">배송비</a></li>
                    <li><a href="#anc_sitfrm_img">상품이미지</a></li>
                    <li><a href="#anc_sitfrm_relation">관련상품</a></li>
                    <li><a href="#anc_sitfrm_event">관련이벤트</a></li>
                    <li><a href="#anc_sitfrm_optional">상세설명설정</a></li>
                    <li><a href="#anc_sitfrm_extra">여분필드</a></li>
                </ul>

                <div className="tbl_frm01 tbl_wrap">
                    <table>
                        <colgroup>
                            <col className="grid_4" />
                            <col />
                            
                        </colgroup>
                        <tbody>





                            <tr>
                                <th scope="row">수정일시</th>
                                <td >
                                    <span className="frm_info">상품을 최종 수정한 시간입니다.</span> 2026-02-13 21:40:31
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <div className="btn_fixed_top">
                <a href="./itemlist.php?sst=&amp;sod=&amp;sfl=&amp;stx=&amp;page=1&amp;sca=&amp;page=1" className="btn btn_02">목록</a>
                <a href="http://127.0.0.1/shop/shop/item.php?it_id=1770986271" className="btn_02  btn">상품보기</a>
                <input type="submit" value="확인" className="btn_submit btn" accesskey="s" />
            </div>
        </form>


    </div>
    </>
  )
}
