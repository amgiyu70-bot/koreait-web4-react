import React from 'react'

export default function Side() {
  return (
    <div id="side_menu">
	<ul id="quick">
		<li><button className="btn_sm_cl1 btn_sm"><i className="fa fa-user-o" aria-hidden="true"></i><span className="qk_tit">마이메뉴</span></button></li>
		<li><button className="btn_sm_cl2 btn_sm"><i className="fa fa-archive" aria-hidden="true"></i><span className="qk_tit">오늘 본 상품</span></button></li>
		<li><button className="btn_sm_cl3 btn_sm"><i className="fa fa-shopping-cart" aria-hidden="true"></i><span className="qk_tit">장바구니</span></button></li>
		<li><button className="btn_sm_cl4 btn_sm"><i className="fa fa-heart-o" aria-hidden="true"></i><span className="qk_tit">위시리스트</span></button></li>
    </ul>
    <button type="button" id="top_btn"><i className="fa fa-arrow-up" aria-hidden="true"></i><span className="sound_only">상단으로</span></button>
    <div id="tabs_con">
	    <div className="side_mn_wr1 qk_con" >
	    	<div className="qk_con_wr">	
				<section id="s_ol_before" className="s_ol">
					<div id="s_ol_be_cate">
						<h2><span className="sound_only">회원</span>로그인</h2>
						<a href="http://localhost/shop/bbs/register.php" className="join">회원가입</a>
					</div>
					<form name="foutlogin" action="http://localhost/shop/bbs/login_check.php" method="post" >
					<fieldset>
						<div className="ol_wr">
							<input type="hidden" name="url" value="%2Fshop%2Fshop%2F" />
							<label  id="ol_idlabel" className="sound_only ol_idlabel">회원아이디<strong>필수</strong></label>
							<input type="text" id="ol_id" name="mb_id"  placeholder="아이디"  />
							<label  id="ol_pwlabel" className="sound_only ol_pwlabel">비밀번호<strong>필수</strong></label>
							<input type="password" name="mb_password" id="ol_pw"  placeholder="비밀번호" />
							<input type="submit" id="ol_submit" value="로그인" className="btn_b02" />
						</div>
						<div className="ol_auto_wr"> 
							<div id="ol_auto" className="chk_box">
								<input type="checkbox" name="auto_login" value="1" id="auto_login" className="selec_chk" />
								<label  id="auto_login_label"><span></span>자동로그인</label>
							</div>
							<div id="ol_svc">
								<a href="http://localhost/shop/bbs/password_lost.php">ID/PW 찾기</a>
							</div>
						</div>
						
					</fieldset>
					</form>
				</section>
		        <ul className="side_tnb">
		        	<li><a href="http://localhost/shop/shop/orderinquiry.php">주문내역</a></li>
					<li><a href="http://localhost/shop/bbs/faq.php">FAQ</a></li>
		            <li><a href="http://localhost/shop/bbs/qalist.php">1:1문의</a></li>
		            <li><a href="http://localhost/shop/shop/personalpay.php">개인결제</a></li>
		            <li><a href="http://localhost/shop/shop/itemuselist.php">사용후기</a></li>
		            <li><a href="http://localhost/shop/shop/itemqalist.php">상품문의</a></li>
		            <li><a href="http://localhost/shop/shop/couponzone.php">쿠폰존</a></li>
		        </ul>
	        	<button type="button" className="con_close"><i className="fa fa-times-circle" aria-hidden="true"></i><span className="sound_only">나의정보 닫기</span></button>
	    	</div>
	    </div>
	    <div className="side_mn_wr2 qk_con" >
	    	<div className="qk_con_wr">	        	

			<div id="stv">
			<h2 className="s_h2">오늘 본 상품 <span>0</span></h2>

    
			<p className="li_empty">없음</p>
		</div>

		<script src="http://localhost/shop/js/scroll_oldie.js"></script>
    		<button type="button" className="con_close"><i className="fa fa-times-circle" aria-hidden="true"></i><span className="sound_only">오늘 본 상품 닫기</span></button>
	    	</div>
	    </div>
	    <div className="side_mn_wr3 qk_con" >
	    	<div className="qk_con_wr">
	        	

		<aside id="sbsk" className="sbsk">
			<h2 className="s_h2">장바구니 <span className="cart-count">0</span></h2>
			<form name="skin_frmcartlist" id="skin_sod_bsk_list" method="post" action="http://localhost/shop/shop/cartupdate.php">
			<ul>
			<li className="li_empty">장바구니 상품 없음</li>
			</ul>
				<a href="http://localhost/shop/shop/cart.php" className="go_cart">전체보기</a>
			</form>
		</aside>


	    		<button type="button" className="con_close"><i className="fa fa-times-circle" aria-hidden="true"></i><span className="sound_only">장바구니 닫기</span></button>
	    	</div>
	    </div>
	    <div className="side_mn_wr4 qk_con" >
	    	<div className="qk_con_wr">
	        	

		<aside id="wish" className="side-wish">
			<h2 className="s_h2">위시리스트 <span>0</span></h2>
			<ul>
			<li className="li_empty">위시리스트 없음</li>
			</ul>
		</aside>
		

	    		<button type="button" className="con_close"><i className="fa fa-times-circle" aria-hidden="true"></i><span className="sound_only">위시리스트 닫기</span></button>
	    	</div>
	    </div>
    </div>
</div>
  )
}
