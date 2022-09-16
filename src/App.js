import React from "react";
import Signup from "./components/Signup";
import { Container } from "react-bootstrap";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Navigation from "./components/Navigation";
import PrivateRoute from "./PrivateRoute"
// import ForgotPassword from "./components/ForgotPassword"
// import UpdateProfile from "./components/UpdateProfile"

function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <h1>App</h1>
        <Navigation />
        <Router>
          <Link to="/signup">Signup</Link>
          <AuthProvider>
            <Routes>
              <Route path="/profile" element={<PrivateRoute><Dashboard/></PrivateRoute>} />
              {/*<PrivateRoute path="/update-profile" component={UpdateProfile} />*/}
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              {/*<Route path="/forgot-password" component={ForgotPassword} />*/}
            </Routes>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  );
}

export default App;
