

export default function RegisterResult() {
  return (
    <div id="container">
        <h2 id="container_title"><span title="회원가입 완료">회원가입 완료</span></h2>
        <div id="reg_result" className="register">
            <p className="reg_result_p">
            <i className="fa fa-gift" aria-hidden="true"></i><br />
            <strong>홍길삼</strong>님의 회원가입을 진심으로 축하합니다.
            </p>


            <p className="result_txt">
            회원님의 비밀번호는 아무도 알 수 없는 암호화 코드로 저장되므로 안심하셔도 좋습니다.<br />
            아이디, 비밀번호 분실시에는 회원가입시 입력하신 이메일 주소를 이용하여 찾을 수 있습니다.
            </p>

            <p className="result_txt">
            회원 탈퇴는 언제든지 가능하며 일정기간이 지난 후, 회원님의 정보는 삭제하고 있습니다.<br />
            감사합니다.
            </p>
        </div>
        <div className="btn_confirm_reg">
        <a href="http://localhost/shop/" className="reg_btn_submit">메인으로</a>
        </div>
    </div>
  )
}
