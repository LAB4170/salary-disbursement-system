import React from "react";
import { Link } from "react-router-dom";
import Table, { TableColumn } from "../../components/ui/Table";
import { useEmployees } from "../../features/employees/hooks/useEmployees";
import { Employee } from "../../features/employees/types/employee.types";

const columns: TableColumn<Employee>[] = [
  { key: "name", label: "Name" },
  { key: "position", label: "Position" },
  { key: "department", label: "Department" },
  { key: "employmentType", label: "Type" },
  { key: "salary", label: "Salary" },
  {
    key: "id",
    label: "Actions",
    render: (row) => (
      <Link
        to={`/employees/${row.id}`}
        className="text-blue-600 hover:underline text-sm"
      >
        View
      </Link>
    ),
  },
];

const EmployeeList: React.FC = () => {
  const { employees } = useEmployees();
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
      <Table
        columns={columns}
        data={employees}
        emptyMessage="No employees found."
      />
    </div>
  );
};

export default EmployeeList;
