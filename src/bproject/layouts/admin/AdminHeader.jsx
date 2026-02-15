
import './css/admin.css';

export default function AdminHeader() {
  return (
    <>
      <div id="hd_login_msg">최고관리자 최고관리자님 로그인 중 <a href="http://127.0.0.1/shop/bbs/logout.php">로그아웃</a></div>
      <div id="to_content"><a href="#container">본문 바로가기</a></div>
      <header id="hd">
    <h1>그누보드5</h1>
    <div id="hd_top">
        <button type="button" id="btn_gnb" className="btn_gnb_close">메뉴</button>
        <div id="logo"><a href="http://127.0.0.1/shop/adm/"><img src="http://127.0.0.1/shop/adm/img/logo.png" alt="그누보드5 관리자" title="" /></a></div>

        <div id="tnb">
            <ul>
                                    <li className="tnb_li"><a href="http://127.0.0.1/shop/shop/" className="tnb_shop" target="_blank" title="쇼핑몰 바로가기">쇼핑몰 바로가기</a></li>
                                <li className="tnb_li"><a href="http://127.0.0.1/shop/" className="tnb_community" target="_blank" title="커뮤니티 바로가기">커뮤니티 바로가기</a></li>
                <li className="tnb_li"><a href="http://127.0.0.1/shop/adm/service.php" className="tnb_service">부가서비스</a></li>
                <li className="tnb_li"><button type="button" className="tnb_mb_btn">관리자<span className="./img/btn_gnb.png">메뉴열기</span></button>
                    <ul className="tnb_mb_area _hidden" >
                        <li><a href="http://127.0.0.1/shop/adm/member_form.php?w=u&amp;mb_id=admin">관리자정보</a></li>
                        <li id="tnb_logout"><a href="http://127.0.0.1/shop/bbs/logout.php">로그아웃</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
    <nav id="gnb" className="gnb_large">
        <h2>관리자 주메뉴</h2>
        <ul className="gnb_ul">
                            <li className="gnb_li on">
                    <button type="button" className="btn_op menu-100 menu-order-1" title="환경설정">환경설정</button>
                    <div className="gnb_oparea_wr">
                        <div className="gnb_oparea">
                            <h3>환경설정</h3>
                            <ul><li data-menu="100100"><a href="http://127.0.0.1/shop/adm/config_form.php" className="gnb_2da  ">기본환경설정</a></li><li data-menu="100200"><a href="http://127.0.0.1/shop/adm/auth_list.php" className="gnb_2da  ">관리권한설정</a></li><li data-menu="100280"><a href="http://127.0.0.1/shop/adm/theme.php" className="gnb_2da gnb_grp_style gnb_grp_div">테마설정</a></li><li data-menu="100290"><a href="http://127.0.0.1/shop/adm/menu_list.php" className="gnb_2da gnb_grp_style gnb_grp_div">메뉴설정</a></li><li data-menu="100300"><a href="http://127.0.0.1/shop/adm/sendmail_test.php" className="gnb_2da  ">메일 테스트</a></li><li data-menu="100320"><a href="http://127.0.0.1/shop/adm/alimtalkpreset.php" className="gnb_2da  ">알림톡프리셋관리</a></li><li data-menu="100310"><a href="http://127.0.0.1/shop/adm/newwinlist.php" className="gnb_2da  ">팝업레이어관리</a></li><li data-menu="100800"><a href="http://127.0.0.1/shop/adm/session_file_delete.php" className="gnb_2da gnb_grp_style gnb_grp_div">세션파일 일괄삭제</a></li><li data-menu="100900"><a href="http://127.0.0.1/shop/adm/cache_file_delete.php" className="gnb_2da gnb_grp_style gnb_grp_div">캐시파일 일괄삭제</a></li><li data-menu="100910"><a href="http://127.0.0.1/shop/adm/captcha_file_delete.php" className="gnb_2da gnb_grp_style gnb_grp_div">캡챠파일 일괄삭제</a></li><li data-menu="100920"><a href="http://127.0.0.1/shop/adm/thumbnail_file_delete.php" className="gnb_2da gnb_grp_style gnb_grp_div">썸네일파일 일괄삭제</a></li><li data-menu="100930"><a href="http://127.0.0.1/shop/adm/member_list_file_delete.php" className="gnb_2da gnb_grp_style gnb_grp_div">회원관리파일 일괄삭제</a></li><li data-menu="100500"><a href="http://127.0.0.1/shop/adm/phpinfo.php" className="gnb_2da  ">phpinfo()</a></li><li data-menu="100510"><a href="http://127.0.0.1/shop/adm/browscap.php" className="gnb_2da  ">Browscap 업데이트</a></li><li data-menu="100520"><a href="http://127.0.0.1/shop/adm/browscap_convert.php" className="gnb_2da  ">접속로그 변환</a></li><li data-menu="100410"><a href="http://127.0.0.1/shop/adm/dbupgrade.php" className="gnb_2da  ">DB업그레이드</a></li><li data-menu="100400"><a href="http://127.0.0.1/shop/adm/service.php" className="gnb_2da  ">부가서비스</a></li></ul>                        </div>
                    </div>
                </li>
                            <li className="gnb_li">
                    <button type="button" className="btn_op menu-200 menu-order-2" title="회원관리">회원관리</button>
                    <div className="gnb_oparea_wr">
                        <div className="gnb_oparea">
                            <h3>회원관리</h3>
                            <ul><li data-menu="200100"><a href="http://127.0.0.1/shop/adm/member_list.php" className="gnb_2da  ">회원관리</a></li><li data-menu="200400"><a href="http://127.0.0.1/shop/adm/member_list_exel.php" className="gnb_2da  ">회원관리파일</a></li><li data-menu="200300"><a href="http://127.0.0.1/shop/adm/mail_list.php" className="gnb_2da  ">회원메일발송</a></li><li data-menu="200800"><a href="http://127.0.0.1/shop/adm/visit_list.php" className="gnb_2da gnb_grp_style gnb_grp_div">접속자집계</a></li><li data-menu="200810"><a href="http://127.0.0.1/shop/adm/visit_search.php" className="gnb_2da gnb_grp_style gnb_grp_div">접속자검색</a></li><li data-menu="200820"><a href="http://127.0.0.1/shop/adm/visit_delete.php" className="gnb_2da gnb_grp_style gnb_grp_div">접속자로그삭제</a></li><li data-menu="200200"><a href="http://127.0.0.1/shop/adm/point_list.php" className="gnb_2da  ">포인트관리</a></li><li data-menu="200900"><a href="http://127.0.0.1/shop/adm/poll_list.php" className="gnb_2da  ">투표관리</a></li></ul>                        </div>
                    </div>
                </li>
                            <li className="gnb_li">
                    <button type="button" className="btn_op menu-300 menu-order-3" title="게시판관리">게시판관리</button>
                    <div className="gnb_oparea_wr">
                        <div className="gnb_oparea">
                            <h3>게시판관리</h3>
                            <ul><li data-menu="300100"><a href="http://127.0.0.1/shop/adm/board_list.php" className="gnb_2da  ">게시판관리</a></li><li data-menu="300200"><a href="http://127.0.0.1/shop/adm/boardgroup_list.php" className="gnb_2da  ">게시판그룹관리</a></li><li data-menu="300300"><a href="http://127.0.0.1/shop/adm/popular_list.php" className="gnb_2da gnb_grp_style gnb_grp_div">인기검색어관리</a></li><li data-menu="300400"><a href="http://127.0.0.1/shop/adm/popular_rank.php" className="gnb_2da gnb_grp_style gnb_grp_div">인기검색어순위</a></li><li data-menu="300500"><a href="http://127.0.0.1/shop/adm/qa_config.php" className="gnb_2da  ">1:1문의설정</a></li><li data-menu="300600"><a href="http://127.0.0.1/shop/adm/contentlist.php" className="gnb_2da gnb_grp_style gnb_grp_div">내용관리</a></li><li data-menu="300700"><a href="http://127.0.0.1/shop/adm/faqmasterlist.php" className="gnb_2da gnb_grp_style gnb_grp_div">FAQ관리</a></li><li data-menu="300820"><a href="http://127.0.0.1/shop/adm/write_count.php" className="gnb_2da  ">글,댓글 현황</a></li></ul>                        </div>
                    </div>
                </li>
                            <li className="gnb_li">
                    <button type="button" className="btn_op menu-400 menu-order-4" title="쇼핑몰관리">쇼핑몰관리</button>
                    <div className="gnb_oparea_wr">
                        <div className="gnb_oparea">
                            <h3>쇼핑몰관리</h3>
                            <ul><li data-menu="400010"><a href="http://127.0.0.1/shop/adm/shop_admin/" className="gnb_2da  ">쇼핑몰현황</a></li><li data-menu="400100"><a href="http://127.0.0.1/shop/adm/shop_admin/configform.php" className="gnb_2da  ">쇼핑몰설정</a></li><li data-menu="400400"><a href="http://127.0.0.1/shop/adm/shop_admin/orderlist.php" className="gnb_2da gnb_grp_style gnb_grp_div">주문내역</a></li><li data-menu="400440"><a href="http://127.0.0.1/shop/adm/shop_admin/personalpaylist.php" className="gnb_2da gnb_grp_style gnb_grp_div">개인결제관리</a></li><li data-menu="400200"><a href="http://127.0.0.1/shop/adm/shop_admin/categorylist.php" className="gnb_2da  ">분류관리</a></li><li data-menu="400300"><a href="http://127.0.0.1/shop/adm/shop_admin/itemlist.php" className="gnb_2da  ">상품관리</a></li><li data-menu="400660"><a href="http://127.0.0.1/shop/adm/shop_admin/itemqalist.php" className="gnb_2da  ">상품문의</a></li><li data-menu="400650"><a href="http://127.0.0.1/shop/adm/shop_admin/itemuselist.php" className="gnb_2da  ">사용후기</a></li><li data-menu="400620"><a href="http://127.0.0.1/shop/adm/shop_admin/itemstocklist.php" className="gnb_2da  ">상품재고관리</a></li><li data-menu="400610"><a href="http://127.0.0.1/shop/adm/shop_admin/itemtypelist.php" className="gnb_2da  ">상품유형관리</a></li><li data-menu="400500"><a href="http://127.0.0.1/shop/adm/shop_admin/optionstocklist.php" className="gnb_2da  ">상품옵션재고관리</a></li><li data-menu="400800"><a href="http://127.0.0.1/shop/adm/shop_admin/couponlist.php" className="gnb_2da  ">쿠폰관리</a></li><li data-menu="400810"><a href="http://127.0.0.1/shop/adm/shop_admin/couponzonelist.php" className="gnb_2da  ">쿠폰존관리</a></li><li data-menu="400750"><a href="http://127.0.0.1/shop/adm/shop_admin/sendcostlist.php" className="gnb_2da gnb_grp_style gnb_grp_div">추가배송비관리</a></li><li data-menu="400410"><a href="http://127.0.0.1/shop/adm/shop_admin/inorderlist.php" className="gnb_2da gnb_grp_style gnb_grp_div">미완료주문</a></li></ul>                        </div>
                    </div>
                </li>
                            <li className="gnb_li">
                    <button type="button" className="btn_op menu-500 menu-order-5" title="쇼핑몰현황/기타">쇼핑몰현황/기타</button>
                    <div className="gnb_oparea_wr">
                        <div className="gnb_oparea">
                            <h3>쇼핑몰현황/기타</h3>
                            <ul><li data-menu="500110"><a href="http://127.0.0.1/shop/adm/shop_admin/sale1.php" className="gnb_2da  ">매출현황</a></li><li data-menu="500100"><a href="http://127.0.0.1/shop/adm/shop_admin/itemsellrank.php" className="gnb_2da  ">상품판매순위</a></li><li data-menu="500120"><a href="http://127.0.0.1/shop/adm/shop_admin/orderprint.php" className="gnb_2da gnb_grp_style gnb_grp_div">주문내역출력</a></li><li data-menu="500400"><a href="http://127.0.0.1/shop/adm/shop_admin/itemstocksms.php" className="gnb_2da gnb_grp_style gnb_grp_div">재입고알림</a></li><li data-menu="500300"><a href="http://127.0.0.1/shop/adm/shop_admin/itemevent.php" className="gnb_2da  ">이벤트관리</a></li><li data-menu="500310"><a href="http://127.0.0.1/shop/adm/shop_admin/itemeventlist.php" className="gnb_2da  ">이벤트일괄처리</a></li><li data-menu="500500"><a href="http://127.0.0.1/shop/adm/shop_admin/bannerlist.php" className="gnb_2da gnb_grp_style gnb_grp_div">배너관리</a></li><li data-menu="500140"><a href="http://127.0.0.1/shop/adm/shop_admin/wishlist.php" className="gnb_2da  ">보관함현황</a></li><li data-menu="500210"><a href="http://127.0.0.1/shop/adm/shop_admin/price.php" className="gnb_2da gnb_grp_style gnb_grp_div">가격비교사이트</a></li></ul>                        </div>
                    </div>
                </li>
                            <li className="gnb_li">
                    <button type="button" className="btn_op menu-900 menu-order-6" title="SMS 관리">SMS 관리</button>
                    <div className="gnb_oparea_wr">
                        <div className="gnb_oparea">
                            <h3>SMS 관리</h3>
                            <ul><li data-menu="900100"><a href="http://127.0.0.1/shop/adm/sms_admin/config.php" className="gnb_2da  ">SMS 기본설정</a></li><li data-menu="900200"><a href="http://127.0.0.1/shop/adm/sms_admin/member_update.php" className="gnb_2da  ">회원정보업데이트</a></li><li data-menu="900300"><a href="http://127.0.0.1/shop/adm/sms_admin/sms_write.php" className="gnb_2da  ">문자 보내기</a></li><li data-menu="900400"><a href="http://127.0.0.1/shop/adm/sms_admin/history_list.php" className="gnb_2da gnb_grp_style gnb_grp_div">전송내역-건별</a></li><li data-menu="900410"><a href="http://127.0.0.1/shop/adm/sms_admin/history_num.php" className="gnb_2da gnb_grp_style gnb_grp_div">전송내역-번호별</a></li><li data-menu="900500"><a href="http://127.0.0.1/shop/adm/sms_admin/form_group.php" className="gnb_2da  ">이모티콘 그룹</a></li><li data-menu="900600"><a href="http://127.0.0.1/shop/adm/sms_admin/form_list.php" className="gnb_2da  ">이모티콘 관리</a></li><li data-menu="900700"><a href="http://127.0.0.1/shop/adm/sms_admin/num_group.php" className="gnb_2da gnb_grp_style gnb_grp_div">휴대폰번호 그룹</a></li><li data-menu="900800"><a href="http://127.0.0.1/shop/adm/sms_admin/num_book.php" className="gnb_2da gnb_grp_style gnb_grp_div">휴대폰번호 관리</a></li><li data-menu="900900"><a href="http://127.0.0.1/shop/adm/sms_admin/num_book_file.php" className="gnb_2da gnb_grp_style gnb_grp_div">휴대폰번호 파일</a></li></ul>                        </div>
                    </div>
                </li>
                    </ul>
    </nav>

</header>
    </>
  )
}
