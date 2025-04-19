import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-3 shadow-md">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Small Clinic</h1>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/login" className="hover:underline">Login</Link>
        </div>
      </div>
    </nav>
  )
}
