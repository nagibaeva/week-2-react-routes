import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './header'
import Dashboard from './Dashboard'
import DashboardMain from './DashboardMain'
import DashboardUser from './DashboardUser'

const Home = () => {
  return (
    <div>
      <Header />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <Switch>
            <Route path="/dashboard" exact component={() => <Dashboard />} />
            <Route path="/dashboard/main" exact component={() => <DashboardMain />} />
            <Route path="/dashboard/profile/:user" component={() => <DashboardUser />} />
          </Switch>
        </div>
      </div>
    </div>
  )
}

Home.propTypes = {}

export default React.memo(Home)
