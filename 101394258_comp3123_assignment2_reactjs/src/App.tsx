import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import axios from "axios";

import Navbar from "./components/NavComponent";
import Home from "./pages/HomeComponent";
import Signup from "./pages/SignupComponent";
import Login from "./pages/LoginComponent";
import { useAuth } from "./contexts/AuthContext";

interface SignupFormData {
  firstName: string;
  lastName: string;
  emailId: string;
  password: string;
}

interface LoginFormData {
  emailId: string;
  password: string;
}

function App() {
  const { isLoggedIn, login } = useAuth();

  const handleSignup = async (formData: SignupFormData) => {
    try {
      console.log("Signup form data:", formData);
    } catch (error) {
      console.error("Error during signup:", error);
    }

    await axios({
      method: "POST",
      data: formData,
      url: "http://localhost:5000/employee",
    })
      .then((res) => {
        console.log("User added successfully")
      })
      .catch((e) => {
        console.log(e.response);
      });
  };

  const handleLogin = async (formData: LoginFormData) => {
    try {
      const response = await axios.post("http://localhost:5000/employee/login", formData);
      if (response.data.success) {
        login();
        console.log("User logged in successfully");
      } else {
        console.log("Invalid credentials");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={isLoggedIn ? <Home /> : <Navigate to="/login" />}
          />
          <Route path="/signup" element={<Signup onSignup={handleSignup} />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
