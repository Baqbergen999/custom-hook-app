import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ShopPage from './GYM_PROJECT/Shop/Shop'
import Home from './GYM_PROJECT/Home/Home'
import TrainerAI from './GYM_PROJECT/AI-Trainer/AI-Trainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/ai-trainer" element={<TrainerAI />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
