import React from "react";

interface StatCardProps {
  label: string;
  value: string | number;
  color?: string;
}

const StatCard: React.FC<StatCardProps> = ({
  label,
  value,
  color = "text-blue-600",
}) => {
  return (
    <div className="bg-white rounded shadow p-6 flex flex-col items-center">
      <span className={`text-3xl font-bold ${color}`}>{value}</span>
      <span className="text-gray-600 mt-2">{label}</span>
    </div>
  );
};

export default StatCard;
