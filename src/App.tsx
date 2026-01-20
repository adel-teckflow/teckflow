import "./App.css"
import { Routes, Route } from "react-router-dom"
import { lazy, Suspense } from "react"
import CursorFollower from "./components/animations/CursorFollower"
import ScrollToTop from "./components/common/ScrollToTop"
import Loading from "./components/common/Loading"

const Home = lazy(() => import("./pages/Home"))
const Services = lazy(() => import("./pages/Services"))
const Contact = lazy(() => import("./pages/Contact"))
const NotFound = lazy(() => import("./pages/NotFound"))

function App() {
  return (
    <div className="app-root">
      <CursorFollower />
      <ScrollToTop />
      <Suspense fallback={<Loading />}>
        <Routes>
          {/* Toutes les pages gèrent maintenant leur propre layout Teckflow */}
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
