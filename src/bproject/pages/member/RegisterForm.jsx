import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import DaumPostcode from 'react-daum-postcode';
import { memberUpdate } from '../user/js/userQuery';
import { useState } from 'react';

export default function RegisterForm() {

    const nav = useNavigate(); 
    const location = useLocation();
  // location.state에서 전달받은 데이터 추출
    const receivedData = location.state;

    if(!receivedData?.name) {
        toast.error("회원가입 동의 체크 해주세요.");
         nav('/register');
        return false;
    }

    // 다음 우편주소
    const postCodeStyle = {
        background:'#434a54',
        color:'#fff',
        width:'128px',
        height:'45px',
        border:'0'
    };

    const themeObj = {
    bgColor:"", 			// 바탕 배경색
    searchBgColor: "", 		// 검색창 배경색
    contentBgColor: "", 		// 본문 배경색(검색결과,결과없음,첫화면,검색서제스트)
    pageBgColor: "", 		// 페이지 배경색
    textColor: "", 			// 기본 글자색
    queryTextColor: "#FA7142", 		// 검색창 글자색
    postcodeTextColor: "", 	// 우편번호 글자색
    emphTextColor: "#333333", 		// 강조 글자색
    outlineColor: "" 		// 테두리
    };
    const [zonecode, setZonecode] = useState('');
    const [address, setAddress] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const handleComplete = (data) => {
        setZonecode(data.zonecode); // 주소 저장
        setAddress(data.address); // 주소 저장
        setIsOpen(false); // 팝업 닫기
    };

    const {isPending, mutate} = memberUpdate();

    const handleSubmit = (e) => {
        e.preventDefault(); // 폼 제출 시 페이지 새로고침 방지       
        
        // 1. FormData 객체 생성
        const formData = new FormData(e.target);
        
        // 2. name 속성을 이용해 값 가져오기
        const arr = new Array(); 

        arr['mode']             = 'ins';
        arr['mb_id']            = formData.get('mb_id');
        arr['mb_password']      = formData.get('mb_password');
        arr['mb_password_re']   = formData.get('mb_password_re');
        arr['mb_name']          = formData.get('mb_name');
        arr['mb_email']         = formData.get('mb_email');
        arr['mb_tel']           = formData.get('mb_tel');
        arr['mb_hp']            = formData.get('mb_hp');
        arr['mb_zip']           = formData.get('mb_zip');
        arr['mb_addr1']         = formData.get('mb_addr1');
        arr['mb_addr2']         = formData.get('mb_addr2');

        if (isOpen==true) return false;

        if (!arr['mb_id']) {
            toast.error("아이디를 입력해주세요.");
            return false;
        }

        if (!arr['mb_password']) {
            toast.error("비밀번호를 입력해주세요.");
            return false;
        }

        if (!arr['mb_password_re']) {
            toast.error("비밀번호 확인을 입력해주세요.");
            return false;
        }

        if (arr['mb_password']!=arr['mb_password_re']){
            toast.error("비밀번호 확인이 틀립니다.");
            return false;
        }

        if (!arr['mb_name']) {
            toast.error("이름을 입력해주세요.");
            return false;
        }

        if (!arr['mb_email']) {
            toast.error("이메일을 입력해주세요.");
            return false;
        }

        if (!arr['mb_tel']) {
            toast.error("전화번호를 입력해주세요.");
            return false;
        }

        if (!arr['mb_hp']) {
            toast.error("핸드폰 번호를 입력해주세요.");
            return false;
        }

        if (!arr['mb_zip']) {
            toast.error("우편번호를 입력해주세요.");
            return false;
        }

        if (!arr['mb_addr1']) {
            toast.error("주소를 입력해주세요.");
            return false;
        }

        if (!arr['mb_addr2']) {
            toast.error("상세주소를 입력해주세요.");
            return false;
        }

        const obj = { ...arr };

        mutate(obj, {
        onSuccess: () => {
        },
        onError: () => {
            }
        });
    }

    return (
<div id="container">
    <h2 id="container_title"><span title="회원 가입">회원 가입</span></h2>
    <div className="register">
        <form id="fregisterform" onSubmit={handleSubmit}>	
        <div id="register_form" className="form_01">   
            <div className="register_form_inner">
            <h2>사이트 이용정보 입력</h2>
                <ul>
                    <li>
                        <label htmlFor="reg_mb_id">
                        아이디 (필수)                    
                        <span className="inputtip">영문자, 숫자, _ 만 입력 가능. 최소 3자이상 입력하세요.</span>
                        </label>
                        <input type="text" name="mb_id"  id="reg_mb_id"  className="frm_input  required"  maxLength={20} placeholder="아이디" />
                        
                    </li>
                    <li className="half_input left_input margin_input">
                        <label htmlFor="reg_mb_password">비밀번호 (필수)</label>
                        <input type="password" name="mb_password" id="reg_mb_password"  className="frm_input full_input required" maxLength={20} placeholder="비밀번호" />
                    </li>
                    <li className="half_input left_input">
                        <label htmlFor="reg_mb_password_re">비밀번호 확인 (필수)</label>
                        <input type="password" name="mb_password_re" id="reg_mb_password_re"  className="frm_input full_input required"  maxLength={20} placeholder="비밀번호 확인" />
                    </li>
                </ul>
            </div>

            <div className="tbl_frm01 tbl_wrap register_form_inner">
                <h2>개인정보 입력</h2>
                <ul>
                    <li>
                        <label htmlFor="reg_mb_name">이름 (필수)</label>
                        <input type="text" id="reg_mb_name" name="mb_name"   className="frm_input  required " size="20" placeholder="이름" />
                    </li>

                    <li>
                        <label htmlFor="reg_mb_email">E-mail (필수)</label>                    
                        <input type="email" name="mb_email"  id="reg_mb_email"  className="frm_input email  required" size="50" maxLength={100} placeholder="E-mail" />
                    </li>


                    <li>
                        <label htmlFor="reg_mb_tel">전화번호</label>
                        <input type="text" name="mb_tel"  id="reg_mb_tel" className="frm_input  required"  size="50" maxLength={20} placeholder="전화번호" />
                    </li>
                    <li>
                        <label htmlFor="reg_mb_hp">휴대폰번호</label>
                        <input type="text" name="mb_hp"  id="reg_mb_hp" className="frm_input   required"  size="50" maxLength={20} placeholder="휴대폰번호" />   
                    </li>

                    <li>
                        <label>주소</label>
                        <label htmlFor="reg_mb_zip" className="sound_only">우편번호</label>
                        <input type="text" name="mb_zip" value={zonecode} id="reg_mb_zip" className="frm_input twopart_input required" size="5" maxLength={6} placeholder="우편번호" readOnly />
                        <button type="button" className="btn_frmline" onClick={() => setIsOpen(true)}>주소 검색</button><br />
                        {isOpen && <DaumPostcode onComplete={handleComplete} theme={themeObj} />}
                        <input type="text" name="mb_addr1" value={address} id="reg_mb_addr1" className="frm_input frm_address full_input required" size="50" placeholder="기본주소" readOnly />
                        <label htmlFor="reg_mb_addr1" className="sound_only">기본주소</label><br />

                        <input type="text" name="mb_addr2"  id="reg_mb_addr2" className="frm_input frm_address full_input required" size="50" placeholder="상세주소" />
                        <label htmlFor="reg_mb_addr2" className="sound_only">상세주소</label>
                        <br />
                    </li>
                </ul>
            </div>
        </div>
        <div className="btn_confirm">
            <button type="button"  className="btn_close" accesskey="s" onClick={() => nav(-1)}>최소</button>
            <button type="submit" id="btn_submit" className="btn_submit" accesskey="s">회원가입</button>
        </div>
        </form>
    </div>
</div>
    )
}
