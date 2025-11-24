import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './routes/App'
import './app.css'
import About from './routes/About'

import Privacy from './routes/Privacy'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
      {/* Footer */}
      <footer className="border-t border-white/10 py-12 bg-[#0a0c10]">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
              <span className="text-white font-bold text-lg"><a href="/">Market Insight Lab</a></span>
            </div>
            <p className=" text-white text-sm">© 2025 Market Insight Lab. All rights reserved.</p>
          </div>
          <div className="flex gap-6 text-gray-400">
            <a href="/privacy" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </BrowserRouter>
  </StrictMode>,
)
