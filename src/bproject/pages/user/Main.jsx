import React, { useRef, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { cartUpdate, getMainItemlist } from "./js/userQuery";
import { AiOutlineShoppingCart  } from "react-icons/ai";
import noImage from "../../img/no_image.gif";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
//import { useAuthStore } from '../../stores/authStore';
//import { toast } from 'react-toastify';
//import {CartClick} from './CartClick';

//import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../stores/authStore";
import { toast } from 'react-toastify';
import { importForm } from '../../hooks/importForm';
//import CartOnClick from './CartOnClick';

/*
 //const CartClick= (v) => {
 function CartClick (v) {
 // alert(v);
   // const {mbID} = useAuthStore();
   const nav = useNavigate();
   //if (!mbID) {
       toast.error("회원 로그인 후 이용해주세요!");
        nav("/login");
      // return;
   // }
      
}
   */


function GetItem({iType, limit}) {
    
    const {data: it} = getMainItemlist(iType, limit); 
   
    //const [val, setVal] = useState("");
    // const [it_id, setIt_id] = useState("");
     //const [mb_id, setMb_id] = useState("");
    // const {data: cart} = CartUpdate(it_id, mb_id);
    // console.log(cart);
    
    const {mbID} = useAuthStore();
    const nav = useNavigate();  
    const {isPending, mutate} = cartUpdate();


    //const [it_id, setitID] = useState("");   
   // const [mb_id, setimID] = useState("");  



    const CartClicks = (v) => {           
        if (!mbID) {
            toast.error("회원 로그인 후 이용해주세요!");
            setTimeout(() => {  
                     nav("/login");            
            }, 2500);
            return;
        } else {
            //alert(1);
           // const itID = document.getElementById("itID");
           // if (itID) {
               // itID.value = v;
               // setitID(v);
           // }

           // const mID = document.getElementById("mID");
           // if (mID) {
               // mID.value = mbID;
                
               // setimID(mbID);
           // }
            let it_id = v;
            let mb_id = mbID;
            let ct_qty = 1;
            let ct_direct = 0;

            

              // 비구조화 할당을 통해 값 추출
          //  const { it_id, mb_id } = inputs; 

                    // setIt_id(v);
          //  setMb_id(mbID);  
            
            //const {data: cart} = CartUpdate(it_id, mb_id);
           
            mutate({it_id, mb_id, ct_qty, ct_direct}, {
            onSuccess: () => {
            },
            onError: () => {
             }
            });
            
           
        }        
    }     

    //console.log(it);
    

    if (it && it.length === 0) {
        return <p className="sct_noitem">등록된 상품이 없습니다.</p>
    } else {        
        const items = [];
        for (let i = 0; i < it?.length; i++) {          
            items.push(
            <li key={i} className={i==0? "sct_li  sct_clear":"sct_li"}>
                <div className="sct_img">
                    <Link to={`/itemview/${it[i].it_id}`}>
                        <img src={it[i].it_img1? `http://gnbiz8888.liodesign.kr/react/upload/${it[i].it_img1}`:noImage} width="215" height="215" alt={it[i].it_name} />
                    </Link>
                    <div className="sct_btn">

                        
                        <button type="button" className="btn_cart sct_cart" data-it_id={it[i].it_id}
                        onClick={() => CartClicks(it[i].it_id)}
                        ><AiOutlineShoppingCart color="white" size="1.5rem" /> 장바구니</button>
                       {/* <CartOnClick 
                             it_id={`${it[i].it_id}`} 
                            chk={`() => CartClicks(${it[i].it_id})`}
                        />*/}
                    </div>
                    <div className="cart-layer"></div>
                </div>
                <div className="sct_ct_wrap">
                    <div className="sct_txt">
                            <Link to={`/itemview/${it[i].it_id}`}>{it[i].it_name}</Link>
                    </div>
                    <div className="sct_basic">{it[i].it_short_memo}</div>
                    <div className="sct_cost">
                    {it[i].it_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
                    </div>
                </div>
                <div className="sit_icon_li">
                    <span className="sit_icon">
                        {it[i].it_type1==1? <span className="shop_icon shop_icon_1">히트</span>:""}
                        {it[i].it_type2==1? <span className="shop_icon shop_icon_2">추천</span>:""}
                        {it[i].it_type3==1? <span className="shop_icon shop_icon_3">최신</span>:""}
                        {it[i].it_type4==1? <span className="shop_icon shop_icon_4">인기</span>:""}
                        {it[i].it_type5==1? <span className="shop_icon shop_icon_5">할인</span>:""}
                    </span>
                </div>
            </li>)
        }
        return items;
    }    
}


function AutoPlayMethods({iType, limit}) {

    const {data: it} = getMainItemlist(iType, limit);

    if (it && it.length === 0) {
        return <p className="sct_noitem">등록된 상품이 없습니다.</p>
    } else {

        let sliderRef = useRef(null);
        const play = () => {
            sliderRef.slickPlay();
        };
        const pause = () => {
            sliderRef.slickPause();
        };

        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000
        };

        const items = [];
        for (let i = 0; i < it?.length; i++) {          
            items.push(
                <div className="owl-item cloned">
                    <li className="sct_li sct_clear">
                        <div className="sct_img">
                            <Link to={`/itemview/${it[i].it_id}`}>
                            <img src={it[i].it_img1? `http://gnbiz8888.liodesign.kr/react/upload/${it[i].it_img1}`:noImage} width="160" height="160" alt={it[i].it_name} />
                            </Link>
                        </div>
                        <div className="sct_txt"><Link to={`/itemview/${it[i].it_id}`}>{it[i].it_name}</Link></div>
                        <div className="sct_cost">{it[i].it_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</div>
                    </li>                
                </div>
            )
        }
        return (
        <div className="slider-container">
            <div className='sct smt_40 owl-carousel owl-loaded owl-drag'>            
            <Slider ref={slider => (sliderRef = slider)} {...settings}>
                {items}
            </Slider>
            </div>
        </div>
    );
  }
}

function VerticalSwipeToSlide({iType, limit}) {

    

    const {data: it} = getMainItemlist(iType, limit);
    if (it && it.length === 0) {
        return <p className="sct_noitem">등록된 상품이 없습니다.</p>
    } else {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            vertical: true,
            verticalSwiping: true,
            swipeToSlide: true
        };

        const items = [];
        for (let i = 0; i < it?.length; i++) {          
            items.push(
                <li className="sct_li sct_li_1 bx-clone" >
                     <div className="sct_img"><Link to={`/itemview/${it[i].it_id}`}>
                    <img src={it[i].it_img1? `http://gnbiz8888.liodesign.kr/react/upload/${it[i].it_img1}`:noImage}  alt={it[i].it_name} />
                    </Link></div>
                    <div className="sct_cnt">
                        <div className="sct_txt"><Link to={`/itemview/${it[i].it_id}`}>{it[i].it_name}</Link></div>
                        <div className="sct_cost"> {it[i].it_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</div>
                    </div>
                </li>
            )
        }
        return (
                <div className="slider-container">
                    <div className="bx-viewport" >
                        <ul id="smt_4" className="smt_30" >
                        <Slider {...settings}>
                            {items}
                        </Slider>
                        </ul>
                    </div>
                </div>
        );
    }
}

export default function Main() {
    const {formVal, handleChange} = importForm({
        it_id: "",
        mb_id: ""

     });

     
   

    
  return (
    <div id="container">
		<div id="aside">  
            <section id="side_pd">
                <h2><Link to="itemlist/4">인기상품 </Link></h2>                
			    {/*<p className="sct_noitem">등록된 상품이 없습니다.</p>*/}
                <VerticalSwipeToSlide iType={4} limit={8} />
            </section>
        </div>      

                         
        {/* .shop-content 시작 */}
        <div className="shop-content is_index">
    
            {/* 히트상품 시작 */}
            <section id="idx_hit" className="sct_wrap">
                <header>
                    <h2><Link to="itemlist/1">히트상품</Link></h2>
                </header>            
                <AutoPlayMethods iType={1} limit={8} />
            </section>


            {/* 최신상품 시작 */}
            <section className="sct_wrap">
                <input type="hidden" name="itID" id="itID" />
                <input type="hidden" name="mID" id="mID" />
                <header>
                    <h2><Link to="itemlist/3">최신상품</Link></h2>
                </header>
                
                <ul className="smt smt_10">
                    <GetItem iType={3} limit={4} />                 
                </ul>
            </section>
             {/* } 최신상품 끝*/}


            {/* 추천상품 시작 */}
            <section className="sct_wrap">
                <header>
                    <h2><Link to="itemlist/2">추천상품</Link></h2>
                </header>                
                <ul className="smt smt_10">
                    <GetItem iType={2} limit={4} />                 
                </ul>
            </section>
             {/* } 추천상품 끝*/}

             {/* 할인상품 시작 */}
            <section className="sct_wrap">
                <header>
                    <h2><Link to="itemlist/5">할인상품</Link></h2>
                </header>                
                <ul className="smt smt_10">
                    <GetItem iType={5} limit={4} />                 
                </ul>
            </section>
             {/* } 할인상품 끝*/}
        </div>  
	</div> 
  )
}
