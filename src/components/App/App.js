import React from 'react';
import {Container} from 'react-bootstrap';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import MailList from '../MailList/MailList';

const App = props => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [mailListLength, setMaiListLength] = React.useState(0);

  return (
    <Container fluid className="p-0">
        {/* Search Bar component */}
        <SearchBar searchTermFunction={setSearchTerm} mailListLength={mailListLength}/>
      <Container fluid className="px-md-5">
        {/* MailList component */}
        <MailList searchTerm={searchTerm} mailListFunction={setMaiListLength}/>
      </Container>
    </Container>
  );
}

export default App;
