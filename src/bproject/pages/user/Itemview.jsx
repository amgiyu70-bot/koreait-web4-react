import React from 'react'

export default function Itemview() {
  return (
    <div id="container">

	{/* .shop-content 시작 { */}
	<div className="shop-content is_item">
            <div id="wrapper_title">상품01 &gt; 남성복</div>            {/* 글자크기 조정 display:none 되어 있음 시작 { */}
           
            {/* 글자크기 조정 display:none 되어 있음 끝 */}
<div id="sct_location" className="view_location"> {/* className="view_location" */} {/* view_location는 리스트 말고 상품보기에서만 표시 */}
    <a href="http://127.0.0.1/shop/shop/" className="go_home"><span className="sound_only">메인으로</span><i className="fa fa-home" aria-hidden="true"></i></a>
    <i className="dividing-line fa fa-angle-right" aria-hidden="true"></i>
    
                <select className="shop_hover_selectbox category1" style={{display: 'none'}}>
                            <option value="10" data-url="http://127.0.0.1/shop/shop/list.php?ca_id=10" selected="">남성복</option>
                    </select><div className="shop_select_to_html shop_hover_selectbox category1"><span className="category_title current">남성복<i className="fa fa-chevron-circle-down" aria-hidden="true"></i></span><div className="menulist"><ul><li data-value="10" className="option selected"><a href="http://127.0.0.1/shop/shop/list.php?ca_id=10">남성복</a></li></ul></div></div>
                            </div>

{/* 상품 상세보기 시작 { */}
<div id="sit_hhtml"></div>


<div id="sit">

    <div id="sit_ov_from">
	<form name="fitem" method="post" action="http://127.0.0.1/shop/shop/cartupdate.php" >
	<input type="hidden" name="it_id[]" value="1770986271" />
	<input type="hidden" name="sw_direct" />
	<input type="hidden" name="url" />
	<input type="hidden" id="it_price" value="10000" />
	<input type="hidden" name="io_type[1770986271][]" value="0" />
	<input type="hidden" name="io_id[1770986271][]" value="" />
	<input type="hidden" name="io_value[1770986271][]" value="상품01" />
	<input type="hidden" className="io_price" value="0" />
	<input type="hidden" className="io_stock" value="99999" />
	
	<div id="sit_ov_wrap">
	    {/* 상품이미지 미리보기 시작 { */}
	    <div id="sit_pvi">
	        <div id="sit_pvi_big">
	        <a href="http://127.0.0.1/shop/shop/largeimage.php?it_id=1770986271&amp;no=1" target="_blank" className="popup_item_image visible">
			<img src="http://127.0.0.1/shop/data/item/1770986271/thumb-01jpg_300x300.jpg" width="300" height="300" alt="" title="" /></a>	        <a href="http://127.0.0.1/shop/shop/largeimage.php?it_id=1770986271&amp;no=1" target="_blank" id="popup_item_image" className="popup_item_image"><i className="fa fa-search-plus" aria-hidden="true"></i><span className="sound_only">확대보기</span></a>
	        </div>
	        <ul id="sit_pvi_thumb"><li><a href="http://127.0.0.1/shop/shop/largeimage.php?it_id=1770986271&amp;no=1" target="_blank" className="popup_item_image img_thumb"><img src="http://127.0.0.1/shop/data/item/1770986271/thumb-01jpg_70x70.jpg" width="70" height="70" alt="" /><span className="sound_only"> 1번째 이미지 새창</span></a></li></ul>	    </div>
	    {/* 상품이미지 미리보기 끝 */}
	
	    {/* 상품 요약정보 및 구매 시작 { */}
	    <section id="sit_ov" className="2017_renewal_itemform">
	        <h2 id="sit_title">상품01 <span className="sound_only">요약정보 및 구매</span></h2>
	        <p id="sit_desc">상품01 입니다.</p>
	        	        <p id="sit_opt_info">
	            상품 선택옵션 0 개, 추가옵션 0 개
	        </p>
	        	        
	        <div id="sit_star_sns">
	            	            
	            <span className="">사용후기 0 개</span>
	            
	            <div id="sit_btn_opt">
	            	<span id="btn_wish"><i className="fa fa-heart-o" aria-hidden="true"></i><span className="sound_only">위시리스트</span><span className="btn_wish_num">0</span></span>
	            	<button type="button" className="btn_sns_share"><i className="fa fa-share-alt" aria-hidden="true"></i><span className="sound_only">sns 공유</span></button>
	            	<div className="sns_area" style={{display: 'none'}}>
	            		<a href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2F127.0.0.1%2Fshop%2Fshop%2Fitem.php%3Fit_id%3D1770986271&amp;p=%EC%83%81%ED%92%8801+%7C+%EA%B7%B8%EB%88%84%EB%B3%B4%EB%93%9C5" className="share-facebook" target="_blank">
						<img src="http://127.0.0.1/shop/skin/shop/basic/img/facebook.png" alt="페이스북에 공유" /></a> <a href="https://twitter.com/share?url=http%3A%2F%2F127.0.0.1%2Fshop%2Fshop%2Fitem.php%3Fit_id%3D1770986271&amp;text=%EC%83%81%ED%92%8801+%7C+%EA%B7%B8%EB%88%84%EB%B3%B4%EB%93%9C5" className="share-twitter" target="_blank">
						<img src="http://127.0.0.1/shop/skin/shop/basic/img/twitter.png" alt="트위터에 공유" /></a> 	            		<a href="javascript:popup_item_recommend('1770986271');" id="sit_btn_rec"><i className="fa fa-envelope-o" aria-hidden="true"></i><span className="sound_only">추천하기</span></a>
	            	</div>
	        	</div>
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
	                <td>10,000원</td>
	            </tr>
	            	
	            <tr className="tr_price">
	                <th scope="row">판매가격</th>
	                <td>
	                    <strong>10,000원</strong>
	                </td>
	            </tr>
	            	            	
	            	
	            	
	            	
	            
	            	
	            	            <tr>
	                <th scope="row">포인트</th>
	                <td>
	                    0점	                </td>
	            </tr>
	            	            	            <tr>
	                <th>배송비결제</th>
	                <td>주문시 결제</td>
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
	                        <span className="sit_opt_subj">상품01</span>
	                    </div>
	                    <div className="opt_count">
	                        <label for="ct_qty_11" className="sound_only">수량</label>
							<button type="button" className="sit_qty_minus"><i className="fa fa-minus" aria-hidden="true"></i><span className="sound_only">감소</span></button>
	                        <input type="text" name="ct_qty[1770986271][]" value="1" id="ct_qty_11" className="num_input" size="5" />
	                        <button type="button" className="sit_qty_plus"><i className="fa fa-plus" aria-hidden="true"></i><span className="sound_only">증가</span></button>
	                        <span className="sit_opt_prc">+0원</span>
	                    </div>
	                </li>
	            </ul>
	            
	            	        </section>
	        {/* 선택된 옵션 끝 */}
	
	        {/* 총 구매액 */}
	        <div id="sit_tot_price"><span>총 금액 :</span><strong>10,000</strong> 원</div>
	        	
	        	
	        <div id="sit_ov_btn">
	            	            <button type="submit" onclick="document.pressed=this.value;" value="장바구니" className="sit_btn_cart">장바구니</button>
	            <button type="submit" onclick="document.pressed=this.value;" value="바로구매" className="sit_btn_buy">바로구매</button>
	            	            <a href="javascript:item_wish(document.fitem, '1770986271');" className="sit_btn_wish"><i className="fa fa-heart-o" aria-hidden="true"></i><span className="sound_only">위시리스트</span></a>
	            	
	            	            	        </div>
	
	        
	    </section>
	    {/* 상품 요약정보 및 구매 끝 */}
	</div>
	{/* 다른 상품 보기 시작 { */}
    <div id="sit_siblings">
	    <a href="http://127.0.0.1/shop/shop/item.php?it_id=1770986211" id="siblings_next">다음 상품<span className="sound_only"> 상품11</span></a>
	</div>   
    {/* 다른 상품 보기 끝 */}
	</form>
</div>


{/* 관련상품 시작 { */}
<section id="sit_rel">
    <h2>관련상품</h2>
    
{/* 관련상품 10 시작 { */}
<p className="sct_noitem">등록된 상품이 없습니다.</p>
{/* 관련상품 10 끝 */}
</section>
{/* 관련상품 끝 */}

<section id="sit_info">
	<div id="sit_tab">
	    <ul className="tab_tit">
	        <li><button type="button" id="btn_sit_inf" rel="#sit_inf" className="selected">상품정보</button></li>
	        <li><button type="button" id="btn_sit_use" rel="#sit_use">사용후기 <span className="item_use_count">0</span></button></li>
	        <li><button type="button" id="btn_sit_qa" rel="#sit_qa">상품문의  <span className="item_qa_count">0</span></button></li>
	        <li><button type="button" id="btn_sit_dvex" rel="#sit_dex">배송/교환</button></li>
	    </ul>
	    <ul className="tab_con">
	
	        {/* 상품 정보 시작 { */}
	        <li id="sit_inf" style={{display: 'list-item'}}>
	            <h2 className="contents_tit"><span>상품 정보</span></h2>
	
	            	            <h3>상품 상세설명</h3>
	            <div id="sit_inf_explan">
	                <p>상품01 입니다.</p><p>상품01 입니다.</p><p>상품01 입니다.</p><p>상품01 입니다.</p>	            </div>
	            	
	            	            <h3>상품 정보 고시</h3>
	            <table id="sit_inf_open">
	            <tbody>
	            	            <tr>
	                <th scope="row">제품소재</th>
	                <td>상품페이지 참고</td>
	            </tr>
	            	            <tr>
	                <th scope="row">색상</th>
	                <td>상품페이지 참고</td>
	            </tr>
	            	            <tr>
	                <th scope="row">치수</th>
	                <td>상품페이지 참고</td>
	            </tr>
	            	            <tr>
	                <th scope="row">제조자</th>
	                <td>상품페이지 참고</td>
	            </tr>
	            	            <tr>
	                <th scope="row">세탁방법 및 취급시 주의사항</th>
	                <td>상품페이지 참고</td>
	            </tr>
	            	            <tr>
	                <th scope="row">제조연월</th>
	                <td>상품페이지 참고</td>
	            </tr>
	            	            <tr>
	                <th scope="row">품질보증기준</th>
	                <td>상품페이지 참고</td>
	            </tr>
	            	            <tr>
	                <th scope="row">A/S 책임자와 전화번호</th>
	                <td>상품페이지 참고</td>
	            </tr>
	            	            </tbody>
	            </table>
	            {/* 상품정보고시 end */}
	            	
	        </li>
	        {/* 사용후기 시작 { */}
	        <li id="sit_use" style={{display: 'none'}}>
	            <h2>사용후기</h2>
	            <div id="itemuse">


{/* 상품 사용후기 시작 { */}
<section id="sit_use_list">
    <h3>등록된 사용후기</h3>

    <div className="sit_use_top">
                <div id="sit_use_wbtn">
            <a href="http://127.0.0.1/shop/shop/itemuseform.php?it_id=1770986271" className="btn02 itemuse_form">사용후기 쓰기<span className="sound_only"> 새 창</span></a>
            <a href="http://127.0.0.1/shop/shop/itemuselist.php" className="btn01 itemuse_list">더보기</a>
        </div>
    </div>
    
    <p className="sit_empty">사용후기가 없습니다.</p></section>



{/* 상품 사용후기 끝 */}</div>
	        </li>
	        {/* 사용후기 끝 */}
	
	        {/* 상품문의 시작 { */}
	        <li id="sit_qa" style={{display: 'none'}}>
	            <h2>상품문의</h2>
	            <div id="itemqa">


{/* 상품문의 목록 시작 { */}
<section id="sit_qa_list">
    <h3>등록된 상품문의</h3>

    <div id="sit_qa_wbtn">
        <a href="http://127.0.0.1/shop/shop/itemqaform.php?it_id=1770986271" className="btn02 itemqa_form">상품문의 쓰기<span className="sound_only">새 창</span></a>
        <a href="http://127.0.0.1/shop/shop/itemqalist.php" id="itemqa_list" className="btn01">더보기</a>
    </div>

    <p className="sit_empty">상품문의가 없습니다.</p></section>



{/* 상품문의 목록 끝 */}</div>
	        </li>
	        {/* 상품문의 끝 */}
	        
	        {/* 배송/교환 시작 { */}
	        <li id="sit_dex" style={{display: 'none'}}>
	            <h2>배송/교환정보</h2>
	            
	            	            {/* 배송 시작 { */}
	            <div id="sit_dvr">
	                <h3>배송</h3>
	                배송 안내 입력전입니다.	            </div>
	            {/* 배송 끝 */}
	            	
	            	            {/* 교환 시작 { */}
	            <div id="sit_ex">
	                <h3>교환</h3>
	                교환/반품 안내 입력전입니다.	            </div>
	            {/* 교환 끝 */}
	            	            
	        </li>
	        {/* 배송/교환  끝 */}
	    </ul>
	</div>
	
	<div id="sit_buy" className="fix">
		<div className="sit_buy_inner">
	        
                        
            	        {/* 선택된 옵션 시작 { */}
	        <section className="sit_sel_option">
	            <h3>선택된 옵션</h3>
	            <ul className="sit_opt_added">
                                        <li>
                        <div className="opt_name">
                            <span className="sit_opt_subj">상품01</span>
                        </div>
                        <div className="opt_count">
                            <label for="ct_qty_0" className="sound_only">수량</label>
                            <button type="button" className="sit_qty_minus"><i className="fa fa-minus" aria-hidden="true"></i><span className="sound_only">감소</span></button>
                            <input type="text" name="ct_copy_qty[1770986271][]" value="1" id="ct_qty_0" className="num_input" size="5" />
                            <button type="button" className="sit_qty_plus"><i className="fa fa-plus" aria-hidden="true"></i><span className="sound_only">증가</span></button>
                            <span className="sit_opt_prc">+0원</span>
                        </div>
                    </li>
                                    </ul>
	        </section>
	        {/* 선택된 옵션 끝 */}

			<div className="sum_section">        
		        <div className="sit_tot_price"></div>
				
				<div className="sit_order_btn">
					<button type="submit" onclick="document.pressed=this.value;" value="장바구니" className="sit_btn_cart">장바구니</button>
		            <button type="submit" onclick="document.pressed=this.value;" value="바로구매" className="sit_btn_buy">바로구매</button> 
		       </div>
			</div>
            			
	    </div>   
	</div>
</section>


</div>


        </div>  {/* .shop-content 끝 */}
	</div>
  )
}
