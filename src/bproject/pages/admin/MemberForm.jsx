import { Link, useLocation } from "react-router-dom";
import { getMember } from "../user/js/userQuery";
import DaumPostcode from 'react-daum-postcode';
import { useState } from "react";
import { importForm } from "../../hooks/importForm";
import { toast } from "react-toastify";
import { memberUpdate } from "./js/adminMain";

export default function MemberForm({title}) {
   
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
    const [leave_date, setLeave_date] = useState('');
    const [intercept_date, setIntercept_date] = useState('');    

    const handleComplete = (data) => {
        setZonecode(data.zonecode); // 주소 저장
        setAddress(data.address); // 주소 저장
        setIsOpen(false); // 팝업 닫기
    };

    
    /*
    const {formVal, handleChange} = importForm({
        "mb_id": mem?.mb_id
    });
    console.log(formVal);
    */  
    
    const results = [];
    for (let i=1; i<=10; i++) {

         results.push( <option value={i}>{i}</option> );
       
    }

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
        arr['mb_name']          = formData.get('mb_name');
        arr['mb_email']         = formData.get('mb_email');
        arr['mb_tel']           = formData.get('mb_tel');
        arr['mb_hp']            = formData.get('mb_hp');
        arr['mb_zip']           = formData.get('mb_zip');
        arr['mb_addr1']         = formData.get('mb_addr1');
        arr['mb_addr2']         = formData.get('mb_addr2');
        arr['page']             = formData.get('page');
        arr['sfl']              = formData.get('sfl');
        arr['stx']              = formData.get('stx');
     
        if (isOpen==true) return false;

        if (!arr['mb_id']) {
            toast.error("아이디를 입력해주세요.");
            return false;
        }  
        
        if (!arr['mb_password']) {
            toast.error("비밀번호를 입력해주세요.");
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

        const obj = { ...arr };

        mutate(obj, {
        onSuccess: () => {
        },
        onError: () => {
            }
        });
    }

    return (
    <>
	<h1 id="container_title">{title}</h1>
    <div className="container_wr">
        <form name="fmember" id="fmember"  onSubmit={handleSubmit}>
            <input type="hidden" name="page" value="1" />
            <input type="hidden" name="sfl" value="mb_id" />
            <input type="hidden" name="stx" value="" />
            <div className="tbl_frm01 tbl_wrap">
                <table>
                    <caption>회원 수정</caption>
                    <colgroup>
                        <col className="grid_4" />
                        <col />
                        <col className="grid_4" />
                        <col />
                    </colgroup>
                    <tbody>
                        <tr>
                            <th scope="row"><label htmlFor="mb_id">아이디</label></th>
                            <td>
                                <input type="text" name="mb_id" id="mb_id"  className="required frm_input " size="15" maxLength={20}  /> 
                            </td>
                            <th scope="row"><label htmlFor="mb_password">비밀번호</label></th>
                            <td>
                                <div>
                                    <input type="password" name="mb_password" id="mb_password" className="required frm_input " size="15" maxLength={20} />
                                </div>
                            
                            </td>
                        </tr>
                        <tr>
                            <th scope="row"><label htmlFor="mb_name">이름(실명)<strong className="sound_only">필수</strong></label></th>
                            <td colspan="3"><input type="text" name="mb_name" id="mb_name"  className="required frm_input" size="15" maxLength={20}  /></td>
                        </tr>
                        <tr>
                            <th scope="row"><label htmlFor="mb_level">회원 권한</label></th>
                            <td>                               
                                <select id="mb_level" name="mb_level">
                                     {results}
                                </select>
                            </td>
                            <th scope="row">포인트</th>
                            <td>0 점</td>
                        </tr>
                        <tr>
                            <th scope="row"><label htmlFor="mb_email">E-mail<strong className="sound_only">필수</strong></label></th>
                            <td colSpan="3"><input type="text" name="mb_email" id="mb_email" maxLength={100}  className="required frm_input email" size="30"   /></td>
                        </tr>
                        <tr>                            
                            <th scope="row"><label htmlFor="mb_tel">전화번호</label></th>
                            <td><input type="text" name="mb_tel"  id="mb_tel" className="required frm_input" size="15" maxLength={20}  /></td>

                            <th scope="row"><label htmlFor="mb_hp">휴대폰번호</label></th>
                            <td><input type="text" name="mb_hp" id="mb_hp" className="frm_input" size="15" maxLength={20}  /></td>
                        </tr>


                        <tr>
                            <th scope="row">주소</th>
                            <td colspan="3" className="td_addr_line">
                                <label htmlFor="mb_zip" className="sound_only">우편번호</label>
                                <input type="text" name="mb_zip"  id="mb_zip" className="frm_input readonly" size="5" maxLength={6} value={zonecode} readOnly />
                                <button type="button" className="btn_frmline" onClick={() => setIsOpen(true)} >주소 검색</button><br />
                                {isOpen && <DaumPostcode onComplete={handleComplete} theme={themeObj} />}
                                <input type="text" name="mb_addr1"  id="mb_addr1" className="frm_input readonly" size="60" value={address} readOnly />
                                <label htmlFor="mb_addr1">기본주소</label><br />
                                <input type="text" name="mb_addr2"  id="mb_addr2" className="frm_input" size="60"  />
                                <label htmlFor="mb_addr2">상세주소</label>
                                <br />
                            </td>
                        </tr>
                        <tr>
                            <th scope="row"><label htmlFor="mb_memo">메모</label></th>
                            <td colspan="3"><textarea name="mb_memo" id="mb_memo"></textarea></td>
                        </tr>

                       


                    </tbody>
                </table>
            </div>

            <div className="btn_fixed_top">
               <Link to="/admin/memberlist" className="btn btn_02" >목록</Link> &nbsp;
                <input type="submit" value="확인" className="btn_submit btn" accesskey="s" />
            </div>
        </form>

        
    </div>
    </>
  )
}
