import { Routes, Route } from 'react-router-dom'
import Layout from './Layout' 
import Home from './pages/Home'
import ForumPage from './pages/Forum'
import ComponentsDetail from './pages/ComponentsDetail'
import Ideias from './pages/Ideias'
import Timeline from './pages/Timeline'
import ScrollToTop from './utils/ScrollToTop'

function App() {
  return (
    <Layout>  
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/forum" element={<ForumPage />} />
        <Route path="/ideias" element={<Ideias />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/rocha/:slug" element={<ComponentsDetail />} />
      </Routes>
    </Layout>
  )
}

export default App