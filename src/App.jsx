import { Route, Routes } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import Home from './pages/Home'
import Booking from './pages/Booking'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <RootLayout>
            <Home />
          </RootLayout>
        }
      />
      <Route
        path="/booking"
        element={
          <RootLayout>
            <Booking />
          </RootLayout>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  )
}

export default App
