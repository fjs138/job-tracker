import "./App.css";
import Signup from "./components/Signup";
import React, {createContext, useContext, useEffect, useRef} from 'react';
import {Button, Container} from 'react-bootstrap';
// import {ThemeProvider, useDarkTheme} from './ThemeContext';
import {AuthProvider} from './contexts/AuthContext';

export default function App() {

  const renderCount = useRef(1);
  useEffect(()=> {
    renderCount.current = renderCount.current + 1
  })

  return (
    <AuthProvider>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        {`Render Count: ${renderCount.current}`}
        {/*<Button onClick={useDarkTheme}>Toggle</Button>*/}
        <div className="w-100" style={{ maxWidth: "400px " }}>
          <Signup />
        </div>
      </Container>
    // </AuthProvider>
  );
}
