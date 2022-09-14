import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import UserRegister from "./pages/user/register/UserRegister";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/user/register" element={<UserRegister />} exact />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
