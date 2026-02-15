import React from 'react'

export default function Login() {
  return (
    <div id="mb_login" className="mbskin">
	<div className="mbskin_box">
		<h1>로그인</h1>
		<div className="mb_log_cate">
			<h2><span className="sound_only">회원</span>로그인</h2>
			<a href="http://localhost/shop/bbs/register.php" className="join">회원가입</a>
		</div>
		<form name="flogin" action="http://localhost/shop/bbs/login_check.php" onsubmit="return flogin_submit(this);" method="post">
			<fieldset id="login_fs">
			<legend>회원로그인</legend>
			<label  className="sound_only">회원아이디<strong className="sound_only"> 필수</strong></label>
			<input type="text" name="mb_id" id="login_id"  className="frm_input required" size="20"  placeholder="아이디" />
			<label  className="sound_only">비밀번호<strong className="sound_only"> 필수</strong></label>
			<input type="password" name="mb_password" id="login_pw"  className="frm_input required" size="20"  placeholder="비밀번호" />
			<button type="submit" className="btn_submit">로그인</button>

			<div id="login_info">
			<div className="login_if_auto chk_box">
			<input type="checkbox" name="auto_login" id="login_auto_login" className="selec_chk" />
			</div>
			<div className="login_if_lpl">
			<a href="http://localhost/shop/bbs/password_lost.php">아이디/비밀번호 찾기</a>  
			</div>
			</div>
			</fieldset> 
		</form>
	</div>        
</div>
  )
}
