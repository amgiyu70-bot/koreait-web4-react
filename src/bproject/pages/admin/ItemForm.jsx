import { Link } from "react-router-dom";
import { getCategorySel, itemUpdate } from "./js/adminMain";
import { useState } from "react";
import QuillEditor from '../../utils/quill/QuillEditor'
import { useQuillEditor } from "../../utils/quill/useQuillEditor";
import axios from "axios";
import { toast } from "react-toastify";


export default function ItemForm({title}) {

    // 파일    
    const [file, setFile] = useState(null);
    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };


    const [content, setContent] = useState("");
    const {quillRef, modules} = useQuillEditor();

    const {data: ca} = getCategorySel();

   // console.log(ca);

    const {isPending, mutate} = itemUpdate();
    const handleSubmit = (e) => {
        e.preventDefault(); // 폼 제출 시 페이지 새로고침 방지       
        
        // 1. FormData 객체 생성
        const formData = new FormData(e.target);
        //const formData = new FormData();

        if (!formData.get('ca_id')) {
            toast.error("상품 분류를 선택해주세요.");
            return false;
        }  
        
        if (!formData.get('it_name')) {
            toast.error("상품명을 입력해주세요.");
            return false;
        } 
        
        if (!formData.get('it_short_memo')) {
            toast.error("기본설명을 입력해주세요.");
            return false;
        }
        
        if (!formData.get('it_price')) {
            toast.error("판매가격을 입력해주세요.");
            return false;
        } 
        
        if (!formData.get('it_base_price')) {
            toast.error("시중가격을 입력해주세요.");
            return false;
        } 

        

       
        const jsonData = {
            mode: 'ins'
            ,it_id: Date.now()
            ,ca_id: formData.get('ca_id')
            ,it_name: formData.get('it_name')
            ,it_price: formData.get('it_price')
            ,it_base_price: formData.get('it_base_price')
            ,it_delivery_price: formData.get('it_delivery_price')
            ,it_qty: formData.get('it_qty')
            ,it_type1: formData.get('it_type1')
            ,it_type2: formData.get('it_type2')
            ,it_type3: formData.get('it_type3')
            ,it_type4: formData.get('it_type4')
            ,it_type5: formData.get('it_type5')
            ,it_point: formData.get('it_point')
            ,it_short_memo: formData.get('it_short_memo')
            ,it_shop_memo: content
            ,it_soldout: formData.get('it_soldout')
            ,it_order: formData.get('it_order')
            ,it_use: formData.get('it_use')
        };

         /*

        const jsonData = {
            mode: 'ins'
            ,it_id: 111111
            ,ca_id: formData.get('ca_id')
        };

        */

        console.log(jsonData);

    

  
        formData.append("image", file);
        formData.append("data", JSON.stringify(jsonData));

          /* 

        const response = axios.post("http://gnbiz8888.liodesign.kr/react/admin/itemUpdate", formData, {
               headers: {
                    "Content-Type": "multipart/form-data"
                }
            }); 


    console.log(response);
    */

        
        mutate(formData, {
        onSuccess: () => {
        },
        onError: () => {
            }
        });
        
    }

    return (
    <>
	<h1 id="container_title">{title}</h1>
    <div className="container_wr">
        <form name="fitemform"  onSubmit={handleSubmit}>

            <section id="anc_sitfrm_cate">
                <h2 className="h2_frm">상품분류</h2>
                <ul className="anchor">
                    <li><a href="#anc_sitfrm_cate">상품분류</a></li>                    
                    <li><a href="#anc_sitfrm_ini">기본정보</a></li>      
                    <li><a href="#anc_sitfrm_optional">상세설명설정</a></li>                
                    <li><a href="#anc_sitfrm_cost">가격, 배송, 재고, 상품이미지</a></li>
                    
                </ul>
                <div className="local_desc02 local_desc">
                    <p>기본분류는 반드시 선택하셔야 합니다. 하나의 상품에 최대 3개의 다른 분류를 지정할 수 있습니다.</p>
                </div>

                <div className="tbl_frm01 tbl_wrap">
                    <table>
                        <caption>상품분류 입력</caption>
                        <colgroup>
                            <col className="grid_4" />
                            <col />
                        </colgroup>
                        <tbody>
                            <tr>
                                <th scope="row"><label htmlFor="ca_id">기본분류</label></th>
                                <td>
                                    <select name="ca_id" id="ca_id">
                                        <option value="">선택하세요</option>
                                        {
                                        ca?.map((c) =>{
                                            return (
                                            <option value={c?.ca_id} selected="">{c?.ca_name}</option>
                                            )
                                        })
                                        }
                                    </select>
                                
                                </td>
                            </tr>


                        </tbody>
                    </table>
                </div>
            </section>





            <section id="anc_sitfrm_ini">
                <h2 className="h2_frm">기본정보</h2>
                <ul className="anchor">
                    <li><a href="#anc_sitfrm_cate">상품분류</a></li>                    
                    <li><a href="#anc_sitfrm_ini">기본정보</a></li>      
                    <li><a href="#anc_sitfrm_optional">상세설명설정</a></li>                
                    <li><a href="#anc_sitfrm_cost">가격, 배송, 재고, 상품이미지</a></li>
                    
                </ul>
                <div className="tbl_frm01 tbl_wrap">
                    <table>
                        <caption>기본정보 입력</caption>
                        <colgroup>
                            <col className="grid_4" />
                            <col />
                            
                        </colgroup>
                        <tbody>                            
                            <tr>
                                <th scope="row"><label htmlFor="it_name">상품명</label></th>
                                <td >
                                    <span className="frm_info">HTML 입력이 불가합니다.</span> <input type="text" name="it_name" id="it_name"  className="frm_input required" size="95"  />
                                </td>
                            </tr>
                            <tr>
                                <th scope="row"><label htmlFor="it_short_memo">기본설명</label></th>
                                <td>
                                    <span className="frm_info">상품명 하단에 상품에 대한 추가적인 설명이 필요한 경우에 입력합니다. HTML 입력도 가능합니다.</span> <input type="text" name="it_short_memo"  id="it_short_memo" className="frm_input required" size="95"  />
                                </td>
                            
                            </tr>
                            <tr>
                                <th scope="row"><label htmlFor="it_order">출력순서</label></th>
                                <td>
                                    <span className="frm_info">숫자가 작을 수록 상위에 출력됩니다. 음수 입력도 가능하며 입력 가능 범위는 -2147483648 부터 2147483647 까지입니다.<br /><b>입력하지 않으면 자동으로 출력됩니다.</b></span> <input type="number" name="it_order"  id="it_order" className="frm_input" size="12" defaultValue={0} />
                                </td>
                                
                            </tr>
                            <tr>
                                <th scope="row">상품유형</th>
                                <td>
                                    <span className="frm_info">메인화면에 유형별로 출력할때 사용합니다.<br />이곳에 체크하게되면 상품리스트에서 유형별로 정렬할때 체크된 상품이 가장 먼저 출력됩니다.</span> 
                                    <span class="sit_icon">
                                        <input type="checkbox" name="it_type1" value="1"  id="it_type1" /> <label htmlFor="it_type1"><span class="shop_icon shop_icon_1">히트</span></label>&nbsp;&nbsp;

                                        <input type="checkbox" name="it_type2" value="1"  id="it_type2" /> <label htmlFor="it_type2"><span class="shop_icon shop_icon_2">추천</span></label>&nbsp;&nbsp;

                                        <input type="checkbox" name="it_type3" value="1"  id="it_type3" /> <label htmlFor="it_type3"><span class="shop_icon shop_icon_3">최신</span></label>&nbsp;&nbsp;

                                        <input type="checkbox" name="it_type4" value="1"  id="it_type4" /> <label htmlFor="it_type4"><span class="shop_icon shop_icon_4">인기</span></label>&nbsp;&nbsp;

                                        <input type="checkbox" name="it_type5" value="1"  id="it_type5" /> <label htmlFor="it_type5"><span class="shop_icon shop_icon_5">할인</span></label>
                                    </span>
                                </td>
                            
                            </tr>





                            <tr>
                                <th scope="row"><label htmlFor="it_use">판매가능</label></th>
                                <td>
                                    <span className="frm_info">잠시 판매를 중단하거나 재고가 없을 경우에 체크를 해제해 놓으면 출력되지 않으며, 주문도 받지 않습니다.</span> <input type="checkbox" name="it_use" value="1" id="it_use" /> 예
                                </td>
                                
                            </tr>


                            <tr>
                                <th scope="row">상품설명</th>
                                <td > 

                                   <QuillEditor
                                        quillRef={quillRef}
                                        value={content}
                                        onChange={setContent}
                                        modules={modules}
                                    />       

                                </td>
                            </tr>



                        </tbody>
                    </table>
                </div>
            </section>            

            <section id="anc_sitfrm_cost">
                <h2 className="h2_frm">가격 및 재고</h2>
                <ul className="anchor">
                    <li><a href="#anc_sitfrm_cate">상품분류</a></li>                    
                    <li><a href="#anc_sitfrm_ini">기본정보</a></li>      
                    <li><a href="#anc_sitfrm_optional">상세설명설정</a></li>                
                    <li><a href="#anc_sitfrm_cost">가격, 배송, 재고, 상품이미지</a></li>                    
                </ul>

                <div className="tbl_frm01 tbl_wrap">
                    <table>
                        <caption>가격 및 재고 입력</caption>
                        <colgroup>
                            <col className="grid_4" />
                            <col />
                        </colgroup>
                        <tbody>
                            <tr>
                                <th scope="row"><label htmlFor="it_price">판매가격</label></th>
                                <td>
                                    <input type="number" name="it_price"  id="it_price" className="frm_input" size="8" /> 원
                                </td>

                            </tr>
                            <tr>
                                <th scope="row"><label htmlFor="it_base_price">시중가격</label></th>
                                <td>
                                    <span className="frm_info">입력하지 않으면 상품상세페이지에 출력하지 않습니다.</span> <input type="number" name="it_base_price"  id="it_base_price" className="frm_input" size="8" /> 원
                                </td>

                            </tr>

                            
                            <tr>
                                <th scope="row"><label htmlFor="it_delivery_price">배송비</label></th>
                                <td>
                                     <input type="number" name="it_delivery_price"  id="it_delivery_price" className="frm_input" size="8" defaultValue={0}/> 원
                                </td>

                            </tr>

                            <tr>
                                <th scope="row"><label htmlFor="it_point">포인트</label></th>
                                <td>
                                    <span className="frm_info">주문완료후 환경설정에서 설정한 주문완료 설정일 후 회원에게 부여하는 포인트입니다.<br />또, 포인트부여를 '아니오'로 설정한 경우 신용카드, 계좌이체로 주문하는 회원께는 부여하지 않습니다.</span> <input type="number" name="it_point"  id="it_point" className="frm_input" size="8" /> <span id="it_point_unit" defaultValue={0}>점</span>
                                </td>
                            
                            </tr>

                            <tr>
                                <th scope="row"><label htmlFor="it_soldout">상품품절</label></th>
                                <td>
                                    <span className="frm_info">잠시 판매를 중단하거나 재고가 없을 경우에 체크해 놓으면 품절상품으로 표시됩니다.</span> <input type="checkbox" name="it_soldout" value="1" id="it_soldout" /> 예
                                </td>
                            
                            </tr>

                            <tr>
                                <th scope="row"><label htmlFor="it_stock_qty">재고수량</label></th>
                                <td>
                                    <span className="frm_info"><b>주문관리에서 상품별 상태 변경에 따라 자동으로 재고를 가감합니다.</b> 재고는 규격/색상별이 아닌, 상품별로만 관리됩니다.<br />재고수량을 0으로 설정하시면 품절상품으로 표시됩니다.</span> <input type="number" name="it_qty"  id="it_qty" className="frm_input" size="8" defaultValue={99999}  /> 개
                                </td>
                                
                            </tr>

                            <tr>
                                <th scope="row"><label htmlFor="it_img1">이미지 1</label></th>
                                <td>
                                    <input type="file" name="it_img1" id="it_img1" onChange={handleFileChange} />

                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>


            

            

            <div className="btn_fixed_top">
                <Link to="/admin/itemlist" className="btn btn_02">목록</Link>&nbsp;
                <input type="submit" value="확인" className="btn_submit btn" accesskey="s" />
            </div>
        </form>


    </div>
    </>
  )
}
