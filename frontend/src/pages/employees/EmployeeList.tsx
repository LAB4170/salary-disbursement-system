import React from "react";
import { Link } from "react-router-dom";

const EmployeeList: React.FC = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Employees</h1>
        <Link
          to="/employees/add"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition font-medium"
        >
          Add Employee
        </Link>
      </div>
      {/* TODO: Implement employee table */}
      <div className="bg-white rounded shadow p-4">
        Employee table coming soon...
      </div>
    </div>
  );
};

export default EmployeeList;
