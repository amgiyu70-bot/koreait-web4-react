import { useState } from "react";
import { getItemQnaList } from "./js/adminMain";
import parse from 'html-react-parser';
import { Link } from "react-router-dom";
import noImage from "../../img/no_image.gif";

export default function ItemQnaList({title}) {

    const [inputVal, setInputVal] = useState("");
    const [stx, setStx] = useState("");
    const [sfl, setSfl] = useState("it_name");
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState(false);    
	const [isVisible, setIsVisible] = useState(false);

    const onClickSearch = () => {
        setStx(inputVal);
        setSearch(true);
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
        
    const {data: qna} = getItemQnaList(stx, sfl, page);
    console.log(qna);
  
    const total = (qna && qna?.mode[0]?.total> 0) ? qna?.mode[0]?.total:0;
    const total_page = (qna && qna?.mode[0]?.total_page> 0)? qna?.mode[0]?.total_page: 0;
    
    // console.log(qna);


    const results = [];
    for ( let i = 1; i <= total_page; i++)   {
        if (i===page) {
        results.push(                

        <strong className="pg_current">{i}</strong>                
        );
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
            setCheckItems(qna?.data?.map((q => q.iq_id)))
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
            <button className="bt_listall" onClick={allPageList}>전체목록</button> <span className="btn_ov01"><span className="ov_txt"> 전체 문의내역</span><span className="ov_num"> {total}건</span></span>
        </div>

         <span className="local_sch01">
            
            <input type="hidden" name="sst" value="iq_id"   />
            <input type="hidden" name="sod" value="desc"  />
            <input type="hidden" name="page" value={page}  onChange={(e) => setPage(e.target.value)} />
          
            <select name="sfl" id="sfl" onChange={(e) => setSfl(e.target.value)}> 
                <option value="it_name">상품명</option>
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

      

            <div className="tbl_head01 tbl_wrap" id="itemqalist">
                <table>
                    <caption>상품문의 목록</caption>
                    <thead>
                        <tr>
                            <th scope="col">
                                <label htmlFor="chkall" className="sound_only">상품문의 전체</label>
                                <input type="checkbox" name="chkall" value="1" id="chkall" 
                                onChange={allCheckedHandler}
                                checked={checkItems.length === qna?.data?.length ? true : false}                      
                                />
                            </th>
                            <th scope="col">상품명</th>
                            <th scope="col">질문</th>
                            <th scope="col">아이디</th>
                            <th scope="col">이름</th>
                            <th scope="col">등록일</th>
                            <th scope="col">답변</th>
                            <th scope="col">관리</th>
                        </tr>
                    </thead>
                    <tbody>
                         {
						qna && qna?.mode[0]?.total === '0'
						? <tr>
							<td colSpan="8" className="empty_table">자료가 없습니다.</td>
						</tr>
						: qna?.data?.map((q, idx) =>{
						return(
                        <tr className={`bg${idx}`}>
                            <td className="td_chk">
                                <input 
                                    type="checkbox"   
                                    key={q.iq_id} 
                                    id={q.iq_id} 
                                    onChange={(e) => checkItemHandler(e.target.checked, q.iq_id)}
                                    checked={checkItems.includes(q.iq_id)}
                                />
                                <input type="hidden" name="iq_id[0]" value="1" />
                            </td>
                           <td className="td_left"><img src={q.it_img? `/data/shop/${q.it_img}`:noImage} width="50" height="50" alt="" title="" /> {q.it_name}</td>
                            <td className="td_left">
                                {q.iq_subject} <span className="tit_op cusorP" onClick={() => setIsVisible(!isVisible)}> 열기 </span>
                                
                            {isVisible &&  <div id={`qa_div${idx}`}  >
                                    <div className="qa_q">
                                        <strong>문의내용</strong>

                                    {parse(q.iq_question)}
                                    </div>
                                    <div className="qa_a">
                                        <strong>답변</strong>
                                        답변이 등록되지 않았습니다.
                                    </div>
                                </div>
                            }
                            </td>
                        <td className="td_name">{q.mb_id}</td>
                            <td className="td_name">{q.iq_name}</td>
                            <td>{q.iq_time}</td>
                            <td className="td_boolean">답변</td>
                            <td className="td_mng td_mng_s">
                                <Link to={`/admin/itemqnaedit/${q.iq_id}/${sfl}/${page}/${stx}`} className="btn btn_03">수정</Link>
                            </td>
                        </tr>
						)
					})}

                    </tbody>
                </table>
            </div>

            <div className="btn_fixed_top">
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
