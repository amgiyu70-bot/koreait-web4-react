import { AiOutlineLogin, AiOutlineLogout, AiOutlineUser, AiOutlineShoppingCart, AiOutlineBars  } from "react-icons/ai";
import { Link } from 'react-router-dom';

export default function Side() {
  return (
    <div id="side_menu">
		<ul id="quick">
			<li>
				<Link to="/mypage"><button className="btn_sm_cl1 btn_sm"><AiOutlineUser color="#bbb" size="1.5rem" /><span className="qk_tit">마이메뉴</span></button></Link>
			</li>
			<li><Link to="/cart"><button className="btn_sm_cl3 btn_sm"><AiOutlineShoppingCart color="#bbb" size="1.5rem" /><span className="qk_tit">장바구니</span></button></Link></li>
		</ul>
	</div>
  )
}
