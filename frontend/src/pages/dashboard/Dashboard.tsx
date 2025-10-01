import React from "react";
import { Link } from "react-router-dom";

const Dashboard: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Example stat cards */}
        <div className="bg-white rounded shadow p-6 flex flex-col items-center">
          <span className="text-3xl font-bold text-blue-600">120</span>
          <span className="text-gray-600 mt-2">Employees</span>
        </div>
        <div className="bg-white rounded shadow p-6 flex flex-col items-center">
          <span className="text-3xl font-bold text-green-600">
            KES 2,500,000
          </span>
          <span className="text-gray-600 mt-2">Total Payroll</span>
        </div>
        <div className="bg-white rounded shadow p-6 flex flex-col items-center">
          <span className="text-3xl font-bold text-yellow-600">3</span>
          <span className="text-gray-600 mt-2">Pending Approvals</span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link
          to="/employees"
          className="block bg-blue-100 hover:bg-blue-200 rounded p-6 text-blue-800 font-semibold transition"
        >
          Manage Employees
        </Link>
        <Link
          to="/payroll"
          className="block bg-green-100 hover:bg-green-200 rounded p-6 text-green-800 font-semibold transition"
        >
          Prepare Payroll
        </Link>
        <Link
          to="/payroll/approve"
          className="block bg-yellow-100 hover:bg-yellow-200 rounded p-6 text-yellow-800 font-semibold transition"
        >
          Approve Payroll
        </Link>
        <Link
          to="/disbursement"
          className="block bg-purple-100 hover:bg-purple-200 rounded p-6 text-purple-800 font-semibold transition"
        >
          Disburse Salaries
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
