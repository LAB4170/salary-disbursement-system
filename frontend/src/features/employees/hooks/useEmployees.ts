import { useState } from "react";
import { Employee } from "../types/employee.types";

// Mock data for demonstration
const mockEmployees: Employee[] = [
  {
    id: "1",
    name: "Jane Doe",
    position: "Software Engineer",
    department: "IT",
    nationalId: "12345678",
    kraPin: "A123456789B",
    bankAccount: "01123456789",
    mpesaNumber: "0712345678",
    salary: 120000,
    allowances: 20000,
    deductions: 5000,
    employmentType: "permanent",
  },
  {
    id: "2",
    name: "John Smith",
    position: "Accountant",
    department: "Finance",
    nationalId: "87654321",
    kraPin: "B987654321A",
    bankAccount: "01234567890",
    mpesaNumber: "0798765432",
    salary: 90000,
    allowances: 15000,
    deductions: 3000,
    employmentType: "contract",
  },
];

export function useEmployees() {
  const [employees, setEmployees] = useState<Employee[]>(mockEmployees);

  // Add, edit, delete, fetch logic can be added here
  return { employees, setEmployees };
}
