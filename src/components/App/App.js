import React from 'react';
import {Container, Row, Col, InputGroup, FormControl} from 'react-bootstrap';
import './App.css';
import calendarIcon from '../../assets/images/icon_calendar.svg';
import searchIcon from '../../assets/images/icon_search.svg';

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <div className="App">
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text className="custom-icon">
                    <img height="20" src={calendarIcon} alt="calendar"/>
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl className="custom-input" aria-label="Amount (to the nearest dollar)" />
                <InputGroup.Append>
                  <InputGroup.Text className="custom-button">
                    <img height="20" src={searchIcon} alt="Search"/>
                  </InputGroup.Text>
                </InputGroup.Append>
              </InputGroup>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
