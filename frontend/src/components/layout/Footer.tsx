import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="h-12 w-full flex items-center justify-center bg-gray-50 border-t text-xs text-gray-500">
      &copy; {new Date().getFullYear()} Salary Disbursement System. All rights
      reserved.
    </footer>
  );
};

export default Footer;
