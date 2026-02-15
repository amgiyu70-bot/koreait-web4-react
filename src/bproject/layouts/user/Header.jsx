import './css/default.css';
import './css/font-icon.css';
import './css/shop.css';
import './css/user_style.css';
import '../../layouts/user/css/reg_edit.css';

export default function Header() {
  return (
    <div id="hd" >
    <h1 id="hd_h1">그누보드5</h1>
    <div id="skip_to_container"><a href="#container">본문 바로가기</a></div>
	<div id="tnb">
    	<div className="inner">
                		<ul id="hd_define">
    			<li><a href="http://localhost/shop/">커뮤니티</a></li>
    			<li className="active"><a href="http://localhost/shop/shop/">쇼핑몰</a></li>
    		</ul>
            			<ul id="hd_qnb">
	            <li><a href="http://localhost/shop/bbs/faq.php">FAQ</a></li>
	            <li><a href="http://localhost/shop/bbs/qalist.php">1:1문의</a></li>
	            <li><a href="http://localhost/shop/shop/personalpay.php">개인결제</a></li>
	            <li><a href="http://localhost/shop/shop/itemuselist.php">사용후기</a></li> 
	            <li><a href="http://localhost/shop/shop/itemqalist.php">상품문의</a></li>
				<li className="bd"><a href="http://localhost/shop/shop/couponzone.php">쿠폰존</a></li>
	        </ul>
		</div>
	</div>
    <div id="hd_wrapper">
        <div id="logo">
        	<a href="http://localhost/shop/shop/"><img src="http://localhost/shop/data/common/logo_img" alt="그누보드5" title="" /></a>
        </div>	
        <ul className="hd_login">        
			<li className="login"><a href="http://localhost/shop/bbs/login.php?url=%2Fshop%2Fshop%2F">로그인</a></li>
        </ul>
    </div>

    <div id="hd_menu">
    	<button type="button" id="menu_open"><i className="fa fa-bars" aria-hidden="true"></i> 카테고리</button>
		<div id="category" >
			<h2>전체메뉴</h2>
			<p className="no-cate">등록된 분류가 없습니다.</p>
			<button type="button" className="close_btn"><i className="fa fa-times" aria-hidden="true"></i><span className="sound_only">카테고리 닫기</span></button>
		</div>
		<div id="category_all_bg"></div>
		<ul className="hd_menu">
			<li><a href="http://localhost/shop/shop/listtype.php?type=1">히트상품</a></li>
			<li><a href="http://localhost/shop/shop/listtype.php?type=2">추천상품</a></li>
			<li><a href="http://localhost/shop/shop/listtype.php?type=3">최신상품</a></li>
			<li><a href="http://localhost/shop/shop/listtype.php?type=4">인기상품</a></li>
			<li><a href="http://localhost/shop/shop/listtype.php?type=5">할인상품</a></li>
		</ul>		 
    </div> 
</div>
  )
}
