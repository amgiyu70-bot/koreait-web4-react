
import { Outlet } from 'react-router-dom'
import AdminHeader from './AdminHeader'
import { useState } from 'react';


export default function AdminPage() {
   const mcode= '100100';
  return (
    <>
        <AdminHeader mcd={mcode}  />
        <main id="wrapper">   
            <div id="container">  
                 <Outlet />            
                <footer id="ft">
                    <p>
                        Copyright © All rights reserved. Version 5.6.22 <br />
                       <a href="#"> <button type="button" className="scroll_top"><span className="top_img"></span><span className="top_txt">TOP</span></button></a>
                    </p>
                </footer>
            </div>
        </main>
    </>
  )
}
