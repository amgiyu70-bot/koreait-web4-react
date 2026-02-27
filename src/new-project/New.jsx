import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PostCreateRage from './pages/PostCreateRage'

export default function New() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<>메인</>} />
            <Route path='/write' element={<PostCreateRage />} />
            <Route path='/posts/:id' element={<>post id</>} />
        </Routes>
    </BrowserRouter>
  )
}
