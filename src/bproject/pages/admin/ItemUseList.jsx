import { useState } from "react";
import { getItemUseList } from "./js/adminMain";
import parse from 'html-react-parser';
import { Link } from "react-router-dom";
import noImage from "../../img/no_image.gif";

export default function ItemUseList({title}) {

    const [inputVal, setInputVal] = useState("");
    const [stx, setStx] = useState("");
    const [sfl, setSfl] = useState("it_name");
    const [page, setPage] = useState(1); 
	const [isVisible, setIsVisible] = useState(false);

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
        
    const {data: use} = getItemUseList(stx, sfl, page);
   // console.log(use);
  
    const total = (use && use?.mode[0]?.total> 0) ? use?.mode[0]?.total:0;
    const total_page = (use && use?.mode[0]?.total_page> 0)? use?.mode[0]?.total_page: 0;
    
   // console.log(use);

    const results = [];
    for ( let i = 1; i <= total_page; i++)   {
        
        if (i===page) {
            results.push( <strong className="pg_current">{i}</strong>   );
        } else {
            results.push( <span className="pg_page fcolor01 cusorP"  onClick={() => pageList(i)}>{i}</span>);
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
            setCheckItems(use?.data?.map((u => u.is_id)))
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
            <button className="bt_listall" onClick={allPageList}>전체목록</button> <span className="btn_ov01"><span className="ov_txt"> 전체 후기내역</span><span className="ov_num"> {total}건</span></span>
        </div>

        <span className="local_sch01">
            <input type="hidden" name="sst" value="is_id"   />
            <input type="hidden" name="sod" value="desc"  />
            <input type="hidden" name="page" value={page}  onChange={(e) => setPage(e.target.value)} />
            
            <select name="sfl" id="sfl" onChange={(e) => setSfl(e.target.value)}>
                <option value="it_name">상품명</option>
                <option value="is_name">이름</option>
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

        

            <div className="tbl_head01 tbl_wrap" id="itemuselist">
                <table>
                    <caption>사용후기 목록</caption>
                    <thead>
                        <tr>
                            <th scope="col">
                                <label htmlFor="chkall" className="sound_only">사용후기 전체</label>
                                <input type="checkbox" name="chkall" value="1" id="chkall" 
                                onChange={allCheckedHandler}
                                checked={checkItems.length === use?.data?.length ? true : false}                      
                                />
                            </th>
                            <th scope="col">상품명</th>
                            <th scope="col">아이디</th>
                            <th scope="col">이름</th>
                            <th scope="col">제목</th>
                            <th scope="col">평점</th>
                            <th scope="col">확인</th>
                            <th scope="col">관리</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
						use && use?.mode[0]?.total === '0'
						? <tr>
							<td colSpan="8" className="empty_table">자료가 없습니다.</td>
						</tr>
						: use?.data?.map((u, idx) =>{
						return(
                        <tr className={`bg${idx}`}>
                            <td className="td_chk">
                                <input 
                                    type="checkbox"   
                                    key={u.is_id} 
                                    id={u.is_id} 
                                    onChange={(e) => checkItemHandler(e.target.checked, u.is_id)}
                                    checked={checkItems.includes(u.is_id)}
                                />
                                <input type="hidden" name="is_id[0]" value="2" />
                                <input type="hidden" name="it_id[0]" value="1770986271" />
                            </td>
                            <td className="td_left"><img src={u.it_img? `/data/shop/${u.it_img}`:noImage} width="50" height="50" alt="" title="" /> {u.it_name}</td>
                            <td className="td_name">{u.mb_id}</td>
                            <td className="td_name">{u.is_name}</td>
                            <td className="sit_use_subject td_left">                              

                                {u.is_subject} <span className="tit_op cusorP" onClick={() => setIsVisible(!isVisible)}> 열기 </span>
                                {isVisible &&  <div id={`qa_div${idx}`}  >  
                                    {parse(u.is_content)}
                                    </div>
                                }
                            </td>
                            <td className="td_select">
                                <label htmlFor="score_0" className="sound_only">평점</label>
                                <select name="is_score[0]" id="score_0">
                                    <option value="5">매우만족</option>
                                    <option value="4" selected="selected">만족</option>
                                    <option value="3">보통</option>
                                    <option value="2">불만</option>
                                    <option value="1">매우불만</option>
                                </select>
                            </td>
                            <td className="td_chk2">
                                <label htmlFor="confirm_0" className="sound_only">확인</label>
                                <input type="checkbox" name="is_confirm[0]" value="1" id="confirm_0" />
                            </td>
                            <td className="td_mng td_mng_s">
                                <Link to={`/admin/itemuseedit/${u.is_id}/${sfl}/${page}/${stx}`} className="btn btn_03">수정</Link>
                            </td>
                        </tr>
                        )
					})}

                    </tbody>
                </table>
            </div>

            <div className="btn_fixed_top">
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
