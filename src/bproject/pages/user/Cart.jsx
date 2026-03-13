import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../stores/authStore";
import { getCartDel, getCartList } from "./js/userQuery";
import noImage from "../../img/no_image.gif";
import { AiOutlinePlus, AiOutlineMinus, AiOutlineCloseSquare   } from "react-icons/ai";
import { useState } from "react";
import { toast } from "react-toastify";

export default function Cart() {
    const nav = useNavigate();
    const {mbID} = useAuthStore();
    const location = useLocation();
    const dataToPass = { times: Date.now() };
    const receivedData = location.state;
    let times = (receivedData?.times)? receivedData?.times: "";

    

   // let times = Date.now();
    const {data: item, isLoing, isError, error} = getCartList(mbID, 0, times);  
    
    console.log(item);

    if (isLoing) {
		return <h1>로딩중</h1>
	}

	if (isError) {
		console.log(error.message);
		return <h1>에러발생</h1>
	}

    // 체크된 아이템을 담을 배열
    const [checkItems, setCheckItems] = useState([]);

    // ----------------------------
    // 체크 박스 전체체크
    // ------------------------------
    const allCheckedHandler = (e) => {
          //console.log("item: ", item);
        if (e.target.checked) { 
            setCheckItems(item?.map((it => it.ct_id)))
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
        //alert(1)
       // console.log(check)
         //console.log(checkItems)
        if (check) {
            setCheckItems((prev) => [...prev, id]) // 불변성을 지키기 위한 원본 배열을 복사 후 추가
        } else {
           // console.log(id);
            setCheckItems(checkItems.filter((item) => item !== id)) 
            // 현재 checkItems의 배열에서 해당 id를 제외한 새로운 배열 반환
        }
    }

    // -----------------
    // 선택 삭제
    //------------------

    const selectDel = async () => {
       // console.log(checkItems[0]);
        const checkboxes = document.getElementsByName('ct_chk');
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

       // console.log(chkVal);

        if (chkCnt==0) {
            alert('삭제할 상품을 하나이상 선택해주세요.');
            return "";
        }

        const arr = new Array(); 
        arr['mb_id'] = mbID;
        arr['mode'] = 'sel';
        arr['chkVal'] = chkVal;
        const obj = { ...arr };
        try {
            const response = await getCartDel(obj);

            console.log(response);
            

            if (response?.error!=0) {
                toast.error(response?.msg);
            } else {
                toast.success(response?.msg);
            }
            // 카트 카운트  
            document.getElementById("cartCnt").innerHTML=response?.cartCnt;
           // window.location='/Cart';
           nav('/Cart',  { state: dataToPass });

        } catch(error) {
                toast.error("실행 에러");
        }

       // console.log(chkCnt);
    }

    const allDel = async() => {
        if (window.confirm('카트 전체 비우시겠습니까?')) {
            const arr = new Array(); 
            arr['mb_id'] = mbID;
            arr['mode'] = 'all';
            arr['chkVal'] = '';
            const obj = { ...arr };
            try {
                const response = await getCartDel(obj);

                if (response?.error!=0) {
                    toast.error(response?.msg);
                } else {
                    toast.success(response?.msg);
                }
                // 카트 카운트  
                document.getElementById("cartCnt").innerHTML=response?.cartCnt;
               // window.location='/Cart';
                  
                nav('/Cart',  { state: dataToPass });

            } catch(error) {
                  toast.error("실행 에러");
            }
                


        }
    }

    let tPrice = 0;
    let tPoint = 0;
    let tdPrice = 0;
  return (
    <div id="container">      
        {/* 장바구니 시작 { */}

        <div id="sod_bsk" className="od_prd_list">            
            <div className="tbl_head03 tbl_wrap">
                <table>
                    <thead>
                        <tr>
                            <th scope="col" >
                                <input type="checkbox" name="ct_all" value="1" id="ct_all"  
                                onClick={allCheckedHandler}
                                checked={checkItems.length === item?.length ? true : false} 
                                />
                                <label for="ct_all"><span></span><b className="sound_only">상품 전체</b></label>
                            </th>
                            <th scope="col">상품명</th>
                            <th scope="col">총수량</th>
                            <th scope="col">판매가</th>
                            <th scope="col">포인트</th>
                            <th scope="col">배송비</th>
                            <th scope="col">소계</th>
                        </tr>
                    </thead>
                    <tbody>                    
                        {
                            
						item && item.length === 0
						? <tr>
							<td colSpan="7" className="empty_table">자료가 없습니다.</td>
						</tr>
						: item?.map((it, idx) =>{
                            const {ct_id, it_id, it_name, ct_price, ct_point, ct_delivery_price, it_img1,ct_qty} = it;
                            let sPrice = (parseInt(ct_price) * parseInt(ct_qty)) + parseInt(ct_delivery_price);
                            let sPoint = parseInt(ct_point) * parseInt(ct_qty);

                            tdPrice += parseInt(ct_delivery_price);
                            tPoint += parseInt(sPoint);
                            tPrice += parseInt(ct_price) * parseInt(ct_qty);
						return(<tr key={idx}>
                            <td className="td_chk ">
                                <input 
                                    type="checkbox" 
                                    name="ct_chk" 
                                    value={ct_id}  
                                    key={ct_id} 
                                    id={ct_id} 
                                    onChange={(e) => checkItemHandler(e.target.checked, ct_id)}
                                    checked={checkItems.includes(ct_id)}
                                    />
                            </td>                             
                            <td className="td_prd">
                                <div className="sod_img"><Link to={`/itemview/${it_id}`}><img src={it_img1? `http://gnbiz8888.liodesign.kr/react/upload/${it_img1}`:noImage} width="80" height="80" alt={it_name} /></Link></div>
                                    <div className="sod_name">
                                        <input type="hidden" name="it_id[0]" value="1770986271" />
                                        <input type="hidden" name="it_name[0]" value="상품01" />
                                        <Link to={`/itemview/${it_id}`}><b>{it_name} </b></Link><div className="sod_opt">                                        
                                    </div>
                                    {/*<div className="sod_option_btn"><button type="button" className="mod_options">선택사항수정</button></div>*/}
                                </div>
                            </td>
                            <td className="td_num">{ct_qty}</td>
                            <td className="td_numbig">{parseInt(ct_price).toLocaleString()}</td>
                            <td className="td_numbig">{sPoint.toLocaleString()}</td>
                            <td className="td_dvr">{parseInt(ct_delivery_price).toLocaleString()}</td>
                            <td className="td_numbig text_right"><span id="sell_price_0" className="total_prc">{sPrice.toLocaleString()}</span></td>
                            </tr>	
                            )
					    })			   
					}
                    </tbody>
                </table>
                <div className="btn_cart_del">
                    <button type="button" onClick={selectDel} >선택삭제</button>
                    &nbsp;
                    <button type="button" onClick={allDel} >비우기</button>
                </div>
            </div>

{/* 수정 STR */}
<div id="mod_option_frm" className="_hidden">
<h2>상품옵션수정</h2>



<div id="sit_sel_option" >
	<h3>선택옵션</h3>
    <ul id="sit_opt_added">
                <li class="sit_opt_list">
            <div class="opt_name">
                <span class="sit_opt_subj">남성복02</span>
            </div>
            <div class="opt_count">
                <button type="button" class="sit_qty_minus btn_frmline"><AiOutlineMinus /><span class="sound_only">감소</span></button>
                <label for="ct_qty_0" class="sound_only">수량</label>
                <input type="text" name="ct_qty[1772354302][]" value="1" id="ct_qty_0" class="num_input" size="5" />
                <button type="button" class="sit_qty_plus btn_frmline"><AiOutlinePlus /><span class="sound_only">증가</span></button>
            </div>

        </li>
            </ul>
</div>

<div id="sit_tot_price"><span>총 금액 :</span><strong>11,000</strong> 원</div>

<div class="btn_confirm">
    <button type="submit" class="btn_submit">확인</button>
    <button type="button" id="mod_option_close" class="btn_close"><AiOutlineCloseSquare size="30" /><span class="sound_only">닫기</span></button>
</div>
</div>
{/* 수정 END */}

            <div id="sod_bsk_tot">
                <ul>
                    <li className="sod_bsk_dvr">
                        <span>배송비</span>
                        <strong>{tdPrice.toLocaleString()}</strong> 원
                    </li>

                    <li className="sod_bsk_pt">
                        <span>포인트</span>
                        <strong>{tPoint.toLocaleString()}</strong> 점
                    </li>

                    <li className="sod_bsk_cnt">
                        <span>총계 가격</span>
                        <strong>{(tdPrice + tPrice).toLocaleString()}</strong> 원 
                    </li>
                </ul>
            </div>
            
            <div id="sod_bsk_act">
                <input type="hidden" name="url" value="./orderform.php" />
                <input type="hidden" name="records" value="1" />
                <input type="hidden" name="act" value="" />
                <Link to="/itemlist/0" className="btn01">쇼핑 계속하기</Link>
                <Link to="/orderform/0"><button type="button" className="btn_submit">주문하기</button></Link>
            </div>
        </div>

    {/* } 장바구니 끝 */}
    </div>  
  )
}
