import { Link, useLocation } from 'react-router-dom';
import './css/admin.css';
import { useState } from 'react';

export default function AdminHeader() {

    const [count, setCont] =  useState(0);
   
    const locations = useLocation();
    const lastSegment = locations.pathname.split('/').filter(Boolean).pop();


    let menuL ="";
    if (lastSegment=="admin") {
        menuL = "100100";
    } else if (lastSegment=="memberlist") {
        menuL = "200100";
    } else if (lastSegment=="orderlist") {
        menuL = "300100";
    } else if (lastSegment=="category") {
        menuL = "300200";
    } else if (lastSegment=="itemlist") {
        menuL = "300300";
    } else if (lastSegment=="itemqna") {
        menuL = "300400";
    } else if (lastSegment=="itemuse") {
        menuL = "300500";
    }

    


    //const text = "React";
//const firstChar = text[0]; // 'R'
// 또는
//const firstChar2 = text.charAt(0); // 'R'


     //console.log(lastSegment); // "/products"

  return (
    <>
    
    <div id="hd_login_msg">최고관리자 최고관리자님 로그인 중 <a href="http://127.0.0.1/shop/bbs/logout.php">로그아웃</a></div>
    <div id="to_content"><a href="#container">본문 바로가기</a></div>
    <header id="hd">
        <h1>그누보드5</h1>
        <div id="hd_top">
            <button type="button" id="btn_gnb" className="btn_gnb_close">메뉴</button>
            <div id="logo"><Link to="/admin"><img src="/img/logo.png" alt="관리자" title="" /></Link></div>
            <div id="tnb">
                <ul>
                    <li className="tnb_li"><a href="/" className="tnb_shop" target="_blank" title="쇼핑몰 바로가기">쇼핑몰 바로가기</a></li>
                    <li className="tnb_li"><button type="button" className="tnb_mb_btn">관리자<span className="./img/btn_gnb.png">메뉴열기</span></button>
                        <ul className="tnb_mb_area _hidden">
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
                <li id="menu0" className={`gnb_li ${count==0 ? "on":""}`}>
                    <button type="button" className="btn_op menu-100 menu-order-1" title="환경설정" onClick={ () => setCont(0) }>환경설정</button>
                    <div className="gnb_oparea_wr">
                        <div className="gnb_oparea">
                            <h3>관리자메인</h3>                           
                            <ul>
                                
                                <li data-menu="100100"><Link to="/admin" className={menuL=="100100" ? "gnb_2da on":"gnb_2da"}>관리자메인</Link></li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li  id="menu1" className={`gnb_li ${count==1 ? "on":""}`}>
                    <button type="button" className="btn_op menu-200 menu-order-2" title="회원관리" onClick={ () => setCont(1) }  >회원관리</button>
                    <div className="gnb_oparea_wr">
                        <div className="gnb_oparea">
                            <h3>회원관리</h3>
                            <ul>
                                <li data-menu="200100"><Link to="/admin/memberlist" className={menuL=="200100" ? "gnb_2da on":"gnb_2da"}>회원관리</Link></li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li  id="menu2" className={`gnb_li ${count==2 ? "on":""}`}>
                    <button type="button" className="btn_op menu-400 menu-order-4" title="쇼핑몰관리" onClick={ () => setCont(2) }>쇼핑몰관리</button>
                    <div className="gnb_oparea_wr">
                        <div className="gnb_oparea">
                            <h3>쇼핑몰관리</h3>
                            <ul>
                                <li data-menu="300100"><Link to="/admin/orderlist" className={menuL=="300100" ? "gnb_2da on":"gnb_2da"}>주문내역</Link></li>
                                <li data-menu="300200"><Link to="/admin/category" className={menuL=="300200" ? "gnb_2da on":"gnb_2da"}>분류관리</Link></li>
                                <li data-menu="300300"><Link to="/admin/itemlist" className={menuL=="300300" ? "gnb_2da on":"gnb_2da"}>상품관리</Link></li>
                                <li data-menu="300400"><Link to="/admin/itemqna" className={menuL=="300400" ? "gnb_2da on":"gnb_2da"}>상품문의</Link></li>
                                <li data-menu="300500"><Link to="/admin/itemuse" className={menuL=="300500" ? "gnb_2da on":"gnb_2da"}>사용후기</Link></li>
                            </ul>
                        </div>
                    </div>
                </li>              
            </ul>
        </nav>
    </header>
    </>
  )
}
