import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ShopPage from './GYM_PROJECT/Shop/Shop'
import Home from './GYM_PROJECT/Home/Home'
import TrainerAI from './GYM_PROJECT/AI-Trainer/AI-Trainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './GYM_PROJECT/Login-Page/Login'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/ai-trainer" element={<TrainerAI />} />
        <Route path='/home' element={<Home/>}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
