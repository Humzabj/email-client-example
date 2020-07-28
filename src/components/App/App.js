import React, { Fragment } from 'react';
import {Container, Button} from 'react-bootstrap';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import MailList from '../MailList/MailList';
import ButtonAppBar from '../AppBar/AppBar';

const App = props => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [mailListLength, setMaiListLength] = React.useState(0);

  return (
    <Fragment>
    <ButtonAppBar />
    <Container fluid className="p-0">
        {/* Search Bar component */}
        <SearchBar searchTermFunction={setSearchTerm} mailListLength={mailListLength}/>
      <Container fluid className="px-md-5">
        {/* MailList component */}
        <MailList searchTerm={searchTerm} mailListFunction={setMaiListLength}/>
      </Container>
    </Container>
    </Fragment>
  );
}

export default App;
