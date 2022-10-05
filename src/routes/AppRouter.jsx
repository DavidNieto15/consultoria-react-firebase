import React from 'react'
import { HashRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from '../pages/HomePage';
import DoubtsPage from '../pages/Doubtspage';

const AppRouter = () => {
  return (
    <Router>
        <Routes>
            <Route path="/Proyect4nuevo" element={<HomePage/>}/>
            <Route path="/clients" element={<DoubtsPage/>}/>
            <Route path="*" element={<h1>Error 404</h1>}/>
        </Routes>
    </Router>
  )
}

export default AppRouter