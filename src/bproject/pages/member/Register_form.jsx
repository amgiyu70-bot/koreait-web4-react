import React from 'react'

export default function Register_form() {
  return (
    <div id="container">
        <h2 id="container_title"><span title="회원 가입">회원 가입</span></h2>

        <div className="register">
            <form id="fregisterform" >	
            <div id="register_form" className="form_01">   
                <div className="register_form_inner">
                <h2>사이트 이용정보 입력</h2>
                    <ul>
                        <li>
                        <label htmlFor="reg_mb_id">
                        아이디 (필수)
                        <button type="button" className="tooltip_icon"><i className="fa fa-question-circle-o" aria-hidden="true"></i><span className="sound_only">설명보기</span></button>
                        <span className="tooltip">영문자, 숫자, _ 만 입력 가능. 최소 3자이상 입력하세요.</span>
                        </label>
                        <input type="text" name="mb_id" value="" id="reg_mb_id" required="required" className="frm_input full_input required "  maxLength={20} placeholder="아이디" />
                        <span id="msg_mb_id"></span>
                        </li>
                        <li className="half_input left_input margin_input">
                        <label htmlFor="reg_mb_password">비밀번호 (필수)</label>
                        <input type="password" name="mb_password" id="reg_mb_password" required="required" className="frm_input full_input required" maxLength={20} placeholder="비밀번호" />
                        </li>
                        <li className="half_input left_input">
                        <label htmlFor="reg_mb_password_re">비밀번호 확인 (필수)</label>
                        <input type="password" name="mb_password_re" id="reg_mb_password_re" required="required" className="frm_input full_input required"  maxLength={20} placeholder="비밀번호 확인" />
                        </li>
                    </ul>
                </div>

                <div className="tbl_frm01 tbl_wrap register_form_inner">
                    <h2>개인정보 입력</h2>
                    <ul>
                        <li>
                        <label htmlFor="reg_mb_name">이름 (필수)</label>
                        <input type="text" id="reg_mb_name" name="mb_name" value="" required="required" className="frm_input full_input required " size="10" placeholder="이름" />
                        </li>
                        <li>
                        <label htmlFor="reg_mb_nick">
                        이름 (필수)
                        <button type="button" className="tooltip_icon"><i className="fa fa-question-circle-o" aria-hidden="true"></i><span className="sound_only">설명보기</span></button>
                        <span className="tooltip">공백없이 한글,영문,숫자만 입력 가능 (한글2자, 영문4자 이상)<br /> 닉네임을 바꾸시면 앞으로 60일 이내에는 변경 할 수 없습니다.</span>
                        </label>

                        
                        <input type="text" name="mb_nick" value="" id="reg_mb_nick" required="required" className="frm_input required nospace full_input" size="10" maxLength={20} placeholder="이름" />
                        <span id="msg_mb_nick"></span>	                
                        </li>

                        <li>
                        <label htmlFor="reg_mb_email">E-mail (필수)

                        </label>

                      
                        <input type="text" name="mb_email" value="" id="reg_mb_email" required="required" className="frm_input email full_input required" size="70" maxLength={100} placeholder="E-mail" />
                        </li>


                        <li>
                        <label htmlFor="reg_mb_tel">전화번호</label>
                        <input type="text" name="mb_tel" value="" id="reg_mb_tel" className="frm_input full_input " maxLength={20} placeholder="전화번호" />
                        </li>
                        <li>
                        <label htmlFor="reg_mb_hp">휴대폰번호</label>

                        <input type="text" name="mb_hp" value="" id="reg_mb_hp" className="frm_input full_input  " maxLength={20} placeholder="휴대폰번호" />
                        </li>

                        <li>
                        <label>주소</label>
                        <label htmlFor="reg_mb_zip" className="sound_only">우편번호</label>
                        <input type="text" name="mb_zip" value="" id="reg_mb_zip" className="frm_input twopart_input " size="5" maxLength={6} placeholder="우편번호" />
                        <button type="button" className="btn_frmline" onclick="win_zip('fregisterform', 'mb_zip', 'mb_addr1', 'mb_addr2', 'mb_addr3', 'mb_addr_jibeon');">주소 검색</button><br />
                        <input type="text" name="mb_addr1" value="" id="reg_mb_addr1" className="frm_input frm_address full_input " size="50" placeholder="기본주소" />
                        <label htmlFor="reg_mb_addr1" className="sound_only">기본주소</label><br />
                        <input type="text" name="mb_addr2" value="" id="reg_mb_addr2" className="frm_input frm_address full_input" size="50" placeholder="상세주소" />
                        <label htmlFor="reg_mb_addr2" className="sound_only">상세주소</label>
                        <br />
                        <input type="text" name="mb_addr3" value="" id="reg_mb_addr3" className="frm_input frm_address full_input" size="50" readonly="readonly" placeholder="참고항목" />
                        <label htmlFor="reg_mb_addr3" className="sound_only">참고항목</label>
                        </li>
                    </ul>
                </div>

                <div className="tbl_frm01 tbl_wrap register_form_inner">
                    <h2>기타 개인설정</h2>
                    <ul>
                        <li className="chk_box">
                        <input type="checkbox" name="mb_open" value="1" id="reg_mb_open" checked="" className="selec_chk" />
                        <label htmlFor="reg_mb_open">
                        <span></span>
                        <b className="sound_only">정보공개</b>
                        </label>      
                        <span className="chk_li">다른분들이 나의 정보를 볼 수 있도록 합니다.</span>
                        <button type="button" className="tooltip_icon"><i className="fa fa-question-circle-o" aria-hidden="true"></i><span className="sound_only">설명보기</span></button>
                        <span className="tooltip">
                        정보공개를 바꾸시면 앞으로 0일 이내에는 변경이 안됩니다.
                        </span>
                        </li>
                    </ul>
                </div>




            </div>
            <div className="btn_confirm">
                <a href="http://localhost/shop" className="btn_close">취소</a>
                <button type="submit" id="btn_submit" className="btn_submit" accesskey="s">회원가입</button>
            </div>
            </form>
        </div>
    </div>
  )
}
