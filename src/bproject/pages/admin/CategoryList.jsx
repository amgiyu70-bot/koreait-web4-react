import React from 'react'

export default function CategoryList({title}) {
  return (
    <>
	<h1 id="container_title">{title}</h1>
    <div className="container_wr">
        <div className="local_ov01 local_ov">
            <a href="/shop/adm/shop_admin/itemuselist.php" className="ov_listall">전체목록</a> <span className="btn_ov01"><span className="ov_txt"> 전체 후기내역</span><span className="ov_num"> 1건</span></span>
        </div>

        <form name="flist" className="local_sch01 local_sch">
            <input type="hidden" name="page" value="1" />
            <input type="hidden" name="save_stx" value="" />

            <label htmlFor="sca" className="sound_only">분류선택</label>
            <select name="sca" id="sca">
                <option value="">전체분류</option>
                <option value="10">남성복</option>
            </select>

            <label htmlFor="sfl" className="sound_only">검색대상</label>
            <select name="sfl" id="sfl">
                <option value="it_name">분류명</option>
            </select>

            <label htmlFor="stx" className="sound_only">검색어<strong className="sound_only"> 필수</strong></label>
            <input type="text" name="stx" id="stx" value=""  className="frm_input required" />
            <input type="submit" value="검색" className="btn_submit" />

        </form>

        <form name="fitemuselist" method="post" action="./itemuselistupdate.php" onsubmit="return fitemuselist_submit(this);" autocomplete="off">
            <input type="hidden" name="sca" value="" />
            <input type="hidden" name="sst" value="is_id" />
            <input type="hidden" name="sod" value="desc" />
            <input type="hidden" name="sfl" value="a.it_name" />
            <input type="hidden" name="stx" value="" />
            <input type="hidden" name="page" value="1" />

            <div className="tbl_head01 tbl_wrap" id="itemuselist">
                <table>
                    <caption>분류 목록</caption>
                    <thead>
                        <tr>
                            <th scope="col"><a href="http://127.0.0.1/shop/adm/shop_admin/itemuselist.php?sca=&amp;sst=it_name&amp;sod=asc&amp;sfl=a.it_name&amp;stx=&amp;page=1">분류코드</a></th>
                            <th scope="col"><a href="http://127.0.0.1/shop/adm/shop_admin/itemuselist.php?sca=&amp;sst=mb_name&amp;sod=asc&amp;sfl=a.it_name&amp;stx=&amp;page=1">분류명</a></th>
                            <th scope="col"><a href="http://127.0.0.1/shop/adm/shop_admin/itemuselist.php?sca=&amp;sst=is_subject&amp;sod=asc&amp;sfl=a.it_name&amp;stx=&amp;page=1">상품갯수</a></th>
                            <th scope="col"><a href="http://127.0.0.1/shop/adm/shop_admin/itemuselist.php?sca=&amp;sst=is_confirm&amp;sod=asc&amp;sfl=a.it_name&amp;stx=&amp;page=1">관리</a></th>
                            <th scope="col">관리</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg0">
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                                <a href="./categoryform.php?w=u&amp;ca_id=10&amp;sst=&amp;sod=&amp;sfl=&amp;stx=&amp;page=" class="btn btn_02">수정</a>             
				                <a href="./categoryformupdate.php?w=d&amp;ca_id=10&amp;sst=&amp;sod=&amp;sfl=&amp;stx=&amp;page=" onclick="return delete_confirm(this);" class="btn btn_02">삭제</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="btn_fixed_top">
                    <a href="./categoryform.php" id="cate_add" class="btn btn_01">분류 추가</a>
                </div>
            </div>
        </form>
    </div>
    </>
  )
}
