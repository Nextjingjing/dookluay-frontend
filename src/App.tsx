import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Articles from "./pages/Articles"
import TreatmentsList from "./pages/TreatmentsList"
import Models from "./pages/Models"
import NotFound from "./pages/Notfound"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/articles" element={<Articles />} />
      <Route path="/treatments/list/:diseaseId" element={<TreatmentsList />} />
      <Route path="/models" element={<Models />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
