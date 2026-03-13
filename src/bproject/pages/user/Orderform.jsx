import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { getCartList, getMember, orderUpdate } from "./js/userQuery";
import { useAuthStore } from "../../stores/authStore";
import noImage from "../../img/no_image.gif";
import DaumPostcode from 'react-daum-postcode';
import { useState } from "react";



export default function Orderform() {


    // 달력

   // background:#434a54;color:#fff;width:128px;height:45px;border:0;border-radius:3px}

   
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
   
    const handleComplete01 = (data) => {
        setZonecode(data.zonecode); // 주소 저장
        setAddress(data.address); // 주소 저장
        setIsOpen(false); // 팝업 닫기
    };

    const [zonecodeB, setZonecodeB] = useState('');
    const [addressB, setAddressB] = useState('');
    const [isOpenB, setIsOpenB] = useState(false);
   
    const handleComplete02 = (data) => {
        setZonecodeB(data.zonecode); // 주소 저장
        setAddressB(data.address); // 주소 저장
        setIsOpenB(false); // 팝업 닫기
    };
   


    const {id} = useParams();
    const nav = useNavigate(); 
    const {mbID, mbName} = useAuthStore();
    if (id!=0 && id!=1) {
        toast.error("해상 경로가 잘못 되었습니다.");
        nav("/");
    }    

    const {data: item, isLoing, isError, error} = getCartList(mbID, id); 
    const {data: mem} = getMember(mbID);  

    if (item && item?.length===0) {
       toast.error("해상 경로가 잘못 되었습니다.");
        nav("/");
      // console.log(item);
    }

   // console.log(item?.length);

    

   

    /*
     console.log(new Date().toISOString().slice(0, 10).replace(/-/g, ''));
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    */     
  
    
    

    const checkOnlyOne = (checkThis) => {
        const checkboxes = document.getElementsByName('ad_sel_addr');
    
        if (checkboxes[0] !== checkThis) {
            checkboxes[0].checked = false
        }

        if (checkboxes[0].checked==true) {

            document.getElementById("od_b_name").value = document.getElementById("od_name").value;
            document.getElementById("od_b_tel").value = document.getElementById("od_tel").value;
            document.getElementById("od_b_hp").value = document.getElementById("od_hp").value;
            document.getElementById("od_b_zip").value = document.getElementById("od_zip").value;
            document.getElementById("od_b_addr1").value = document.getElementById("od_addr1").value;
            document.getElementById("od_b_addr2").value = document.getElementById("od_addr2").value;            
        } else {
            document.getElementById("od_b_name").value = "";
            document.getElementById("od_b_tel").value = "";
            document.getElementById("od_b_hp").value = "";
            document.getElementById("od_b_zip").value = "";
            document.getElementById("od_b_addr1").value = "";
            document.getElementById("od_b_addr2").value = "";

        }
       
    }
   
    const {isPending, mutate} = orderUpdate();

    
    const handleSubmit = (e) => {
        e.preventDefault(); // 폼 제출 시 페이지 새로고침 방지       
        
        // 1. FormData 객체 생성
        const formData = new FormData(e.target);
        
        // 2. name 속성을 이용해 값 가져오기
        const arr = new Array(); 
        arr['o_id'] =  `${new Date().toISOString().slice(0, 10).replace(/-/g, '')}-${Date.now()}`;
        arr['ct_direct'] = id;
        arr['mb_id'] = mbID;
        arr['mb_name'] = mbName;
        arr['o_name'] = formData.get('o_name');
        arr['o_tel'] = formData.get('o_tel');
        arr['o_hp'] = formData.get('o_hp');        
        arr['o_zip'] = formData.get('o_zip');
        arr['o_addr1'] = formData.get('o_addr1');
        arr['o_addr2'] = formData.get('o_addr2');
        arr['o_email'] = formData.get('o_email');
        arr['o_b_name'] = formData.get('o_b_name');
        arr['o_b_tel'] = formData.get('o_b_tel');
        arr['o_b_hp'] = formData.get('o_b_hp');
        arr['o_b_zip'] = formData.get('o_b_zip');
        arr['o_b_addr1'] = formData.get('o_b_addr1');
        arr['o_b_addr2'] = formData.get('o_b_addr2');
        arr['o_memo'] = formData.get('o_memo');
        arr['o_account_name'] = formData.get('o_account_name');
        

        if (isOpen==true) return false;
        if (isOpenB==true) return false;

        if (!arr['o_name']) {
            toast.error("주문하시는 분 이름을 입력해주세요.");
            return false;
        }

        if (!arr['o_tel']) {
            toast.error("주문하시는 분 연락처를 입력해주세요.");
            return false;
        }

        if (!arr['o_zip']) {
            toast.error("주문하시는 분 우편주소를 입력해주세요.");
            return false;
        }

        if (!arr['o_addr1']) {
            toast.error("주문하시는 분 주소를 입력해주세요.");
            return false;
        }

        if (!arr['o_addr2']) {
            toast.error("주문하시는 분 상세주소를 입력해주세요.");
            return false;
        }

        if (!arr['o_email']) {
            toast.error("주문하시는 분 e-mail을 입력해주세요.");
            return false;
        }

        if (!arr['o_b_name']) {
            toast.error("받는 분 이름을 입력해주세요.");
            return false;
        }

        if (!arr['o_b_tel']) {
            toast.error("받는 분 연락처를 입력해주세요.");
            return false;
        }

        if (!arr['o_b_zip']) {
            toast.error("받는 분 우편주소를 입력해주세요.");
            return false;
        }

        if (!arr['o_b_addr1']) {
            toast.error("받는 분 주소를 입력해주세요.");
            return false;
        }

        if (!arr['o_b_addr2']) {
            toast.error("받는 분 상세주소를 입력해주세요.");
            return false;
        }

        if (!arr['o_account_name']) {
            toast.error("입금자명을 입력해주세요.");
            return false;
        }
       // console.log(arr)
        const obj = { ...arr };

        mutate(obj, {
        onSuccess: () => {
        },
        onError: () => {
            }
        });

        //console.log(arr);
        
       
    };
   // console.log(item);
    
    let tPrice = 0;
    let tPoint = 0;
    let tdPrice = 0;
  return (
<div id="container">  
    <div id="sod_frm" className="sod_frm_pc">
        {/* 주문상품 확인 시작 */}
        <div className="tbl_head03 tbl_wrap od_prd_list">
            <table id="sod_list">
                <thead>
                    <tr>
                        <th scope="col">상품명</th>
                        <th scope="col">총수량</th>
                        <th scope="col">판매가</th>
                        <th scope="col">소계</th>
                        <th scope="col">포인트</th>
                        <th scope="col">배송비</th>
                    </tr>
                </thead>
                <tbody>        
                    {                                
                    item && item.length === 0
                    ? ""                    
                    :
                    item?.map((it, idx) =>{
                            const {it_id, it_name, ct_price, ct_point, ct_delivery_price, it_img1,ct_qty} = it;
                            let sPrice = (parseInt(ct_price) * parseInt(ct_qty));
                            let sPoint = parseInt(ct_point) * parseInt(ct_qty);

                            tdPrice += parseInt(ct_delivery_price);
                            tPoint += parseInt(sPoint);
                            tPrice += parseInt(ct_price) * parseInt(ct_qty);
						return(<tr>
                        <td className="td_prd">
                            <div className="sod_img"><img src={it_img1? `http://gnbiz8888.liodesign.kr/react/upload/${it_img1}`:noImage} width="80" height="80" alt="" /></div>
                            <div className="sod_name">
                                <input type="hidden" name="it_id[0]" value="1770986271" />
                                <input type="hidden" name="it_name[0]" value="상품01" />
                                <input type="hidden" name="it_price[0]" value="10000" />
                                <input type="hidden" name="cp_id[0]"  />
                                <input type="hidden" name="cp_price[0]" value="0" />
                                 <b>{it_name}</b>
                            </div>
                        </td>
                        <td className="td_num">{ct_qty}</td>
                        <td className="td_numbig  text_right">{parseInt(ct_price).toLocaleString()}</td>
                        <td className="td_numbig  text_right"><span className="total_price">{sPrice.toLocaleString()}</span></td>
                        <td className="td_numbig  text_right">{sPoint.toLocaleString()}</td>
                        <td className="td_dvr">{tdPrice.toLocaleString()}</td>
                    </tr>)
					})			
                }

                </tbody>
            </table>
        </div>

            {/* 주문상품 확인 끝*/}
        <form onSubmit={handleSubmit}>      
        <div className="sod_left">      
            {/* 주문하시는 분 입력 시작 */}
            <section id="sod_frm_orderer">
                <h2>주문하시는 분</h2>

                <div className="tbl_frm01 tbl_wrap">
                    <table>
                    <tbody>
                    <tr>
                        <th scope="row"><label htmlFor="od_name">이름<strong className="sound_only"> 필수</strong></label></th>
                        <td><input type="text" name="o_name"  id="od_name" className="frm_input required" placeholder="이름"  defaultValue={mem?.mb_name}  /></td>
                    </tr>
                    <tr>
                        <th scope="row"><label htmlFor="od_tel">전화번호<strong className="sound_only"> 필수</strong></label></th>
                        <td><input type="text" name="o_tel"  id="od_tel"  className="frm_input required" maxLength={20}  placeholder="전화번호"  defaultValue={mem?.mb_tel} /></td>
                    </tr>
                    <tr>
                        <th scope="row"><label htmlFor="od_hp">핸드폰</label></th>
                        <td><input type="text" name="o_hp"  id="od_hp" className="frm_input" maxLength={20}  placeholder="핸드폰"  defaultValue={mem?.mb_hp} /></td>
                    </tr>
                    <tr>
                        <th scope="row">주소</th>
                        <td>

                            <label htmlFor="od_zip" className="sound_only">우편번호<strong className="sound_only"> 필수</strong></label>
                            <input type="text" name="o_zip"  id="od_zip"  className="frm_input required" size="8" maxLength={6} placeholder="우편번호" value={zonecode? zonecode:mem?.mb_zip}   readOnly />
                             <button onClick={() => setIsOpen(true)} className="btn_address">주소 검색</button>
                             {isOpen && <DaumPostcode onComplete={handleComplete01} theme={themeObj} />}
                            <br />
                            <input type="text" name="o_addr1"  id="od_addr1"  className="frm_input frm_address required" size="60" placeholder="기본주소"  value={address? address: mem?.mb_addr1} />
                            <label htmlFor="od_addr1" className="sound_only">기본주소<strong className="sound_only" > 필수</strong></label>
                            <br />
                            <input type="text" name="o_addr2"  id="od_addr2" className="frm_input frm_address" size="60" placeholder="상세주소"  defaultValue={mem?.mb_addr2} />
                            <label htmlFor="od_addr2" className="sound_only">상세주소</label>
                            <br />
                        </td>
                    </tr>
                    <tr>
                        <th ><label htmlFor="od_email">E-mail<strong className="sound_only"> 필수</strong></label></th>
                        <td><input type="text" name="o_email"  id="od_email"  className="frm_input required" size="35" maxLength={100} defaultValue={mem?.mb_email} /></td>
                    </tr>

                   </tbody>
                    </table>
                </div>
            </section>
            {/* 주문하시는 분 입력 끝*/}

            {/* 받으시는 분 입력 시작 */}
            <section id="sod_frm_taker">
                <h2>받으시는 분</h2>

                <div className="tbl_frm01 tbl_wrap">
                    <table>
                    <tbody>
                       <tr>
                        <th scope="row">배송지선택</th>
                        <td>
                            <div className="order_choice_place">
                            <input type="checkbox" name="ad_sel_addr" value="same" id="ad_sel_addr_same" onChange={(e) => checkOnlyOne(e.target)} />&nbsp;
                            <label htmlFor="ad_sel_addr_same">주문자와 동일</label>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row"><label htmlFor="od_b_name">이름<strong className="sound_only"> 필수</strong></label></th>
                        <td><input type="text" name="o_b_name" id="od_b_name"  className="frm_input required" maxLength={20} placeholder="이름"   /></td>
                    </tr>
                    <tr>
                        <th scope="row"><label htmlFor="od_b_tel">전화번호<strong className="sound_only"> 필수</strong></label></th>
                        <td><input type="text" name="o_b_tel" id="od_b_tel"  className="frm_input required" maxLength={20} placeholder="전화번호"   /></td>
                    </tr>
                    <tr>
                        <th scope="row"><label htmlFor="od_b_hp">핸드폰</label></th>
                        <td><input type="text" name="o_b_hp" id="od_b_hp" className="frm_input" maxLength={20} placeholder="핸드폰"  /></td>
                    </tr>
                    <tr>
                        <th scope="row">주소</th>
                        <td id="sod_frm_addr">
                            <label htmlFor="od_b_zip" className="sound_only">우편번호<strong className="sound_only"> 필수</strong></label>
                            <input type="text" name="o_b_zip" id="od_b_zip"  className="frm_input required" size="8" maxLength={6} placeholder="우편번호" value={zonecodeB}  />
                            <button type="button" onClick={() => setIsOpenB(true)} className="btn_address" >주소 검색</button>
                             {isOpenB && <DaumPostcode onComplete={handleComplete02} theme={themeObj} />}
                            <br />
                            <input type="text" name="o_b_addr1" id="od_b_addr1"  className="frm_input frm_address required" size="60" placeholder="기본주소"  value={addressB}   />
                            <label htmlFor="od_b_addr1" className="sound_only">기본주소<strong> 필수</strong></label><br />
                            <input type="text" name="o_b_addr2" id="od_b_addr2" className="frm_input frm_address" size="60" placeholder="상세주소" />
                            <label htmlFor="od_b_addr2" className="sound_only">상세주소</label>
                            <br />
                        </td>
                    </tr>
                    <tr>
                        <th scope="row"><label htmlFor="od_memo">전하실말씀</label></th>
                        <td><textarea name="o_memo" id="od_memo"></textarea></td>
                    </tr>
                    </tbody>
                    </table>
                </div>
            </section>
            {/* 받으시는 분 입력 끝*/}
        </div>

        <div className="sod_right">
            {/* 주문상품 합계 시작 */}
            <div id="sod_bsk_tot">
                <ul>
                    <li className="sod_bsk_sell">
                        <span>주문</span>
                        <strong>{tPrice.toLocaleString()}</strong>원
                    </li>
                   
                    <li className="sod_bsk_dvr">
                        <span>배송비</span>
                        <strong>{tdPrice.toLocaleString()}</strong>원
                    </li>
                    <li className="sod_bsk_point">
                        <span>포인트</span>
                        <strong>0</strong>점
                    </li>
                <li className="sod_bsk_cnt">
                        <span>총계</span>
                          <strong id="ct_tot_price">{(tPrice + tdPrice).toLocaleString()}</strong>원
                    </li>

                </ul>
            </div>
            {/* 주문상품 합계 끝*/}


            {/* 결제정보 입력 시작 */}
            
            <section id="sod_frm_pay">
                <h2>결제정보</h2>

                <div className="pay_tbl">
                    <table>
                    <tbody>
                                    
                    <tr>
                        <th>추가배송비</th>
                        <td><strong id="od_send_cost2">0</strong>원<br />(지역에 따라 추가되는 도선료 등의 배송비입니다.)</td>
                    </tr>
                    </tbody>
                    </table>
                </div>
                <div id="od_tot_price">
                    <span>총 주문금액</span>
                    <strong className="print_price">{(tdPrice + tPrice).toLocaleString()}</strong>원
                </div>

                <div id="od_pay_sl">
                    <div className="od_pay_buttons_el">
                    <h3>결제수단</h3>
                    <p id="sod_frm_pt_alert"><strong>무통장입금</strong> 이외의 결제 수단으로 결제하시는 경우 포인트를 적립해드리지 않습니다.</p><fieldset id="sod_frm_paysel"><legend>결제방법 선택</legend>
                    <input type="radio" id="od_settle_bank" name="od_settle_case" value="무통장" checked/> 
                    <label htmlFor="od_settle_bank" className="lb_icon bank_icon">무통장입금</label>
                    <div id="settle_bank" ><label htmlFor="od_bank_account" className="sound_only">입금할 계좌</label>
                    <input type="hidden" name="od_bank_account" value="OO은행 12345-67-89012 예금주명" />OO은행 12345-67-89012 예금주명
                <br /><label htmlFor="od_deposit_name">입금자명</label> 
                <input type="text" name="o_account_name" id="od_deposit_name" size="10" maxLength={20} placeholder="입금자명"  defaultValue={mem?.mb_name} /></div></fieldset>            
                </div>
            </div></section>
            {/* 결제 정보 입력 끝*/}

            
            <div id="display_pay_button" className="btn_confirm">
                <input type="submit" value="주문하기"  className="btn_submit" 
                disabled={isPending}  />
                <input type="button" value="취소"  className="btn01 cusorP"  onClick={() => nav(-1)} /> 
            </div>
            <div id="display_pay_process" style={{display: 'none'}}>
                <b>주문완료 중입니다. 잠시만 기다려 주십시오.</b>
            </div>
        </div>
        </form>
    </div>
</div>  
      
  )
}
