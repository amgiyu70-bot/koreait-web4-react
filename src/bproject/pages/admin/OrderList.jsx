import { useState } from "react";
import { Link } from "react-router-dom";
import { getOrderList } from "./js/adminMain";
import DatePicker from "react-datepicker"; // 기본 설정 1
import "react-datepicker/dist/react-datepicker.css"; // 기본 설정 2
import { ko } from "date-fns/locale"; // 한국어 설정

export default function OrderList({title}) {

    const [inputVal, setInputVal] = useState("");
    const [stx, setStx] = useState("");
    const [sfl, setSfl] = useState("o_id");
    const [selSfl, setSelSfl] = useState("");
    const [page, setPage] = useState(1);  
    
    const onChageValue = (e) => {
       setSelSfl(e.target.value);
    }

    const onClickSearch = () => {
        setStx(inputVal);
        setPage(1);
        setSfl(selSfl);
    }

    const allPageList = () => {
         setInputVal("");
         setStx("");
         setPage(1);
    }

    const pageList = (v) => {
        setPage(v);
    }

    const {data: item, isLoing, isError, error} = getOrderList(stx, sfl, page); 
    const total = (item && item?.mode[0]?.total> 0) ? item?.mode[0]?.total:0;
    const total_page = (item && item?.mode[0]?.total_page> 0)? item?.mode[0]?.total_page: 0;

    if (isLoing) {
        return <h1>로딩중</h1>
    }

    if (isError) {
        console.log(error.message);
        return <h1>에러발생</h1>
    }

    const results = [];
    for ( let i = 1; i <= total_page; i++)   {
        
        if (i===page) {
             results.push( 
            <strong class="pg_current">{i}</strong>                
            );
        } else {
            results.push( <span class="pg_page fcolor01 cusorP"  onClick={() => pageList(i)}>{i}</span>);
        }

    }


    // 체크된 아이템을 담을 배열
    const [checkItems, setCheckItems] = useState([]);

    // ----------------------------
    // 체크 박스 전체체크
    // ------------------------------
    const allCheckedHandler = (e) => {
      ///  console.log("item: ", item);
        if (e.target.checked) { 
            setCheckItems(item?.data?.map((it => it.it_id)))
        } else {
            setCheckItems([]);
        }
        console.log(`allCheck = `, e.target.checked);

     //   console.log(checkItems);
    }   

    // ----------------------------
    // 체크 박스 개별체크
    // ------------------------------
    const checkItemHandler = (check, id) => {
       // console.log(check)
         console.log(checkItems)
        if (check) {
            setCheckItems((prev) => [...prev, id]) // 불변성을 지키기 위한 원본 배열을 복사 후 추가
        } else {
           // console.log(id);
            setCheckItems(checkItems.filter((item) => item !== id)) 
            // 현재 checkItems의 배열에서 해당 id를 제외한 새로운 배열 반환
        }
    }

    let itmSum = 0;
    let priceSum = 0;
    let dPriceSum = 0;
    let tPriceSum = 0;
    let mPriceSum = 0;

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  return (

    

    <>
	<h1 id="container_title">{title}</h1>
    <div className="container_wr">
        <div className="local_ov01 local_ov">
            <button className="bt_listall" onClick={allPageList}>전체목록</button> 
            <span className="btn_ov01">
                <span className="ov_txt">전체 주문내역</span><span className="ov_num"> {total}건</span>
            </span>
        </div>

        <span className="local_sch01">
            <input type="hidden" name="sst" value="o_id"   />
            <input type="hidden" name="sod" value="desc"  />
            <input type="hidden" name="sfl" value={sfl}  />
            <input type="hidden" name="page" value={page}  onChange={(e) => setPage(e.target.value)} />

           
             <select name="selSfl" id="selSfl" onChange={onChageValue}> 
                <option value="od_id" selected="selected">주문번호</option>
                <option value="mb_id">회원 ID</option>
                <option value="od_name">주문자</option>
                <option value="od_tel">주문자전화</option>
                <option value="od_hp">주문자핸드폰</option>
                <option value="od_b_name">받는분</option>
                <option value="od_b_tel">받는분전화</option>
                <option value="od_b_hp">받는분핸드폰</option>
                <option value="od_deposit_name">입금자</option>
                <option value="od_invoice">운송장번호</option>
            </select>
            <input 
                type="text" 
                name="stx"  
                id="stx"  
                className="required frm_input" 
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
            />
            <input type="submit" className="btn_submit" value="검색" onClick={onClickSearch} />

        </span>

        <form className="local_sch03 local_sch">
            <div>
                <strong>주문상태</strong>
                <input type="radio" name="od_status" value="" id="od_status_all" checked="checked" />
                <label htmlFor="od_status_all">전체</label>
                <input type="radio" name="od_status" value="주문" id="od_status_odr" />
                <label htmlFor="od_status_odr">주문</label>
                <input type="radio" name="od_status" value="입금" id="od_status_income" />
                <label htmlFor="od_status_income">입금</label>
                <input type="radio" name="od_status" value="준비" id="od_status_rdy" />
                <label htmlFor="od_status_rdy">준비</label>
                <input type="radio" name="od_status" value="배송" id="od_status_dvr" />
                <label htmlFor="od_status_dvr">배송</label>
                <input type="radio" name="od_status" value="완료" id="od_status_done" />
                <label htmlFor="od_status_done">완료</label>
                <input type="radio" name="od_status" value="전체취소" id="od_status_cancel" />
                <label htmlFor="od_status_cancel">전체취소</label>
                <input type="radio" name="od_status" value="부분취소" id="od_status_pcancel" />
                <label htmlFor="od_status_pcancel">부분취소</label>
            </div>

            <div>
                <strong>결제수단</strong>
                <input type="radio" name="od_settle_case" value="" id="od_settle_case01" checked="checked" />
                <label htmlFor="od_settle_case01">전체</label>
                <input type="radio" name="od_settle_case" value="무통장" id="od_settle_case02" />
                <label htmlFor="od_settle_case02">무통장</label>
                <input type="radio" name="od_settle_case" value="가상계좌" id="od_settle_case03" />
                <label htmlFor="od_settle_case03">가상계좌</label>
                <input type="radio" name="od_settle_case" value="계좌이체" id="od_settle_case04" />
                <label htmlFor="od_settle_case04">계좌이체</label>
                <input type="radio" name="od_settle_case" value="휴대폰" id="od_settle_case05" />
                <label htmlFor="od_settle_case05">휴대폰</label>
                <input type="radio" name="od_settle_case" value="신용카드" id="od_settle_case06" />
                <label htmlFor="od_settle_case06">신용카드</label>
                <input type="radio" name="od_settle_case" value="간편결제" id="od_settle_case07" />
                <label htmlFor="od_settle_case07" data-tooltip-text="NHN_KCP 간편결제 : PAYCO, 네이버페이, 카카오페이(NHN_KCP), 애플페이(NHN_KCP) 
    LG유플러스 간편결제 : PAYNOW 
    KG 이니시스 간편결제 : KPAY, 삼성페이, LPAY, 카카오페이(KG이니시스)">PG간편결제</label>
                <input type="radio" name="od_settle_case" value="KAKAOPAY" id="od_settle_case08" />
                <label htmlFor="od_settle_case08">KAKAOPAY</label>
            </div>

            <div>
                <strong>기타선택</strong>
                <input type="checkbox" name="od_misu" value="Y" id="od_misu01" />
                <label htmlFor="od_misu01">미수금</label>
                <input type="checkbox" name="od_cancel_price" value="Y" id="od_misu02" />
                <label htmlFor="od_misu02">반품,품절</label>
                <input type="checkbox" name="od_refund_price" value="Y" id="od_misu03" />
                <label htmlFor="od_misu03">환불</label>
                <input type="checkbox" name="od_receipt_point" value="Y" id="od_misu04" />
                <label htmlFor="od_misu04">포인트주문</label>
                <input type="checkbox" name="od_coupon" value="Y" id="od_misu05" />
                <label htmlFor="od_misu05">쿠폰</label>
            </div>

            <div className="sch_last">
                <strong>주문일자</strong>
               
                

                <DatePicker
                dateFormat="yyyy-MM-dd" // 날짜 형식 지정
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                selectsStart
               // startDate={startDate}
               // endDate={endDate}
                placeholderText="시작일 선택"
                className="frm_input hasDatepicker"
                name="fr_date"
                size="10"

                popperContainer={({ children }) => (
                    <div style={{ position: "fixed", top: "100px", left: "300px" }}>
                    {children}
                    </div>
                )}
                />
                ~
                <DatePicker
                dateFormat="yyyy-MM-dd" // 날짜 형식 지정
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                selectsEnd
               // startDate={startDate}
               // endDate={endDate}
               // minDate={startDate} // 시작일 이전 날짜 선택 불가
                placeholderText="종료일 선택"
                className="frm_input hasDatepicker"
                name="to_date"
                size="10"
                 popperContainer={({ children }) => (
                    <div style={{ position: "fixed", top: "100px", left: "300px" }}>
                    {children}
                    </div>
                )}
                 />
               
                
                <input type="submit" value="검색" className="btn_submit" />
            </div>
        </form>

        
            <input type="hidden" name="search_od_status" value="" />

            <div className="tbl_head01 tbl_wrap">
                <table id="sodr_list">
                    <caption>주문 내역 목록</caption>
                    <thead>
                        <tr>
                           
                            <th scope="col" id="th_ordnum" rowspan="2" colspan="2">주문번호</th>
                            <th scope="col" id="th_odrer">주문자</th>
                            <th scope="col" id="th_odrertel">주문자전화</th>
                            <th scope="col" id="th_recvr">받는분</th>
                            <th scope="col" rowspan="3">주문합계<br />선불배송비포함</th>
                            <th scope="col" rowspan="3">배송비</th>
                            <th scope="col" rowspan="3">입금합계</th>
                            <th scope="col" rowspan="3">미수금</th>
                            <th scope="col" rowspan="3">보기</th>
                        </tr>
                        <tr>
                            <th scope="col" id="th_odrid">회원ID</th>
                            <th scope="col" id="th_odrcnt">주문상품수</th>
                            <th scope="col" id="th_odrall">누적주문수</th>
                        </tr>
                        <tr>
                            <th scope="col" id="odrstat">주문상태</th>
                            <th scope="col" id="odrpay">결제수단</th>
                            <th scope="col" id="delino">운송장번호</th>
                            <th scope="col" id="delicom">배송회사</th>
                            <th scope="col" id="delidate">배송일시</th>
                        </tr>
                    </thead>
                    <tbody>
                         {
                    item && item?.mode[0]?.total === '0'
                    ? <tr>
                        <td colSpan="11" className="empty_table">자료가 없습니다.</td>
                    </tr>
                    : item?.data?.map((list, id) =>{
                        const {o_id, mb_id, o_name, o_b_name, o_b_hp, dCnt, mCnt, o_state, o_type, o_price, o_delivery_price , o_total_price} = list;

                        itmSum += parseInt(dCnt);
                        priceSum += parseInt(o_price);
                        dPriceSum += parseInt(o_delivery_price);
                        tPriceSum += parseInt(o_total_price);

                        mPriceSum += o_state=="주문"    
                        ? parseInt(o_total_price)
                        : 0

                    return(
                        <>
                        <tr className="orderlist bg0">
                           
                            <td headers="th_ordnum" className="td_odrnum2" rowspan="2" colspan="2">
                                {o_id}
                                <span className="list_test">{o_name}</span>
                            </td>
                            <td headers="th_odrer" className="td_name">
                                <span className="sv_wrap"> {o_name}</span>
                            </td>
                            <td headers="th_odrertel" className="td_tel">{o_b_hp}</td>
                            <td headers="th_recvr" className="td_name">{o_b_name}</td>
                            <td rowspan="3" >{o_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                            <td rowspan="3" className="td_num_right">{o_delivery_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                            <td rowspan="3" className="td_num_right">{o_total_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                            <td rowspan="3" className="td_num_right">{

                            o_state=="주문"    
                            ? o_total_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                            : 0
                            
                            }</td>
                            <td rowspan="3" className="td_mng td_mng_s">
                                <Link to="/admin/orderform" className="btn btn_03">보기</Link>
                            </td>
                        </tr>
                        <tr className="bg0">
                            <td headers="th_odrid">{mb_id}</td>
                            <td headers="th_odrcnt">{dCnt.toLocaleString()}건</td>
                            <td headers="th_odrall">{mCnt.toLocaleString()}건</td>
                        </tr>
                        <tr className="bg0">
                            <td headers="odrstat" className="odrstat">
                                {o_state}
                            </td>
                            <td headers="odrpay" className="odrpay">
                                {o_type}
                            </td>
                            <td headers="delino" className="delino">
                                - 
                            </td>
                            <td headers="delicom">
                                - 
                            </td>
                            <td headers="delidate">
                                -
                            </td>
                        </tr>
                        </>      
						)
				})}
                    </tbody>
                    <tfoot>
                        <tr className="orderlist">
                            <th scope="row" colspan="2">&nbsp;</th>
                            <td>&nbsp;</td>
                            <td>{itmSum}건</td>
                            <th scope="row">합 계</th>
                            <td>{priceSum.toLocaleString()}</td>
                            <td>{dPriceSum.toLocaleString()}</td>
                            <td>{tPriceSum.toLocaleString()}</td>
                            <td>{mPriceSum.toLocaleString()}</td>
                            <td></td>
                        </tr>
                    </tfoot>
                </table>
            </div>

            <div className="local_cmd01 local_cmd">
            </div>

            {
         total_page> 1     
        ?   <nav class="pg_wrap">
            <span class="pg">
                <span class="pg_page pg_start cusorP" onClick={() => pageList(1)}>처음</span>
                {results}
                 <span class="pg_page pg_end cusorP"  onClick={() => pageList(total_page)}>맨끝</span>
            </span>
        </nav>
       
        : ""
          }  
          

            <div className="local_desc02 local_desc">
                <p>
                    &lt;무통장&gt;인 경우에만 &lt;주문&gt;에서 &lt;입금&gt;으로 변경됩니다. 가상계좌는 입금시 자동으로 &lt;입금&gt;처리됩니다.<br />
                    &lt;준비&gt;에서 &lt;배송&gt;으로 변경시 &lt;에스크로배송등록&gt;을 체크하시면 에스크로 주문에 한해 PG사에 배송정보가 자동 등록됩니다.<br />
                    <strong>주의!</strong> 주문번호를 클릭하여 나오는 주문상세내역의 주소를 외부에서 조회가 가능한곳에 올리지 마십시오.
                </p>
            </div>

    </div>
    </>
  )
}
