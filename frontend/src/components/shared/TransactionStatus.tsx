import React from "react";

interface TransactionStatusProps {
	status: "success" | "pending" | "failed";
}

const statusMap = {
	success: { label: "Success", color: "bg-green-100 text-green-700" },
	pending: { label: "Pending", color: "bg-yellow-100 text-yellow-700" },
	failed: { label: "Failed", color: "bg-red-100 text-red-700" },
};

const TransactionStatus: React.FC<TransactionStatusProps> = ({ status }) => {
	const { label, color } = statusMap[status];
	return (
		<span className={`px-3 py-1 rounded-full text-xs font-semibold ${color}`}>{label}</span>
	);
};

export default TransactionStatus;
