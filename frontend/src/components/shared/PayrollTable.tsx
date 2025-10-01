import React from "react";
import Table, { TableColumn } from "../ui/Table";

export interface PayrollRow {
  employee: string;
  basic: number;
  allowances: number;
  deductions: number;
  net: number;
}

const columns: TableColumn<PayrollRow>[] = [
  { key: "employee", label: "Employee" },
  { key: "basic", label: "Basic Pay" },
  { key: "allowances", label: "Allowances" },
  { key: "deductions", label: "Deductions" },
  { key: "net", label: "Net Salary" },
];

interface PayrollTableProps {
  data: PayrollRow[];
}

const PayrollTable: React.FC<PayrollTableProps> = ({ data }) => {
  return (
    <Table columns={columns} data={data} emptyMessage="No payroll data." />
  );
};

export default PayrollTable;
