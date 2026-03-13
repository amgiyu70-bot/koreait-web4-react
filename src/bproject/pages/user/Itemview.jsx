import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { cartUpdate, getItemQnaCnt, getItemQnaDel, getItemQnaList, getItemUseCnt, getItemUseDel, getItemUseList, getItemView, itemQnaUpdate, itemUseUpdate } from './js/userQuery';
import noImage from "../../img/no_image.gif";
import { toast } from 'react-toastify';
import { AiOutlinePlus, AiOutlineMinus, AiOutlineClockCircle } from "react-icons/ai";
import parse from 'html-react-parser';
import {  useState } from 'react';
import { useAuthStore } from '../../stores/authStore';

export default function Itemview() {

	// 경로
	const nav = useNavigate();
	const location = useLocation();
    const reData = location.state;    
	let times = (reData?.times)? reData?.times: "";   

	const {id} = useParams();
	const {data: item, isLoing, isError, error} = getItemView(id); 
	
   
	if (item?.error) {
		toast.error("해상 상품이 없습니다.");
		nav("/");
	}

	if (isLoing) {
		return <h1>로딩중</h1>
	}

	if (isError) {
		console.log(error.message);
		return <h1>에러발생</h1>
	}

	
	
	
	//if (item && item?.it_id) {
	//	const {it_id, it_name, it_price,  it_img1, it_short_memo, it_shop_memo, it_delivery_price, it_base_price, it_point} = item;


	// 가감산
	const [temp, setTemp] = useState(1);
	const chkTemp = (val) => {    
		if (val=="+") {
			//alert(1);
			setTemp(temp+1);
		} else {
			if (temp<=1) {
				setTemp(1);
			} else {
				setTemp(temp-1);
			}
		}      
	}


	const {mbID} = useAuthStore();
	const {isPending, mutate} = cartUpdate();
	const CartClicke = (v) => {           
			if (!mbID) {
				toast.error("회원 로그인 후 이용해주세요!");
				setTimeout(() => {  
						 nav("/login");            
				}, 2500);
				return;
			} else {
				//alert(1);
			  
				let it_id = document.getElementById("itID").value;
				let mb_id = mbID;
				let ct_qty = document.getElementById("ct_qty").value;
				let ct_direct = v;

				console.log(it_id);
				console.log(mb_id);
				console.log(ct_qty);
				console.log(ct_direct);	
					   
				mutate({it_id, mb_id, ct_qty, ct_direct}, {
				onSuccess: () => {
					if (ct_direct==1) {
						 nav("/orderform/1"); 
					} else {
						 nav("/cart");
					}
				},
				onError: () => {
				 }
				});
				
			   
			}        
		}   
	const totalPrice = item?.it_price * temp;


	// 템 실행
	const [tabs, setTabs] = useState(1);
	const clickTab = (v) => {
		setTabs(v);
	}
	
	// 상품후기 카운터
	const {data: useCnt} = getItemUseCnt(id, times);
	const {data: useL} = getItemUseList(id, times);

	const [showItem, setShowItem] = useState({});	
	const [useAdd, setUseAdd] = useState(false);
	const [is_subject, setIs_subject] = useState("");
	const [is_content, setIs_content] = useState("");
	const [is_score, setIs_score] = useState("");		
	const [useIdx, setUseIdx] = useState("");
	const [isDel, setIsDel] = useState("");
	const toggleItem = (id) => {

		setShowItem({});
		setUseAdd(false);
		setUseIdx("");
		setShowItem(prev => ({
		...prev,
		[id]: !prev[id] // 클릭한 ID의 상태만 반전
		}));
	};
	const handleUse = (v) => {
		setUseAdd(v);
		setShowItem({});
		setIs_subject("");
		setIs_content("");
		setIs_score("");
	}

	// 사용후기 등록 수정
	const {isPending: isPendingUse, mutate: mutateUse} = itemUseUpdate();
	const useWrite = (mode, is_id) => {

		if (!is_subject) {
			toast.error("제목을 입력해주세요.");
			return false;
		}

		if (!is_content) {
			toast.error("내용을 입력해주세요.");
			return false;
		}

		if (!is_score) {
			toast.error("점수를 선택해주세요.");
			return false;
		}
		const jsonData = {
            mode: mode
            ,mb_id: mbID
            ,it_id: id
			,is_id: is_id
            ,is_subject: is_subject
            ,is_content: is_content
            ,is_score: is_score
        };

		console.log(jsonData);
		//return ""

		mutateUse(jsonData, {
		onSuccess: () => {
			setUseAdd(false);
			setIs_subject("");
			setIs_content("");
			setIs_score("");
			setUseIdx("");
			setShowItem({});


			if (mode =='edt') {		
				const dataToPass = { times: Date.now() };   
				nav(`/itemview/${id}`, { state: dataToPass });
			}
		},
		onError: () => {
			}
		});		
		
	}
	// 상품 후기 삭제
	const useDel = async (idx) => {
		if (window.confirm('정말 삭제 하시겠습니까?')) {
			
			const jsonData = {
				mode: 'del'
				,mb_id: mbID
				,is_id: idx
			};

			try {
				const response = await getItemUseDel(jsonData);

				if (response?.error!=0) {
					toast.error(response?.msg);
				} else {
					toast.success(response?.msg);
				}
									
				setIsDel(idx);

			} catch(error) {
				toast.error("실행 에러");
			}
		}
	}

	
	const useEdit = (isSubject, isContent, isScore, idx) => {
			setIs_subject(isSubject);
			setIs_content(isContent);
			setIs_score(isScore);
			setUseIdx(idx);
	}



	// 상품문의 카운터
	const {data: qnaCnt} = getItemQnaCnt(id, times);
	// 상품문의 내역		
	const {data: qnaL} = getItemQnaList(id, times);

	const [showQna, setShowQna] = useState({});	
	const [qaDel, setQnDel] = useState("");	
	const [qnaAdd, setQnaAdd] = useState(false);	
	const [qnaIdx, setQnaIdx] = useState("");
	const [iq_subject, setIq_subject] = useState("");
	const [iq_question, setIq_question] = useState("");
	const toggleQna = (id) => {
		setShowQna({});
		setShowQna(prev => ({
		...prev,
		[id]: !prev[id] // 클릭한 ID의 상태만 반전
		}));
	};
	const handleQna = (v) => {
		setQnaAdd(v);
		setQnaIdx("");
		setShowQna({});
		setIq_subject("");
		setIq_question("");
	}
	
	// 상품 문의
	const {isPending: isPendingQna, mutate: mutateQna} = itemQnaUpdate();
	const qnaWrite = (mode, iq_id) => {

		if (!iq_subject) {
			toast.error("제목을 입력해주세요.");
			return false;
		}

		if (!iq_question) {
			toast.error("내용을 입력해주세요.");
			return false;
		}

		const jsonData = {
            mode: mode
            ,mb_id: mbID
            ,it_id: id
			,iq_id: iq_id
            ,iq_subject: iq_subject
            ,iq_question: iq_question
        };

		console.log(jsonData);
		//return ""

		mutateQna(jsonData, {
		onSuccess: () => {
			setQnaAdd(false);
			setIq_subject("");
			setIq_question("");
			setQnaIdx("");
			setShowQna({});

			//if (mode =='edt') {		
				const dataToPass = { times: Date.now() };   
				nav(`/itemview/${id}`, { state: dataToPass });
			//}
		},
		onError: () => {
			}
		});		
		
	}

	// 문의 내용 수정 답기
	const qnaEdit = (iqSubject, iqQuestion, idx) => {
			setQnaAdd(false);
			setIq_subject(iqSubject);
			setIq_question(iqQuestion);
			setQnaIdx(idx);
	}

	console.log(qnaIdx);

	// 상품 문의 삭제
	const qnaDel = async (idx) => {
		if (window.confirm('정말 삭제 하시겠습니까?')) {
			
			const jsonData = {
				mode: 'del'
				,mb_id: mbID
				,iq_id: idx
			};

			try {
				const response = await getItemQnaDel(jsonData);

				if (response?.error!=0) {
					toast.error(response?.msg);
				} else {
					toast.success(response?.msg);
				}
									
				setQnDel(idx);

			} catch(error) {
				toast.error("실행 에러");
			}
		}
	}
  	return (
<div id="container">
	<div className="shop-content is_item">  
	<div id="sit_hhtml"></div>
		<div id="sit">
			<div id="sit_ov_from">				
				<div id="sit_ov_wrap">
					{/* 상품이미지 미리보기 시작 { */}
					<div id="sit_pvi">
						<div id="sit_pvi_big">						
							<img src={item?.it_img1? `http://gnbiz8888.liodesign.kr/react/upload/${item?.it_img1}`:noImage} width="300" height="300" alt="" title="" />	        
						</div>
					</div>
					{/* 상품이미지 미리보기 끝 */}
				
					{/* 상품 요약정보 및 구매 시작 { */}
					<section id="sit_ov" className="2017_renewal_itemform">
						<h2 id="sit_title">{item?.it_name} <span className="sound_only">요약정보 및 구매</span></h2>
						<p id="sit_desc">{item?.it_short_memo}</p>
									
						<div id="sit_star_sns">											
							<span className="">사용후기 {useCnt} 개</span>	
						</div>				
						<div className="sit_info">
							<table className="sit_ov_tbl">
							<colgroup>
								<col className="grid_3" />
								<col />
							</colgroup>
								<tbody>							
									<tr>
										<th scope="row">시중가격</th>
										<td>{parseInt(item?.it_base_price).toLocaleString()}원</td>
									</tr>									
									<tr className="tr_price">
										<th scope="row">판매가격</th>
										<td>
											<strong>{parseInt(item?.it_price).toLocaleString()}원</strong>
											
										</td>
									</tr>
									<tr>
										<th scope="row">포인트</th>
										<td>{parseInt(item?.it_point).toLocaleString()}점</td>
									</tr>
									<tr>
										<th>배송비결제</th>
										<td>{parseInt(item?.it_delivery_price).toLocaleString()}</td>
									</tr>
								</tbody>
							</table>
						</div>
						{/* 선택된 옵션 시작 { */}
						<section id="sit_sel_option">
							<h3>선택된 옵션</h3>
							<ul id="sit_opt_added">
								<li className="sit_opt_list">									
									<div className="opt_name">
										<input type="hidden" id="itID" value={item?.it_id} />
										<span className="sit_opt_subj">{item?.it_name}</span>
									</div>
									<div className="opt_count">
										<button type="button" className="sit_qty_minus" name="-" onClick={()=>chkTemp("-")}><AiOutlineMinus /><span className="sound_only">감소</span></button>

										<input type="number" name="ct_qty" id="ct_qty" value={temp} className="num_input" size="5" readOnly />

										<button type="button" className="sit_qty_plus" name="+" onClick={()=>chkTemp("+")}><AiOutlinePlus /><span className="sound_only">증가</span></button>
									</div>
								</li>
							</ul>
							
						</section>
						{/* 선택된 옵션 끝 */}
				
						{/* 총 구매액 */}
						<div id="sit_tot_price"><span>총 금액 :</span><strong id="tPrice">{totalPrice.toLocaleString()}</strong> 원</div>
						<div id="sit_ov_btn">
							<button type="submit" value="장바구니" className="sit_btn_cart" onClick={()=>CartClicke(0)}>장바구니</button>
							<button type="submit" value="바로구매" className="sit_btn_buy" onClick={()=>CartClicke(1)}>바로구매</button>
						</div>						
					</section>
					{/* 상품 요약정보 및 구매 끝 */}
				</div>	
			</div>
			<section id="sit_info">
				<div id="sit_tab">
					<ul className="tab_tit">
						<li><button type="button" id="btn_sit_inf" rel="#sit_inf" className={tabs==1? "selected":""} onClick={() => clickTab(1)}>상품정보</button></li>

						<li><button type="button" id="btn_sit_use" rel="#sit_use" className={tabs==2? "selected":""}  onClick={() => clickTab(2)}>사용후기 <span className="item_use_count">{useCnt}</span></button></li>

						<li><button type="button" id="btn_sit_qa" rel="#sit_qa" className={tabs==3? "selected":""}  onClick={() => clickTab(3)}>상품문의  <span className="item_qa_count">{qnaCnt}</span></button></li>

						<li><button type="button" id="btn_sit_dvex" rel="#sit_dex" className={tabs==4? "selected":""} onClick={() => clickTab(4)}> 배송/교환</button></li>
					</ul>
					<ul className="tab_con">
				
						{/* 상품 정보 시작 { */}
						<li id="sit_inf" className={tabs!=1? "_hidden":""}>
							<h2 className="contents_tit"><span>상품 정보</span></h2>
							<h3>상품 상세설명</h3>
							<div id="sit_inf_explan">
								{
								item && item?.it_shop_memo
								? parse(item?.it_shop_memo)
								: ""
								}         
							</div>			
								
						</li>
						{/* 사용후기 시작 { */}
						<li id="sit_use" className={tabs!=2? "_hidden":""}>
							<h2>사용후기</h2>
							<div id="itemuse">
								{/* 상품 사용후기 시작 { */}
								<section id="sit_use_list">
									<h3>등록된 사용후기</h3>
									{
									mbID									
									?<div className="sit_use_top">
										<div id="sit_use_wbtn">
											<a href="javascript:void(0)" className="btn02 itemuse_form" onClick={(e)=> handleUse(true)}>사용후기 쓰기</a>
										</div>
									</div>
									: ""
									}

									{
									useAdd
									?<div id="sit_use_write" className="new_win">									
										<div className="new_win_con form_01">
											<h1 id="win_title">사용후기 쓰기</h1>
											<ul>
												<li>
													<label htmlFor="is_subject" className="sound_only">제목<strong> 필수</strong></label>
													<input type="text" name="is_subject"  id="is_subject"  className="required frm_input full_input" maxlength={250} placeholder="제목" value={is_subject} onChange={(e)=>setIs_subject(e.target.value)} />
												</li>
												<li>									
													<textarea id="is_content" name="is_content" className="smarteditor2" style={{width: "100%", height: "100px"}} placeholder="사용 후기"  value={is_content} onChange={(e)=>setIs_content(e.target.value)} />
												</li>
												<li>
													<span className="sound_only">평점</span>
													<ul id="sit_use_write_star" className="chk_box">
														<li>
															<input type="radio" name="is_score" value="5" id="is_score5" checked={is_score === '5'} onChange={(e)=>setIs_score(e.target.value)}  />
															<label htmlFor="is_score5"><span></span>매우만족</label>
															<img src="/img/shop/s_star5.png" alt="매우만족" />
														</li>
														<li>
															<input type="radio" name="is_score" value="4" id="is_score4" checked={is_score === '4'} onChange={(e)=>setIs_score(e.target.value)} />
															<label htmlFor="is_score4"><span></span>만족</label>
															<img src="/img/shop/s_star4.png" alt="만족" />
														</li>
														<li>
															<input type="radio" name="is_score" value="3" id="is_score3" checked={is_score === '3'} onChange={(e)=>setIs_score(e.target.value)} />
															<label htmlFor="is_score3"><span></span>보통</label>
															<img src="/img/shop/s_star3.png" alt="보통" />
														</li>
														<li>
															<input type="radio" name="is_score" value="2" id="is_score2" checked={is_score === '2'} onChange={(e)=>setIs_score(e.target.value)} />
															<label htmlFor="is_score2"><span></span>불만</label>
															<img src="/img/shop/s_star2.png" alt="불만" />
														</li>
														<li>
															<input type="radio" name="is_score" value="1" id="is_score1" checked={is_score === '1'} onChange={(e)=>setIs_score(e.target.value)} />
															<label htmlFor="is_score1"><span></span>매우불만</label>
															<img src="/img/shop/s_star1.png" alt="매우불만" />
														</li>
													</ul>
												</li>
											</ul>

											<div className="win_btn">
												<button type="button" className="btn_submit" onClick={(e)=>useWrite('ins', "")}>작성완료</button>
												&nbsp;
												<button type="button" className="btn_close" onClick={(e)=> handleUse(false)}>닫기</button>
											</div>
										</div>
								</div>
								: ""
								}
								<ol id="sit_use_ol">
								{
								useL
								?
								useL?.map((u, idx) => {
								return (
									<li className="sit_use_li" style={{ display: u.is_id==isDel ? 'none' : 'block' }}>
										<span className="sit_thum"><img src={u.it_img? `http://gnbiz8888.liodesign.kr/react/upload/${u.it_img}`:noImage} width="100" height="100" alt="" /></span> 
										<dl className="sit_use_dl">
											<dt>평점</dt><dt>
											</dt><dd className="sit_use_star"><img src={`/img/shop/s_star${u.is_score}.png`} alt={`별${u.is_score}개`} width="85" /></dd>
											<dt></dt>
											<dd className="sit_use_tit">{u.is_subject}</dd>
											<dt>작성자/작성일</dt>
											<dd>{u.is_name}<span className="st_bg"></span><AiOutlineClockCircle /> {u.is_time}</dd>
										</dl>
										
										<button type="button" className="sit_use_li_title" onClick={() => toggleItem(showItem[idx]? "":idx)}>내용보기 </button>

										{showItem[idx] && <div id={`sit_use_con_${idx}`}  >
											<div className="sit_use_p">
												{parse(u.is_content_br)}
											</div>
											{
											mbID==u.mb_id
											?<>
											<div className="sit_use_cmd">
												<a href="javascript:void(0)" className="itemuse_form btn01" onClick={(e)=>useEdit(u.is_subject, u.is_content, u.is_score, idx)}>수정</a>
												&nbsp;
												<a href="javascript:void(0)" className="itemuse_delete btn01" onClick={(e)=>useDel(u.is_id)}>삭제</a>
											</div>

									{useIdx==idx 
									?<div id="sit_use_write" className="new_win">									
										<div className="new_win_con form_01">
											<h1 id="win_title">사용후기 수정</h1>
											<ul>
												<li>
													
													<input type="text" name={`is_subject${idx}`}  id={`is_subject${idx}`}  className="required frm_input full_input" maxlength={250} placeholder="제목" value={is_subject} onChange={(e)=>setIs_subject(e.target.value)} />
												</li>
												<li>
																								
													<textarea id={`is_content${idx}`}  name={`is_content${idx}`}  placeholder="사용 후기" className="smarteditor2" style={{width: "100%", height: "100px"}}  value={is_content} onChange={(e)=>setIs_content(e.target.value)} />
												</li>
												<li>
													<span className="sound_only">평점</span>
													<ul id="sit_use_write_star" className="chk_box">
														<li>
															<input type="radio" name="is_score" value="5" id="is_score5" checked={is_score === '5'} onChange={(e)=>setIs_score(e.target.value)}  />
															<label htmlFor="is_score5"><span></span>매우만족</label>
															<img src="/img/shop/s_star5.png" alt="매우만족" />
														</li>
														<li>
															<input type="radio" name="is_score" value="4" id="is_score4" checked={is_score === '4'} onChange={(e)=>setIs_score(e.target.value)} />
															<label htmlFor="is_score4"><span></span>만족</label>
															<img src="/img/shop/s_star4.png" alt="만족" />
														</li>
														<li>
															<input type="radio" name="is_score" value="3" id="is_score3" checked={is_score === '3'} onChange={(e)=>setIs_score(e.target.value)} />
															<label htmlFor="is_score3"><span></span>보통</label>
															<img src="/img/shop/s_star3.png" alt="보통" />
														</li>
														<li>
															<input type="radio" name="is_score" value="2" id="is_score2" checked={is_score === '2'} onChange={(e)=>setIs_score(e.target.value)} />
															<label htmlFor="is_score2"><span></span>불만</label>
															<img src="/img/shop/s_star2.png" alt="불만" />
														</li>
														<li>
															<input type="radio" name="is_score" value="1" id="is_score1" checked={is_score === '1'} onChange={(e)=>setIs_score(e.target.value)} />
															<label htmlFor="is_score1"><span></span>매우불만</label>
															<img src="/img/shop/s_star1.png" alt="매우불만" />
														</li>
													</ul>
												</li>
											</ul>

											<div className="win_btn">
												<button type="button" className="btn_submit" onClick={(e)=>useWrite('edt', u.is_id)}>작성완료</button>
												&nbsp;
												<button type="button" className="btn_close" onClick={(e)=> handleUse(false)}>닫기</button>
											</div>
										</div>
								</div>
								: ""
								}			
									</>				
											: ""
											}
									</div>}
									</li>
										)
									})
									
								: <p className="sit_empty">사용후기가 없습니다.</p>
								}
								</ol>	
								</section>
								{/* 상품 사용후기 끝 */}
							</div>
						</li>
						{/* 사용후기 끝 */}
				
						{/* 상품문의 시작 { */}
						<li id="sit_qa"  className={tabs!=3? "_hidden":""}>
							<h2>상품문의</h2>
							<div id="itemqa">
								{/* 상품문의 목록 시작 { */}
								<section id="sit_qa_list">
									<h3>등록된 상품문의</h3>
									{
									mbID									
									?<>
									<div id="sit_qa_wbtn">
										<a href="javacript:void(0)" className="btn02 itemqa_form" onClick={(e)=> handleQna(true)}>상품문의 쓰기</a>
									</div>


									{ qnaAdd && <div id="sit_use_write" className="new_win">									
										<div className="new_win_con form_01">
											<h1 id="win_title">상품문의 쓰기</h1>
											<ul>
												<li>
													
													<input type="text" name="iq_subject" className="required frm_input full_input" maxlength={250} placeholder="제목" value={iq_subject} onChange={(e)=>setIq_subject(e.target.value)} />
												</li>
												<li>
																							
													<textarea id="iq_question" name="iq_question" className="frm_input" style={{width: "100%", height: "100px"}} placeholder="상품 문의"  value={iq_question} onChange={(e)=>setIq_question(e.target.value)} />
												</li>
											</ul>

											<div className="win_btn">
												<button type="button" className="btn_submit" onClick={(e)=>qnaWrite('ins', "")}>작성완료</button>
												&nbsp;
												<button type="button" className="btn_close" onClick={(e)=> handleQna(false)}>닫기</button>
											</div>
										</div>
								</div>
								}
								</>
									:""
									}

									<ol id="sit_qa_ol">
								{
								qnaL
								?
								qnaL?.map((q, idx) => {
									return (
									<li className="sit_qa_li" style={{ display: q.iq_id==qaDel ? 'none' : 'block' }}>
										<button type="button" className="sit_qa_li_title" onClick={() => toggleQna(showQna[idx]? "":idx)}>
										{q.iq_answer? <span className="sit_qaa_done">답변완료</span>:<span className="sit_qaa_yet">답변대기</span> }
										{q.iq_subject}</button>
										<dl className="sit_qa_dl">
											<dt>작성자/작성일</dt>
											<dd>{q.iq_name}<span className="st_bg"></span><AiOutlineClockCircle /> {q.iq_time}</dd>
										</dl>
										{ showQna[idx] && <div id="sit_qa_con_0" className="sit_qa_con" >
											<div className="sit_qa_p">
												<div className="sit_qa_qaq">
													<strong className="sound_only">문의내용</strong>
													<span className="qa_alp">Q</span>
													{parse(q?.iq_question_br)}
												</div>
												<div className="sit_qa_qaa">
													<strong className="sound_only">답변</strong>
													<span className="qa_alp">A</span>
													{q?.iq_answer? parse(q?.iq_answer):"답변이 등록되지 않았습니다."}
												</div>
											</div>

											{
											mbID==q.mb_id
											?
											<>
											<div className="sit_qa_cmd">
												<a href="javascript:voide(0)" className="itemqa_form btn01"  onClick={(e)=>qnaEdit(q.iq_subject, q.iq_question, q.iq_id)}>수정</a>&nbsp;
												<a href="javascript:voide(0)" className="itemqa_delete btn01"  onClick={(e)=>qnaDel(q.iq_id)}>삭제</a>
											</div>

											{/* 상품문의 수정 */}		
											{qnaIdx==q.iq_id  
											?<div id="sit_use_write" className="new_win">									
												<div className="new_win_con form_01">
													<h1 id="win_title">상품문의 수정</h1>
													<ul>
														<li>															
															<input type="text" name={`iq_subject${idx}`}  id={`iq_subject${idx}`}  className="required frm_input full_input" maxlength={250} placeholder="제목" value={iq_subject} onChange={(e)=>setIq_subject(e.target.value)} />
														</li>
														<li>									
															<textarea id={`iq_question${idx}`} name={`iq_question${idx}`}className="frm_input" style={{width: "100%", height: "100px"}}  value={iq_question} placeholder="상품 문의" onChange={(e)=>setIq_question(e.target.value)} />
														</li>
													</ul>

													<div className="win_btn">
														<button type="button" className="btn_submit" onClick={(e)=>qnaWrite('edt', q.iq_id)}>작성완료</button>
														&nbsp;
														<button type="button" className="btn_close" onClick={(e)=> handleQna(false)}>닫기</button>
													</div>
												</div>
											</div>
											: ""
											}
											</>
											:""
											}
										</div>
										}
									</li>
									)
									
								})

								: <p className="sit_empty">상품문의가 없습니다.</p>
								}
								</ol>
									
								</section>
								{/* 상품문의 목록 끝 */}
							</div>
						</li>
						{/* 상품문의 끝 */}
						
						{/* 배송/교환 시작 { */}
						<li id="sit_dex"  className={tabs!=4? "_hidden":""}>
							<h2>배송/교환정보</h2>							
							{/* 배송 시작 { */}
							<div id="sit_dvr">
								<h3>배송</h3>
								배송 안내 입력전입니다.	            
							</div>
							{/* 배송 끝 */}
								
							{/* 교환 시작 { */}
							<div id="sit_ex">
								<h3>교환</h3>
								교환/반품 안내 입력전입니다.	           
							</div>
							{/* 교환 끝 */}											
						</li>
						{/* 배송/교환  끝 */}
					</ul>
				</div>			
			</section>
		</div>
	</div> 
</div>
  )

  }
//}
