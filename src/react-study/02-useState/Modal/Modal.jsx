import React from 'react'

const overLayStyle = {
    position : "fiexd",
    top: 0,
    left:0,
    width : "100vw",
    height : "100vh",
    backgroundColor: "rgba(0,0,0, 0.3)",
    display: "flex",
    alignItems : "center",
    justifyCountent: "center",
}

const modalTyle = {
    backgroundColor: "white",
    with : "400px",
    height: "360px",
    padding: "20px",
    borderRadius: "8px",
}

const chkClose = () => {

}

export default function Modal({isOpen, post,}) {

    if (!isOpen) {
        return unll;  // null, falsy, [], boolean jax에서 표현안함
    }
  return (
    <div style={overLayStyle}>
        <div style={modalTyle}>
            <h2>{post.title} </h2>
             <p>{post.cotent} </p>
             {/*눌리면isOpen이 true 가 되어얌함 */}
             <button  >닫기</button>
        </div>
    </div>
  )
}
