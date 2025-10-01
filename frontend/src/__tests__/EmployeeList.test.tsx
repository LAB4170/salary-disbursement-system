import React from "react";
import { render, screen } from "@testing-library/react";
import EmployeeList from "../pages/employees/EmployeeList";
import { BrowserRouter } from "react-router-dom";

describe("EmployeeList", () => {
  it("renders the employee table and Add Employee button", () => {
    render(
      <BrowserRouter>
        <EmployeeList />
      </BrowserRouter>
    );
    expect(screen.getByText(/Employees/i)).toBeInTheDocument();
    expect(screen.getByText(/Add Employee/i)).toBeInTheDocument();
    expect(screen.getByText(/Jane Doe/i)).toBeInTheDocument();
    expect(screen.getByText(/John Smith/i)).toBeInTheDocument();
  });
});
