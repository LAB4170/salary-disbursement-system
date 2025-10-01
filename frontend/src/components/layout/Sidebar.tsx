import React from "react";
import { NavLink } from "react-router-dom";

const navItems = [
  { label: "Dashboard", path: "/dashboard" },
  { label: "Employees", path: "/employees" },
  { label: "Payroll", path: "/payroll" },
  { label: "Approvals", path: "/payroll/approve" },
  { label: "Disbursement", path: "/disbursement" },
  { label: "Reports", path: "/reports" },
  { label: "Audit Log", path: "/audit" },
  { label: "Settings", path: "/settings" },
];

const Sidebar: React.FC = () => {
  return (
    <aside className="h-full w-64 bg-white border-r flex flex-col shadow-sm">
      <div className="h-16 flex items-center justify-center font-bold text-xl border-b">
        Salary System
      </div>
      <nav className="flex-1 py-4 px-2">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `block px-4 py-2 rounded hover:bg-blue-100 transition-colors font-medium ${
                    isActive ? "bg-blue-500 text-white" : "text-gray-700"
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
