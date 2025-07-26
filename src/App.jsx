import { Routes, Route } from 'react-router-dom';
import { useEffect } from "react";
import { Toaster } from 'sonner';

import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage';
import UserDetailPage from './pages/UserDetailPage';

import GuestRoute from './components/GuestRoute';
import ProtectedRoute from './components/ProtectedRoute';

import './App.css'
import LandingPage from './pages/LandingPage';

function App() {

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'light');
  }, [])

  return (
    <>
      <Toaster />
      <Routes>
        <Route path='/landing' element={
          <GuestRoute>
            <LandingPage />
          </GuestRoute>
        } />
        <Route path='/login' element={
          <GuestRoute>
            <LoginPage />
          </GuestRoute>
        } />
        <Route path='/register' element={
          <GuestRoute>
            <RegisterPage />
          </GuestRoute>
        } />
        <Route path='/' element={
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        } />
        <Route path='/user-detail/:id' element={
          <ProtectedRoute>
            <UserDetailPage />
          </ProtectedRoute>
        } />
      </Routes>
    </>
  )
}

export default App
