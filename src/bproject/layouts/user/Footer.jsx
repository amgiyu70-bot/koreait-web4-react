import React from 'react'

export default function Footer() {
  return (
    <div id="ft">
	<div id="ft_wr">
		<ul id="ft_link" className="ft_cnt">
			<li><a href="http://localhost/shop/bbs/content.php?co_id=company">회사소개</a></li>
			<li><a href="http://localhost/shop/bbs/content.php?co_id=provision">서비스이용약관</a></li>
			<li><a href="http://localhost/shop/bbs/content.php?co_id=privacy">개인정보처리방침</a></li>
			<li><a href="http://localhost/shop/shop/?device=mobile">모바일버전</a></li>
		</ul>
        <div id="ft_company" className="ft_cnt">
        	<h2>사이트 정보</h2>
	        <p className="ft_info">
		        <span><b>회사명</b> 회사명</span>
	            <span><b>주소</b> OO도 OO시 OO구 OO동 123-45</span><br />
	            <span><b>사업자 등록번호</b> 123-45-67890</span>
	            <span><b>대표</b> 대표자명</span>
	            <span><b>전화</b> 02-123-4567</span>
	            <span><b>팩스</b> 02-123-4568</span><br />
	           
	            <span><b>통신판매업신고번호</b> 제 OO구 - 123호</span>
	            <span><b>개인정보 보호책임자</b> 정보책임자명</span><br />
				<span><b>부가통신사업신고번호</b> 12345호</span>		
			  </p>
	    </div>
	    
	    
        <section id="sidx_lat">            
			<div className="notice ft_cnt">
				<h2><a href="http://localhost/shop/bbs/board.php?bo_table=notice">공지사항</a></h2>
				<ul>
					<li className="empty_li">게시물이 없습니다.</li>
				</ul>
			</div>
        </section>	

		<section id="visit" className="ft_cnt">
		<h2>접속자집계</h2>
		<dl>
			<dt><span></span> 오늘</dt>
			<dd><strong>1</strong></dd>
			<dt><span></span> 어제</dt>
			<dd><strong>0</strong></dd>
			<dt><span></span> 최대</dt>
			<dd><strong>1</strong></dd>
			<dt><span></span> 전체</dt>
			<dd><strong>2</strong></dd>
		</dl>
		</section>
	</div>
    <div id="ft_copy">Copyright © 2001-2013 회사명. All Rights Reserved.</div>
</div>
  )
}
