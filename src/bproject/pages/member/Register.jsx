


export default function Register() {
  return (
    <div id="container">
        <h2 id="container_title"><span title="회원가입약관">회원가입약관</span></h2>

	<div className="register">

		<form name="fregister" id="fregister" >

		<p><i className="fa fa-check-circle" aria-hidden="true"></i> 회원가입약관 및 개인정보 수집 및 이용의 내용에 동의하셔야 회원가입 하실 수 있습니다.</p>
		
			<section id="fregister_term">
			<h2>(필수) 회원가입약관</h2>
			<textarea readonly="">해당 홈페이지에 맞는 회원가입약관을 입력합니다.</textarea>
			<fieldset className="fregister_agree">
				<input type="checkbox" name="agree" value="1" id="agree11" className="selec_chk" />
				<label htmlFor="agree11"><span></span><b className="sound_only">회원가입약관의 내용에 동의합니다.</b></label>
			</fieldset>
		</section>

		<section id="fregister_private" className="fregister_terms">
			<h2>(필수) 개인정보 수집 및 이용</h2>
			<div>
				<table>
					<caption>개인정보 수집 및 이용</caption>
					<thead>
					<tr>
						<th>목적</th>
						<th>항목</th>
						<th>보유기간</th>
					</tr>
					</thead>
					<tbody>
					<tr>
						<td>이용자 식별 및 본인여부 확인</td>
						<td>아이디, 이름, 비밀번호</td>
						<td>회원 탈퇴 시까지</td>
					</tr>
					<tr>
						<td>고객서비스 이용에 관한 통지,<br />CS대응을 위한 이용자 식별</td>
						<td>연락처 (이메일, 휴대전화번호)</td>
						<td>회원 탈퇴 시까지</td>
					</tr>
					</tbody>
				</table>
			</div>

			<fieldset className="fregister_agree">
				<input type="checkbox" name="agree2" value="1" id="agree21" className="selec_chk" />
				<label htmlFor="agree21"><span></span><b className="sound_only">개인정보 수집 및 이용의 내용에 동의합니다.</b></label>
		   </fieldset>
		</section>
		
		<div id="fregister_chkall" className="chk_all fregister_agree">
			<input type="checkbox" name="chk_all" id="chk_all" className="selec_chk" />
			<label htmlFor="chk_all"><span></span>회원가입 약관에 모두 동의합니다</label>
		</div>
			
		<div className="btn_confirm">
			<a href="http://localhost/shop" className="btn_close">취소</a>
			<button type="submit" className="btn_submit">회원가입</button>
		</div>

		</form>

	   
	</div>

</div>
  )
}
