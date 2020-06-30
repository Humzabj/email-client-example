import React from 'react';
import {Container} from 'react-bootstrap';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import MailList from '../MailList/MailList';

function App() {
  return (
    <Container fluid className="p-0">
        {/* Search Bar component */}
        <SearchBar />
      <Container fluid className="px-md-5">
        {/* MailList component */}
        <MailList/>
      </Container>
    </Container>
  );
}

export default App;
