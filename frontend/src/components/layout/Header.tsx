import React from "react";

const Header: React.FC = () => {
  return (
    <header className="h-16 w-full flex items-center justify-between px-6 bg-white border-b shadow-sm">
      <div className="font-semibold text-lg">Dashboard</div>
      <div className="flex items-center gap-4">
        {/* Placeholder for notifications, user avatar, dropdown, etc. */}
        <span className="text-gray-600">Welcome, Admin</span>
        <button className="rounded-full bg-blue-500 text-white px-3 py-1 text-sm font-medium hover:bg-blue-600 transition">
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
