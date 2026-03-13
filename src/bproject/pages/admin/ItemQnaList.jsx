import { useState } from "react";
import { getItemQnaDel, getItemQnaList } from "./js/adminMain";
import parse from 'html-react-parser';
import { Link, useLocation, useNavigate } from "react-router-dom";
import noImage from "../../img/no_image.gif";
import { toast } from "react-toastify";

export default function ItemQnaList({title}) {

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

    const dataToPass = { sfl: sfl, stx: stx, page: page, times: Date.now() };

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
        
    const {data: qna} = getItemQnaList(stx, sfl, page, times);
    console.log(qna);
  
    const total = (qna && qna?.mode[0]?.total> 0) ? qna?.mode[0]?.total:0;
    const total_page = (qna && qna?.mode[0]?.total_page> 0)? qna?.mode[0]?.total_page: 0;
    
    // console.log(qna);

    const results = [];
    for ( let i = 1; i <= total_page; i++)   {
        
        if (i===parseInt(page)) {
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
         //console.log(checkItems)
        if (check) {
            setCheckItems((prev) => [...prev, id]) // 불변성을 지키기 위한 원본 배열을 복사 후 추가
        } else {
           // console.log(id);
            setCheckItems(checkItems.filter((item) => item !== id)) 
            // 현재 checkItems의 배열에서 해당 id를 제외한 새로운 배열 반환
        }
    }

    const [showItem, setShowItem] = useState({});

    const toggleItem = (id) => {
        setShowItem(prev => ({
        ...prev,
        [id]: !prev[id] // 클릭한 ID의 상태만 반전
        }));
    };


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

         console.log(chkVal);

        if (chkCnt==0) {
            alert('삭제할 상품을 하나이상 선택해주세요.');
            return "";
        }
        
        const arr = new Array(); 
        arr['mode'] = 'sel';
        arr['chkVal'] = chkVal;
        const obj = { ...arr };
        try {
            const response = await getItemQnaDel(obj);
           // console.log(response);            

            if (response?.error!=0) {
                toast.error(response?.msg);
            } else {
                toast.success(response?.msg);
            }
            setCheckItems([]);
            nav('/admin/itemqna',  { state: dataToPass });

        } catch(error) {
                toast.error("실행 에러");
        }
               

        // console.log(chkCnt);
    }
    // -----------------
    // 선택 삭제 END
    //------------------
    
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
                                    name="chkname"
                                    key={q.iq_id} 
                                    id={q.iq_id} 
                                    value={q.iq_id} 
                                    onChange={(e) => checkItemHandler(e.target.checked, q.iq_id)}
                                    checked={checkItems.includes(q.iq_id)}
                                />
                            </td>
                           <td className="td_left" style={{width:"200px"}}><img src={q.it_img? `http://gnbiz8888.liodesign.kr/react/upload/${q.it_img}`:noImage} width="50" height="50" alt="" title="" /> {q.it_name}</td>
                            <td className="td_left">
                                {q.iq_subject} <span className="tit_op cusorP" onClick={() => toggleItem(idx)} > 열기 </span>
                                
                            {showItem[idx] && <div id={`qa_div${idx}`}  >
                                    <div className="qa_q">
                                      <br />  
                                    <strong>문의내용</strong>
                                    <br />
                                    {parse(q.iq_question)}
                                        <br />
                                    </div>
                                    <div className="qa_a">
                                        <br />
                                        <strong>답변</strong>
                                        <br />
                                        {q?.iq_answer? parse(q.iq_answer):"답변이 등록되지 않았습니다."}
                                        
                                    </div>
                                </div>
                             }
                            </td>
                        
                        <td className="td_name">{q.mb_id}</td>
                            <td className="td_name">{q.iq_name}</td>
                            <td>{q.iq_time}</td>
                            <td className="td_boolean">
                                {q?.iq_answer? "답변됨":"없음"}
                            </td>
                            <td className="td_mng td_mng_s">
                                <Link to="/admin/itemqnaedit" state={{ iq_id: q.iq_id, sfl: sfl, page: page, stx: stx }} className="btn btn_03">수정</Link>
                            </td>
                        </tr>
						)
					})}

                    </tbody>
                </table>
            </div>

            <div className="btn_fixed_top">
                <input type="button" name="act_button" value="선택삭제" onClick={selectDel} className="btn btn_02" />
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
