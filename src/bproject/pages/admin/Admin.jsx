import { useEffect, useState } from "react";
import { getItemQnaMainList, getMemberMainAList, getMemberTotalCnt, getOrderMainList } from "./js/adminMain";
import noImage from "../../img/no_image.gif";
import { Link } from "react-router-dom";
import parse from 'html-react-parser';

const mdecode = "100100";
export default function Admin({title}) {
	const [mCnt, setmCnt] = useState(null);
	const [isVisible, setIsVisible] = useState(false);
	

	// 회원목록
	const {data: member, isLoing, refetch, isFetched} = getMemberMainAList();
	if (isLoing) {
		return <h1>로딩중</h1>	
	}

	//console.log(member);

	// 전체 회원
	const {data: memberCnt} = getMemberTotalCnt();
	//console.log(memberCnt);
	//if (memberCnt && memberCnt.length>0) {
		//console.log(memberCnt[0].cnt);
		//setmCnt(memberCnt[0].cnt);
	//}
	


	// 주문내역
	const {data: orders} =	getOrderMainList();
	
	// 상품 Q&A 
	const {data: qna} = getItemQnaMainList();

	

	//const totalM = 4;
	useEffect(() => {
    // 마운트 시 데이터가 아직 1번도 fetch되지 않았다면 실행
    if (!isFetched) {
      refetch();
    }
  }, [refetch, isFetched]);

  return (    
    <>    
	<h1 id="container_title">{title}</h1>
	<div className="container_wr">
		<section>
			<h2>신규가입회원 5건 목록</h2>
			<div className="local_desc02 local_desc">
				총회원수 {memberCnt && memberCnt.length? memberCnt[0].cnt:"0"}명
			</div>

			<div className="tbl_head01 tbl_wrap">
				<table>
					<caption>신규가입회원</caption>
					<thead>
						<tr>
							<th scope="col">회원아이디</th>
							<th scope="col">이름</th>
							<th scope="col">권한</th>
							<th scope="col">포인트</th>
							<th scope="col">이메일</th>
							<th scope="col">핸드폰번호</th>
						</tr>
					</thead>
					<tbody>
					{
						member && member.length === 0
						? <tr>
							<td colSpan="6" className="empty_table">자료가 없습니다.</td>
						</tr>
						: member?.map((u) =>{
						return(
						<tr>
							<td className="td_mbid">{u.mb_id}</td>
							<td className="td_mbname">{u.mb_name}</td>
							<td className="td_mbname">{u.mb_level}</td>
							<td >{u.mb_point}</td>
							<td >{u.mb_email}</td>
							<td >{u.mb_hp}</td>
						</tr>
						)
					})}
					
						
					</tbody>
				</table>
			</div>

			<div className="btn_list03 btn_list">
				<Link to="/admin/memberlist"> 회원 전체보기 </Link>
			</div>
		</section>


		<section>
			<h2>주문내역</h2>

			<div className="tbl_head01 tbl_wrap">
				<table>
					<caption>주문내역</caption>
					<thead>
						<tr>
							<th scope="col">주문번호</th>
							<th scope="col">아이디</th>
							<th scope="col">주문자</th>
							<th scope="col">연락처</th>
							<th scope="col">주문가격</th>
							<th scope="col">배송비</th>
							<th scope="col">충가격</th>
							<th scope="col">주문상품수</th>
							<th scope="col">주문일</th>
						</tr>
					</thead>
					<tbody>					

						{
						orders && orders.length === 0
						? <tr>
							<td colSpan="9" className="empty_table">자료가 없습니다.</td>
						</tr>
						: orders?.map((o) =>{
						return(
						<tr>
							<td>{o.o_id}</td>
							<td>{o.mb_id}</td>
							<td>{o.o_name}</td>
							<td>{o.o_b_hp}</td>
							<td>{o.o_price}</td>
							<td>{o.o_delivery_price}</td>
							<td>{o.o_total_price}</td>
							<td>{o.o_order_count}</td>
							<td>{o.o_datetime}</td>
						</tr>
						)
					})
						
					}
					</tbody>
				</table>
			</div>

			<div className="btn_list03 btn_list">
				<Link to="/admin/orderlist">주문내역 더보기</Link>
			</div>
		</section>


		<section>
			<h2>최근 상품 Q&A</h2>
			

			<div className="tbl_head01 tbl_wrap">
				<table>
					<caption>상품 Q&A 내역</caption>
					<thead>
						<tr>
							<th scope="col">상품명</th>
							<th scope="col">질문</th>
							<th scope="col">아이디</th>
							<th scope="col">이름</th>
							<th scope="col">등록일</th>
							<th scope="col">답변</th>
						</tr>
					</thead>
					<tbody>
						
						{
						qna && qna.length === 0
						? <tr>
							<td colSpan="9" className="empty_table">자료가 없습니다.</td>
						</tr>
						: qna?.map((q, idx) =>{
						return(
						<tr className={`bg${idx}`}>
                            <td className="td_left"><img src={q.it_img? `http://gnbiz8888.liodesign.kr/react/upload/${q.it_img}`:noImage} width="50" height="50" alt="" title="" /> {q.it_name}</td>
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
                        </tr>
						)
					})
						
					}
					</tbody>
				</table>
			</div>

			<div className="btn_list03 btn_list">
				<Link to="/admin/itemqna">상품 Q&A 전체보기</Link>
			</div>
		</section>



	</div>
    </>
  )
}
