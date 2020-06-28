import React from 'react';
import {Container, Row, Col, InputGroup, FormControl} from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <div className="App">
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text className="custom-icon"><img height="20" src="logo192.png" alt="calendar"/></InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl className="custom-input" aria-label="Amount (to the nearest dollar)" />
                <InputGroup.Append>
                  <InputGroup.Text>.00</InputGroup.Text>
                </InputGroup.Append>
              </InputGroup>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
