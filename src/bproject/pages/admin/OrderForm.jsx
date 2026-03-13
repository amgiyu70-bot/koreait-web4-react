import { Link, useLocation, useNavigate } from "react-router-dom";
import { getOrderDtails, getOrders, getOrdersCancelLog, getOrderUdate, orderUpdate } from "./js/adminMain";
import noImage from "../../img/no_image.gif";
import { useState } from "react";
import parse from 'html-react-parser';
import { toast } from "react-toastify";
import DaumPostcode from 'react-daum-postcode';
import { useAuthStore } from "../../stores/authStore";


function OrderCancel ({o_id, times}) {
    
   

    const {data: oc} = getOrdersCancelLog(o_id, times);
     console.log("11");
      const canCelLog = [];
       const canCelList = [];
    if (oc && oc?.length > 0) {
        console.log(oc);

        
        if (oc && oc.length > 0) {
           
            for (let i = 0; i < oc?.length; i++) {  
            
                  canCelList.push(
                   // `${oc[i].oc_datetime}  ${oc[i].mb_id } 주문${oc[i].oc_state} 처리 <br/>`
                   oc[i].oc_datetime + " " + oc[i].mb_id + " 주문"+oc[i].oc_state+" 처리 \n"
                  )
                  
            
            }
         }
        
        canCelLog.push(
            <section id="sodr_qty_log">
            <h3>주문 수량변경 및 주문 전체취소 처리 내역</h3>
            <div>                                  
            {canCelList}   
          </div>
        </section>
        )
         
    }
  
    return canCelLog;
}

