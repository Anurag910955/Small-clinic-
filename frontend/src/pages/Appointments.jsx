import React, { useEffect, useState } from 'react'
import API from '../services/api'

export default function Appointments() {
  const [appointments, setAppointments] = useState([])

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const res = await API.get('/appointments')
        setAppointments(res.data)
      } catch (err) {
        console.error('Error fetching appointments:', err)
      }
    }

    fetchAppointments()
  }, [])

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Appointments</h2>
      <ul className="space-y-2">
        {appointments.map(appt => (
          <li key={appt._id} className="p-4 bg-white shadow rounded">
            <strong>{appt.patientName}</strong> with <em>{appt.doctorName}</em> on {appt.date}
          </li>
        ))}
      </ul>
    </div>
  )
}
