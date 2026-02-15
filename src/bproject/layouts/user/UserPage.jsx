import { Outlet } from 'react-router-dom';



import Header from './Header';
import Footer from './Footer';
import Side from './Side';

export default function UserPage() {
  return (
    <>
        <Header />
        <Side />
        <main id="wrapper">
            <Outlet />
        </main>
        <Footer />
    </>
  )
}
