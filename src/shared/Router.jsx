import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Detail from '../pages/Detail';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>Home</Route>
        <Route path="/:id" element={<Detail />}>Detail</Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router