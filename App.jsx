import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Feedback from './pages/Feedback'
import BreakingNews from './pages/BreakingNews'
import './App.css'
import './styles/Home.css'
import './styles/BreakingNews.css'
import Technology from "./pages/Technology";
import Sports from "./pages/Sports"; 


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/breaking-news" element={<BreakingNews />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/sports" element={<Sports />} /> 
      </Routes>
    </Router>
  )
}

export default App
