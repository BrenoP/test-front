import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import Cart from './Cart'
import Payment from './Payment'
import Confirmation from './Confirmation'

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/sacola" />} />
        <Route path="/sacola" element={<Cart />} />
        <Route path="/pagamento" element={<Payment />} />
        <Route path="/confirmacao" element={<Confirmation />} />
      </Routes>
    </Router>
  )
}

export default AppRoutes
