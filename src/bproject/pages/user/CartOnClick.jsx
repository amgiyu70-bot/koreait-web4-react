
export default function CartOnClick({it_id, chk})  {
      const CartClicks = (v) => {
        alert(v);
      }
      return(
        <button type="button" className="btn_cart sct_cart" data-id={it_id}  onClick={chk}>장바구니</button>
      )
}
