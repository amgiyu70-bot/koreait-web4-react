import { useState } from "react";
//import { importForm } from "../../hooks/importForm";
import { getMemberList, getMemberSearch } from "./js/adminMain";
import { Link } from "react-router-dom";


export default function MemberList({title}) {
    /*
    const {formVal, handleChange} = importForm({
    sfl: "",
    stx: "",
    sst: "mb_datetime",
    sod: "desc",
    page: "1"
    });
    */

  
  
    const [inputVal, setInputVal] = useState("");
    const [stx, setStx] = useState("");
    const [sfl, setSfl] = useState("mb_id");
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
        
    const {data: member} = getMemberList(stx, sfl, page);

    //const totalCnt = member?.mode[0]?.total;
    const total = (member && member?.mode[0]?.total> 0) ? member?.mode[0]?.total:0;
    const total_page = (member && member?.mode[0]?.total_page> 0)? member?.mode[0]?.total_page: 0;
    
    // console.log(member);


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
            <span className="ov_txt">총회원수 </span><span className="ov_num"> {total}명 </span></span>
        </div>

        <span className="local_sch01">
            <input type="hidden" name="sst" value="mb_datetime"   />
            <input type="hidden" name="sod" value="desc"  />
            <input type="hidden" name="sfl" value={sfl}  />
            <input type="hidden" name="page" value={page}  onChange={(e) => setPage(e.target.value)} />

            <select name="selSfl" id="selSfl" onChange={onChageValue}> 
                <option value="mb_id">회원아이디</option>
                <option value="mb_name">이름</option>
                <option value="mb_email">E-MAIL</option>
                <option value="mb_tel">전화번호</option>
                <option value="mb_hp">휴대폰번호</option>
                <option value="mb_recommend">추천인</option>
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
                    <caption>회원관리 목록</caption>
                    <thead>
                        <tr>
                            <th scope="col" id="mb_list_id" >아이디</th>
                            <th scope="col" id="mb_list_name">이름</th>
                            <th scope="col" id="mb_list_name">전화번호</th>
                            <th scope="col" id="mb_list_name">휴대번호</th>
                            <th scope="col" id="mb_list_name">이메일</th>
                            <th scope="col" id="mb_list_name">포인트</th>
                            <th scope="col" id="mb_list_name">등록일</th>
                            <th scope="col"  id="mb_list_mng">관리</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
						member && member?.mode[0]?.total === '0'
						? <tr>
							<td colSpan="8" className="empty_table">자료가 없습니다.</td>
						</tr>
						: member?.data?.map((u, idx) =>{
						return(
						<tr className={`bg${idx}`}>
							<td className="td_mbid">{u.mb_id}</td>
							<td className="td_mbname">{u.mb_name}</td>
							<td>{u.mb_tel}</td>
							<td >{u.mb_hp}</td>
							<td >{u.mb_email}</td>
							<td >{u.mb_point}</td>
							<td >{u.mb_datetime}</td>
							<td ><Link to={`/admin/memberedit/${u.mb_idx}/${sfl}/${page}/${stx}`} className="btn btn_03">수정</Link></td>
						</tr>
						)
					})}


                    </tbody>
                </table>
            </div>

            <div className="btn_fixed_top">
                <Link to="/admin/memberform" id="member_add" className="btn btn_01">회원추가</Link>
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
