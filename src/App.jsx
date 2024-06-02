import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

/* pages */
import Home from './pages/Home/Home'
import Admin from './pages/Admin/Admin'

const routes = (
    <Router>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/admin' element={<Admin />} />
        </Routes>
    </Router>
);

export default function App() {
    return (
        <>
        { routes }
        </>
    )
}