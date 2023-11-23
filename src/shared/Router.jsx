// import React, { useEffect, useState } from 'react'
import React  from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from '../pages/Home';
import Detail from '../pages/Detail';

function Router() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/:id" element={<Detail />}/>
      </Routes>
    </BrowserRouter>

  )
}

export default Router