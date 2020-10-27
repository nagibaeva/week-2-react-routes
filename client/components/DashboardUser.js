import React from 'react'
import { Link, useParams } from 'react-router-dom'

const DashboardUser = () => {
  const { user } = useParams()
  return (
    <div>
      <div>
        <div
          id="title"
          className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10"
        >
          Profile
        </div>
        <Link to="/dashboard/main">Go To Main</Link>
        <Link to="/dashboard">Go to Root</Link>
        <div id="username">{user}</div>
      </div>
    </div>
  )
}

export default DashboardUser
