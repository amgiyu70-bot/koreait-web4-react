
import { Outlet } from 'react-router-dom'
import AdminHeader from './AdminHeader'

export default function AdminPage({title}) {
  return (
    <>
        <AdminHeader />
        <main id="wrapper">   
            <div id="container">       
                 <Outlet />            
                <footer id="ft">
                    <p>
                        Copyright © All rights reserved. Version 5.6.22<br />
                        <button type="button" className="scroll_top"><span className="top_img"></span><span className="top_txt">TOP</span></button>
                    </p>
                </footer>
            </div>
        </main>
    </>
  )
}
