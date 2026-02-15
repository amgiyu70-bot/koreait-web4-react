import React from 'react'

export default function Cart() {
  return (
    <div id="container">      
        {/* 장바구니 시작 { */}

        <div id="sod_bsk" className="od_prd_list">
            <form name="frmcartlist" id="sod_bsk_list" className="2017_renewal_itemform" method="post" action="http://127.0.0.1/shop/shop/cartupdate.php">
            <div className="tbl_head03 tbl_wrap">
                <table>
                    <thead>
                        <tr>
                            <th scope="col" className="chk_box">
                                <input type="checkbox" name="ct_all" value="1" id="ct_all" checked="checked" className="selec_chk" />
                                <label for="ct_all"><span></span><b className="sound_only">상품 전체</b></label>
                            </th>
                            <th scope="col">상품명</th>
                            <th scope="col">총수량</th>
                            <th scope="col">판매가</th>
                            <th scope="col">포인트</th>
                            <th scope="col">배송비</th>
                            <th scope="col">소계</th>
                        </tr>
                    </thead>
                    <tbody>
                    
                        <tr>
                            <td className="td_chk chk_box">
                                <input type="checkbox" name="ct_chk[0]" value="1" id="ct_chk_0" checked="checked" className="selec_chk" />
                                <label for="ct_chk_0"><span></span><b className="sound_only">상품</b></label>
                            </td> 
                            
                            <td className="td_prd">
                                <div className="sod_img"><a href="http://127.0.0.1/shop/shop/item.php?it_id=1770986271"><img src="http://127.0.0.1/shop/data/item/1770986271/thumb-01jpg_80x80.jpg" width="80" height="80" alt="" /></a></div>
                                    <div className="sod_name">
                                        <input type="hidden" name="it_id[0]" value="1770986271" />
                                        <input type="hidden" name="it_name[0]" value="상품01" />
                                        <a href="http://127.0.0.1/shop/shop/item.php?it_id=1770986271" className="prd_name"><b>상품01</b></a><div className="sod_opt">
                                        <ul>
                                        <li>상품01 1개 (+0원)</li>
                                        </ul>
                                    </div>
                                    <div className="sod_option_btn"><button type="button" className="mod_options">선택사항수정</button></div>
                                </div>
                            </td>
                            <td className="td_num">1</td>
                            <td className="td_numbig">10,000</td>
                            <td className="td_numbig">0</td>
                            <td className="td_dvr">선불</td>
                            <td className="td_numbig text_right"><span id="sell_price_0" className="total_prc">10,000</span></td>
                        </tr>	

                    </tbody>
                </table>
                <div className="btn_cart_del">
                    <button type="button" >선택삭제</button>
                    <button type="button" >비우기</button>
                </div>
            </div>

            <div id="sod_bsk_tot">
                <ul>
                    <li className="sod_bsk_dvr">
                        <span>배송비</span>
                        <strong>4,000</strong> 원
                    </li>

                    <li className="sod_bsk_pt">
                        <span>포인트</span>
                        <strong>0</strong> 점
                    </li>

                    <li className="sod_bsk_cnt">
                        <span>총계 가격</span>
                        <strong>14,000</strong> 원 
                    </li>
                </ul>
            </div>
            
            <div id="sod_bsk_act">
                <input type="hidden" name="url" value="./orderform.php" />
                <input type="hidden" name="records" value="1" />
                <input type="hidden" name="act" value="" />
                <a href="http://127.0.0.1/shop/shop/list.php?ca_id=10" className="btn01">쇼핑 계속하기</a>
                <button type="button" className="btn_submit">주문하기</button>
            </div>
            </form>
        </div>

    {/* } 장바구니 끝 */}
    </div>  
  )
}
