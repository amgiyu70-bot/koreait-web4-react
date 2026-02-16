

export default function MemberEdit({title}) {
  return (
    <>
	<h1 id="container_title">{title}</h1>
    <div className="container_wr">
        <form name="fmember" id="fmember" action="./member_form_update.php"  method="post">
            <input type="hidden" name="w" value="u" />
            <input type="hidden" name="sfl" value="" />
            <input type="hidden" name="stx" value="" />
            <input type="hidden" name="sst" value="" />
            <input type="hidden" name="sod" value="" />
            <input type="hidden" name="page" value="0" />
            <input type="hidden" name="token" value="" />

            <div className="tbl_frm01 tbl_wrap">
                <table>
                    <caption>회원 수정</caption>
                    <colgroup>
                        <col className="grid_4" />
                        <col />
                        <col className="grid_4" />
                        <col />
                    </colgroup>
                    <tbody>
                        <tr>
                            <th scope="row"><label htmlFor="mb_id">아이디</label></th>
                            <td>
                                <input type="text" name="mb_id" value="chk01" id="mb_id"  className="frm_input " size="15" maxLength={20} /> 
                                <a href="./boardgroupmember_form.php?mb_id=chk01" className="btn_frmline">접근가능그룹보기</a>
                            </td>
                            <th scope="row"><label htmlFor="mb_password">비밀번호</label></th>
                            <td>
                                <div>
                                    <input type="password" name="mb_password" id="mb_password" className="frm_input " size="15" maxLength={20} />
                                </div>
                            
                            </td>
                        </tr>
                        <tr>
                            <th scope="row"><label htmlFor="mb_name">이름(실명)<strong className="sound_only">필수</strong></label></th>
                            <td><input type="text" name="mb_name" value="홍길삼" id="mb_name"  className="required frm_input" size="15" maxLength={20} /></td>
                            <th scope="row"><label htmlFor="mb_nick">닉네임<strong className="sound_only">필수</strong></label></th>
                            <td><input type="text" name="mb_nick" value="홍길삼" id="mb_nick"  className="required frm_input" size="15" maxLength={20} /></td>
                        </tr>
                        <tr>
                            <th scope="row"><label htmlFor="mb_level">회원 권한</label></th>
                            <td>
                                <select id="mb_level" name="mb_level">
                                    <option value="1">1</option>
                                    <option value="2" selected="selected">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                </select>
                            </td>
                            <th scope="row">포인트</th>
                            <td><a href="./point_list.php?sfl=mb_id&amp;stx=chk01" target="_blank">1,200</a> 점</td>
                        </tr>
                        <tr>
                            <th scope="row"><label htmlFor="mb_email">E-mail<strong className="sound_only">필수</strong></label></th>
                            <td><input type="text" name="mb_email" value="chk012@test.com" id="mb_email" maxLength={100}  className="required frm_input email" size="30" /></td>
                            <th scope="row"><label htmlFor="mb_homepage">홈페이지</label></th>
                            <td><input type="text" name="mb_homepage" value="" id="mb_homepage" className="frm_input" maxLength={255} size="15" /></td>
                        </tr>
                        <tr>
                            <th scope="row"><label htmlFor="mb_hp">휴대폰번호</label></th>
                            <td><input type="text" name="mb_hp" value="010-1111-1111" id="mb_hp" className="frm_input" size="15" maxLength={20} /></td>
                            <th scope="row"><label htmlFor="mb_tel">전화번호</label></th>
                            <td><input type="text" name="mb_tel" value="010-1111-1111" id="mb_tel" className="frm_input" size="15" maxLength={20} /></td>
                        </tr>


                        <tr>
                            <th scope="row">주소</th>
                            <td colspan="3" className="td_addr_line">
                                <label htmlFor="mb_zip" className="sound_only">우편번호</label>
                                <input type="text" name="mb_zip" value="47215" id="mb_zip" className="frm_input readonly" size="5" maxLength={6} />
                                <button type="button" className="btn_frmline" onclick="win_zip('fmember', 'mb_zip', 'mb_addr1', 'mb_addr2', 'mb_addr3', 'mb_addr_jibeon');">주소 검색</button><br />
                                <input type="text" name="mb_addr1" value="부산 부산진구 거제대로 1" id="mb_addr1" className="frm_input readonly" size="60" />
                                <label htmlFor="mb_addr1">기본주소</label><br />
                                <input type="text" name="mb_addr2" value="11111" id="mb_addr2" className="frm_input" size="60" />
                                <label htmlFor="mb_addr2">상세주소</label>
                                <br />
                                <input type="text" name="mb_addr3" value="(양정동)" id="mb_addr3" className="frm_input" size="60" />
                                <label htmlFor="mb_addr3">참고항목</label>
                                <input type="hidden" name="mb_addr_jibeon" value="R" /><br />
                            </td>
                        </tr>





                        <tr>
                            <th scope="row"><label htmlFor="mb_memo">메모</label></th>
                            <td colspan="3"><textarea name="mb_memo" id="mb_memo"></textarea></td>
                        </tr>


                        <tr>
                            <th scope="row">회원가입일</th>
                            <td>2026-02-13 21:20:43</td>
                            <th scope="row">최근접속일</th>
                            <td>2026-02-15 19:59:03</td>
                        </tr>
                        <tr>
                            <th scope="row">IP</th>
                            <td colspan="3">127.0.0.1</td>
                        </tr>


                        <tr>
                            <th scope="row"><label htmlFor="mb_leave_date">탈퇴일자</label></th>
                            <td>
                                <input type="text" name="mb_leave_date" value="" id="mb_leave_date" className="frm_input" maxLength={8} />
                                <input type="checkbox" value="20260216" id="mb_leave_date_set_today" />
                                <label htmlFor="mb_leave_date_set_today">탈퇴일을 오늘로 지정</label>
                            </td>
                            <th scope="row">접근차단일자</th>
                            <td>
                                <input type="text" name="mb_intercept_date" value="" id="mb_intercept_date" className="frm_input" maxLength={8} /> 
                                <input type="checkbox" value="20260216" id="mb_intercept_date_set_today" />
                                <label htmlFor="mb_intercept_date_set_today">접근차단일을 오늘로 지정</label>
                            </td>
                        </tr>





                    </tbody>
                </table>
            </div>

            <div className="btn_fixed_top">
                <a href="./member_list.php?sst=&amp;sod=&amp;sfl=&amp;stx=&amp;page=0" className="btn btn_02">목록</a>
                <input type="submit" value="확인" className="btn_submit btn" accesskey="s" />
            </div>
        </form>

        
    </div>
    </>
  )
}
