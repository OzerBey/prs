import "./css/App.css";
import "./components/signup/signup.css";
import Login from "../src/components/login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./components/signup/SignUp";
import { PatientRegister } from "./components/patients/PatientRegister";
import { NotFoundPage } from "./components/errors/NotFoundPage";
import { Patients } from "./components/Patients";

function App() {
  return (
    <div className="App">
      <h1>Patient Registration System</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="patients" element={<Patients />} />
          <Route path="patients-registration" element={<PatientRegister />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
