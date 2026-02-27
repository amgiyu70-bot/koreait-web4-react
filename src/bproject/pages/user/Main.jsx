

export default function Main() {
  return (
    <div  className="">
    <div id="container">
		<div id="aside">   	

            <section id="side_pd">
                <h2><a href="">인기상품</a></h2>
                
			<p className="sct_noitem">등록된 상품이 없습니다.</p>
            </section>
        </div>
                        {/* .shop-content 시작 */}
        <div className="shop-content is_index">
{/* 히트상품 시작 */}
<section id="idx_hit" className="sct_wrap">
    <header>
        <h2><a href="http://localhost/shop/shop/listtype.php?type=1">히트상품</a></h2>
    </header>
    
    {/* 상품진열 10 시작 */}
    <p className="sct_noitem">등록된 상품이 없습니다.</p>
</section>
{/* } 상품진열 10 끝*/}
{/* } 히트상품 끝*/}


    {/* 최신상품 시작 */}
    <section className="sct_wrap">
        <header>
            <h2><a href="http://localhost/shop/shop/listtype.php?type=3">최신상품</a></h2>
        </header>
        
    {/* 상품진열 40 시작 */}
        <p className="sct_noitem">등록된 상품이 없습니다.</p>
        <ul className="smt smt_10">
            <li className="sct_li sct_clear">
                <div className="sct_img">
                    <a href="http://127.0.0.1/shop/shop/item.php?it_id=1770986271">
                        <img src="http://127.0.0.1/shop/data/item/1770986271/thumb-01jpg_215x215.jpg" width="215" height="215" alt="상품01" />
                    </a>
                    <div className="sct_btn">
                        <button type="button" className="btn_cart sct_cart" data-it_id="1770986271"><i className="fa fa-shopping-cart" aria-hidden="true"></i> 장바구니</button>
                    </div>
                    <div className="cart-layer"></div>
                </div>
                <div className="sct_ct_wrap">
                    <div className="sct_txt"><a href="http://127.0.0.1/shop/shop/item.php?it_id=1770986271">
                    상품01
                    </a></div>
                    <div className="sct_basic">상품01 입니다.</div>
                    <div className="sct_cost">
                    10,000원
                    </div>
                    <div className="sct_op_btn">
                        <button type="button" className="btn_wish" data-it_id="1770986271"><span className="sound_only">위시리스트</span><i className="fa fa-heart-o" aria-hidden="true"></i></button>
                        <button type="button" className="btn_share"><span className="sound_only">공유하기</span><i className="fa fa-share-alt" aria-hidden="true"></i></button>
                        <div className="sct_sns_wrap">
                            <div className="sct_sns">
                                <h3>SNS 공유</h3>
                                <a href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2F127.0.0.1%2Fshop%2Fshop%2Fitem.php%3Fit_id%3D1770986271&amp;p=%EC%83%81%ED%92%8801+%7C+%EA%B7%B8%EB%88%84%EB%B3%B4%EB%93%9C5" className="share-facebook" target="_blank"><img src="http://127.0.0.1/shop/skin/shop/basic/img/facebook.png" alt="페이스북에 공유" /></a>
                                <a href="https://twitter.com/share?url=http%3A%2F%2F127.0.0.1%2Fshop%2Fshop%2Fitem.php%3Fit_id%3D1770986271&amp;text=%EC%83%81%ED%92%8801+%7C+%EA%B7%B8%EB%88%84%EB%B3%B4%EB%93%9C5" className="share-twitter" target="_blank"><img src="http://127.0.0.1/shop/skin/shop/basic/img/twitter.png" alt="트위터에 공유" /></a>
                                <button type="button" className="sct_sns_cls"><span className="sound_only">닫기</span><i className="fa fa-times" aria-hidden="true"></i></button>
                            </div>
                            <div className="sct_sns_bg"></div>
                        </div>
                    </div>
                </div>
                <div className="sit_icon_li"><span className="sit_icon"><span className="shop_icon shop_icon_1">히트</span><span className="shop_icon shop_icon_2">추천		</span><span className="shop_icon shop_icon_3">최신</span><span className="shop_icon shop_icon_4">인기</span><span className="shop_icon shop_icon_5">할인</span></span>
                </div>
            </li>
        </ul>
    {/* } 상품진열40 끝*/}

    </section>
{/* } 최신상품 끝*/}

    {/* 추천상품 시작 */}
    <section className="sct_wrap">
        <header>
            <h2><a href="http://localhost/shop/shop/listtype.php?type=2">추천상품</a></h2>
        </header>
        {/* 상품진열 20 시작 */}
        <p className="sct_noitem">등록된 상품이 없습니다.</p>
        <ul className="smt smt_10">
            <li className="sct_li sct_clear">
                <div className="sct_img">
                    <a href="http://127.0.0.1/shop/shop/item.php?it_id=1770986271">
                        <img src="http://127.0.0.1/shop/data/item/1770986271/thumb-01jpg_215x215.jpg" width="215" height="215" alt="상품01" />
                    </a>
                    <div className="sct_btn">
                        <button type="button" className="btn_cart sct_cart" data-it_id="1770986271"><i className="fa fa-shopping-cart" aria-hidden="true"></i> 장바구니</button>
                    </div>
                    <div className="cart-layer"></div>
                </div>
                <div className="sct_ct_wrap">
                    <div className="sct_txt"><a href="http://127.0.0.1/shop/shop/item.php?it_id=1770986271">
                    상품01
                    </a></div>
                    <div className="sct_basic">상품01 입니다.</div>
                    <div className="sct_cost">
                    10,000원
                    </div>
                    <div className="sct_op_btn">
                        <button type="button" className="btn_wish" data-it_id="1770986271"><span className="sound_only">위시리스트</span><i className="fa fa-heart-o" aria-hidden="true"></i></button>
                        <button type="button" className="btn_share"><span className="sound_only">공유하기</span><i className="fa fa-share-alt" aria-hidden="true"></i></button>
                        <div className="sct_sns_wrap">
                            <div className="sct_sns">
                                <h3>SNS 공유</h3>
                                <a href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2F127.0.0.1%2Fshop%2Fshop%2Fitem.php%3Fit_id%3D1770986271&amp;p=%EC%83%81%ED%92%8801+%7C+%EA%B7%B8%EB%88%84%EB%B3%B4%EB%93%9C5" className="share-facebook" target="_blank"><img src="http://127.0.0.1/shop/skin/shop/basic/img/facebook.png" alt="페이스북에 공유" /></a>
                                <a href="https://twitter.com/share?url=http%3A%2F%2F127.0.0.1%2Fshop%2Fshop%2Fitem.php%3Fit_id%3D1770986271&amp;text=%EC%83%81%ED%92%8801+%7C+%EA%B7%B8%EB%88%84%EB%B3%B4%EB%93%9C5" className="share-twitter" target="_blank"><img src="http://127.0.0.1/shop/skin/shop/basic/img/twitter.png" alt="트위터에 공유" /></a>
                                <button type="button" className="sct_sns_cls"><span className="sound_only">닫기</span><i className="fa fa-times" aria-hidden="true"></i></button>
                            </div>
                            <div className="sct_sns_bg"></div>
                        </div>
                    </div>
                </div>
                <div className="sit_icon_li"><span className="sit_icon"><span className="shop_icon shop_icon_1">히트</span><span className="shop_icon shop_icon_2">추천		</span><span className="shop_icon shop_icon_3">최신</span><span className="shop_icon shop_icon_4">인기</span><span className="shop_icon shop_icon_5">할인</span></span>
                </div>
            </li>
        </ul>


    {/* } 상품진열 20 끝*/}
    </section>
{/* } 추천상품 끝*/}


    {/* 할인상품 시작 */}
    <section className="sct_wrap">
        <header>
            <h2><a href="http://localhost/shop/shop/listtype.php?type=5">할인상품</a></h2>
        </header>
        
        {/* 상품진열 30 시작 */}
        <p className="sct_noitem">등록된 상품이 없습니다.</p>
        
        <ul className="smt smt_10">
            <li className="sct_li sct_clear">
                <div className="sct_img">
                    <a href="http://127.0.0.1/shop/shop/item.php?it_id=1770986271">
                        <img src="http://127.0.0.1/shop/data/item/1770986271/thumb-01jpg_215x215.jpg" width="215" height="215" alt="상품01" />
                    </a>
                    <div className="sct_btn">
                        <button type="button" className="btn_cart sct_cart" data-it_id="1770986271"><i className="fa fa-shopping-cart" aria-hidden="true"></i> 장바구니</button>
                    </div>
                    <div className="cart-layer"></div>
                </div>
                <div className="sct_ct_wrap">
                    <div className="sct_txt"><a href="http://127.0.0.1/shop/shop/item.php?it_id=1770986271">
                    상품01
                    </a></div>
                    <div className="sct_basic">상품01 입니다.</div>
                    <div className="sct_cost">
                    10,000원
                    </div>
                    <div className="sct_op_btn">
                        <button type="button" className="btn_wish" data-it_id="1770986271"><span className="sound_only">위시리스트</span><i className="fa fa-heart-o" aria-hidden="true"></i></button>
                        <button type="button" className="btn_share"><span className="sound_only">공유하기</span><i className="fa fa-share-alt" aria-hidden="true"></i></button>
                        <div className="sct_sns_wrap">
                            <div className="sct_sns">
                                <h3>SNS 공유</h3>
                                <a href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2F127.0.0.1%2Fshop%2Fshop%2Fitem.php%3Fit_id%3D1770986271&amp;p=%EC%83%81%ED%92%8801+%7C+%EA%B7%B8%EB%88%84%EB%B3%B4%EB%93%9C5" className="share-facebook" target="_blank"><img src="http://127.0.0.1/shop/skin/shop/basic/img/facebook.png" alt="페이스북에 공유" /></a>
                                <a href="https://twitter.com/share?url=http%3A%2F%2F127.0.0.1%2Fshop%2Fshop%2Fitem.php%3Fit_id%3D1770986271&amp;text=%EC%83%81%ED%92%8801+%7C+%EA%B7%B8%EB%88%84%EB%B3%B4%EB%93%9C5" className="share-twitter" target="_blank"><img src="http://127.0.0.1/shop/skin/shop/basic/img/twitter.png" alt="트위터에 공유" /></a>
                                <button type="button" className="sct_sns_cls"><span className="sound_only">닫기</span><i className="fa fa-times" aria-hidden="true"></i></button>
                            </div>
                            <div className="sct_sns_bg"></div>
                        </div>
                    </div>
                </div>
                <div className="sit_icon_li"><span className="sit_icon"><span className="shop_icon shop_icon_1">히트</span><span className="shop_icon shop_icon_2">추천		</span><span className="shop_icon shop_icon_3">최신</span><span className="shop_icon shop_icon_4">인기</span><span className="shop_icon shop_icon_5">할인</span></span>
                </div>
            </li>
        </ul>


    </section>
    {/* } 할인상품 끝*/}

        </div>  
	</div>     
</div>
  )
}
