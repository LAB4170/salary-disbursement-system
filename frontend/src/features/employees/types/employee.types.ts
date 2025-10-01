export type EmploymentType = "permanent" | "contract" | "casual";

export interface Employee {
  id: string;
  name: string;
  position: string;
  department?: string;
  nationalId: string;
  kraPin: string;
  bankAccount: string;
  mpesaNumber: string;
  salary: number;
  allowances: number;
  deductions: number;
  employmentType: EmploymentType;
}
