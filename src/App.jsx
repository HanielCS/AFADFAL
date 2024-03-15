import React from "react";
import RegisterPage from "/pages/register/RegisterPage";
import LoginPage from "/pages/login/LoginPage";
import HomePage from "/pages/home/HomePage";
import { BrowserRouter, Route, Routes} from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<RegisterPage />} />
        <Route path = "/login" element = {<LoginPage />} />
        <Route path = "/home" element = {<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
