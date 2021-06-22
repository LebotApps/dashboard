import Widget from './Widget';

import Reviews from './Reviews';

import Customers from './Customers';

import OnlineAnalysis from './OnlineAnalysis';

import Settings from './Settings';

function Dashboard() {
  return (
    <div className="dashboard">
    <div className="side">
    <p>Dashboard</p>
    < Widget />
    < Reviews />
    < Customers />
    <OnlineAnalysis />
    <Settings />
    </div>
    </div>
  
  );
}

export default Dashboard;