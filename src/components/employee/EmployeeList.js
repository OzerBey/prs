import React, { useEffect, useState } from "react";
import { Table, Button, Input } from "reactstrap";

export default function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  //   const [employee, setEmployee] = useState({});
  const baseUrl = "https://localhost:44390/api/";
  const fetchEmployees = async () => {
    const response = await fetch(baseUrl + "Employee/getAllEmployees");
    const data = await response.json();
    setEmployees(data);
  };

  const getEmployeesById = async (id) => {
    // const inputId = document.querySelector("#input_id").value;
    const url = baseUrl + "Employee/GetEmployeeById?Id=";
    const response = await fetch(url + id);
    const data = await response.json();
    setEmployees(data);
  };
  const handleInput = (e) => {
    const inputId = document.querySelector("#input_id").value;
    console.log(inputId);
    getEmployeesById(inputId);
  };
  useEffect(() => {
    // fetchEmployees();
  }, [employees]);

  return (
    <div>
      <h2>EmployeeList</h2>
      <details>
        <summary>GetEmployees</summary>{" "}
        <Button onClick={fetchEmployees} color="success">
          GetEmployees
        </Button>
      </details>

      <details>
        <summary>GetEmployeeById</summary>{" "}
        <Input
          id="input_id"
          min={0}
          maxLength="5"
          width={5}
          placeholder="Enter patient id"
          type="number"
          onChange={(e) => handleInput(e.target.value)}
        />
        <Button onClick={() => getEmployeesById} color="success">
          GetEmployeesById
        </Button>
      </details>

      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>AddressId</th>
            <th>NationalityId</th>
            <th>Name</th>
            <th>Department</th>
            <th>PhotoId</th>
            <th>Gender</th>
            <th>PhoneNumber</th>
            <th>DateOfBirth</th>
            {/* Other properties */}
            {/* <th>Photo</th>
            <th>Doctors</th>
            <th>Officers</th> */}
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <th scope="row">{employee.id}</th>
              <td>{employee.addressId}</td>
              <td>{employee.nationalityId}</td>
              <td>{employee.name}</td>
              <td>{employee.department}</td>
              <td>{employee.photoId}</td>
              <td>{employee.gender}</td>
              <td>{employee.phoneNumber}</td>
              <td>{employee.dateOfBirth}</td>
              <td>{employee.photo}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
