import React from "react";

interface EmployeeCardProps {
	name: string;
	position: string;
	department?: string;
	avatarUrl?: string;
}

const EmployeeCard: React.FC<EmployeeCardProps> = ({ name, position, department, avatarUrl }) => {
	return (
		<div className="flex items-center bg-white rounded shadow p-4 gap-4">
			<img
				src={avatarUrl || `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}`}
				alt={name}
				className="w-12 h-12 rounded-full object-cover border"
			/>
			<div>
				<div className="font-semibold text-lg">{name}</div>
				<div className="text-gray-500 text-sm">{position}{department && `, ${department}`}</div>
			</div>
		</div>
	);
};

export default EmployeeCard;
