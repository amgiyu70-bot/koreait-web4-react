
import { AiFillStar } from "react-icons/ai";
import noImage from "../../img/no_image.gif";
import { Link, useLocation } from "react-router-dom";
import { getItemUse, itemUseUpdate } from "./js/adminMain";

export default function ItemUseEdit({title}) {

    // 경로
    const location = useLocation();
    const reData = location.state;
    const is_id = reData?.is_id;
    const sfl = reData?.sfl;
    const page = reData?.page;
    const stx = reData?.stx;
    
    const {data: iu} = getItemUse(is_id);
    console.log(iu);
    
    const {isPending, mutate} = itemUseUpdate();
    const handleSubmit = (e) => {
        e.preventDefault(); // 폼 제출 시 페이지 새로고침 방지       
        
        // 1. FormData 객체 생성
        const formData = new FormData(e.target);
        
        // 2. name 속성을 이용해 값 가져오기
        const arr = new Array(); 

        arr['mode']             = 'edt';
        arr['is_id']            = formData.get('is_id');
        arr['is_score']         = formData.get('is_score');
        arr['is_subject']       = formData.get('is_subject');
        arr['is_content']       = formData.get('is_content');
        arr['is_confirm']       = formData.get('is_confirm');
        arr['page']             = formData.get('page');
        arr['sfl']              = formData.get('sfl');
        arr['stx']              = formData.get('stx');
        const obj = { ...arr };

        //console.log(arr['is_confirm']);
       // return"";
        mutate(obj, {
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
        <form name="fitemuseform" onSubmit={handleSubmit}>
            <input type="hidden" name="is_id" value={is_id} />
            <input type="hidden" name="page" value={page} />
            <input type="hidden" name="sfl" value={sfl} />
            <input type="hidden" name="stx" value={stx} />

            <div className="tbl_frm01 tbl_wrap">
                <table>
                    <caption>사용후기 수정</caption>
                    <colgroup>
                        <col className="grid_4" />
                        <col />
                    </colgroup>
                    <tbody>
                        <tr>
                            <th scope="row">상품</th>
                            <td>
                                <a href={`/itemview/${iu?.it_id}`} target="_blank"> <img src={iu?.it_img1? `http://gnbiz8888.liodesign.kr/react/upload/${iu?.it_img1}`:noImage} width="100" height="100" alt="" title="" /> {iu?.it_name}</a></td>
                        </tr>
                        <tr>
                            <th scope="row">이름</th>
                            <td>{iu?.is_name}</td>
                        </tr>
                        <tr>
                            <th scope="row">평점</th>
                            <td>
                                <select name="is_score" className="frm_input">
                                    {iu?.is_score=="2" ? <option value="2" selected>불만</option> : <option value="2">불만</option>}
                                    {iu?.is_score=="3" ? <option value="3" selected>보통</option> : <option value="3">보통</option>}
                                    {iu?.is_score=="4" ? <option value="4" selected>만족</option> : <option value="4">만족</option>}
                                    {iu?.is_score=="5" ? <option value="5" selected>매우만족</option> : <option value="5">매우만족</option>}
                                </select>

                            </td>
                        </tr>
                        <tr>
                            <th scope="row"><label htmlFor="is_subject">제목</label></th>
                            <td><input type="text" name="is_subject" className="required frm_input" id="is_subject" size="100" defaultValue={iu?.is_subject} /></td>
                        </tr>
                        <tr>
                            <th scope="row">내용</th>
                            <td>
                                <textarea name="is_content" id="is_content" defaultValue={iu?.is_content} rows="7" />
                            </td>

                        </tr>


                        <tr>
                            <th scope="row">확인</th>
                            <td>
                                
                                {
                                parseInt(iu?.is_confirm)===1
                                ? 
                                <>
                                <input type="radio" name="is_confirm" value="1" id="is_confirm_yes" defaultChecked />
                                <label htmlFor="is_confirm_yes">예   </label>
                                &nbsp;

                                <input type="radio" name="is_confirm" value="0" id="is_confirm_no" />
                                <label htmlFor="is_confirm_no">아니오</label>
                                </>
                                : <>
                                <input type="radio" name="is_confirm" value="1" id="is_confirm_yes"  />
                                <label htmlFor="is_confirm_yes">예   </label>
                                &nbsp;

                                <input type="radio" name="is_confirm" value="0" id="is_confirm_no" defaultChecked />
                                <label htmlFor="is_confirm_no">아니오</label>
                                </>
                                
                                }
                                
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="btn_fixed_top">
               <Link to="/admin/itemuse" className="btn btn_02" state={{ sfl: sfl, page: page, stx: stx }}>목록</Link> &nbsp;
                <input type="submit" value="확인" className="btn_submit btn" accesskey="s" />
            </div>
        </form>
    </div>
    </>
  )
}
