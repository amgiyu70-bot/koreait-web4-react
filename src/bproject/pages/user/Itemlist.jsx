

export default function Itemlist() {
  return (
    <div id="container">

	{/* .shop-content 시작 */}
	<div className="shop-content">
		<div id="wrapper_title">히트상품</div>      
		
		{/* 상품진열 10 시작 */}
		<ul className="sct sct_10 lists-row">
			<li className="sct_li col-row-5" data-css="nocss" >
				<div className="sct_img">
					<a href="http://127.0.0.1/shop/shop/item.php?it_id=1770986271">
					<img src="http://127.0.0.1/shop/data/item/1770986271/thumb-01jpg_225x225.jpg" width="225" height="225" alt="상품01" />
					</a>
					<div className="sct_btn list-10-btn">
						<button type="button" className="btn_cart sct_cart" data-it_id="1770986271"><i className="fa fa-shopping-cart" aria-hidden="true"></i> 장바구니</button>
					</div>
					<div className="cart-layer"></div>
				</div>
				<div className="sct_ct_wrap">
					<div className="sct_txt"><a href="http://127.0.0.1/shop/shop/item.php?it_id=1770986271">
					상품01
					</a></div>
						<div className="sct_basic">상품01 입니다.</div>
						<div className="sct_bottom">
							<div className="sct_cost">
							10,000원
							</div>
							<div className="sct_op_btn">
								<button type="button" className="btn_wish" data-it_id="1770986271"><span className="sound_only">위시리스트</span><i className="fa fa-heart-o" aria-hidden="true"></i></button>
								<button type="button" className="btn_share"><span className="sound_only">공유하기</span><i className="fa fa-share-alt" aria-hidden="true"></i></button>
								<div className="sct_sns_wrap">
									<div className="sct_sns">
										<h3>SNS 공유</h3>
										<a href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2F127.0.0.1%2Fshop%2Fshop%2Fitem.php%3Fit_id%3D1770986271&amp;p=%EC%83%81%ED%92%8801+%7C+%EA%B7%B8%EB%88%84%EB%B3%B4%EB%93%9C5" className="share-facebook" target="_blank">
										<img src="http://127.0.0.1/shop/skin/shop/basic/img/facebook.png" alt="페이스북에 공유" /></a>
										<a href="https://twitter.com/share?url=http%3A%2F%2F127.0.0.1%2Fshop%2Fshop%2Fitem.php%3Fit_id%3D1770986271&amp;text=%EC%83%81%ED%92%8801+%7C+%EA%B7%B8%EB%88%84%EB%B3%B4%EB%93%9C5" className="share-twitter" target="_blank">
										<img src="http://127.0.0.1/shop/skin/shop/basic/img/twitter.png" alt="트위터에 공유" /></a>
										<button type="button" className="sct_sns_cls"><span className="sound_only">닫기</span><i className="fa fa-times" aria-hidden="true"></i></button>
									</div>
									<div className="sct_sns_bg"></div>
								</div>
							</div>
						</div>
						<div className="sit_icon_li">
							<span className="sit_icon">
								<span className="shop_icon shop_icon_1">히트</span>
								<span className="shop_icon shop_icon_2">추천</span>
								<span className="shop_icon shop_icon_3">최신</span>
								<span className="shop_icon shop_icon_4">인기</span>
								<span className="shop_icon shop_icon_5">할인</span>
							</span>
						</div>
				</div>
			</li>

			<li className="sct_li col-row-5" data-css="nocss" >
				<div className="sct_img">
					<a href="http://127.0.0.1/shop/shop/item.php?it_id=1770986271">
					<img src="http://127.0.0.1/shop/data/item/1770986271/thumb-01jpg_225x225.jpg" width="225" height="225" alt="상품01" />
					</a>
					<div className="sct_btn list-10-btn">
						<button type="button" className="btn_cart sct_cart" data-it_id="1770986271"><i className="fa fa-shopping-cart" aria-hidden="true"></i> 장바구니</button>
					</div>
					<div className="cart-layer"></div>
				</div>
				<div className="sct_ct_wrap">
					<div className="sct_txt"><a href="http://127.0.0.1/shop/shop/item.php?it_id=1770986271">
					상품01
					</a></div>
						<div className="sct_basic">상품01 입니다.</div>
						<div className="sct_bottom">
							<div className="sct_cost">
							10,000원
							</div>
							<div className="sct_op_btn">
								<button type="button" className="btn_wish" data-it_id="1770986271"><span className="sound_only">위시리스트</span><i className="fa fa-heart-o" aria-hidden="true"></i></button>
								<button type="button" className="btn_share"><span className="sound_only">공유하기</span><i className="fa fa-share-alt" aria-hidden="true"></i></button>
								<div className="sct_sns_wrap">
									<div className="sct_sns">
										<h3>SNS 공유</h3>
										<a href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2F127.0.0.1%2Fshop%2Fshop%2Fitem.php%3Fit_id%3D1770986271&amp;p=%EC%83%81%ED%92%8801+%7C+%EA%B7%B8%EB%88%84%EB%B3%B4%EB%93%9C5" className="share-facebook" target="_blank">
										<img src="http://127.0.0.1/shop/skin/shop/basic/img/facebook.png" alt="페이스북에 공유" /></a>
										<a href="https://twitter.com/share?url=http%3A%2F%2F127.0.0.1%2Fshop%2Fshop%2Fitem.php%3Fit_id%3D1770986271&amp;text=%EC%83%81%ED%92%8801+%7C+%EA%B7%B8%EB%88%84%EB%B3%B4%EB%93%9C5" className="share-twitter" target="_blank">
										<img src="http://127.0.0.1/shop/skin/shop/basic/img/twitter.png" alt="트위터에 공유" /></a>
										<button type="button" className="sct_sns_cls"><span className="sound_only">닫기</span><i className="fa fa-times" aria-hidden="true"></i></button>
									</div>
									<div className="sct_sns_bg"></div>
								</div>
							</div>
						</div>
						<div className="sit_icon_li">
							<span className="sit_icon">
								<span className="shop_icon shop_icon_1">히트</span>
								<span className="shop_icon shop_icon_2">추천</span>
								<span className="shop_icon shop_icon_3">최신</span>
								<span className="shop_icon shop_icon_4">인기</span>
								<span className="shop_icon shop_icon_5">할인</span>
							</span>
						</div>
				</div>
			</li>

            <li className="sct_li col-row-5" data-css="nocss" >
				<div className="sct_img">
					<a href="http://127.0.0.1/shop/shop/item.php?it_id=1770986271">
					<img src="http://127.0.0.1/shop/data/item/1770986271/thumb-01jpg_225x225.jpg" width="225" height="225" alt="상품01" />
					</a>
					<div className="sct_btn list-10-btn">
						<button type="button" className="btn_cart sct_cart" data-it_id="1770986271"><i className="fa fa-shopping-cart" aria-hidden="true"></i> 장바구니</button>
					</div>
					<div className="cart-layer"></div>
				</div>
				<div className="sct_ct_wrap">
					<div className="sct_txt"><a href="http://127.0.0.1/shop/shop/item.php?it_id=1770986271">
					상품01
					</a></div>
						<div className="sct_basic">상품01 입니다.</div>
						<div className="sct_bottom">
							<div className="sct_cost">
							10,000원
							</div>
							<div className="sct_op_btn">
								<button type="button" className="btn_wish" data-it_id="1770986271"><span className="sound_only">위시리스트</span><i className="fa fa-heart-o" aria-hidden="true"></i></button>
								<button type="button" className="btn_share"><span className="sound_only">공유하기</span><i className="fa fa-share-alt" aria-hidden="true"></i></button>
								<div className="sct_sns_wrap">
									<div className="sct_sns">
										<h3>SNS 공유</h3>
										<a href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2F127.0.0.1%2Fshop%2Fshop%2Fitem.php%3Fit_id%3D1770986271&amp;p=%EC%83%81%ED%92%8801+%7C+%EA%B7%B8%EB%88%84%EB%B3%B4%EB%93%9C5" className="share-facebook" target="_blank">
										<img src="http://127.0.0.1/shop/skin/shop/basic/img/facebook.png" alt="페이스북에 공유" /></a>
										<a href="https://twitter.com/share?url=http%3A%2F%2F127.0.0.1%2Fshop%2Fshop%2Fitem.php%3Fit_id%3D1770986271&amp;text=%EC%83%81%ED%92%8801+%7C+%EA%B7%B8%EB%88%84%EB%B3%B4%EB%93%9C5" className="share-twitter" target="_blank">
										<img src="http://127.0.0.1/shop/skin/shop/basic/img/twitter.png" alt="트위터에 공유" /></a>
										<button type="button" className="sct_sns_cls"><span className="sound_only">닫기</span><i className="fa fa-times" aria-hidden="true"></i></button>
									</div>
									<div className="sct_sns_bg"></div>
								</div>
							</div>
						</div>
						<div className="sit_icon_li">
							<span className="sit_icon">
								<span className="shop_icon shop_icon_1">히트</span>
								<span className="shop_icon shop_icon_2">추천</span>
								<span className="shop_icon shop_icon_3">최신</span>
								<span className="shop_icon shop_icon_4">인기</span>
								<span className="shop_icon shop_icon_5">할인</span>
							</span>
						</div>
				</div>
			</li>

            <li className="sct_li col-row-5" data-css="nocss" >
				<div className="sct_img">
					<a href="http://127.0.0.1/shop/shop/item.php?it_id=1770986271">
					<img src="http://127.0.0.1/shop/data/item/1770986271/thumb-01jpg_225x225.jpg" width="225" height="225" alt="상품01" />
					</a>
					<div className="sct_btn list-10-btn">
						<button type="button" className="btn_cart sct_cart" data-it_id="1770986271"><i className="fa fa-shopping-cart" aria-hidden="true"></i> 장바구니</button>
					</div>
					<div className="cart-layer"></div>
				</div>
				<div className="sct_ct_wrap">
					<div className="sct_txt"><a href="http://127.0.0.1/shop/shop/item.php?it_id=1770986271">
					상품01
					</a></div>
						<div className="sct_basic">상품01 입니다.</div>
						<div className="sct_bottom">
							<div className="sct_cost">
							10,000원
							</div>
							<div className="sct_op_btn">
								<button type="button" className="btn_wish" data-it_id="1770986271"><span className="sound_only">위시리스트</span><i className="fa fa-heart-o" aria-hidden="true"></i></button>
								<button type="button" className="btn_share"><span className="sound_only">공유하기</span><i className="fa fa-share-alt" aria-hidden="true"></i></button>
								<div className="sct_sns_wrap">
									<div className="sct_sns">
										<h3>SNS 공유</h3>
										<a href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2F127.0.0.1%2Fshop%2Fshop%2Fitem.php%3Fit_id%3D1770986271&amp;p=%EC%83%81%ED%92%8801+%7C+%EA%B7%B8%EB%88%84%EB%B3%B4%EB%93%9C5" className="share-facebook" target="_blank">
										<img src="http://127.0.0.1/shop/skin/shop/basic/img/facebook.png" alt="페이스북에 공유" /></a>
										<a href="https://twitter.com/share?url=http%3A%2F%2F127.0.0.1%2Fshop%2Fshop%2Fitem.php%3Fit_id%3D1770986271&amp;text=%EC%83%81%ED%92%8801+%7C+%EA%B7%B8%EB%88%84%EB%B3%B4%EB%93%9C5" className="share-twitter" target="_blank">
										<img src="http://127.0.0.1/shop/skin/shop/basic/img/twitter.png" alt="트위터에 공유" /></a>
										<button type="button" className="sct_sns_cls"><span className="sound_only">닫기</span><i className="fa fa-times" aria-hidden="true"></i></button>
									</div>
									<div className="sct_sns_bg"></div>
								</div>
							</div>
						</div>
						<div className="sit_icon_li">
							<span className="sit_icon">
								<span className="shop_icon shop_icon_1">히트</span>
								<span className="shop_icon shop_icon_2">추천</span>
								<span className="shop_icon shop_icon_3">최신</span>
								<span className="shop_icon shop_icon_4">인기</span>
								<span className="shop_icon shop_icon_5">할인</span>
							</span>
						</div>
				</div>
			</li>
            <li className="sct_li col-row-5" data-css="nocss" >
				<div className="sct_img">
					<a href="http://127.0.0.1/shop/shop/item.php?it_id=1770986271">
					<img src="http://127.0.0.1/shop/data/item/1770986271/thumb-01jpg_225x225.jpg" width="225" height="225" alt="상품01" />
					</a>
					<div className="sct_btn list-10-btn">
						<button type="button" className="btn_cart sct_cart" data-it_id="1770986271"><i className="fa fa-shopping-cart" aria-hidden="true"></i> 장바구니</button>
					</div>
					<div className="cart-layer"></div>
				</div>
				<div className="sct_ct_wrap">
					<div className="sct_txt"><a href="http://127.0.0.1/shop/shop/item.php?it_id=1770986271">
					상품01
					</a></div>
						<div className="sct_basic">상품01 입니다.</div>
						<div className="sct_bottom">
							<div className="sct_cost">
							10,000원
							</div>
							<div className="sct_op_btn">
								<button type="button" className="btn_wish" data-it_id="1770986271"><span className="sound_only">위시리스트</span><i className="fa fa-heart-o" aria-hidden="true"></i></button>
								<button type="button" className="btn_share"><span className="sound_only">공유하기</span><i className="fa fa-share-alt" aria-hidden="true"></i></button>
								<div className="sct_sns_wrap">
									<div className="sct_sns">
										<h3>SNS 공유</h3>
										<a href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2F127.0.0.1%2Fshop%2Fshop%2Fitem.php%3Fit_id%3D1770986271&amp;p=%EC%83%81%ED%92%8801+%7C+%EA%B7%B8%EB%88%84%EB%B3%B4%EB%93%9C5" className="share-facebook" target="_blank">
										<img src="http://127.0.0.1/shop/skin/shop/basic/img/facebook.png" alt="페이스북에 공유" /></a>
										<a href="https://twitter.com/share?url=http%3A%2F%2F127.0.0.1%2Fshop%2Fshop%2Fitem.php%3Fit_id%3D1770986271&amp;text=%EC%83%81%ED%92%8801+%7C+%EA%B7%B8%EB%88%84%EB%B3%B4%EB%93%9C5" className="share-twitter" target="_blank">
										<img src="http://127.0.0.1/shop/skin/shop/basic/img/twitter.png" alt="트위터에 공유" /></a>
										<button type="button" className="sct_sns_cls"><span className="sound_only">닫기</span><i className="fa fa-times" aria-hidden="true"></i></button>
									</div>
									<div className="sct_sns_bg"></div>
								</div>
							</div>
						</div>
						<div className="sit_icon_li">
							<span className="sit_icon">
								<span className="shop_icon shop_icon_1">히트</span>
								<span className="shop_icon shop_icon_2">추천</span>
								<span className="shop_icon shop_icon_3">최신</span>
								<span className="shop_icon shop_icon_4">인기</span>
								<span className="shop_icon shop_icon_5">할인</span>
							</span>
						</div>
				</div>
			</li>
            <li className="sct_li col-row-5" data-css="nocss" >
				<div className="sct_img">
					<a href="http://127.0.0.1/shop/shop/item.php?it_id=1770986271">
					<img src="http://127.0.0.1/shop/data/item/1770986271/thumb-01jpg_225x225.jpg" width="225" height="225" alt="상품01" />
					</a>
					<div className="sct_btn list-10-btn">
						<button type="button" className="btn_cart sct_cart" data-it_id="1770986271"><i className="fa fa-shopping-cart" aria-hidden="true"></i> 장바구니</button>
					</div>
					<div className="cart-layer"></div>
				</div>
				<div className="sct_ct_wrap">
					<div className="sct_txt"><a href="http://127.0.0.1/shop/shop/item.php?it_id=1770986271">
					상품01
					</a></div>
						<div className="sct_basic">상품01 입니다.</div>
						<div className="sct_bottom">
							<div className="sct_cost">
							10,000원
							</div>
							<div className="sct_op_btn">
								<button type="button" className="btn_wish" data-it_id="1770986271"><span className="sound_only">위시리스트</span><i className="fa fa-heart-o" aria-hidden="true"></i></button>
								<button type="button" className="btn_share"><span className="sound_only">공유하기</span><i className="fa fa-share-alt" aria-hidden="true"></i></button>
								<div className="sct_sns_wrap">
									<div className="sct_sns">
										<h3>SNS 공유</h3>
										<a href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2F127.0.0.1%2Fshop%2Fshop%2Fitem.php%3Fit_id%3D1770986271&amp;p=%EC%83%81%ED%92%8801+%7C+%EA%B7%B8%EB%88%84%EB%B3%B4%EB%93%9C5" className="share-facebook" target="_blank">
										<img src="http://127.0.0.1/shop/skin/shop/basic/img/facebook.png" alt="페이스북에 공유" /></a>
										<a href="https://twitter.com/share?url=http%3A%2F%2F127.0.0.1%2Fshop%2Fshop%2Fitem.php%3Fit_id%3D1770986271&amp;text=%EC%83%81%ED%92%8801+%7C+%EA%B7%B8%EB%88%84%EB%B3%B4%EB%93%9C5" className="share-twitter" target="_blank">
										<img src="http://127.0.0.1/shop/skin/shop/basic/img/twitter.png" alt="트위터에 공유" /></a>
										<button type="button" className="sct_sns_cls"><span className="sound_only">닫기</span><i className="fa fa-times" aria-hidden="true"></i></button>
									</div>
									<div className="sct_sns_bg"></div>
								</div>
							</div>
						</div>
						<div className="sit_icon_li">
							<span className="sit_icon">
								<span className="shop_icon shop_icon_1">히트</span>
								<span className="shop_icon shop_icon_2">추천</span>
								<span className="shop_icon shop_icon_3">최신</span>
								<span className="shop_icon shop_icon_4">인기</span>
								<span className="shop_icon shop_icon_5">할인</span>
							</span>
						</div>
				</div>
			</li>
		</ul>
		{/* 상품진열 10 끝 */}
        <nav className="pg_wrap">
            <span className="pg">
                <a href="/shop/shop/list.php?ca_id=10&amp;sort=&amp;sortodr=&amp;page=1" class="pg_page pg_start">처음</a>
                <strong className="pg_current">1</strong>
                <a href="/shop/shop/list.php?ca_id=10&amp;sort=&amp;sortodr=&amp;page=2" className="pg_page">2</a>
                <a href="/shop/shop/list.php?ca_id=10&amp;sort=&amp;sortodr=&amp;page=2" className="pg_page pg_end">맨끝</a>
            </span>
        </nav>
        <div id="sct_thtml"></div>
	</div>  
	{/* .shop-content 끝 */}
</div>
  )
}
