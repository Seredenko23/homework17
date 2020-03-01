import React from 'react';
import './App.css';
import Container from "react-bootstrap/Container";
import 'bootstrap/dist/css/bootstrap.min.css';
import Wrapper from "./components/Wrapper/Wrapper";

function App() {
  return (
    <div className="App">
      <Container>
        <Wrapper />
      </Container>
    </div>
  );
}

export default App;
