

export default function CategoryForm({title}) {
  return (
    <>
	<h1 id="container_title">{title}</h1>
    <div className="container_wr">
        <form name="fcategoryform" action="./categoryformupdate.php" onsubmit="return fcategoryformcheck(this);" method="post" enctype="multipart/form-data">

            <input type="hidden" name="w" value="" />
            <input type="hidden" name="sst" value="" />
            <input type="hidden" name="sod" value="" />
            <input type="hidden" name="sfl" value="" />
            <input type="hidden" name="stx" value="" />
            <input type="hidden" name="page" value="" />
            <input type="hidden" name="ca_explan_html" value="1" />

            <section id="anc_scatefrm_basic">


                <div className="tbl_frm01 tbl_wrap">
                    <table>
                        <caption>분류 추가 필수입력</caption>
                        <colgroup>
                            <col className="grid_4" />
                            <col />
                        </colgroup>
                        <tbody>
                            <tr>
                                <th scope="row"><label htmlFor="a_id">분류코드</label></th>
                                <td>
                                    <span className="frm_info">자동으로 보여지는 분류코드를 사용하시길 권해드리지만 직접 입력한 값으로도 사용할 수 있습니다.<br />분류코드는 나중에 수정이 되지 않으므로 신중하게 결정하여 사용하십시오.<br /><br />분류코드는 2자리씩 10자리를 사용하여 5단계를 표현할 수 있습니다.<br />0~z까지 입력이 가능하며 한 분류당 최대 1296가지를 표현할 수 있습니다.<br />그러므로 총 3656158440062976가지의 분류를 사용할 수 있습니다.</span> <input type="text" name="ca_id" value="20" id="ca_id"  className="required frm_input" size="2" maxLength={2} />
                                </td>
                            </tr>
                            <tr>
                                <th scope="row"><label htmlFor="a_name">분류명</label></th>
                                <td><input type="text" name="ca_name" value="" id="ca_name" size="38"  className="required frm_input" /></td>
                            </tr>
                            <tr>
                                <th scope="row"><label htmlFor="a_order">출력순서</label></th>
                                <td>
                                    <span className="frm_info">숫자가 작을 수록 상위에 출력됩니다. 음수 입력도 가능하며 입력 가능 범위는 -2147483648 부터 2147483647 까지입니다.<br /><b>입력하지 않으면 자동으로 출력됩니다.</b></span> <input type="text" name="ca_order" value="" id="ca_order" className="frm_input" size="12" />
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>

            </section>

            <div className="btn_fixed_top">
                <input type="submit" value="확인" className="btn_submit btn" accesskey="s" />
                <a href="./categorylist.php?sst=&amp;sod=&amp;sfl=&amp;stx=&amp;page=" className="btn_02 btn">목록</a>
            </div>
        </form>
    </div>
    </>
  )
}
