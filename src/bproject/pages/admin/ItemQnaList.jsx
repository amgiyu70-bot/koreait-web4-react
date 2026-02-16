

export default function ItemQnaList({title}) {
  return (
    <>
	<h1 id="container_title">{title}</h1>
    <div className="container_wr">
        <div className="local_ov01 local_ov">
            <a href="/shop/adm/shop_admin/itemqalist.php" className="ov_listall">전체목록</a> <span className="btn_ov01"><span className="ov_txt"> 전체 문의내역</span><span className="ov_num"> 1건</span></span>
        </div>

        <form name="flist" className="local_sch01 local_sch">
            <input type="hidden" name="page" value="1" />
            <input type="hidden" name="save_stx" value="" />

            <label htmlFor="sca" className="sound_only">분류선택</label>
            <select name="sca" id="sca">
                <option value="">전체분류</option>
                <option value="10">남성복</option>
            </select>

            <label htmlFor="sfl" className="sound_only">검색대상</label>
            <select name="sfl" id="sfl">
                <option value="it_name" selected="selected">상품명</option>
                <option value="a.it_id">상품코드</option>
            </select>

            <label htmlFor="stx" className="sound_only">검색어<strong className="sound_only"> 필수</strong></label>
            <input type="text" name="stx" value="" id="stx" required="" className="frm_input required" />
            <input type="submit" value="검색" className="btn_submit" />

        </form>

        <form name="fitemqalist" method="post" action="./itemqalistupdate.php" onsubmit="return fitemqalist_submit(this);" autocomplete="off">
            <input type="hidden" name="sca" value="" />
            <input type="hidden" name="sst" value="iq_id" />
            <input type="hidden" name="sod" value="desc" />
            <input type="hidden" name="sfl" value="it_name" />
            <input type="hidden" name="stx" value="" />
            <input type="hidden" name="page" value="1" />

            <div className="tbl_head01 tbl_wrap" id="itemqalist">
                <table>
                    <caption>상품문의 목록</caption>
                    <thead>
                        <tr>
                            <th scope="col">
                                <label htmlFor="chkall" className="sound_only">상품문의 전체</label>
                                <input type="checkbox" name="chkall" value="1" id="chkall" onclick="check_all(this.form)" />
                            </th>
                            <th scope="col"><a href="http://127.0.0.1/shop/adm/shop_admin/itemqalist.php?sst=it_name&amp;sod=asc&amp;sfl=it_name&amp;stx=&amp;sca=&amp;page=1">상품명</a></th>
                            <th scope="col"><a href="http://127.0.0.1/shop/adm/shop_admin/itemqalist.php?sst=iq_subject&amp;sod=asc&amp;sfl=it_name&amp;stx=&amp;sca=&amp;page=1">질문</a></th>
                            <th scope="col"><a href="http://127.0.0.1/shop/adm/shop_admin/itemqalist.php?sst=mb_name&amp;sod=asc&amp;sfl=it_name&amp;stx=&amp;sca=&amp;page=1">이름</a></th>
                            <th scope="col"><a href="http://127.0.0.1/shop/adm/shop_admin/itemqalist.php?sst=iq_answer&amp;sod=asc&amp;sfl=it_name&amp;stx=&amp;sca=&amp;page=1">답변</a></th>
                            <th scope="col">관리</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg0">
                            <td className="td_chk">
                                <label htmlFor="chk_0" className="sound_only">상품문의 입니다. 상품문의</label>
                                <input type="checkbox" name="chk[]" value="0" id="chk_0" />
                                <input type="hidden" name="iq_id[0]" value="1" />
                            </td>
                            <td className="td_left"><a href="http://127.0.0.1/shop/shop/item.php?it_id=1770986271"><img src="http://127.0.0.1/shop/data/item/1770986271/thumb-01jpg_50x50.jpg" width="50" height="50" alt="" title="" /> 상품01</a></td>
                            <td className="td_left">
                                <a href="#" className="qa_href" onclick="return false;" target="0">상품문의 입니다. <span className="tit_op">열기</span></a>
                                <div id="qa_div0" className="qa_div" >
                                    <div className="qa_q">
                                        <strong>문의내용</strong>

                                        <p>상품문의 입니다.</p>
                                        <p>상품문의 입니다.</p>
                                        <p>상품문의 입니다.</p>
                                    </div>
                                    <div className="qa_a">
                                        <strong>답변</strong>
                                        답변이 등록되지 않았습니다.
                                    </div>
                                </div>
                            </td>
                            <td className="td_name"><span className="sv_wrap"><a href="http://127.0.0.1/shop/bbs/profile.php?mb_id=chk01" className="sv_member" title="홍길삼 자기소개" target="_blank" rel="nofollow" onclick="return false;">홍길삼</a><span className="sv"><a href="http://127.0.0.1/shop/bbs/memo_form.php?me_recv_mb_id=chk01" rel="nofollow" onclick="win_memo(this.href); return false;">쪽지보내기</a>
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
                            <td className="td_boolean">&nbsp;</td>
                            <td className="td_mng td_mng_s">
                                <a href="./itemqaform.php?w=u&amp;iq_id=1&amp;sst=&amp;sod=&amp;sfl=&amp;stx=&amp;page=&amp;sca=&amp;save_stx=" className="btn btn_03"><span className="sound_only">상품문의 입니다. </span>수정</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="btn_fixed_top">
                <input type="submit" name="act_button" value="선택삭제" onclick="document.pressed=this.value" className="btn btn_02" />
            </div>
        </form>
    </div>
    </>
  )
}
