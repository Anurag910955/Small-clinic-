import React, { useEffect, useState } from 'react'
import API from '../services/api'

export default function Prescriptions() {
  const [prescriptions, setPrescriptions] = useState([])

  useEffect(() => {
    const fetchPrescriptions = async () => {
      try {
        const res = await API.get('/prescriptions')
        setPrescriptions(res.data)
      } catch (err) {
        console.error('Error fetching prescriptions:', err)
      }
    }

    fetchPrescriptions()
  }, [])

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Prescriptions</h2>
      <ul className="space-y-2">
        {prescriptions.map(pres => (
          <li key={pres._id} className="p-4 bg-white shadow rounded">
            <strong>{pres.patientName}</strong> — {pres.medication} ({pres.dosage})
          </li>
        ))}
      </ul>
    </div>
  )
}