export default function OrderForm({title}) {


    const {mbID} = useAuthStore();

    //console.log(mbID);


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
    console.log(isOpen)
   
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

    // 경로
    const nav = useNavigate();
    const location = useLocation();
    const reData = location.state;
    const o_id = reData?.o_id;
    const sfl = reData?.sfl;
    const page = reData?.page;
    const stx = reData?.stx;    
    let times = (reData?.times)? reData?.times: ""; 
    const dataToPass = { o_id: o_id, sfl: sfl, stx: stx, page: page, times: Date.now() };


    const {data: item, isLoing, isError, error} = getOrderDtails(o_id, times); 
    const {data: od} = getOrders(o_id, times);  
    
    

   // console.log(od);
    // ----------------------------
    // 체크 박스 전체체크
    // ------------------------------
    // 체크된 아이템을 담을 배열
    const [checkItems, setCheckItems] = useState([]);

    const allCheckedHandler = (e) => {
        if (e.target.checked) { 
            setCheckItems(item?.map((o => o?.od_id)))
        } else {
            setCheckItems([]);
        }
       // console.log(`allCheck = `, e.target.checked);

     //   console.log(checkItems);
    }   

    // ----------------------------
    // 체크 박스 개별체크
    // ------------------------------
    const checkItemHandler = (check, id) => {
        if (check) {
            setCheckItems((prev) => [...prev, id]) // 불변성을 지키기 위한 원본 배열을 복사 후 추가
        } else {
           // console.log(id);
            setCheckItems(checkItems.filter((item) => item !== id)) 
            // 현재 checkItems의 배열에서 해당 id를 제외한 새로운 배열 반환
        }
    }

    // -----------------
    // 선택 변경 STR
    //------------------

    const selectUpdate = async (cV, oid) => {
        // console.log(checkItems[0]);
        const checkboxes = document.getElementsByName('chkname');
        /// console.log(checkboxes);
        let chkCnt =0;
        let chkVal = "";
        for (let i=0; i<checkboxes.length; i++) {

            if (checkboxes[i].checked) {                
                if (chkCnt>0) chkVal +=",";
                chkVal += checkItems[chkCnt];
                chkCnt++;
            }            
        }

        if (chkCnt==0) {
            alert('병경할 상품을 하나이상 선택해주세요.');
            return "";
        }

        //console.log(oid);         
                
        const arr = new Array(); 
        arr['mode'] = 'sel';
        arr['chkVal'] = chkVal;
        arr['o_state'] = cV;
        arr['o_id'] = oid;
        arr['mb_id'] = mbID;
        const obj = { ...arr };
        try {
            const response = await getOrderUdate(obj);

           // console.log(response);
            

            if (response?.error!=0) {
                toast.error(response?.msg);
            } else {
                toast.success(response?.msg);
            }
            for (let i=0; i<checkboxes.length; i++) {
                checkboxes[i].checked = false;
            }

            //setCheckItems(item => item?.map(item => ({ ...item, checked: false })));

            setCheckItems([]);

            nav('/admin/orderform',  { state: dataToPass });

        } catch(error) {
                toast.error("실행 에러");
        }
                

        // console.log(chkCnt);
    }
    // -----------------
    // 선택 변경 END
    //------------------
    const {isPending, mutate} = orderUpdate();
    const handleSubmit01 = (e) => {
        e.preventDefault(); // 폼 제출 시 페이지 새로고침 방지       
        
        // 1. FormData 객체 생성
        const formData = new FormData(e.target);
        
        // 2. name 속성을 이용해 값 가져오기
        const arr = new Array(); 

        arr['mode']             = 'edt01';
        arr['o_id']             = formData.get('o_id');
        arr['o_invoice']       = formData.get('o_invoice');
        arr['o_invoice_time']  = formData.get('o_invoice_time');
        arr['page']             = formData.get('page');
        arr['sfl']              = formData.get('sfl');
        arr['stx']              = formData.get('stx');
        const obj = { ...arr };

        mutate(obj, {
        onSuccess: () => {
        },
        onError: () => {
            }
        });
    }


    const handleSubmit02 = (e) => {
        e.preventDefault(); // 폼 제출 시 페이지 새로고침 방지       
        
        // 1. FormData 객체 생성
        const formData = new FormData(e.target);
        
        // 2. name 속성을 이용해 값 가져오기
        const arr = new Array(); 

        arr['mode']             = 'edt02';
        arr['o_id']             = formData.get('o_id');
        arr['o_comment']       = formData.get('o_comment');
        arr['page']             = formData.get('page');
        arr['sfl']              = formData.get('sfl');
        arr['stx']              = formData.get('stx');
        const obj = { ...arr };

        mutate(obj, {
        onSuccess: () => {
        },
        onError: () => {
            }
        });
    }


    const handleSubmit03 = (e) => {
        e.preventDefault(); // 폼 제출 시 페이지 새로고침 방지       
        
        // 1. FormData 객체 생성
        const formData = new FormData(e.target);
        
        // 2. name 속성을 이용해 값 가져오기
        const arr = new Array(); 

        arr['mode']     = 'edt03';
        arr['o_id']     = formData.get('o_id');
        arr['page']     = formData.get('page');
        arr['sfl']      = formData.get('sfl');
        arr['stx']      = formData.get('stx');
        arr['o_name']   = formData.get('o_name');
        arr['o_tel']    = formData.get('o_tel');
        arr['o_hp']     = formData.get('o_hp');        
        arr['o_zip']    = formData.get('o_zip');
        arr['o_addr1']  = formData.get('o_addr1');
        arr['o_addr2']  = formData.get('o_addr2');
        arr['o_email']  = formData.get('o_email');
        arr['o_b_name'] = formData.get('o_b_name');
        arr['o_b_tel']  = formData.get('o_b_tel');
        arr['o_b_hp']   = formData.get('o_b_hp');
        arr['o_b_zip']  = formData.get('o_b_zip');
        arr['o_b_addr1']= formData.get('o_b_addr1');
        arr['o_b_addr2']= formData.get('o_b_addr2');

        if (isOpen==true) return false;
        if (isOpenB==true) return false;
        
        const obj = { ...arr };

        mutate(obj, {
        onSuccess: () => {
        },
        onError: () => {
            }
        });
    }


     let cancelPrice =0;
    return (
    <>
	<h1 id="container_title">{title}</h1>
    <div className="container_wr">
        <section id="anc_sodr_list">
            <h2 className="h2_frm">주문상품 목록</h2>
            <ul className="anchor">
                <li><a href="#anc_sodr_list">주문상품 목록</a></li>
                <li><a href="#anc_sodr_pay">주문결제 내역</a></li>
                <li><a href="#anc_sodr_chk">결제상세정보 확인</a></li>
                <li><a href="#anc_sodr_paymo">결제상세정보 수정</a></li>
                <li><a href="#anc_sodr_memo">상점메모</a></li>
                <li><a href="#anc_sodr_orderer">주문하신 분</a></li>
                <li><a href="#anc_sodr_taker">받으시는 분</a></li>
            </ul>
            <div className="local_desc02 local_desc">
                <p>
                    현재 주문상태 <strong>{od?.o_state}</strong>
                    &nbsp;|&nbsp;
                    주문일시 <strong>{od?.o_datetime}</strong>
                    &nbsp;|&nbsp;
                    주문총액 <strong>{parseInt(od?.o_total_price).toLocaleString()}</strong>원
                </p>
            </div>

           
            <div className="tbl_head01 tbl_wrap">
                <table>
                    <caption>주문 상품 목록</caption>
                    <thead>
                        <tr>
                            <th scope="col">
                                <label htmlFor="sit_select_all" className="sound_only">주문 상품 전체</label>
                                <input type="checkbox" id="sit_select_all"
                                onChange={allCheckedHandler}
                                checked={checkItems.length === item?.length? true : false}   
                                />
                            </th>
                            <th scope="col">상품명</th>
                            <th scope="col">상태</th>
                            <th scope="col">수량</th>
                            <th scope="col">판매가</th>
                            <th scope="col">소계</th>
                            <th scope="col">포인트</th>
                            <th scope="col">배송비</th>
                            <th scope="col" style={{width:"80px"}}>포인트반영</th>
                            <th scope="col">재고반영</th>
                        </tr>
                    </thead>
                    <tbody>
                            {         
                                                  
                    item && item.length === 0
                    ? ""                    
                    :
                    item?.map((it, idx) =>{
                        const {od_id, it_id, it_name, od_qty, od_price, od_point, od_delivery_price, od_status, od_qty_check, od_point_check, it_img1} = it;

                        let sPrice = (parseInt(od_price)*parseInt(od_qty));
                        if (od_status=="취소" || od_status=="반품" || od_status=="품절") {
                            cancelPrice = (parseInt(od_price)*parseInt(od_qty)) + parseInt(od_delivery_price);
                        }
                        
                    return(<tr>
                            <td className="td_mngsmall">
                                <input 
                                    type="checkbox"   
                                    name="chkname"
                                    key={od_id} 
                                    id={od_id} 
                                    value={od_id} 
                                    onChange={(e) => checkItemHandler(e.target.checked, od_id)}
                                    checked={checkItems.includes(od_id)}
                                />

                            </td>
                            <td rowSpan="1" className="td_left">
                                <a href={`/itemview/${it_id}`} target="_blank"><img src={it_img1? `http://gnbiz8888.liodesign.kr/react/upload/${it_img1}`:noImage}  width="50" height="50" alt="" /> {it_name}</a>
                            </td>
                            <td className="td_mngsmall">{od_status}</td>
                            <td className="td_num">                               
                                {od_qty}
                            </td>
                            <td className="td_num_right ">{parseInt(od_price).toLocaleString()}</td>
                            <td className="td_num_right">{sPrice.toLocaleString()}</td>
                            <td className="td_num_right">{parseInt(od_point).toLocaleString()}</td>
                            <td className="td_sendcost_by">{parseInt(od_delivery_price).toLocaleString()}</td>
                            <td className="td_mngsmall">{od_point_check=='1'? "예":"아니오"}</td>
                            <td className="td_mngsmall">{od_qty_check=='1'? "예":"아니오"}</td>
                        </tr>)
                        })			
                    }
                    </tbody>
                </table>
            </div>

            <div className="btn_list02 btn_list">
                <p>
                    <input type="hidden" name="chk_cnt" defaultValue="1" />
                    <strong>주문 및 장바구니 상태 변경</strong>
                    <input type="submit" name="ct_status" defaultValue="주문"  className="btn_02 color_01" onClick={(e)=>selectUpdate("주문",od?.o_id)} />&nbsp;
                    <input type="submit" name="ct_status" defaultValue="입금"  className="btn_02 color_02" onClick={(e)=>selectUpdate("입금",od?.o_id)} />&nbsp;
                    <input type="submit" name="ct_status" defaultValue="준비"  className="btn_02 color_03" onClick={(e)=>selectUpdate("준비",od?.o_id)} />&nbsp;
                    <input type="submit" name="ct_status" defaultValue="배송"  className="btn_02 color_04" onClick={(e)=>selectUpdate("배송",od?.o_id)} />&nbsp;
                    <input type="submit" name="ct_status" defaultValue="완료"  className="btn_02 color_05" onClick={(e)=>selectUpdate("완료",od?.o_id)} />&nbsp;
                    <input type="submit" name="ct_status" defaultValue="취소"  className="btn_02 color_06" onClick={(e)=>selectUpdate("취소",od?.o_id)} />&nbsp;
                    <input type="submit" name="ct_status" defaultValue="반품"  className="btn_02 color_06" onClick={(e)=>selectUpdate("반품",od?.o_id)} />&nbsp;
                    <input type="submit" name="ct_status" defaultValue="품절"  className="btn_02 color_06" onClick={(e)=>selectUpdate("품절",od?.o_id)} />
                </p>
            </div>

            <div className="local_desc01 local_desc">
                <p>주문, 입금, 준비, 배송, 완료는 장바구니와 주문서 상태를 모두 변경하지만, 취소, 반품, 품절은 장바구니의 상태만 변경하며, 주문서 상태는 변경하지 않습니다.</p>
                <p>개별적인(이곳에서의) 상태 변경은 모든 작업을 수동으로 처리합니다. 예를 들어 주문에서 입금으로 상태 변경시 입금액(결제금액)을 포함한 모든 정보는 수동 입력으로 처리하셔야 합니다.</p>
            </div>


        </section>
        

        <div className="od_test_caution">주의) 이 주문은 테스트용으로 실제 결제가 이루어지지 않았으므로 절대 배송하시면 안됩니다.</div>

        <OrderCancel o_id={o_id} times={times} />

        <section id="anc_sodr_pay">
            <h2 className="h2_frm">주문결제 내역</h2>
            <ul className="anchor">
                <li><a href="#anc_sodr_list">주문상품 목록</a></li>
                <li><a href="#anc_sodr_pay">주문결제 내역</a></li>
                <li><a href="#anc_sodr_chk">결제상세정보 확인</a></li>
                <li><a href="#anc_sodr_paymo">결제상세정보 수정</a></li>
                <li><a href="#anc_sodr_memo">상점메모</a></li>
                <li><a href="#anc_sodr_orderer">주문하신 분</a></li>
                <li><a href="#anc_sodr_taker">받으시는 분</a></li>
            </ul>

            <div className="tbl_head01 tbl_wrap">
                <strong className="sodr_nonpay">미수금 {od?.o_state!="주문"? 0:parseInt(od?.o_total_price).toLocaleString()}원</strong>

                <table>
                    <caption>주문결제 내역</caption>
                    <thead>
                        <tr>
                            <th scope="col">주문번호</th>
                            <th scope="col">결제방법</th>
                            <th scope="col">주문총액</th>
                            <th scope="col">배송비</th>
                            <th scope="col">총결제액</th>
                            <th scope="col">주문취소</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{od?.o_id}</td>
                            <td className="td_paybybig">{od?.o_type}</td>
                            <td className="td_numbig td_numsum">{parseInt(od?.o_price).toLocaleString()}원</td>
                            <td className="td_numbig">{parseInt(od?.o_delivery_price).toLocaleString()}원</td>
                            <td className="td_numbig td_numincome">{od?.o_state=="주문"? 0:parseInt(od?.o_total_price).toLocaleString()}원</td>
                            <td className="td_numbig td_numcancel">{od?.o_state=="취소" || od?.o_state=="반품" || od?.o_state=="품절" ? parseInt(cancelPrice).toLocaleString():0}원</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>

        <section className="">
            <h2 className="h2_frm">결제상세정보</h2>
            <ul className="anchor">
                <li><a href="#anc_sodr_list">주문상품 목록</a></li>
                <li><a href="#anc_sodr_pay">주문결제 내역</a></li>
                <li><a href="#anc_sodr_chk">결제상세정보 확인</a></li>
                <li><a href="#anc_sodr_paymo">결제상세정보 수정</a></li>
                <li><a href="#anc_sodr_memo">상점메모</a></li>
                <li><a href="#anc_sodr_orderer">주문하신 분</a></li>
                <li><a href="#anc_sodr_taker">받으시는 분</a></li>
            </ul>
            <form name="fm1" onSubmit={handleSubmit01}>
            <input type="hidden" name="o_id" value={o_id} />
            <input type="hidden" name="page" value={page} />
            <input type="hidden" name="sfl" value={sfl} />
            <input type="hidden" name="stx" value={stx} />

                <div className="compare_wrap">

                    <section id="anc_sodr_chk" >
                        <h3>결제상세정보 확인</h3>

                        <div className="tbl_frm01">
                            <table>
                                <caption>결제상세정보</caption>
                                <colgroup>
                                    <col className="grid_3" />
                                    <col />
                                </colgroup>
                                <tbody>
                                    <tr>
                                        <th scope="row" height="30">계좌번호</th>
                                        <td>OO은행 12345-67-89012 예금주명</td>
                                    </tr>
                                    <tr>
                                        <th scope="row" height="30">무통장 입금액</th>
                                        <td>{od?.o_state=="주문"? 0:parseInt(od?.o_total_price).toLocaleString()}원</td>
                                    </tr>
                                    <tr>
                                        <th scope="row" height="30">입금자</th>
                                        <td>{od?.o_account_name}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">포인트</th>
                                        <td>{parseInt(od?.o_total_point).toLocaleString()}점</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">결제취소/환불액</th>
                                        <td>{od?.o_state=="취소" || od?.o_state=="반품" || od?.o_state=="품절" ? parseInt(cancelPrice).toLocaleString():0}원</td>
                                    </tr>
                                    <tr>
                                        <th scope="row"><label htmlFor="od_send_cost">배송비</label></th>
                                        <td>
                                            {parseInt(od?.o_delivery_price).toLocaleString()} 원
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">배송사</th>
                                        <td>
                                            CJ유통
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row"><label htmlFor="o_invoice">운송장번호</label></th>
                                        <td>
                                            <input type="text" name="o_invoice" defaultValue={od?.o_invoice} id="o_invoice" className="frm_input" />
                                        </td>
                                    </tr>
                                    
                                    <tr>
                                        <th scope="row"><label htmlFor="o_invoice_time">배송일시</label></th>
                                        <td>                                            
                                            <input type="text" name="o_invoice_time" id="o_invoice_time" defaultValue={od?.o_invoice_time}className="frm_input" maxLength={20} />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                   

                </div>

                <div className="btn_confirm01 btn_confirm">
                    <input type="submit" defaultValue="결제/배송내역 수정" className="btn_submit btn" />&nbsp;
                    <Link to="/admin/orderlist" state={{ sfl: sfl, page: page, stx: stx }} className="btn btn_02">목록</Link>
                </div>
            </form>
        </section>

        <section id="anc_sodr_memo">
            <h2 className="h2_frm">상점메모</h2>
            <ul className="anchor">
                <li><a href="#anc_sodr_list">주문상품 목록</a></li>
                <li><a href="#anc_sodr_pay">주문결제 내역</a></li>
                <li><a href="#anc_sodr_chk">결제상세정보 확인</a></li>
                <li><a href="#anc_sodr_paymo">결제상세정보 수정</a></li>
                <li><a href="#anc_sodr_memo">상점메모</a></li>
                <li><a href="#anc_sodr_orderer">주문하신 분</a></li>
                <li><a href="#anc_sodr_taker">받으시는 분</a></li>
            </ul>
            <div className="local_desc02 local_desc">
                <p>
                    현재 열람 중인 주문에 대한 내용을 메모하는곳입니다.<br />
                    입금, 배송 내역을 메일로 발송할 경우 함께 기록됩니다.
                </p>
            </div>

            <form name="fm2"  onSubmit={handleSubmit02}>
            <input type="hidden" name="o_id" value={o_id} />
            <input type="hidden" name="page" value={page} />
            <input type="hidden" name="sfl" value={sfl} />
            <input type="hidden" name="stx" value={stx} />


                <div className="tbl_wrap">
                    <label htmlFor="o_comment" className="sound_only">상점메모</label>
                    <textarea name="o_comment" id="o_comment" rows="8" defaultValue={od?.o_comment} />
                </div>

                <div className="btn_confirm01 btn_confirm">
                    <input type="submit" defaultValue="메모 수정" className="btn_submit btn" />

                    &nbsp;
                    <Link to="/admin/orderlist" state={{ sfl: sfl, page: page, stx: stx }} className="btn btn_02">목록</Link>
                </div>

            </form>
        </section>

        <section>
            <h2 className="h2_frm">주문자/배송지 정보</h2>
            <ul className="anchor">
                <li><a href="#anc_sodr_list">주문상품 목록</a></li>
                <li><a href="#anc_sodr_pay">주문결제 내역</a></li>
                <li><a href="#anc_sodr_chk">결제상세정보 확인</a></li>
                <li><a href="#anc_sodr_paymo">결제상세정보 수정</a></li>
                <li><a href="#anc_sodr_memo">상점메모</a></li>
                <li><a href="#anc_sodr_orderer">주문하신 분</a></li>
                <li><a href="#anc_sodr_taker">받으시는 분</a></li>
            </ul>
            <form name="fm3" onSubmit={handleSubmit03}>
            <input type="hidden" name="o_id" value={o_id} />
            <input type="hidden" name="page" value={page} />
            <input type="hidden" name="sfl" value={sfl} />
            <input type="hidden" name="stx" value={stx} />

                <div className="compare_wrap">

                    <section id="anc_sodr_orderer" className="compare_left">
                        <h3>주문하신 분</h3>

                        <div className="tbl_frm01">
                            <table>
                                <caption>주문자/배송지 정보</caption>
                                <colgroup>
                                    <col className="grid_4" />
                                    <col />
                                </colgroup>
                                <tbody>
                                    <tr>
                                        <th scope="row"><label htmlFor="o_name"><span className="sound_only">주문하신 분 </span>이름</label></th>
                                        <td><input type="text" name="o_name" defaultValue={od?.o_name} id="o_name"  className="frm_input required" /></td>
                                    </tr>
                                    <tr>
                                        <th scope="row"><label htmlFor="o_tel"><span className="sound_only">주문하신 분 </span>전화번호</label></th>
                                        <td><input type="text" name="o_tel" defaultValue={od?.o_tel} id="o_tel"  className="frm_input required" /></td>
                                    </tr>
                                    <tr>
                                        <th scope="row"><label htmlFor="o_hp"><span className="sound_only">주문하신 분 </span>핸드폰</label></th>
                                        <td><input type="text" name="o_hp" defaultValue={od?.o_hp} id="o_hp" className="frm_input" /></td>
                                    </tr>
                                    <tr>
                                        <th scope="row"><span className="sound_only">주문하시는 분 </span>주소 {isOpen}</th>
                                        <td>
                                            <label htmlFor="o_zip" className="sound_only">우편번호</label>
                                            <input type="text" name="o_zip"id="o_zip"  className="frm_input required" size="5" value={zonecode? zonecode:od?.o_zip} />
                                            <button type="button" className="btn_frmline" onClick={() => setIsOpen(true)}>주소 검색</button>
                                            {isOpen && <DaumPostcode onComplete={handleComplete01} theme={themeObj} />}
                                            <br />
                                           
                                            <input type="text" name="o_addr1"  id="od_addr1"  className="frm_input required" size="35" value={address? address: od?.o_addr1} />
                                            <label htmlFor="o_addr1">기본주소</label><br />

                                            <input type="text" name="o_addr2" defaultValue={od?.o_addr2} id="od_addr2" className="frm_input" size="35" />
                                            <label htmlFor="o_addr2">상세주소</label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row"><label htmlFor="o_email"><span className="sound_only">주문하신 분 </span>E-mail</label></th>
                                        <td><input type="text" name="o_email" defaultValue={od?.o_email} id="o_email"  className="frm_input required" size="30" /></td>
                                    </tr>
                                    <tr>
                                        <th scope="row"><span className="sound_only">주문하신 분 </span>IP Address</th>
                                        <td>{od?.o_ip}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section id="anc_sodr_taker" className="compare_right">
                        <h3>받으시는 분</h3>

                        <div className="tbl_frm01">
                            <table>
                                <caption>받으시는 분 정보</caption>
                                <colgroup>
                                    <col className="grid_4" />
                                    <col />
                                </colgroup>
                                <tbody>
                                    <tr>
                                        <th scope="row"><label htmlFor="o_b_name"><span className="sound_only">받으시는 분 </span>이름</label></th>
                                        <td><input type="text" name="o_b_name" defaultValue={od?.o_b_name} id="o_b_name"  className="frm_input required" /></td>
                                    </tr>
                                    <tr>
                                        <th scope="row"><label htmlFor="o_b_tel"><span className="sound_only">받으시는 분 </span>전화번호</label></th>
                                        <td><input type="text" name="o_b_tel" defaultValue={od?.o_b_tel} id="o_b_tel"  className="frm_input required" /></td>
                                    </tr>
                                    <tr>
                                        <th scope="row"><label htmlFor="o_b_hp"><span className="sound_only">받으시는 분 </span>핸드폰</label></th>
                                        <td><input type="text" name="o_b_hp" defaultValue={od?.o_b_hp} id="o_b_hp" className="frm_input required" /></td>
                                    </tr>
                                    <tr>
                                        <th scope="row"><span className="sound_only">받으시는 분 </span>주소{isOpenB}</th>
                                        <td>
                                            <label htmlFor="o_b_zip" className="sound_only">우편번호</label>
                                            <input type="text" name="o_b_zip" defaultValue={od?.o_b_zip} id="o_b_zip"  className="frm_input required" size="5" />
                                            <button type="button" className="btn_frmline" onClick={() => setIsOpenB(true)} >주소 검색</button>
                                             {isOpenB && <DaumPostcode onComplete={handleComplete02} theme={themeObj} />}
                                            <br />

                                            <input type="text" name="o_b_addr1" defaultValue={od?.o_b_addr1} id="od_b_addr1"  className="frm_input required" size="35" />
                                            <label htmlFor="o_b_addr1">기본주소</label><br />

                                            <input type="text" name="o_b_addr2" defaultValue={od?.o_b_addr2} id="od_b_addr2" className="frm_input" size="35" />
                                            <label htmlFor="o_b_addr2">상세주소</label>
                                        </td>
                                    </tr>


                                    <tr>
                                        <th scope="row">전달 메세지</th>
                                        <td>{
                                            item && od?.o_memo
                                            ? parse(od?.o_memo)
                                            : ""
                                            }</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                </div>

                <div className="btn_confirm01 btn_confirm">
                    <input type="submit" defaultValue="주문자/배송지 정보 수정" className="btn_submit btn " /> &nbsp;
                   
                    <Link to="/admin/orderlist" state={{ sfl: sfl, page: page, stx: stx }} className="btn btn_02">목록</Link>
                </div>

            </form>
        </section>

    </div>
    </>
  )
}
