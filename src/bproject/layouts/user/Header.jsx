import './css/default.css';
import './css/font-icon.css';
import './css/shop.css';
import './css/user_style.css';
import '../../layouts/user/css/reg_edit.css';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../stores/authStore';
import logImg from "../../img/logo_img.png";

import { AiOutlineLogin, AiOutlineLogout, AiOutlineUser, AiOutlineShoppingCart, AiOutlineBars  } from "react-icons/ai";


export default function Header() {
	const {mbID, mbName} = useAuthStore();

	const  navigate = useNavigate();
  // 로그인산태에 따라 로그인 / 로그아웃 서로 다르게 보여야  함
  // 헤더에서 전역상태 권한훅 실행
	const {logout} = useAuthStore();

	const handleLogout = () => {
		logout();
		navigate("/") // 홈화면으로 
	}

  return (
    <div id="hd" >
    <h1 id="hd_h1">그누보드5</h1>
    <div id="skip_to_container"><a href="#container">본문 바로가기</a></div>
	
    <div id="hd_wrapper">
        <div id="logo">
        	<Link to="/"><img src={logImg} alt="로고"  /> </Link>
        </div>	
        <ul className="hd_login">   
			 {!mbID 
			 ? 	<li className="login"><Link to="/login">로그인{mbID}</Link></li>				
			: <>
				
				<li class="shop_login">
				<AiOutlineUser color="white" size="1.5rem" />
				<span className="btn_member_mn">					
					<span className="profile_name">{mbName}<span className="fcolor01">님</span></span>
					<i className="fa fa-angle-down" aria-hidden="true"></i>
				</span>	
				</li>				
				<li className="shop_cart"><AiOutlineShoppingCart color="white" size="1.5rem" />
					<span className="sound_only">장바구니</span><span className="count">0</span>
				</li>
				<li className="shop_logout cusorP" onClick={handleLogout}><AiOutlineLogout color="white" size="1.5rem" /></li>
			  </>		
			}	
        </ul>
    </div>

    <div id="hd_menu">
    	<Link to="/itemlist"><button type="button" id="menu_open"><AiOutlineBars color="white" /> 전체상품</button></Link>
		
		<div id="category_all_bg"></div>
		<ul className="hd_menu">
			<li><Link to="/itemlist/1">히트상품</Link></li>
			<li><Link to="/itemlist/2">추천상품</Link></li>
			<li><Link to="/itemlist/3">최신상품</Link></li>
			<li><Link to="/itemlist/4">인기상품</Link></li>
			<li><Link to="/itemlist/5">할인상품</Link></li>
		</ul>		 
    </div> 
</div>
  )
}
