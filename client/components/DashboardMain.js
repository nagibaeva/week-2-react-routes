import React from 'react'
import { Link } from 'react-router-dom'

const DashboardMain = () => {
  return (
    <div>
      <div>
        <div
          id="title"
          className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10"
        >
          Main
        </div>
        <Link to="/dashboard/profile/704f0f02-7aa0-4314-8b60-52099d050c4a">Go To Profile</Link>
        <Link to="/dashboard">Go to Root</Link>
      </div>
    </div>
  )
}

export default DashboardMain
