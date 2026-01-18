import "./App.css"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Services from "./pages/Services" 
import Contact from "./pages/Contact" 
import NotFound from "./pages/NotFound" 
import CursorFollower from "./components/animations/CursorFollower"
import ScrollToTop from "./components/common/ScrollToTop"

function App() {
  return (
    <div className="app-root">
      <CursorFollower />
      <ScrollToTop />
      <Routes>
        {/* Toutes les pages gèrent maintenant leur propre layout Teckflow */}
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
