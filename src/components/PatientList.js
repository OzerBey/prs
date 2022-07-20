import React, { useEffect, useState } from "react";
import { Table, Button } from "reactstrap";

export default function PatientList() {
  const [patients, setPatients] = useState([]);
  //   const [employee, setEmployee] = useState({});

  const fetchPatients = async () => {
    const response = await fetch(
      "https://localhost:44390/api/Patient/GetAllPatients"
    );
    const data = await response.json();
    setPatients(data);
  };

  useEffect(() => {
    // fetchEmployees();
  }, [patients]);

  return (
    <div>
      <h2>Patient List</h2>
      <Button onClick={fetchPatients} color="success">
        GetPatients
      </Button>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>AddressId</th>
            <th>NationalityId</th>
            <th>Name</th>
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
          {patients.map((employee) => (
            <tr key={employee.id}>
              <th scope="row">{employee.id}</th>
              <td>{employee.addressId}</td>
              <td>{employee.nationalityId}</td>
              <td>{employee.name}</td>
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
