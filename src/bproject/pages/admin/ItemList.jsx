import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getItemDel, getItemList, getItemSelUpdate, getItemState } from "./js/adminMain";
import noImage from "../../img/no_image.gif";
import { toast } from "react-toastify";

export default function ItemList({title}) {
     // 경로
    const nav = useNavigate();
    const location = useLocation();
    const reData = location.state;    
    const sflL = reData?.sfl? reData?.sfl : "it_name";
    const pageL = reData?.page ? reData?.page : 1;
    const stxL = reData?.stx? reData?.stx : "";
    let times = (reData?.times)? reData?.times: "";   
    

    const [inputVal, setInputVal] = useState("");
    const [sfl, setSfl] = useState(sflL);
    const [stx, setStx] = useState(stxL);
    const [page, setPage] = useState(pageL); 

    const onClickSearch = () => {
        setStx(inputVal);
        setPage(1);
    }
    const allPageList = () => {
         setInputVal("");
         setStx("");
         setPage(1);

    }
    const pageList = (v) => {
        setPage(v);
    }
    const {data: item, isLoing, isError, error} = getItemList(stx, sfl, page, times); 
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
            setCheckItems(item?.data?.map((it => it?.it_id)))
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
    // 선택 삭제 STR
    //------------------

    const selectDel = async () => {
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
            alert('삭제할 상품을 하나이상 선택해주세요.');
            return "";
        }
        
        const arr = new Array(); 
        arr['mode'] = 'sel';
        arr['chkVal'] = chkVal;
        const obj = { ...arr };
        try {
            const response = await getItemDel(obj);    
            //console.log(response);    
            if (response?.error!=0) {
                toast.error(response?.msg);
            } else {
                toast.success(response?.msg);
            }
            setCheckItems([]);
            const dataToPass = { sfl: sfl, stx: stx, page: page, times: Date.now() };
            nav('/admin/itemlist',  { state: dataToPass });

        } catch(error) {
                toast.error("실행 에러");
        }
                

        // console.log(chkCnt);
    }
    // -----------------
    // 선택 삭제 END
    //------------------



    // -----------------
    // 선택 수정 STR
    //------------------

    const selectUpdate = async () => {
        // console.log(checkItems[0]);
        const checkboxes = document.getElementsByName('chkname');
        const it_name = document.getElementsByName('it_name');
        const it_order = document.getElementsByName('it_order');
        const it_price = document.getElementsByName('it_price');
        const it_base = document.getElementsByName('it_base_price');
        const it_qty = document.getElementsByName('it_qty');
        /// console.log(checkboxes);
        let chkCnt = 0;
        let chkVal = "";
        let it_nameValue = "";
        let it_orderValue = "";
        let it_priceValue = "";
        let it_baseValue = "";
        let it_qtyValue = "";
        for (let i=0; i<checkboxes.length; i++) {

            if (checkboxes[i].checked) {                
                if (chkCnt>0) {
                    chkVal +="|";
                    it_nameValue +="|";
                    it_orderValue +="|";
                    it_priceValue +="|";
                    it_baseValue +="|";
                    it_qtyValue +="|";
                }
                chkVal += checkboxes[i].value;
                it_nameValue += it_name[i].value;
                it_orderValue += it_order[i].value;
                it_priceValue += it_price[i].value;
                it_baseValue += it_base[i].value;
                it_qtyValue += it_qty[i].value;
                chkCnt++;
            }            
        }

        if (chkCnt==0) {
            alert('수정할 상품을 하나이상 선택해주세요.');
            return "";
        }

        console.log(chkVal);
        console.log(it_nameValue);
        console.log(it_orderValue);
        console.log(it_priceValue);
        console.log(it_baseValue);
        console.log(it_qtyValue);
        
       // return "";
        const arr = new Array(); 
        arr['mode'] = 'sel';
        arr['chkVal'] = chkVal;
        arr['it_nameValue'] = it_nameValue;
        arr['it_orderValue'] = it_orderValue;
        arr['it_priceValue'] = it_priceValue;
        arr['it_baseValue'] = it_baseValue;
        arr['it_qtyValue'] = it_qtyValue;
        const obj = { ...arr };
        try {
            const response = await getItemSelUpdate(obj);    
            //console.log(response);    
            if (response?.error!=0) {
                toast.error(response?.msg);
            } else {
                toast.success(response?.msg);
            }

            setCheckItems([]);
            const dataToPass = { sfl: sfl, stx: stx, page: page, times: Date.now() };
            nav('/admin/itemlist',  { state: dataToPass });

        } catch(error) {
                toast.error("실행 에러");
        }
                

        // console.log(chkCnt);
    }
    // -----------------
    // 선택 수정 END
    //------------------


    const useClick = async (chk, itIdx, mode) => {
    
        const arr = new Array(); 
        if (chk==true) {
            arr['it_state'] = 1;
        } else {
            arr['it_state'] = 0;
        }
            
        arr['mode'] = mode;
        arr['it_id'] = itIdx;           
        const obj = { ...arr };

        console.log(obj);
        try {
            const response = await getItemState(obj); 
            
            console.log(response);

            if (response?.error!=0) {
                toast.error(response?.msg);
            } else {
                toast.success(response?.msg);
            }

        } catch(error) {
            toast.error("실행 에러");
        }

    }

    
  return (
    <>
	<h1 id="container_title">{title}</h1>
    <div className="container_wr">
        <div className="local_ov01 local_ov">
            <button className="bt_listall" onClick={allPageList}>전체목록</button> &nbsp;
            <span className="btn_ov01">
                <span className="ov_txt">등록된 상품 </span><span className="ov_num"> {total}건 </span>
            </span>
        </div>

        <span className="local_sch01 local_sch">
            <input type="hidden" name="sst" value="it_id"   />
            <input type="hidden" name="sod" value="desc"  />
            <input type="hidden" name="page" value={page}  onChange={(e) => setPage(e.target.value)} />

            
            <select name="sca" id="sca">
                <option value="">전체분류</option>
                <option value="10">남성복</option>
            </select>
           
            <select name="sfl" id="sfl" onChange={(e) => setSfl(e.target.value)}> 
                <option value="it_name" selected="selected">상품명</option>
                <option value="it_id">상품코드</option>
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

        <div className="tbl_head01 tbl_wrap">
            <table>
                <caption>상품관리 목록</caption>
                <thead>
                    <tr>
                        <th scope="col" rowspan="3">
                            <label htmlFor="chkall" className="sound_only">상품 전체</label>
                            <input type="checkbox" name="chkall" value="1" id="chkall" 
                             onChange={allCheckedHandler}
                             checked={checkItems.length === item?.data?.length ? true : false}                      
                            />
                        </th>
                        <th scope="col" rowspan="3">상품코드</th>
                        <th scope="col" colspan="4">분류</th>
                        <th scope="col" rowspan="3">순서</th>
                        <th scope="col" rowspan="3">판매</th>
                        <th scope="col" rowspan="3">품절</th>
                        <th scope="col" rowspan="3">조회</th>
                        <th scope="col" rowspan="3">관리</th>
                    </tr>
                    <tr>
                        <th scope="col" rowspan="2" id="th_img">이미지</th>
                        <th scope="col" rowspan="2" id="th_pc_title">상품명</th>
                        <th scope="col" id="th_amt">판매가격</th>
                        <th scope="col" id="th_camt">시중가격</th>
                    </tr>
                    <tr>
                        <th scope="col" id="th_pt">포인트</th>
                        <th scope="col" id="th_qty">재고</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    item && item?.mode[0]?.total === '0'
                    ? <tr>
                        <td colSpan="11" className="empty_table">자료가 없습니다.</td>
                    </tr>
                    : item?.data?.map((it, id) =>{
                        const {it_id, ca_name, it_name, it_price, it_base_price, it_point, it_img1, it_use, it_soldout, it_order, it_hit, it_qty} = it;
                    return(
                    <>
                    <tr className="bg0">
                        <td rowspan="3" className="td_chk">                           
                            <input 
                                type="checkbox"                                  
                                name="chkname"   
                                value={it_id} 
                                key={it_id} 
                                id={it_id} 
                                onChange={(e) => checkItemHandler(e.target.checked, it_id)}
                                checked={checkItems.includes(it_id)}
                            />
                        </td>
                        <td rowspan="3" className="td_num">{it_id}</td>
                        <td colspan="4" className="td_sort">{ca_name}</td>
                        <td rowspan="3" className="td_num">
                            <input type="number" name="it_order" defaultValue={it_order}  className="tbl_input" size="3" />
                        </td>
                        <td rowspan="3">

                            {parseInt(it_use)===1 
                            ?<input type="checkbox" name="it_use" value="1"  defaultChecked                               
                            onClick={(e) => useClick(e.target.checked, it_id, "use")} />
                            : <input type="checkbox" name="it_use" value="1"                                 
                            onClick={(e) => useClick(e.target.checked, it_id, "use")} />
                            }
                        </td>
                        <td rowspan="3">
                            {parseInt(it_soldout)===1 
                            ?<input type="checkbox" name="it_soldout" value="1"  defaultChecked                               
                            onClick={(e) => useClick(e.target.checked, it_id, "soldout")} />
                            : <input type="checkbox" name="it_soldout" value="1"                                 
                            onClick={(e) => useClick(e.target.checked, it_id, "soldout" )} />
                            }

                        </td>
                        <td rowspan="3" className="td_num">{it_hit}</td>
                        <td rowspan="3" className="td_mng td_mng_s">

                            <Link to="/admin/itemedit" state={{ it_id: it_id, sfl: sfl, page: page, stx: stx }} className="btn btn_03">수정</Link>
                            &nbsp;
                            <a href={`/itemview/${it_id}`} target="_blank" className="btn btn_02">보기</a>
                        </td>
                    </tr>
                    <tr className="bg0">
                        <td rowspan="2" className="td_img"><img src={it_img1? `http://gnbiz8888.liodesign.kr/react/upload/${it_img1}`:noImage} width="50" height="50" alt={it_name}  /> </td>
                        <td headers="th_pc_title" rowspan="2" className="td_input">
                            <label htmlFor="name_0" className="sound_only">상품명</label>
                            <input type="text" name="it_name" defaultValue={it_name}   className="tbl_input required" size="30" />
                        </td>
                        <td headers="th_amt" className="td_numbig td_input">
                            <input type="number" name="it_price" defaultValue={it_price}  className="tbl_input sit_amt" size="7" />
                        </td>
                        <td headers="th_camt" className="td_numbig td_input">
                            <input type="number" name="it_base_price" defaultValue={it_base_price} className="tbl_input sit_camt" size="7" />
                        </td>
                        
                    </tr>
                    <tr className="bg0">
                        <td headers="th_pt" className="td_numbig td_input">{it_point}</td>
                        <td headers="th_qty" className="td_numbig td_input">
                            <input type="number" name="it_qty" defaultValue={it_qty}  className="tbl_input sit_qty" size="7" />
                        </td>                        
                    </tr> 
                    </>          
						)
				})}
                </tbody>
            </table>
        </div>

        <div className="btn_fixed_top">
            <Link to="/admin/itemform" className="btn btn_01">상품등록</Link>&nbsp;
            <input type="button" name="act_button" value="선택수정" className="btn btn_02" onClick={selectUpdate} />&nbsp;
            <input type="button" name="act_button" value="선택삭제" className="btn btn_02" onClick={selectDel}  />&nbsp;
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
        
    </div>
    </>
  )
}
