import { useParams } from "react-router-dom";


export default function ItemQnaEdit({title}) {
    console.log(useParams());
  return (
    <>
	<h1 id="container_title">{title}</h1>
    <div className="container_wr">
        <form name="fitemqaform" method="post" action="./itemqaformupdate.php" onsubmit="return fitemqaform_submit(this);">
            <input type="hidden" name="w" value="u" />
            <input type="hidden" name="iq_id" value="1" />
            <input type="hidden" name="sca" value="" />
            <input type="hidden" name="sst" value="" />
            <input type="hidden" name="sod" value="" />
            <input type="hidden" name="sfl" value="" />
            <input type="hidden" name="stx" value="" />
            <input type="hidden" name="page" value="0" />

            <div className="local_desc01 local_desc">
                <p>상품에 대한 문의에 답변하실 수 있습니다. 상품 문의 내용의 수정도 가능합니다.</p>
            </div>

            <div className="tbl_frm01 tbl_wrap">
                <table>
                    <caption>상품문의 수정</caption>
                    <colgroup>
                        <col className="grid_4" />
                        <col />
                    </colgroup>
                    <tbody>
                        <tr>
                            <th scope="row">이름</th>
                            <td><span className="sv_wrap"><a href="http://127.0.0.1/shop/bbs/profile.php?mb_id=chk01" className="sv_member" title="홍길삼 자기소개" target="_blank" rel="nofollow" onclick="return false;"> 홍길삼</a><span className="sv"><a href="http://127.0.0.1/shop/bbs/memo_form.php?me_recv_mb_id=chk01" rel="nofollow" onclick="win_memo(this.href); return false;">쪽지보내기</a>
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
                            <th scope="row">이메일</th>
                            <td>chk012@test.com</td>
                        </tr>
                        <tr>
                            <th scope="row">휴대폰</th>
                            <td>010-1111-1111</td>
                        </tr>
                        <tr>
                            <th scope="row"><label htmlFor="iq_subject">제목</label></th>
                            <td><input type="text" name="iq_subject" value="상품문의 입니다." id="iq_subject"  className="frm_input required" size="95" /></td>
                        </tr>
                        <tr>
                            <th scope="row"><label htmlFor="iq_question">질문</label></th>
                            <td><textarea name="iq_question" id="iq_question" rows="7"></textarea></td>

                        </tr>
                        <tr>
                            <th scope="row"><label htmlFor="iq_answer">답변</label></th>

                            <td><textarea name="iq_answer" id="iq_answer" rows="7"></textarea></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="btn_fixed_top">
                <a href="./itemqalist.php?sst=&amp;sod=&amp;sfl=&amp;stx=&amp;page=0&amp;sca=" className="btn btn_02">목록</a>
                <input type="submit" accesskey="s" value="확인" className="btn_submit btn" />
            </div>
        </form>
    </div>
    </>
  )
}
