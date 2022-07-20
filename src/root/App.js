import "../../src/css/App.css";
import "../components/signup/signup.css";
import Login from "../components/login/Login";
import ContextTry from "../components/login/ContextTry";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "../components/signup/SignUp";
import { PatientRegister } from "../components/patients/PatientRegister";
import { NotFoundPage } from "../components/errors/NotFoundPage";
import { DoctorList } from "../components/doctors/DoctorList";
import { CategoryList } from "../components/categories/CategoryList";
import { Doctor } from "../components/doctors/Doctor";
import { DoctorContext } from "../contexts/DoctorContext";
import { Col, Container, Row } from "reactstrap";
import EmployeeList from "../components/employee/EmployeeList";
import PhotoList from "../components/photos/PhotoList";
import Navit from "../components/navi/Navit";
import PatientList from "../components/patients/PatientList";

const doctors = [
  {
    id: 1,
    name: "Ozer",
    email: "ozer@gmail.com",
    password: "ozersstrongpassword",
    age: 25,
  },
  {
    id: 2,
    name: "Yasin",
    email: "yasin@gmail.com",
    password: "yasinsstrongpassword",
    age: 24,
  },
  {
    id: 3,
    name: "Muneeb",
    email: "muneeb@gmail.com",
    password: "muneebsstrongpassword",
    age: 28,
  },
  {
    id: 4,
    name: "Ilker",
    email: "ilker@gmail.com",
    password: "ilkersstrongpassword",
    age: 20,
  },
  {
    id: 5,
    name: "Ali",
    email: "ali@gmail.com",
    password: "alisstrongpassword",
    age: 45,
  },
];

function App() {
  return (
    <DoctorContext.Provider value={doctors}>
      <div style={{ backgroundColor: "#61dafb" }} className="App">
        <h1 className="div-center">Patient Registration System</h1>
        <Container>
          <Row>
            <Col xs="3">
              <CategoryList />
            </Col>
            <Col xs="9">
              <BrowserRouter>
                <Navit />
                <Routes>
                  <Route path="/" element={<Login users={doctors} />} />
                  <Route path="signup" element={<SignUp />} />
                  <Route path="context" element={<ContextTry />} />

                  <Route path="patients" element={<PatientList />} />
                  <Route path="doctors" element={<DoctorList />} />
                  <Route path="doctor" element={<Doctor />}>
                    <Route
                      path="patient-register"
                      element={<PatientRegister />}
                    />
                  </Route>
                  <Route path="employees" element={<EmployeeList />} />
                  <Route path="photos" element={<PhotoList />} />
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
              </BrowserRouter>
            </Col>
          </Row>
        </Container>
      </div>
    </DoctorContext.Provider>
  );
}

export default App;
