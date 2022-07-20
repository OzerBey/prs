import "./css/App.css";
import "./components/signup/signup.css";
import Login from "../src/components/login/Login";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import SignUp from "./components/signup/SignUp";
import { PatientRegister } from "./components/PatientRegister";
import { NotFoundPage } from "./components/errors/NotFoundPage";
import { DoctorList } from "./components/DoctorList";
import { CategoryList } from "./components/CategoryList";
import { Doctor } from "./components/Doctor";
import { DoctorContext } from "./contexts/DoctorContext";
import { Col, Container, Row } from "reactstrap";
import EmployeeList from "./components/EmployeeList";
import PhotoList from "./components/PhotoList";
import Navit from "./components/Navit";
import PatientList from "./components/PatientList";

const users = [
  {
    id: 1,
    name: "Ozer",
    email: "ozer@gmail.com",
    age: 25,
  },
  {
    id: 2,
    name: "Yasin",
    email: "yasin@gmail.com",
    age: 24,
  },
  {
    id: 3,
    name: "Muneeb",
    email: "muneeb@gmail.com",
    age: 34,
  },
  {
    id: 4,
    name: "Ilker",
    email: "ilker@gmail.com",
    age: 21,
  },
  {
    id: 5,
    name: "Ali",
    email: "ali@gmail.com",
    age: 45,
  },
];

function App() {
  return (
    <DoctorContext.Provider value={users}>
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
                  <Route path="/" element={<Login />} />
                  <Route path="signup" element={<SignUp />} />

                  <Route path="patients" element={<PatientList />} />
                  <Route path="doctors" element={<DoctorList />} />
                  <Route path="doctor" element={<Doctor />}>
                    <Route path="patient-register" element={<PatientRegister />} />
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
