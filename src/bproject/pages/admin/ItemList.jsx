import { useState } from "react";
import { Link } from "react-router-dom";
import { getItemList } from "./js/adminMain";
import noImage from "../../img/no_image.gif";

export default function ItemList({title}) {

    const [inputVal, setInputVal] = useState("");
    const [stx, setStx] = useState("");
    const [sfl, setSfl] = useState("it_name");
    const [page, setPage] = useState(1);       

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
    const {data: item, isLoing, isError, error} = getItemList(stx, sfl, page); 
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

    
  return (
    <>
	<h1 id="container_title">{title}</h1>
    <div className="container_wr">
        <div className="local_ov01 local_ov">
            <button className="bt_listall" onClick={allPageList}>전체목록</button> 
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
                                key={it_id} 
                                id={it_id} 
                                onChange={(e) => checkItemHandler(e.target.checked, it_id)}
                                checked={checkItems.includes(it_id)}
                            />
                        </td>
                        <td rowspan="3" className="td_num">
                            <input type="hidden" name="it_id[0]" value="1770986271" />
                            {it_id}
                        </td>
                        <td colspan="4" className="td_sort">
                           
                           {ca_name}
                        </td>
                        <td rowspan="3" className="td_num">
                            <label htmlFor="order_0" className="sound_only">순서</label>
                            <input type="text" name="it_order[0]" value={it_order}  className="tbl_input" size="3" />
                        </td>
                        <td rowspan="3">
                            <label htmlFor="use_0" className="sound_only">판매여부</label>
                            <input type="checkbox" name="it_use[0]"   value={it_use}  />
                        </td>
                        <td rowspan="3">
                            <label htmlFor="soldout_0" className="sound_only">품절</label>
                            <input type="checkbox" name="it_soldout[0]"  value={it_soldout}  />
                        </td>
                        <td rowspan="3" className="td_num">{it_hit}</td>
                        <td rowspan="3" className="td_mng td_mng_s">

                            <Link to={`/admin/itemedit/${it_id}/${sfl}/${page}/${stx}`} className="btn btn_03">수정</Link>
                            &nbsp;
                            <Link to={`/admin/itemedit/${it_id}/${sfl}/${page}/${stx}`} className="btn btn_02">보기</Link>
                        </td>
                    </tr>
                    <tr className="bg0">
                        <td rowspan="2" className="td_img"><img src={it_img1? `/data/shop/${it_img1}`:noImage} width="50" height="50" alt={it_name}  /> </td>
                        <td headers="th_pc_title" rowspan="2" className="td_input">
                            <label htmlFor="name_0" className="sound_only">상품명</label>
                            <input type="text" name="it_name[0]" value={it_name}   className="tbl_input required" size="30" />
                        </td>
                        <td headers="th_amt" className="td_numbig td_input">
                            <label htmlFor="price_0" className="sound_only">판매가격</label>
                            <input type="text" name="it_price[0]" value={it_price}  className="tbl_input sit_amt" size="7" />
                        </td>
                        <td headers="th_camt" className="td_numbig td_input">
                            <label htmlFor="cust_price_0" className="sound_only">시중가격</label>
                            <input type="text" name="it_cust_price[0]" value={it_base_price} className="tbl_input sit_camt" size="7" />
                        </td>
                        
                    </tr>
                    <tr className="bg0">
                        <td headers="th_pt" className="td_numbig td_input">{it_point}</td>
                        <td headers="th_qty" className="td_numbig td_input">
                            <label htmlFor="stock_qty_0" className="sound_only">재고</label>
                            <input type="text" name="it_stock_qty[0]" value={it_qty}  className="tbl_input sit_qty" size="7" />
                        </td>                        
                    </tr> 
                    </>          
						)
				})}
                </tbody>
            </table>
        </div>

        <div className="btn_fixed_top">

            <a href="./itemform.php" className="btn btn_01">상품등록</a>
            <a href="./itemexcel.php" onclick="return excelform(this.href);" target="_blank" className="btn btn_02">상품일괄등록</a>
            <input type="submit" name="act_button" value="선택수정" onclick="document.pressed=this.value" className="btn btn_02" />
            <input type="submit" name="act_button" value="선택삭제" onclick="document.pressed=this.value" className="btn btn_02" />
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
