

export default function MemberList({title}) {
  return (
    <>
	<h1 id="container_title">{title}</h1>
    <div className="container_wr">
        <div className="local_ov01 local_ov">
            <a href="/shop/adm/member_list.php" className="ov_listall">전체목록</a> <span className="btn_ov01"><span className="ov_txt">총회원수 </span><span className="ov_num"> 4명 </span></span>
            <a href="?sst=mb_intercept_date&amp;sod=desc&amp;sfl=&amp;stx=" className="btn_ov01" data-tooltip-text="차단된 순으로 정렬합니다.
    전체 데이터를 출력합니다."> <span className="ov_txt">차단 </span><span className="ov_num">0명</span></a>
            <a href="?sst=mb_leave_date&amp;sod=desc&amp;sfl=&amp;stx=" className="btn_ov01" data-tooltip-text="탈퇴된 순으로 정렬합니다.
    전체 데이터를 출력합니다."> <span className="ov_txt">탈퇴 </span><span className="ov_num">0명</span></a>
        </div>

        <form id="fsearch" name="fsearch" className="local_sch01 local_sch" method="get">

            <label htmlFor="sfl" className="sound_only">검색대상</label>
            <select name="sfl" id="sfl">
                <option value="mb_id">회원아이디</option>
                <option value="mb_nick">닉네임</option>
                <option value="mb_name">이름</option>
                <option value="mb_level">권한</option>
                <option value="mb_email">E-MAIL</option>
                <option value="mb_tel">전화번호</option>
                <option value="mb_hp">휴대폰번호</option>
                <option value="mb_point">포인트</option>
                <option value="mb_datetime">가입일시</option>
                <option value="mb_ip">IP</option>
                <option value="mb_recommend">추천인</option>
            </select>
            <label htmlFor="stx" className="sound_only">검색어<strong className="sound_only"> 필수</strong></label>
            <input type="text" name="stx" value="" id="stx" required="" className="required frm_input" />
            <input type="submit" className="btn_submit" value="검색" />

        </form>

        <form name="fmemberlist" id="fmemberlist" action="./member_list_update.php"  method="post">
            <input type="hidden" name="sst" value="mb_datetime" />
            <input type="hidden" name="sod" value="desc" />
            <input type="hidden" name="sfl" value="" />
            <input type="hidden" name="stx" value="" />
            <input type="hidden" name="page" value="1" />
            <input type="hidden" name="token" value="" />

            <div className="tbl_head01 tbl_wrap">
                <table>
                    <caption>회원관리 목록</caption>
                    <thead>
                        <tr>
                            <th scope="col" id="mb_list_chk" >
                                <label htmlFor="chkall" className="sound_only">회원 전체</label>
                                <input type="checkbox" name="chkall" value="1" id="chkall"  />
                            </th>
                            <th scope="col" id="mb_list_id" colspan="2"><a href="http://127.0.0.1/shop/adm/member_list.php?sst=mb_id&amp;sod=asc&amp;sfl=&amp;stx=&amp;sca=&amp;page=1">아이디</a></th>

                            <th scope="col" id="mb_list_name"><a href="http://127.0.0.1/shop/adm/member_list.php?sst=mb_name&amp;sod=asc&amp;sfl=&amp;stx=&amp;sca=&amp;page=1">이름</a></th>

                            <th scope="col" id="mb_list_name"><a href="http://127.0.0.1/shop/adm/member_list.php?sst=mb_name&amp;sod=asc&amp;sfl=&amp;stx=&amp;sca=&amp;page=1">전화번호</a></th>

                            <th scope="col" id="mb_list_name"><a href="http://127.0.0.1/shop/adm/member_list.php?sst=mb_name&amp;sod=asc&amp;sfl=&amp;stx=&amp;sca=&amp;page=1">휴대번호</a></th>

                            <th scope="col" id="mb_list_name"><a href="http://127.0.0.1/shop/adm/member_list.php?sst=mb_name&amp;sod=asc&amp;sfl=&amp;stx=&amp;sca=&amp;page=1">이메일</a></th>

                            <th scope="col" id="mb_list_name"><a href="http://127.0.0.1/shop/adm/member_list.php?sst=mb_name&amp;sod=asc&amp;sfl=&amp;stx=&amp;sca=&amp;page=1">포인트</a></th>
                            <th scope="col"  id="mb_list_mng">관리</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr className="bg0">
                            <td headers="mb_list_chk" className="td_chk" rowspan="2">
                                <input type="hidden" name="mb_id[0]" value="chk01" id="mb_id_0" />
                            </td>
                            <td className="td_name sv_use">chk01 </td>
                            <td className="td_mbname">chk01 </td>
                            <td className="td_tel">010-1111-1111</td>
                            <td className="td_tel">010-1111-1111</td>
                            <td className="td_date">26-02-13</td>
                            <td className="td_date">26-02-13</td>
                            <td className="td_num"><a href="point_list.php?sfl=mb_id&amp;stx=chk01">1,200</a></td>
                            <td className="td_mng td_mng_s"><a href="./member_form.php?sst=&amp;sod=&amp;sfl=&amp;stx=&amp;page=&amp;w=u&amp;mb_id=chk01" class="btn btn_03">수정</a></td>

                        </tr>

                    </tbody>
                </table>
            </div>

            <div className="btn_fixed_top">
                <input type="submit" name="act_button" value="선택수정"  className="btn btn_02" />
                <input type="submit" name="act_button" value="선택삭제"  className="btn btn_02" />
                <a href="./member_form.php" id="member_add" className="btn btn_01">회원추가</a>

            </div>


        </form>
    </div>
    </>
  )
}
