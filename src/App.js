import "./css/App.css";
import "./components/signup/signup.css";
import Login from "../src/components/login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./components/signup/SignUp";
import { PatientRegister } from "./components/patients/PatientRegister";
import { NotFoundPage } from "./components/errors/NotFoundPage";
import { Patients } from "./components/Patients";
import { DoctorContext } from "./contexts/DoctorContext";
import { Doctor } from "./components/doctorPanels/Doctor";

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
    name: "Yusuf",
    email: "yusuf@gmail.com",
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
      <div className="App">
        <h1>Patient Registration System</h1>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="patients" element={<Patients />} />
            <Route path="doctor" element={<Doctor />}>
              <Route path=":id" element={<PatientRegister />} />
            </Route>
            <Route path="patients-registration" element={<PatientRegister />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </DoctorContext.Provider>
  );
}

export default App;
