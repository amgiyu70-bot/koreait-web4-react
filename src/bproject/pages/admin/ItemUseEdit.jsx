import React from 'react'

export default function ItemUseEdit({title}) {
  return (
    <>
	<h1 id="container_title">{title}</h1>
    <div className="container_wr">
        <form name="fitemuseform" method="post" action="./itemuseformupdate.php" onsubmit="return fitemuseform_submit(this);">
            <input type="hidden" name="w" value="u" />
            <input type="hidden" name="is_id" value="2" />
            <input type="hidden" name="it_id" value="1770986271" />
            <input type="hidden" name="sca" value="" />
            <input type="hidden" name="sst" value="is_id" />
            <input type="hidden" name="sod" value="desc" />
            <input type="hidden" name="sfl" value="a.it_name" />
            <input type="hidden" name="stx" value="" />
            <input type="hidden" name="page" value="1" />
            <div className="tbl_frm01 tbl_wrap">
                <table>
                    <caption>사용후기 수정</caption>
                    <colgroup>
                        <col className="grid_4" />
                        <col />
                    </colgroup>
                    <tbody>
                        <tr>
                            <th scope="row">상품명</th>
                            <td><a href="http://127.0.0.1/shop/shop/item.php?it_id=1770986271">상품01</a></td>
                        </tr>
                        <tr>
                            <th scope="row">이름</th>
                            <td><span className="sv_wrap"><a href="http://127.0.0.1/shop/bbs/profile.php?mb_id=chk01" className="sv_member" title="홍길삼 자기소개" target="_blank" rel="nofollow" onclick="return false;">홍길삼</a><span className="sv"><a href="http://127.0.0.1/shop/bbs/memo_form.php?me_recv_mb_id=chk01" rel="nofollow" onclick="win_memo(this.href); return false;">쪽지보내기</a>
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
                        </tr>
                        <tr>
                            <th scope="row">평점</th>
                            <td><img src="http://127.0.0.1/shop/shop/img/s_star4.png" width="100" /> (4점)</td>
                        </tr>
                        <tr>
                            <th scope="row"><label htmlFor="is_subject">제목</label></th>
                            <td><input type="text" name="is_subject" required="" className="required frm_input" id="is_subject" size="100" value="상품 좋아요" /></td>
                        </tr>
                        <tr>
                            <th scope="row">내용</th>
                            <td></td>

                        </tr>


                        <tr>
                            <th scope="row">확인</th>
                            <td>
                                <input type="radio" name="is_confirm" value="1" id="is_confirm_yes" />
                                <label htmlFor="is_confirm_yes">예</label>
                                <input type="radio" name="is_confirm" value="0" id="is_confirm_no" checked="checked" />
                                <label htmlFor="is_confirm_no">아니오</label>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="btn_fixed_top">
                <a href="./itemuselist.php?sst=is_id&amp;sod=desc&amp;sfl=a.it_name&amp;stx=&amp;page=1&amp;sca=" className="btn_02 btn">목록</a>
                <input type="submit" value="확인" className="btn_submit btn" accesskey="s" />
            </div>
        </form>
    </div>
    </>
  )
}
