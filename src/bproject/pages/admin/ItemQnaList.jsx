import { useState } from "react";
import { getItemQnaList } from "./js/adminMain";
import parse from 'html-react-parser';

export default function ItemQnaList({title}) {

    const [inputVal, setInputVal] = useState("");
    const [stx, setStx] = useState("");
    const [sfl, setSfl] = useState("mb_id");
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

  
    const total = (qna && qna?.mode[0]?.total> 0) ? qna?.mode[0]?.total:0;
    const total_page = (qna && qna?.mode[0]?.total_page> 0)? qna?.mode[0]?.total_page: 0;
    
    // console.log(qna);


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
    
  return (
    <>
	<h1 id="container_title">{title}</h1>
    <div className="container_wr">
        <div className="local_ov01 local_ov">
            <a href="/shop/adm/shop_admin/itemqalist.php" className="ov_listall">전체목록</a> <span className="btn_ov01"><span className="ov_txt"> 전체 문의내역</span><span className="ov_num"> 1건</span></span>
        </div>

         <span className="local_sch01">
            
            <input type="hidden" name="sst" value="mb_datetime"   />
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
                                <input type="checkbox" name="chkall" value="1" id="chkall" onclick="check_all(this.form)" />
                            </th>
                            <th scope="col">상품명</th>
                            <th scope="col">질문</th>
                            <th scope="col">이름</th>
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
                        <tr className="bg0">
                            <td className="td_chk">
                                <label htmlFor="chk_0" className="sound_only">상품문의 입니다. 상품문의</label>
                                <input type="checkbox" name="chk[]" value="0" id="chk_0" />
                                <input type="hidden" name="iq_id[0]" value="1" />
                            </td>
                           <td className="td_left"><img src={q.it_img? `/data/shop/${q.it_img}`:noImage} width="50" height="50" alt="" title="" /> {q.it_name}</td>
                            <td className="td_left">
                                {q.iq_subject} <span className="tit_op cusorP" onClick={() => setIsVisible(!isVisible)}> 열기 </span>
                                
                            {isVisible &&  <div id="qa_div0" className="qa_div" >
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
                                <a href="./itemqaform.php?w=u&amp;iq_id=1&amp;sst=&amp;sod=&amp;sfl=&amp;stx=&amp;page=&amp;sca=&amp;save_stx=" className="btn btn_03"><span className="sound_only">상품문의 입니다. </span>수정</a>
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
    </div>
    </>
  )
}
