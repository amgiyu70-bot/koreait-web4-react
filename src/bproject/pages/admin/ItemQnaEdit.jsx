import { Link, useLocation, useParams } from "react-router-dom";
import { getItemQna, itemQnaUpdate } from "./js/adminMain";
import parse from 'html-react-parser';
import noImage from "../../img/no_image.gif";

export default function ItemQnaEdit({title}) {
   // console.log(useParams());
     // 경로
    const location = useLocation();
    const reData = location.state;
    const iq_id = reData?.iq_id;
    const sfl = reData?.sfl;
    const page = reData?.page;
    const stx = reData?.stx;
    
    const {data: qa} = getItemQna(iq_id);
   // console.log(qa); 

    const {isPending, mutate} = itemQnaUpdate();
    const handleSubmit = (e) => {
        e.preventDefault(); // 폼 제출 시 페이지 새로고침 방지       
        
        // 1. FormData 객체 생성
        const formData = new FormData(e.target);
        
        // 2. name 속성을 이용해 값 가져오기
        const arr = new Array(); 

        arr['mode']             = 'edt';
        arr['iq_id']            = formData.get('iq_id');
        arr['iq_subject']       = formData.get('iq_subject');
        arr['iq_question']      = formData.get('iq_question');
        arr['iq_answer']        = formData.get('iq_answer');
        arr['page']             = formData.get('page');
        arr['sfl']              = formData.get('sfl');
        arr['stx']              = formData.get('stx');
        const obj = { ...arr };

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
        <form name="fitemqaform" onSubmit={handleSubmit}>
            <input type="hidden" name="iq_id" value={iq_id} />
            <input type="hidden" name="page" value={page} />
            <input type="hidden" name="sfl" value={sfl} />
            <input type="hidden" name="stx" value={stx} />

            <div className="local_desc01 local_desc">
                <p>상품에 대한 문의에 답변하실 수 있습니다. 상품 문의 내용의 수정도 가능합니다.</p>
            </div>

            <div className="tbl_frm01 tbl_wrap">
                <table>
                    <caption>상품문의 수정</caption>
                    <colgroup>
                        <col className="grid_4" />
                        <col />
                    </colgroup>
                    <tbody>
                        <tr>
                            <th scope="row">상품</th>
                            <td>
                                <a href={`/itemview/${qa?.it_id}`} target="_blank"> <img src={qa?.it_img1? `http://gnbiz8888.liodesign.kr/react/upload/${qa?.it_img1}`:noImage} width="100" height="100" alt="" title="" /> {qa?.it_name}</a></td>
                        </tr>
                        <tr>
                            <th scope="row">이름</th>
                            <td>{qa?.iq_name}</td>
                        </tr>
                        <tr>
                            <th scope="row">이메일</th>
                            <td>{qa?.mb_email}</td>
                        </tr>
                        <tr>
                            <th scope="row">휴대폰</th>
                            <td>{qa?.mb_hp}</td>
                        </tr>
                        <tr>
                            <th scope="row"><label htmlFor="iq_subject">제목</label></th>
                            <td><input type="text" name="iq_subject"id="iq_subject"  className="frm_input required" size="95" defaultValue={qa?.iq_subject}  /></td>
                        </tr>
                        <tr>
                            <th scope="row"><label htmlFor="iq_question">질문</label></th>
                            <td><textarea name="iq_question" id="iq_question" defaultValue={qa?.iq_question} rows="7" />
                            </td>

                        </tr>
                        <tr>
                            <th scope="row"><label htmlFor="iq_answer">답변</label></th>

                            <td><textarea name="iq_answer" id="iq_answer" rows="7" defaultValue={qa?.iq_answer} /></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="btn_fixed_top">
                 <Link to="/admin/itemqna" className="btn btn_02" state={{ sfl: sfl, page: page, stx: stx }}>목록</Link> &nbsp;
                <input type="submit" accesskey="s" value="확인" className="btn_submit btn" />
            </div>
        </form>
    </div>
    </>
  )
}
