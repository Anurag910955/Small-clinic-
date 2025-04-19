import React, { useEffect, useState } from 'react'
import API from '../services/api'

export default function Doctors() {
  const [doctors, setDoctors] = useState([])

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const res = await API.get('/doctors')
        setDoctors(res.data)
      } catch (err) {
        console.error('Error fetching doctors:', err)
      }
    }

    fetchDoctors()
  }, [])

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Doctors</h2>
      <ul className="space-y-2">
        {doctors.map(doc => (
          <li key={doc._id} className="p-4 bg-white shadow rounded">
            <strong>{doc.name}</strong> — {doc.specialization}
          </li>
        ))}
      </ul>
    </div>
  )
}
