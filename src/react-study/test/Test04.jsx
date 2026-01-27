import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function Test04() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" />
            <Route />
        </Routes>
    </BrowserRouter>
  )
}
