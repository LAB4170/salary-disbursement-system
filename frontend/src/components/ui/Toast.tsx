import React, { useEffect } from "react";

interface ToastProps {
	message: string;
	type?: "success" | "error" | "info";
	onClose: () => void;
	duration?: number;
}

const typeStyles = {
	success: "bg-green-500 text-white",
	error: "bg-red-500 text-white",
	info: "bg-blue-500 text-white",
};

const Toast: React.FC<ToastProps> = ({ message, type = "info", onClose, duration = 3000 }) => {
	useEffect(() => {
		const timer = setTimeout(onClose, duration);
		return () => clearTimeout(timer);
	}, [onClose, duration]);

	return (
		<div className={`fixed bottom-6 right-6 px-6 py-3 rounded shadow-lg z-50 ${typeStyles[type]}`}> 
			<span>{message}</span>
			<button className="ml-4 text-white font-bold" onClick={onClose} aria-label="Close">&times;</button>
		</div>
	);
};

export default Toast;
