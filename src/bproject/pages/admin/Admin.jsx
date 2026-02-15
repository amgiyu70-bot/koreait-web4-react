
export default function Admin({title}) {
  return (    
    <>    
	<h1 id="container_title">{title}</h1>     	  
	<div className="container_wr">
		<section>
			<h2>신규가입회원 5건 목록</h2>
			<div className="local_desc02 local_desc">
				총회원수 4명 중 차단 0명, 탈퇴 : 0명
			</div>

			<div className="tbl_head01 tbl_wrap">
				<table>
					<caption>신규가입회원</caption>
					<thead>
						<tr>
							<th scope="col">회원아이디</th>
							<th scope="col">이름</th>
							<th scope="col">닉네임</th>
							<th scope="col">권한</th>
							<th scope="col">포인트</th>
							<th scope="col">수신</th>
							<th scope="col">공개</th>
							<th scope="col">인증</th>
							<th scope="col">차단</th>
							<th scope="col">그룹</th>
						</tr>
					</thead>
					<tbody>
												<tr>
								<td className="td_mbid">chk01</td>
								<td className="td_mbname">홍길삼</td>
								<td className="td_mbname sv_use">
									<div><span className="sv_wrap"><a href="http://127.0.0.1/shop/bbs/profile.php?mb_id=chk01" className="sv_member" title="홍길삼 자기소개" target="_blank" rel="nofollow" onclick="return false;"><span className="profile_img"><img src="http://127.0.0.1/shop/img/no_profile.gif" alt="no_profile" width="22" height="22" title="" /></span> 홍길삼</a><span className="sv"><a href="http://127.0.0.1/shop/bbs/memo_form.php?me_recv_mb_id=chk01" rel="nofollow" onclick="win_memo(this.href); return false;">쪽지보내기</a>
	<a href="http://127.0.0.1/shop/bbs/formmail.php?mb_id=chk01&amp;name=%ED%99%8D%EA%B8%B8%EC%82%BC&amp;email=mJyiaZeUctbJo9aQxqWl" onclick="win_email(this.href); return false;" rel="nofollow">메일보내기</a>
	<a href="http://127.0.0.1/shop/bbs/profile.php?mb_id=chk01" onclick="win_profile(this.href); return false;" rel="nofollow">자기소개</a>
	<a href="http://127.0.0.1/shop/bbs/new.php?mb_id=chk01" className="link_new_page" onclick="check_goto_new(this.href, event);" rel="nofollow">전체게시물</a>
	<a href="http://127.0.0.1/shop/adm/member_form.php?w=u&amp;mb_id=chk01" target="_blank" rel="nofollow">회원정보변경</a>
	<a href="http://127.0.0.1/shop/adm/point_list.php?sfl=mb_id&amp;stx=chk01" target="_blank" rel="nofollow">포인트내역</a></span><noscript className="sv_nojs"><span className="sv"><a href="http://127.0.0.1/shop/bbs/memo_form.php?me_recv_mb_id=chk01" rel="nofollow" onclick="win_memo(this.href); return false;">쪽지보내기</a>
	<a href="http://127.0.0.1/shop/bbs/formmail.php?mb_id=chk01&amp;name=%ED%99%8D%EA%B8%B8%EC%82%BC&amp;email=mJyiaZeUctbJo9aQxqWl" onclick="win_email(this.href); return false;" rel="nofollow">메일보내기</a>
	<a href="http://127.0.0.1/shop/bbs/profile.php?mb_id=chk01" onclick="win_profile(this.href); return false;" rel="nofollow">자기소개</a>
	<a href="http://127.0.0.1/shop/bbs/new.php?mb_id=chk01" className="link_new_page" onclick="check_goto_new(this.href, event);" rel="nofollow">전체게시물</a>
	<a href="http://127.0.0.1/shop/adm/member_form.php?w=u&amp;mb_id=chk01" target="_blank" rel="nofollow">회원정보변경</a>
	<a href="http://127.0.0.1/shop/adm/point_list.php?sfl=mb_id&amp;stx=chk01" target="_blank" rel="nofollow">포인트내역</a></span></noscript></span></div>
								</td>
								<td className="td_num">2</td>
								<td><a href="./point_list.php?sfl=mb_id&amp;stx=chk01">1,200</a></td>
								<td className="td_boolean">아니오</td>
								<td className="td_boolean">예</td>
								<td className="td_boolean">예</td>
								<td className="td_boolean">아니오</td>
								<td className="td_category"></td>
							</tr>
													<tr>
								<td className="td_mbid">test01</td>
								<td className="td_mbname">홍길일</td>
								<td className="td_mbname sv_use">
									<div><span className="sv_wrap"><a href="http://127.0.0.1/shop/bbs/profile.php?mb_id=test01" className="sv_member" title="홍길일 자기소개" target="_blank" rel="nofollow" onclick="return false;"><span className="profile_img"><img src="http://127.0.0.1/shop/img/no_profile.gif" alt="no_profile" width="22" height="22" title="" /></span> 홍길일</a><span className="sv"><a href="http://127.0.0.1/shop/bbs/memo_form.php?me_recv_mb_id=test01" rel="nofollow" onclick="win_memo(this.href); return false;">쪽지보내기</a>
	<a href="http://127.0.0.1/shop/bbs/formmail.php?mb_id=test01&amp;name=%ED%99%8D%EA%B8%B8%EC%9D%BC&amp;email=mJyirNnVpaLYldWQxqWl" onclick="win_email(this.href); return false;" rel="nofollow">메일보내기</a>
	<a href="http://127.0.0.1/shop/bbs/profile.php?mb_id=test01" onclick="win_profile(this.href); return false;" rel="nofollow">자기소개</a>
	<a href="http://127.0.0.1/shop/bbs/new.php?mb_id=test01" className="link_new_page" onclick="check_goto_new(this.href, event);" rel="nofollow">전체게시물</a>
	<a href="http://127.0.0.1/shop/adm/member_form.php?w=u&amp;mb_id=test01" target="_blank" rel="nofollow">회원정보변경</a>
	<a href="http://127.0.0.1/shop/adm/point_list.php?sfl=mb_id&amp;stx=test01" target="_blank" rel="nofollow">포인트내역</a></span><noscript className="sv_nojs"><span className="sv"><a href="http://127.0.0.1/shop/bbs/memo_form.php?me_recv_mb_id=test01" rel="nofollow" onclick="win_memo(this.href); return false;">쪽지보내기</a>
	<a href="http://127.0.0.1/shop/bbs/formmail.php?mb_id=test01&amp;name=%ED%99%8D%EA%B8%B8%EC%9D%BC&amp;email=mJyirNnVpaLYldWQxqWl" onclick="win_email(this.href); return false;" rel="nofollow">메일보내기</a>
	<a href="http://127.0.0.1/shop/bbs/profile.php?mb_id=test01" onclick="win_profile(this.href); return false;" rel="nofollow">자기소개</a>
	<a href="http://127.0.0.1/shop/bbs/new.php?mb_id=test01" className="link_new_page" onclick="check_goto_new(this.href, event);" rel="nofollow">전체게시물</a>
	<a href="http://127.0.0.1/shop/adm/member_form.php?w=u&amp;mb_id=test01" target="_blank" rel="nofollow">회원정보변경</a>
	<a href="http://127.0.0.1/shop/adm/point_list.php?sfl=mb_id&amp;stx=test01" target="_blank" rel="nofollow">포인트내역</a></span></noscript></span></div>
								</td>
								<td className="td_num">2</td>
								<td><a href="./point_list.php?sfl=mb_id&amp;stx=test01">1,000</a></td>
								<td className="td_boolean">아니오</td>
								<td className="td_boolean">예</td>
								<td className="td_boolean">예</td>
								<td className="td_boolean">아니오</td>
								<td className="td_category"></td>
							</tr>
													<tr>
								<td className="td_mbid">test</td>
								<td className="td_mbname">테스트</td>
								<td className="td_mbname sv_use">
									<div><span className="sv_wrap"><a href="http://127.0.0.1/shop/bbs/profile.php?mb_id=test" className="sv_member" title="테스트 자기소개" target="_blank" rel="nofollow" onclick="return false;"><span className="profile_img"><img src="http://127.0.0.1/shop/img/no_profile.gif" alt="no_profile" width="22" height="22" /></span> 테스트</a><span className="sv"><a href="http://127.0.0.1/shop/bbs/memo_form.php?me_recv_mb_id=test" rel="nofollow" onclick="win_memo(this.href); return false;">쪽지보내기</a>
	<a href="http://127.0.0.1/shop/bbs/formmail.php?mb_id=test&amp;name=%ED%85%8C%EC%8A%A4%ED%8A%B8&amp;email=mqGYotKiptXYXsXR0A--" onclick="win_email(this.href); return false;" rel="nofollow">메일보내기</a>
	<a href="http://127.0.0.1/shop/bbs/profile.php?mb_id=test" onclick="win_profile(this.href); return false;" rel="nofollow">자기소개</a>
	<a href="http://127.0.0.1/shop/bbs/new.php?mb_id=test" className="link_new_page" onclick="check_goto_new(this.href, event);" rel="nofollow">전체게시물</a>
	<a href="http://127.0.0.1/shop/adm/member_form.php?w=u&amp;mb_id=test" target="_blank" rel="nofollow">회원정보변경</a>
	<a href="http://127.0.0.1/shop/adm/point_list.php?sfl=mb_id&amp;stx=test" target="_blank" rel="nofollow">포인트내역</a></span><noscript className="sv_nojs"><span className="sv"><a href="http://127.0.0.1/shop/bbs/memo_form.php?me_recv_mb_id=test" rel="nofollow" onclick="win_memo(this.href); return false;">쪽지보내기</a>
	<a href="http://127.0.0.1/shop/bbs/formmail.php?mb_id=test&amp;name=%ED%85%8C%EC%8A%A4%ED%8A%B8&amp;email=mqGYotKiptXYXsXR0A--" onclick="win_email(this.href); return false;" rel="nofollow">메일보내기</a>
	<a href="http://127.0.0.1/shop/bbs/profile.php?mb_id=test" onclick="win_profile(this.href); return false;" rel="nofollow">자기소개</a>
	<a href="http://127.0.0.1/shop/bbs/new.php?mb_id=test" className="link_new_page" onclick="check_goto_new(this.href, event);" rel="nofollow">전체게시물</a>
	<a href="http://127.0.0.1/shop/adm/member_form.php?w=u&amp;mb_id=test" target="_blank" rel="nofollow">회원정보변경</a>
	<a href="http://127.0.0.1/shop/adm/point_list.php?sfl=mb_id&amp;stx=test" target="_blank" rel="nofollow">포인트내역</a></span></noscript></span></div>
								</td>
								<td className="td_num">2</td>
								<td><a href="./point_list.php?sfl=mb_id&amp;stx=test">1,000</a></td>
								<td className="td_boolean">아니오</td>
								<td className="td_boolean">예</td>
								<td className="td_boolean">예</td>
								<td className="td_boolean">아니오</td>
								<td className="td_category"></td>
							</tr>
													<tr>
								<td className="td_mbid">admin</td>
								<td className="td_mbname">최고관리자</td>
								<td className="td_mbname sv_use">
									<div><span className="sv_wrap"><a href="http://127.0.0.1/shop/bbs/profile.php?mb_id=admin" className="sv_member" title="최고관리자 자기소개" target="_blank" rel="nofollow" onclick="return false;"><span className="profile_img"><img src="http://127.0.0.1/shop/img/no_profile.gif" alt="no_profile" width="22" height="22" /></span> 최고관리자</a><span className="sv"><a href="http://127.0.0.1/shop/bbs/memo_form.php?me_recv_mb_id=admin" rel="nofollow" onclick="win_memo(this.href); return false;">쪽지보내기</a>
	<a href="http://127.0.0.1/shop/bbs/formmail.php?mb_id=admin&amp;name=%EC%B5%9C%EA%B3%A0%EA%B4%80%EB%A6%AC%EC%9E%90&amp;email=lpikotSiltHRkcvQkZmnpA--" onclick="win_email(this.href); return false;" rel="nofollow">메일보내기</a>
	<a href="http://127.0.0.1/shop/bbs/profile.php?mb_id=admin" onclick="win_profile(this.href); return false;" rel="nofollow">자기소개</a>
	<a href="http://127.0.0.1/shop/bbs/new.php?mb_id=admin" className="link_new_page" onclick="check_goto_new(this.href, event);" rel="nofollow">전체게시물</a>
	<a href="http://127.0.0.1/shop/adm/member_form.php?w=u&amp;mb_id=admin" target="_blank" rel="nofollow">회원정보변경</a>
	<a href="http://127.0.0.1/shop/adm/point_list.php?sfl=mb_id&amp;stx=admin" target="_blank" rel="nofollow">포인트내역</a></span><noscript className="sv_nojs"><span className="sv"><a href="http://127.0.0.1/shop/bbs/memo_form.php?me_recv_mb_id=admin" rel="nofollow" onclick="win_memo(this.href); return false;">쪽지보내기</a>
	<a href="http://127.0.0.1/shop/bbs/formmail.php?mb_id=admin&amp;name=%EC%B5%9C%EA%B3%A0%EA%B4%80%EB%A6%AC%EC%9E%90&amp;email=lpikotSiltHRkcvQkZmnpA--" onclick="win_email(this.href); return false;" rel="nofollow">메일보내기</a>
	<a href="http://127.0.0.1/shop/bbs/profile.php?mb_id=admin" onclick="win_profile(this.href); return false;" rel="nofollow">자기소개</a>
	<a href="http://127.0.0.1/shop/bbs/new.php?mb_id=admin" className="link_new_page" onclick="check_goto_new(this.href, event);" rel="nofollow">전체게시물</a>
	<a href="http://127.0.0.1/shop/adm/member_form.php?w=u&amp;mb_id=admin" target="_blank" rel="nofollow">회원정보변경</a>
	<a href="http://127.0.0.1/shop/adm/point_list.php?sfl=mb_id&amp;stx=admin" target="_blank" rel="nofollow">포인트내역</a></span></noscript></span></div>
								</td>
								<td className="td_num">10</td>
								<td><a href="./point_list.php?sfl=mb_id&amp;stx=admin">500</a></td>
								<td className="td_boolean">예</td>
								<td className="td_boolean">예</td>
								<td className="td_boolean">예</td>
								<td className="td_boolean">아니오</td>
								<td className="td_category"></td>
							</tr>
											</tbody>
				</table>
			</div>

			<div className="btn_list03 btn_list">
				<a href="./member_list.php">회원 전체보기</a>
			</div>
		</section>

		
		<section>
			<h2>최근게시물</h2>

			<div className="tbl_head01 tbl_wrap">
				<table>
					<caption>최근게시물</caption>
					<thead>
						<tr>
							<th scope="col">그룹</th>
							<th scope="col">게시판</th>
							<th scope="col">제목</th>
							<th scope="col">이름</th>
							<th scope="col">일시</th>
						</tr>
					</thead>
					<tbody>
						<tr><td colSpan="5" className="empty_table">자료가 없습니다.</td></tr>                
                    </tbody>
				</table>
			</div>

			<div className="btn_list03 btn_list">
				<a href="http://127.0.0.1/shop/bbs/new.php">최근게시물 더보기</a>
			</div>
		</section>

		
		<section>
			<h2>최근 포인트 발생내역</h2>
			<div className="local_desc02 local_desc">
				전체 10 건 중 5건 목록
			</div>

			<div className="tbl_head01 tbl_wrap">
				<table>
					<caption>최근 포인트 발생내역</caption>
					<thead>
						<tr>
							<th scope="col">회원아이디</th>
							<th scope="col">이름</th>
							<th scope="col">닉네임</th>
							<th scope="col">일시</th>
							<th scope="col">포인트 내용</th>
							<th scope="col">포인트</th>
							<th scope="col">포인트합</th>
						</tr>
					</thead>
					<tbody>
						
							<tr>
								<td className="td_mbid"><a href="./point_list.php?sfl=mb_id&amp;stx=admin">admin</a></td>
								<td className="td_mbname">최고관리자</td>
								<td className="td_name sv_use">
									<div><span className="sv_wrap"><a href="http://127.0.0.1/shop/bbs/profile.php?mb_id=admin" className="sv_member" title="최고관리자 자기소개" target="_blank" rel="nofollow" onclick="return false;"><span className="profile_img"><img src="http://127.0.0.1/shop/img/no_profile.gif" alt="no_profile" width="22" height="22" /></span> 최고관리자</a><span className="sv"><a href="http://127.0.0.1/shop/bbs/memo_form.php?me_recv_mb_id=admin" rel="nofollow" onclick="win_memo(this.href); return false;">쪽지보내기</a>
	<a href="http://127.0.0.1/shop/bbs/formmail.php?mb_id=admin&amp;name=%EC%B5%9C%EA%B3%A0%EA%B4%80%EB%A6%AC%EC%9E%90&amp;email=lpikotSiltHRkcvQkZmnpA--" onclick="win_email(this.href); return false;" rel="nofollow">메일보내기</a>
	<a href="http://127.0.0.1/shop/bbs/profile.php?mb_id=admin" onclick="win_profile(this.href); return false;" rel="nofollow">자기소개</a>
	<a href="http://127.0.0.1/shop/bbs/new.php?mb_id=admin" className="link_new_page" onclick="check_goto_new(this.href, event);" rel="nofollow">전체게시물</a>
	<a href="http://127.0.0.1/shop/adm/member_form.php?w=u&amp;mb_id=admin" target="_blank" rel="nofollow">회원정보변경</a>
	<a href="http://127.0.0.1/shop/adm/point_list.php?sfl=mb_id&amp;stx=admin" target="_blank" rel="nofollow">포인트내역</a></span><noscript className="sv_nojs"><span className="sv"><a href="http://127.0.0.1/shop/bbs/memo_form.php?me_recv_mb_id=admin" rel="nofollow" onclick="win_memo(this.href); return false;">쪽지보내기</a>
	<a href="http://127.0.0.1/shop/bbs/formmail.php?mb_id=admin&amp;name=%EC%B5%9C%EA%B3%A0%EA%B4%80%EB%A6%AC%EC%9E%90&amp;email=lpikotSiltHRkcvQkZmnpA--" onclick="win_email(this.href); return false;" rel="nofollow">메일보내기</a>
	<a href="http://127.0.0.1/shop/bbs/profile.php?mb_id=admin" onclick="win_profile(this.href); return false;" rel="nofollow">자기소개</a>
	<a href="http://127.0.0.1/shop/bbs/new.php?mb_id=admin" className="link_new_page" onclick="check_goto_new(this.href, event);" rel="nofollow">전체게시물</a>
	<a href="http://127.0.0.1/shop/adm/member_form.php?w=u&amp;mb_id=admin" target="_blank" rel="nofollow">회원정보변경</a>
	<a href="http://127.0.0.1/shop/adm/point_list.php?sfl=mb_id&amp;stx=admin" target="_blank" rel="nofollow">포인트내역</a></span></noscript></span></div>
								</td>
								<td className="td_datetime">2026-02-15 20:47:08</td>
								<td>2026-02-15 첫로그인</td>
								<td className="td_numbig">100</td>
								<td className="td_numbig">500</td>
							</tr>

							
							<tr>
								<td className="td_mbid"><a href="./point_list.php?sfl=mb_id&amp;stx=chk01">chk01</a></td>
								<td className="td_mbname">홍길삼</td>
								<td className="td_name sv_use">
									<div><span className="sv_wrap"><a href="http://127.0.0.1/shop/bbs/profile.php?mb_id=chk01" className="sv_member" title="홍길삼 자기소개" target="_blank" rel="nofollow" onclick="return false;"><span className="profile_img"><img src="http://127.0.0.1/shop/img/no_profile.gif" alt="no_profile" width="22" height="22" /></span> 홍길삼</a><span className="sv"><a href="http://127.0.0.1/shop/bbs/memo_form.php?me_recv_mb_id=chk01" rel="nofollow" onclick="win_memo(this.href); return false;">쪽지보내기</a>
	<a href="http://127.0.0.1/shop/bbs/formmail.php?mb_id=chk01&amp;name=%ED%99%8D%EA%B8%B8%EC%82%BC&amp;email=mJyiaZeUctbJo9aQxqWl" onclick="win_email(this.href); return false;" rel="nofollow">메일보내기</a>
	<a href="http://127.0.0.1/shop/bbs/profile.php?mb_id=chk01" onclick="win_profile(this.href); return false;" rel="nofollow">자기소개</a>
	<a href="http://127.0.0.1/shop/bbs/new.php?mb_id=chk01" className="link_new_page" onclick="check_goto_new(this.href, event);" rel="nofollow">전체게시물</a>
	<a href="http://127.0.0.1/shop/adm/member_form.php?w=u&amp;mb_id=chk01" target="_blank" rel="nofollow">회원정보변경</a>
	<a href="http://127.0.0.1/shop/adm/point_list.php?sfl=mb_id&amp;stx=chk01" target="_blank" rel="nofollow">포인트내역</a></span><noscript className="sv_nojs"><span className="sv"><a href="http://127.0.0.1/shop/bbs/memo_form.php?me_recv_mb_id=chk01" rel="nofollow" onclick="win_memo(this.href); return false;">쪽지보내기</a>
	<a href="http://127.0.0.1/shop/bbs/formmail.php?mb_id=chk01&amp;name=%ED%99%8D%EA%B8%B8%EC%82%BC&amp;email=mJyiaZeUctbJo9aQxqWl" onclick="win_email(this.href); return false;" rel="nofollow">메일보내기</a>
	<a href="http://127.0.0.1/shop/bbs/profile.php?mb_id=chk01" onclick="win_profile(this.href); return false;" rel="nofollow">자기소개</a>
	<a href="http://127.0.0.1/shop/bbs/new.php?mb_id=chk01" className="link_new_page" onclick="check_goto_new(this.href, event);" rel="nofollow">전체게시물</a>
	<a href="http://127.0.0.1/shop/adm/member_form.php?w=u&amp;mb_id=chk01" target="_blank" rel="nofollow">회원정보변경</a>
	<a href="http://127.0.0.1/shop/adm/point_list.php?sfl=mb_id&amp;stx=chk01" target="_blank" rel="nofollow">포인트내역</a></span></noscript></span></div>
								</td>
								<td className="td_datetime">2026-02-15 19:59:03</td>
								<td>2026-02-15 첫로그인</td>
								<td className="td_numbig">100</td>
								<td className="td_numbig">1,200</td>
							</tr>

							
							<tr>
								<td className="td_mbid"><a href="./point_list.php?sfl=mb_id&amp;stx=chk01">chk01</a></td>
								<td className="td_mbname">홍길삼</td>
								<td className="td_name sv_use">
									<div><span className="sv_wrap"><a href="http://127.0.0.1/shop/bbs/profile.php?mb_id=chk01" className="sv_member" title="홍길삼 자기소개" target="_blank" rel="nofollow" onclick="return false;"><span className="profile_img"><img src="http://127.0.0.1/shop/img/no_profile.gif" alt="no_profile" width="22" height="22" /></span> 홍길삼</a><span className="sv"><a href="http://127.0.0.1/shop/bbs/memo_form.php?me_recv_mb_id=chk01" rel="nofollow" onclick="win_memo(this.href); return false;">쪽지보내기</a>
	<a href="http://127.0.0.1/shop/bbs/formmail.php?mb_id=chk01&amp;name=%ED%99%8D%EA%B8%B8%EC%82%BC&amp;email=mJyiaZeUctbJo9aQxqWl" onclick="win_email(this.href); return false;" rel="nofollow">메일보내기</a>
	<a href="http://127.0.0.1/shop/bbs/profile.php?mb_id=chk01" onclick="win_profile(this.href); return false;" rel="nofollow">자기소개</a>
	<a href="http://127.0.0.1/shop/bbs/new.php?mb_id=chk01" className="link_new_page" onclick="check_goto_new(this.href, event);" rel="nofollow">전체게시물</a>
	<a href="http://127.0.0.1/shop/adm/member_form.php?w=u&amp;mb_id=chk01" target="_blank" rel="nofollow">회원정보변경</a>
	<a href="http://127.0.0.1/shop/adm/point_list.php?sfl=mb_id&amp;stx=chk01" target="_blank" rel="nofollow">포인트내역</a></span><noscript className="sv_nojs"><span className="sv"><a href="http://127.0.0.1/shop/bbs/memo_form.php?me_recv_mb_id=chk01" rel="nofollow" onclick="win_memo(this.href); return false;">쪽지보내기</a>
	<a href="http://127.0.0.1/shop/bbs/formmail.php?mb_id=chk01&amp;name=%ED%99%8D%EA%B8%B8%EC%82%BC&amp;email=mJyiaZeUctbJo9aQxqWl" onclick="win_email(this.href); return false;" rel="nofollow">메일보내기</a>
	<a href="http://127.0.0.1/shop/bbs/profile.php?mb_id=chk01" onclick="win_profile(this.href); return false;" rel="nofollow">자기소개</a>
	<a href="http://127.0.0.1/shop/bbs/new.php?mb_id=chk01" className="link_new_page" onclick="check_goto_new(this.href, event);" rel="nofollow">전체게시물</a>
	<a href="http://127.0.0.1/shop/adm/member_form.php?w=u&amp;mb_id=chk01" target="_blank" rel="nofollow">회원정보변경</a>
	<a href="http://127.0.0.1/shop/adm/point_list.php?sfl=mb_id&amp;stx=chk01" target="_blank" rel="nofollow">포인트내역</a></span></noscript></span></div>
								</td>
								<td className="td_datetime">2026-02-14 21:00:25</td>
								<td>2026-02-14 첫로그인</td>
								<td className="td_numbig">100</td>
								<td className="td_numbig">1,100</td>
							</tr>

							
							<tr>
								<td className="td_mbid"><a href="./point_list.php?sfl=mb_id&amp;stx=admin">admin</a></td>
								<td className="td_mbname">최고관리자</td>
								<td className="td_name sv_use">
									<div><span className="sv_wrap"><a href="http://127.0.0.1/shop/bbs/profile.php?mb_id=admin" className="sv_member" title="최고관리자 자기소개" target="_blank" rel="nofollow" onclick="return false;"><span className="profile_img"><img src="http://127.0.0.1/shop/img/no_profile.gif" alt="no_profile" width="22" height="22" /></span> 최고관리자</a><span className="sv"><a href="http://127.0.0.1/shop/bbs/memo_form.php?me_recv_mb_id=admin" rel="nofollow" onclick="win_memo(this.href); return false;">쪽지보내기</a>
	<a href="http://127.0.0.1/shop/bbs/formmail.php?mb_id=admin&amp;name=%EC%B5%9C%EA%B3%A0%EA%B4%80%EB%A6%AC%EC%9E%90&amp;email=lpikotSiltHRkcvQkZmnpA--" onclick="win_email(this.href); return false;" rel="nofollow">메일보내기</a>
	<a href="http://127.0.0.1/shop/bbs/profile.php?mb_id=admin" onclick="win_profile(this.href); return false;" rel="nofollow">자기소개</a>
	<a href="http://127.0.0.1/shop/bbs/new.php?mb_id=admin" className="link_new_page" onclick="check_goto_new(this.href, event);" rel="nofollow">전체게시물</a>
	<a href="http://127.0.0.1/shop/adm/member_form.php?w=u&amp;mb_id=admin" target="_blank" rel="nofollow">회원정보변경</a>
	<a href="http://127.0.0.1/shop/adm/point_list.php?sfl=mb_id&amp;stx=admin" target="_blank" rel="nofollow">포인트내역</a></span><noscript className="sv_nojs"><span className="sv"><a href="http://127.0.0.1/shop/bbs/memo_form.php?me_recv_mb_id=admin" rel="nofollow" onclick="win_memo(this.href); return false;">쪽지보내기</a>
	<a href="http://127.0.0.1/shop/bbs/formmail.php?mb_id=admin&amp;name=%EC%B5%9C%EA%B3%A0%EA%B4%80%EB%A6%AC%EC%9E%90&amp;email=lpikotSiltHRkcvQkZmnpA--" onclick="win_email(this.href); return false;" rel="nofollow">메일보내기</a>
	<a href="http://127.0.0.1/shop/bbs/profile.php?mb_id=admin" onclick="win_profile(this.href); return false;" rel="nofollow">자기소개</a>
	<a href="http://127.0.0.1/shop/bbs/new.php?mb_id=admin" className="link_new_page" onclick="check_goto_new(this.href, event);" rel="nofollow">전체게시물</a>
	<a href="http://127.0.0.1/shop/adm/member_form.php?w=u&amp;mb_id=admin" target="_blank" rel="nofollow">회원정보변경</a>
	<a href="http://127.0.0.1/shop/adm/point_list.php?sfl=mb_id&amp;stx=admin" target="_blank" rel="nofollow">포인트내역</a></span></noscript></span></div>
								</td>
								<td className="td_datetime">2026-02-14 17:08:39</td>
								<td>2026-02-14 첫로그인</td>
								<td className="td_numbig">100</td>
								<td className="td_numbig">400</td>
							</tr>

							
							<tr>
								<td className="td_mbid"><a href="./point_list.php?sfl=mb_id&amp;stx=chk01">chk01</a></td>
								<td className="td_mbname">홍길삼</td>
								<td className="td_name sv_use">
									<div><span className="sv_wrap"><a href="http://127.0.0.1/shop/bbs/profile.php?mb_id=chk01" className="sv_member" title="홍길삼 자기소개" target="_blank" rel="nofollow" onclick="return false;"><span className="profile_img"><img src="http://127.0.0.1/shop/img/no_profile.gif" alt="no_profile" width="22" height="22" /></span> 홍길삼</a><span className="sv"><a href="http://127.0.0.1/shop/bbs/memo_form.php?me_recv_mb_id=chk01" rel="nofollow" onclick="win_memo(this.href); return false;">쪽지보내기</a>
	<a href="http://127.0.0.1/shop/bbs/formmail.php?mb_id=chk01&amp;name=%ED%99%8D%EA%B8%B8%EC%82%BC&amp;email=mJyiaZeUctbJo9aQxqWl" onclick="win_email(this.href); return false;" rel="nofollow">메일보내기</a>
	<a href="http://127.0.0.1/shop/bbs/profile.php?mb_id=chk01" onclick="win_profile(this.href); return false;" rel="nofollow">자기소개</a>
	<a href="http://127.0.0.1/shop/bbs/new.php?mb_id=chk01" className="link_new_page" onclick="check_goto_new(this.href, event);" rel="nofollow">전체게시물</a>
	<a href="http://127.0.0.1/shop/adm/member_form.php?w=u&amp;mb_id=chk01" target="_blank" rel="nofollow">회원정보변경</a>
	<a href="http://127.0.0.1/shop/adm/point_list.php?sfl=mb_id&amp;stx=chk01" target="_blank" rel="nofollow">포인트내역</a></span><noscript className="sv_nojs"><span className="sv"><a href="http://127.0.0.1/shop/bbs/memo_form.php?me_recv_mb_id=chk01" rel="nofollow" onclick="win_memo(this.href); return false;">쪽지보내기</a>
	<a href="http://127.0.0.1/shop/bbs/formmail.php?mb_id=chk01&amp;name=%ED%99%8D%EA%B8%B8%EC%82%BC&amp;email=mJyiaZeUctbJo9aQxqWl" onclick="win_email(this.href); return false;" rel="nofollow">메일보내기</a>
	<a href="http://127.0.0.1/shop/bbs/profile.php?mb_id=chk01" onclick="win_profile(this.href); return false;" rel="nofollow">자기소개</a>
	<a href="http://127.0.0.1/shop/bbs/new.php?mb_id=chk01" className="link_new_page" onclick="check_goto_new(this.href, event);" rel="nofollow">전체게시물</a>
	<a href="http://127.0.0.1/shop/adm/member_form.php?w=u&amp;mb_id=chk01" target="_blank" rel="nofollow">회원정보변경</a>
	<a href="http://127.0.0.1/shop/adm/point_list.php?sfl=mb_id&amp;stx=chk01" target="_blank" rel="nofollow">포인트내역</a></span></noscript></span></div>
								</td>
								<td className="td_datetime">2026-02-13 21:20:43</td>
								<td>회원가입 축하</td>
								<td className="td_numbig">1,000</td>
								<td className="td_numbig">1,000</td>
							</tr>

											</tbody>
				</table>
			</div>

			<div className="btn_list03 btn_list">
				<a href="./point_list.php">포인트내역 전체보기</a>
			</div>
		</section>

		
	
	</div>
    </>
  )
}
