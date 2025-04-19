import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-gray-100 p-4 shadow-lg hidden md:block">
      <nav className="space-y-4">
        <h2 className="text-lg font-semibold mb-4">Admin Panel</h2>
        <Link to="/dashboard" className="block text-gray-700 hover:text-blue-600">Dashboard</Link>
        <Link to="/patients" className="block text-gray-700 hover:text-blue-600">Patients</Link>
        <Link to="/doctors" className="block text-gray-700 hover:text-blue-600">Doctors</Link>
        <Link to="/appointments" className="block text-gray-700 hover:text-blue-600">Appointments</Link>
        <Link to="/prescriptions" className="block text-gray-700 hover:text-blue-600">Prescriptions</Link>
      </nav>
    </aside>
  )
}
