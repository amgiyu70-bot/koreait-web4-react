import { useState } from "react";
import { getCateList } from "./js/adminMain";
import { Link } from "react-router-dom";


export default function CategoryList({title}) {

    const [inputVal, setInputVal] = useState("");
    const [stx, setStx] = useState("");
    const [sfl, setSfl] = useState("ca_name");
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
    const {data: cate, isLoing, isError, error} = getCateList(stx, sfl, page); 
    const total = (cate && cate?.mode[0]?.total> 0) ? cate?.mode[0]?.total:0;
    const total_page = (cate && cate?.mode[0]?.total_page> 0)? cate?.mode[0]?.total_page: 0;

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
            <strong className="pg_current">{i}</strong>                
            );
        } else {
            results.push( <span className="pg_page fcolor01 cusorP"  onClick={() => pageList(i)}>{i}</span>);
        }

    }

  return (
    <>
	<h1 id="container_title">{title}</h1>
    <div className="container_wr">
        <div className="local_ov01 local_ov">
            <button className="bt_listall" onClick={allPageList}>전체목록</button> <span className="btn_ov01">
            <span className="ov_txt">총수 </span><span className="ov_num"> {total}개 </span></span>
        </div>

        <span className="local_sch01">
            <input type="hidden" name="sst" value="ca_id"   />
            <input type="hidden" name="sod" value="desc"  />
            <input type="hidden" name="page" value={page}  onChange={(e) => setPage(e.target.value)} />
           <select name="sfl" id="sfl" onChange={(e) => setSfl(e.target.value)}> 
                <option value="ca_name">분류명</option>
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
                <caption>분류 목록</caption>
                <thead>
                    <tr>
                        <th scope="col">분류코드</th>
                        <th scope="col">분류명</th>
                        <th scope="col">상품갯수</th>
                        <th scope="col">관리</th>
                    </tr>
                </thead>
                <tbody>
                {
                    cate && cate?.mode[0]?.total === '0'
                    ? <tr>
                        <td colSpan="8" className="empty_table">자료가 없습니다.</td>
                    </tr>
                    : cate?.data?.map((c, idx) =>{
                        const {ca_id, ca_name, caCnt} = c;
                    return(
                    <tr className={`bg${idx}`} key={idx}>
                        <td>{ca_id}</td>
                        <td>{ca_name}</td>
                        <td>{caCnt}</td>
                        <td>
                            <Link to={`/admin/categoryedit/${ca_id}/${sfl}/${page}/${stx}`} className="btn btn_03">수정</Link>
                            &nbsp;
                            <Link to={`/admin/categoryedit/${ca_id}/${sfl}/${page}/${stx}`} className="btn btn_03">삭제</Link>
                        </td>
                    </tr>                    
						)
				})}
                </tbody>
            </table>
            <div class="btn_fixed_top">
                <Link to="/admin/categoryform" id="member_add" className="btn btn_01">분류추가</Link>
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
    </div>
    </>
  )
}
