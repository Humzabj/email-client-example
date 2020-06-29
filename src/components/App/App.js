import React from 'react';
import {Container, Row, Col, InputGroup, FormControl} from 'react-bootstrap';
import './App.css';
import calendarIcon from '../../assets/images/icon_calendar.svg';
import searchIcon from '../../assets/images/icon_search.svg';

function SearchBar() {
  return(
    <Row>
      <Col xl={2}>
        <div className="App">
          <InputGroup className="mb-3 mt-4">
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
  );
}

function ResultsCount() {
  return (
    <Row>
      <Col>
        <div>
          <p className="results-text">Results: 
            <span className="big-text"> 10 </span>
            mails(s)
          </p>
        </div>
      </Col>
    </Row>
  );
}

function MailList() {
  return (
    <Row className="mail-box-border">
      <Col>
        <div className="mail-box">

        </div>
      </Col>
    </Row>
  );
}

function App() {
  return (
    <Container fluid className="p-0">
    <Container className="pl-5 pr-5 pt-3" fluid>
      {/* Search Bar component */}
      { SearchBar() }
      {/* Results Count component */}
      { ResultsCount() }
    </Container>
    <Container fluid className="px-md-5">
      {/* Router view here for emails etc. */}
      { MailList() }
    </Container>
  </Container>
  );
}

export default App;
