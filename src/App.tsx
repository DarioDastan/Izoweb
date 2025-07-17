import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Header from './components/Header'
import About from './pages/About'
import Applications from './pages/Applications'
import Contact from './pages/Contact'
import Functionality from './pages/Functionality'
import Home from './pages/Home'
import Implementation from './pages/Implementation'
import Products from './pages/Products'
import Technology from './pages/Technology'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/applications" element={<Applications />} />
            <Route path="/functionality" element={<Functionality />} />
            <Route path="/implementation" element={<Implementation />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App 