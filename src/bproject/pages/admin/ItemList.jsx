import React from 'react'

export default function ItemList({title}) {
  return (
    <>
	<h1 id="container_title">{title}</h1>
    <div className="container_wr">
        <div className="local_ov01 local_ov">
            <a href="/shop/adm/shop_admin/itemlist.php" className="ov_listall">전체목록</a> <span className="btn_ov01"><span className="ov_txt">등록된 상품</span><span className="ov_num"> 11건</span></span>
        </div>

        <form name="flist" className="local_sch01 local_sch">
            <input type="hidden" name="save_stx" value="" />

            <label htmlFor="sca" className="sound_only">분류선택</label>
            <select name="sca" id="sca">
                <option value="">전체분류</option>
                <option value="10">남성복</option>
            </select>

            <label htmlFor="sfl" className="sound_only">검색대상</label>
            <select name="sfl" id="sfl">
                <option value="it_name" selected="selected">상품명</option>
                <option value="it_id">상품코드</option>
                <option value="it_maker">제조사</option>
                <option value="it_origin">원산지</option>
                <option value="it_sell_email">판매자 e-mail</option>
            </select>

            <label htmlFor="stx" className="sound_only">검색어</label>
            <input type="text" name="stx" value="" id="stx" className="frm_input" />
            <input type="submit" value="검색" className="btn_submit" />

        </form>

        <form name="fitemlistupdate" method="post" action="./itemlistupdate.php"  autocomplete="off" id="fitemlistupdate">
            <input type="hidden" name="sca" value="" />
            <input type="hidden" name="sst" value="it_id" />
            <input type="hidden" name="sod" value="desc" />
            <input type="hidden" name="sfl" value="it_name" />
            <input type="hidden" name="stx" value="" />
            <input type="hidden" name="page" value="1" />

            <div className="tbl_head01 tbl_wrap">
                <table>
                    <caption>상품관리 목록</caption>
                    <thead>
                        <tr>
                            <th scope="col" rowspan="3">
                                <label htmlFor="chkall" className="sound_only">상품 전체</label>
                                <input type="checkbox" name="chkall" value="1" id="chkall" onclick="check_all(this.form)" />
                            </th>
                            <th scope="col" rowspan="3"><a href="http://127.0.0.1/shop/adm/shop_admin/itemlist.php?sca=&amp;sst=it_id&amp;sod=asc&amp;sfl=it_name&amp;stx=&amp;page=1">상품코드</a></th>
                            <th scope="col" colspan="5">분류</th>
                            <th scope="col" rowspan="3"><a href="http://127.0.0.1/shop/adm/shop_admin/itemlist.php?sca=&amp;sst=it_order&amp;sod=asc&amp;sfl=it_name&amp;stx=&amp;page=1">순서</a></th>
                            <th scope="col" rowspan="3"><a href="http://127.0.0.1/shop/adm/shop_admin/itemlist.php?sca=&amp;sst=it_use&amp;sod=desc&amp;sfl=it_name&amp;stx=&amp;page=1">판매</a></th>
                            <th scope="col" rowspan="3"><a href="http://127.0.0.1/shop/adm/shop_admin/itemlist.php?sca=&amp;sst=it_soldout&amp;sod=desc&amp;sfl=it_name&amp;stx=&amp;page=1">품절</a></th>
                            <th scope="col" rowspan="3"><a href="http://127.0.0.1/shop/adm/shop_admin/itemlist.php?sca=&amp;sst=it_hit&amp;sod=desc&amp;sfl=it_name&amp;stx=&amp;page=1">조회</a></th>
                            <th scope="col" rowspan="3">관리</th>
                        </tr>
                        <tr>
                            <th scope="col" rowspan="2" id="th_img">이미지</th>
                            <th scope="col" rowspan="2" id="th_pc_title"><a href="http://127.0.0.1/shop/adm/shop_admin/itemlist.php?sca=&amp;sst=it_name&amp;sod=asc&amp;sfl=it_name&amp;stx=&amp;page=1">상품명</a></th>
                            <th scope="col" id="th_amt"><a href="http://127.0.0.1/shop/adm/shop_admin/itemlist.php?sca=&amp;sst=it_price&amp;sod=asc&amp;sfl=it_name&amp;stx=&amp;page=1">판매가격</a></th>
                            <th scope="col" id="th_camt"><a href="http://127.0.0.1/shop/adm/shop_admin/itemlist.php?sca=&amp;sst=it_cust_price&amp;sod=asc&amp;sfl=it_name&amp;stx=&amp;page=1">시중가격</a></th>
                            <th scope="col" id="th_skin">PC스킨</th>
                        </tr>
                        <tr>
                            <th scope="col" id="th_pt"><a href="http://127.0.0.1/shop/adm/shop_admin/itemlist.php?sca=&amp;sst=it_point&amp;sod=asc&amp;sfl=it_name&amp;stx=&amp;page=1">포인트</a></th>
                            <th scope="col" id="th_qty"><a href="http://127.0.0.1/shop/adm/shop_admin/itemlist.php?sca=&amp;sst=it_stock_qty&amp;sod=asc&amp;sfl=it_name&amp;stx=&amp;page=1">재고</a></th>
                            <th scope="col" id="th_mskin">모바일스킨</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg0">
                            <td rowspan="3" className="td_chk">
                                <label htmlFor="chk_0" className="sound_only">상품01</label>
                                <input type="checkbox" name="chk[]" value="0" id="chk_0" />
                            </td>
                            <td rowspan="3" className="td_num">
                                <input type="hidden" name="it_id[0]" value="1770986271" />
                                1770986271
                            </td>
                            <td colspan="5" className="td_sort">
                                <label htmlFor="ca_id_0" className="sound_only">상품01 기본분류</label>
                                <select name="ca_id[0]" id="ca_id_0">
                                    <option value="">선택</option>
                                    <option value="10" selected="">남성복</option>
                                </select>
                                <label htmlFor="ca_id2_0" className="sound_only">상품01 2차분류</label>
                                <select name="ca_id2[0]" id="ca_id2_0">
                                    <option value="" selected="">선택</option>
                                    <option value="10">남성복</option>
                                </select>
                                <label htmlFor="ca_id3_0" className="sound_only">상품01 3차분류</label>
                                <select name="ca_id3[0]" id="ca_id3_0">
                                    <option value="" selected="">선택</option>
                                    <option value="10">남성복</option>
                                </select>
                            </td>
                            <td rowspan="3" className="td_num">
                                <label htmlFor="order_0" className="sound_only">순서</label>
                                <input type="text" name="it_order[0]" value="0" id="order_0" className="tbl_input" size="3" />
                            </td>
                            <td rowspan="3">
                                <label htmlFor="use_0" className="sound_only">판매여부</label>
                                <input type="checkbox" name="it_use[0]" checked="" value="1" id="use_0" />
                            </td>
                            <td rowspan="3">
                                <label htmlFor="soldout_0" className="sound_only">품절</label>
                                <input type="checkbox" name="it_soldout[0]" value="1" id="soldout_0" />
                            </td>
                            <td rowspan="3" className="td_num">6</td>
                            <td rowspan="3" className="td_mng td_mng_s">
                                <a href="./itemform.php?w=u&amp;it_id=1770986271&amp;ca_id=10&amp;sst=&amp;sod=&amp;sfl=&amp;stx=&amp;page=&amp;sca=&amp;page=1&amp;save_stx=" className="btn btn_03"><span className="sound_only">상품01 </span>수정</a>
                                <a href="./itemcopy.php?it_id=1770986271&amp;ca_id=10" className="itemcopy btn btn_02" target="_blank"><span className="sound_only">상품01 </span>복사</a>
                                <a href="http://127.0.0.1/shop/shop/item.php?it_id=1770986271" className="btn btn_02"><span className="sound_only">상품01 </span>보기</a>
                            </td>
                        </tr>
                        <tr className="bg0">
                            <td rowspan="2" className="td_img"><a href="http://127.0.0.1/shop/shop/item.php?it_id=1770986271"><img src="http://127.0.0.1/shop/data/item/1770986271/thumb-01jpg_50x50.jpg" width="50" height="50" alt="" title="" /></a></td>
                            <td headers="th_pc_title" rowspan="2" className="td_input">
                                <label htmlFor="name_0" className="sound_only">상품명</label>
                                <input type="text" name="it_name[0]" value="상품01" id="name_0" required="" className="tbl_input required" size="30" />
                            </td>
                            <td headers="th_amt" className="td_numbig td_input">
                                <label htmlFor="price_0" className="sound_only">판매가격</label>
                                <input type="text" name="it_price[0]" value="10000" id="price_0" className="tbl_input sit_amt" size="7" />
                            </td>
                            <td headers="th_camt" className="td_numbig td_input">
                                <label htmlFor="cust_price_0" className="sound_only">시중가격</label>
                                <input type="text" name="it_cust_price[0]" value="10000" id="cust_price_0" className="tbl_input sit_camt" size="7" />
                            </td>
                            <td headers="th_skin" className="td_numbig td_input">
                                <label htmlFor="it_skin_0" className="sound_only">PC 스킨</label>
                                <select id="it_skin_0" name="it_skin[0]">
                                    <option value="">선택</option>
                                    <option value="theme/basic">(테마) basic</option>
                                    <option value="basic">basic</option>
                                </select>
                            </td>
                        </tr>
                        <tr className="bg0">
                            <td headers="th_pt" className="td_numbig td_input">0</td>
                            <td headers="th_qty" className="td_numbig td_input">
                                <label htmlFor="stock_qty_0" className="sound_only">재고</label>
                                <input type="text" name="it_stock_qty[0]" value="99999" id="stock_qty_0" className="tbl_input sit_qty" size="7" />
                            </td>
                            <td headers="th_mskin" className="td_numbig td_input">
                                <label htmlFor="it_mobile_skin_0" className="sound_only">모바일 스킨</label>
                                <select id="it_mobile_skin_0" name="it_mobile_skin[0]">
                                    <option value="">선택</option>
                                    <option value="theme/basic">(테마) basic</option>
                                    <option value="basic">basic</option>
                                </select>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="btn_fixed_top">

                <a href="./itemform.php" className="btn btn_01">상품등록</a>
                <a href="./itemexcel.php" onclick="return excelform(this.href);" target="_blank" className="btn btn_02">상품일괄등록</a>
                <input type="submit" name="act_button" value="선택수정" onclick="document.pressed=this.value" className="btn btn_02" />
                <input type="submit" name="act_button" value="선택삭제" onclick="document.pressed=this.value" className="btn btn_02" />
            </div>
        </form>

        <nav className="pg_wrap"><span className="pg"><span className="sound_only">열린</span><strong className="pg_current">1</strong><span className="sound_only">페이지</span>
                <a href="/shop/adm/shop_admin/itemlist.php?sst=&amp;sod=&amp;sfl=&amp;stx=&amp;sca=&amp;save_stx=&amp;page=2" className="pg_page">2<span className="sound_only">페이지</span></a>
                <a href="/shop/adm/shop_admin/itemlist.php?sst=&amp;sod=&amp;sfl=&amp;stx=&amp;sca=&amp;save_stx=&amp;page=2" className="pg_page pg_end">맨끝</a>
            </span></nav>
        
    </div>
    </>
  )
}
