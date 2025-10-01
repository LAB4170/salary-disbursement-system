import React from "react";

const AuditLog: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Audit Log</h1>
      <p className="text-gray-600 mb-4">
        All payroll, approvals, and disbursements are logged for compliance and
        accountability.
      </p>
      {/* TODO: Implement audit log table and filters */}
      <div className="bg-white rounded shadow p-4">
        Audit log table coming soon...
      </div>
    </div>
  );
};

export default AuditLog;
