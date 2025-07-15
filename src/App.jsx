import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react'
import { Toaster } from 'sonner';

import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage';
import './App.css'
import PaginationExample from './components/UserListPagination';

// import ProtectedRoute from './components/ProtectedRoute';

function App() {  
  return (
    <>
      <Toaster />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        {/* <Route path='/pagination' element={<PaginationExample />} /> */}
      </Routes>
    </>
  )
}

export default App
