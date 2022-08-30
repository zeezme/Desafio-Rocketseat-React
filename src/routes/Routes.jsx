import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from '../pages/landingPage/LandingPage';

export function Router() {
  return (
    <Routes>
        <Route path='/' element={<LandingPage/>}/>
    </Routes>
  )
}
