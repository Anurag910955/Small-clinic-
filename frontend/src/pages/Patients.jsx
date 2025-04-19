import React, { useEffect, useState } from 'react'
import API from '../services/api'

export default function Patients() {
  const [patients, setPatients] = useState([])

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const res = await API.get('/patients')
        setPatients(res.data)
      } catch (err) {
        console.error('Error fetching patients:', err)
      }
    }

    fetchPatients()
  }, [])

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Patients</h2>
      <ul className="space-y-2">
        {patients.map(patient => (
          <li key={patient._id} className="p-4 bg-white shadow rounded">
            <strong>{patient.name}</strong> — {patient.email}
          </li>
        ))}
      </ul>
    </div>
  )
}
