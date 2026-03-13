import { useEffect, useState } from "react";
import { cartUpdate, getItemList } from "./js/userQuery";
import { Link, useParams, useNavigate, useLocation } from "react-router-dom";
import noImage from "../../img/no_image.gif";
import { AiOutlineShoppingCart  } from "react-icons/ai";
import { useAuthStore } from "../../stores/authStore";
import { toast } from "react-toastify";


export default function Itemlist() {
	const location = useLocation();
    const reData = location.state;  
    const pageL = reData?.page ? reData?.page : 1;


	const {id} = useParams();
	let iType = id;
	const [page, setPage] = useState(pageL); 
	const [param, seParam] = useState(id); 

	
	//if (param!=id) {console.log("다름");}

	
	 useEffect(() => {
		pageList(pageL);

		
	 }, [location]);
	 

	 
	//console.log(`${page} - ${pageL}`);
	let title ="";
	if (id=='1') {
		title="히트상품";
	} else if (id=='2') {
		title="추천상품";
	} else if (id=='3') {
		title="최신상품";
	} else if (id=='4') {
		title="인기상품";
	} else if (id=='5') {
		title="할일상품";
	} else {
		title="전체상품";
	}
	
	const pageList = (v) => {
		setPage(v);

		console.log(v);
	}
	const {data: item, isLoing, isError, error} = getItemList(iType, page); 
	const total = (item && item?.mode[0]?.total> 0) ? item?.mode[0]?.total:0;
	const total_page = (item && item?.mode[0]?.total_page> 0)? item?.mode[0]?.total_page: 0;

	if (isLoing) {
		return <h1>로딩중</h1>
	}

	if (isError) {
		console.log(error.message);
		return <h1>에러발생</h1>
	}

	const results = [];
	for ( let i = 1; i <= total_page; i++)   {
		
		if (i===page) {
				results.push( 
			<strong class="pg_current">{i}</strong>                
			);
		} else {
			results.push( <span class="pg_page fcolor02 cusorP"  onClick={() => pageList(i)}>{i}</span>);
		}

	}

	const {mbID} = useAuthStore();
    const nav = useNavigate();  
    const {isPending, mutate} = cartUpdate();

	const CartClicks = (v) => {           
        if (!mbID) {
            toast.error("회원 로그인 후 이용해주세요!");
            setTimeout(() => {  
                     nav("/login");            
            }, 2500);
            return;
        } else {
          
            let it_id = v;
           	let mb_id = mbID;			
            let ct_qty = 1;
            let ct_direct = 0;
            mutate({it_id, mb_id, ct_qty, ct_direct}, {
            onSuccess: () => {
            },
            onError: () => {
             }
            });
            
           
        }        
    }     
	
	

	return (
    <div id="container">

	{/* .shop-content 시작 */}
	<div className="shop-content">
		<div id="wrapper_title">{title}</div>      
		<ul className="sct sct_10 lists-row">
		{/* 상품진열 10 시작 */}
		{
		item && item?.mode[0]?.total === 0
		? <p class="sct_noitem">등록된 상품이 없습니다.</p>
		:
		item?.data?.map((it, id) =>{
		const {it_id, it_name, it_price, it_img1, it_type1, it_type2, it_type3, it_type4, it_type5, it_short_memo} = it;
		return(		
			<li className="sct_li col-row-5" data-css="nocss" >
				<div className="sct_img item_img">
					<Link to={`/itemview/${it_id}`}>
					<img src={it_img1? `http://gnbiz8888.liodesign.kr/react/upload/${it_img1}`:noImage}  alt={it_name} />
					</Link>
					<div className="sct_btn list-10-btn">
						<button type="button" className="btn_cart sct_cart" data-it_id={it_id} onClick={() => CartClicks(it_id)}><AiOutlineShoppingCart color="white" size="1.5rem" /> 장바구니</button>
					</div>
					<div className="cart-layer"></div>
				</div>
				<div className="sct_ct_wrap">
					<div className="sct_txt"><Link to={`/itemview/${it_id}`}>{it_name}</Link></div>
						<div className="sct_basic">{it_short_memo}</div>
						<div className="sct_bottom">
							<div className="sct_cost">
							{it_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
							</div>							
						</div>
						<div className="sit_icon_li">
							<span className="sit_icon">
								<span className="sit_icon">
									{it_type1==1? <span className="shop_icon shop_icon_1">히트</span>:""}
									{it_type2==1? <span className="shop_icon shop_icon_2">추천</span>:""}
									{it_type3==1? <span className="shop_icon shop_icon_3">최신</span>:""}
									{it_type4==1? <span className="shop_icon shop_icon_4">인기</span>:""}
									{it_type5==1? <span className="shop_icon shop_icon_5">할인</span>:""}
								</span>
							</span>
						</div>
				</div>
			</li>

			
		)
		})}
		</ul>
		{/* 상품진열 10 끝 */}
        {
         total_page> 1     
        ?   <nav className="pg_wrap">
            <span className="pg">
                <span className="pg_page pg_start cusorP" onClick={() => pageList(1)}>처음</span>
                {results}
                 <span className="pg_page pg_end cusorP"  onClick={() => pageList(total_page)}>맨끝</span>
            </span>
        </nav>
       
        : ""
          }  
        <div id="sct_thtml"></div>
	</div>  
	{/* .shop-content 끝 */}
</div>
  )
}
