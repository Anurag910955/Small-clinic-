import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Register from './pages/Register'
import PrivateRoute from './components/PrivateRoute'
import Patients from './pages/Patients'
import Doctors from './pages/Doctors'
import Appointments from './pages/Appointments'
import Prescriptions from './pages/Prescriptions'

function App() {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="p-4 w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            } />
            <Route path="/patients" element={<PrivateRoute><Patients /></PrivateRoute>} />
<Route path="/doctors" element={<PrivateRoute><Doctors /></PrivateRoute>} />
<Route path="/appointments" element={<PrivateRoute><Appointments /></PrivateRoute>} />
<Route path="/prescriptions" element={<PrivateRoute><Prescriptions /></PrivateRoute>} />
          </Routes>
        </main>
      </div>
    </>
  )
}

export default App
