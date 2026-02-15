

export default function Mypage() {
  return (
    <div id="container">

                        {/* .shop-content 시작 { */}
        <div className="shop-content">
            
{/* 마이페이지 시작 { */}
<div id="smb_my">

    {/* 회원정보 개요 시작 { */}
    <section id="smb_my_ov">
        <h2>회원정보 개요</h2>
        
        <div className="smb_me">
	        <strong className="my_ov_name"><img src="http://127.0.0.1/shop/img/no_profile.gif" alt="profile_image" /><br />홍길삼</strong><br />
	        <a href="http://127.0.0.1/shop/bbs/member_confirm.php?url=register_form.php" className="smb_info">정보수정</a>
	        <a href="http://127.0.0.1/shop/bbs/logout.php">로그아웃</a>
        </div>
        
        <ul id="smb_private">
	    	<li>
	            <a href="http://127.0.0.1/shop/bbs/point.php" target="_blank" className="win_point">
					<i className="fa fa-database" aria-hidden="true"></i>포인트
					<strong>1,100</strong>
	            </a>
	        </li>
	        <li>
	        	<a href="http://127.0.0.1/shop/shop/coupon.php" target="_blank" className="win_coupon">
	        		<i className="fa fa-ticket" aria-hidden="true"></i>쿠폰
	        		<strong>0</strong>
	        	</a>
	        </li>
	        <li>
	            <a href="http://127.0.0.1/shop/bbs/memo.php" target="_blank" className="win_memo">
	            	<i className="fa fa-envelope-o" aria-hidden="true"></i><span className="sound_only">안 읽은 </span>쪽지
	                <strong>0</strong>
	            </a>
	        </li>
	        <li>
	            <a href="http://127.0.0.1/shop/bbs/scrap.php" target="_blank" className="win_scrap">
	            	<i className="fa fa-thumb-tack" aria-hidden="true"></i>스크랩
	            	<strong className="scrap">0</strong>
	            </a>
	        </li>
	    </ul>
	    
        <h3>내정보</h3>
        <dl className="op_area">
            <dt>연락처</dt>
            <dd>010-1111-1111</dd>
            <dt>E-Mail</dt>
            <dd>chk012@test.com</dd>
            <dt>최종접속일시</dt>
            <dd>2026-02-14 21:00:25</dd>
            <dt>회원가입일시</dt>
            <dd>2026-02-13 21:20:43</dd>
            <dt id="smb_my_ovaddt">주소</dt>
            <dd id="smb_my_ovaddd">(47215) 부산 부산진구 거제대로 1, 11111 (양정동)</dd>
        </dl>
        
        <a href="http://127.0.0.1/shop/bbs/member_confirm.php?url=member_leave.php"  className="withdrawal">회원탈퇴</a>
    </section>
    {/* } 회원정보 개요 끝 */}

	<div id="smb_my_list">
	    {/* 최근 주문내역 시작 { */}
	    <section id="smb_my_od">
	        <h2>주문내역조회</h2>
	        
{/* 주문 내역 목록 시작 { */}

<div className="tbl_head03 tbl_wrap">
    <table>
    <thead>
    <tr>
        <th scope="col">주문서번호</th>
        <th scope="col">주문일시</th>
        <th scope="col">상품수</th>
        <th scope="col">주문금액</th>
        <th scope="col">입금액</th>
        <th scope="col">미입금액</th>
        <th scope="col">상태</th>
    </tr>
    </thead>
    <tbody>
    
    <tr>
        <td>
            <a href="http://127.0.0.1/shop/shop/orderinquiryview.php?od_id=2026021421003646&amp;uid=f7c391cb74b79d0da49cdbc0e1146470">2026021421003646</a>
        </td>
        <td>26-02-14 21:05 (토)</td>
        <td className="td_numbig">1</td>
        <td className="td_numbig text_right">23,000원</td>
        <td className="td_numbig text_right">0원</td>
        <td className="td_numbig text_right">23,000원</td>
        <td><span className="status_01">입금확인중</span></td>
    </tr>

        </tbody>
    </table>
</div>
{/* } 주문 내역 목록 끝 */}	
	        <div className="smb_my_more">
	            <a href="./orderinquiry.php">더보기</a>
	        </div>
	    </section>
	    {/* } 최근 주문내역 끝 */}
	
	    {/* 최근 위시리스트 시작 { */}
	    <section id="smb_my_wish">
	        <h2>최근 위시리스트</h2>
            <form name="fwishlist" method="post" action="./cartupdate.php">
            <input type="hidden" name="act" value="multi" />
            <input type="hidden" name="sw_direct" value="" />
            <input type="hidden" name="prog" value="wish" />
                <ul>
                <li className="empty_li">보관 내역이 없습니다.</li>                </ul>
        
                <div className="smb_my_more">
                    <a href="./wishlist.php">더보기</a>
                </div>
                
                <div id="smb_ws_act">
                    <button type="submit" className="btn01" >장바구니</button>
                    <button type="submit" className="btn02">주문하기</button>
                </div>
            </form>
	    </section>
	    {/* } 최근 위시리스트 끝 */}
	</div>
</div>


{/* } 마이페이지 끝 */}

        </div>  {/* } .shop-content 끝 */}
	</div>
  )
}
