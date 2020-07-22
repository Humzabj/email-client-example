import React from 'react';
import {Container, Row, Col, InputGroup, FormControl} from 'react-bootstrap';
import './SearchBar.css';
import calendarIcon from '../../assets/images/icon_calendar.svg';
import searchIcon from '../../assets/images/icon_search.svg';

// Funcitonal Component gets No. of results form props
const ResultsCount = (props) => {
    return (
      <Row>
        <Col>
            <div>
            <p className="results-text">Results: 
                <span className="big-text"> {props} </span>
                mails(s)
            </p>
            </div>
        </Col>
      </Row>
    );
  }

class SearchBar extends React.Component {
    constructor (props) {
        super(props);
        this.textInput = React.createRef();
    }

    handleChange() {
        this.props.searchTermFunction(this.textInput.current.value);
    }

    render() {
        return(
            <Container className="px-md-5 pt-3" fluid>
                <Row>
                    <Col xl={2}>
                        <div className="App">
                        <InputGroup className="mb-3 mt-4">
                            <InputGroup.Prepend>
                            <InputGroup.Text className="custom-icon">
                                <img height="20" src={calendarIcon} alt="calendar"/>
                            </InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl onChange={() => this.handleChange()} ref={this.textInput} className="custom-input" aria-label="Amount (to the nearest dollar)" />
                            <InputGroup.Append>
                            <InputGroup.Text className="custom-button">
                                <img height="20" src={searchIcon} alt="Search"/>
                            </InputGroup.Text>
                            </InputGroup.Append>
                        </InputGroup>
                        </div>
                    </Col>
                </Row>
                {ResultsCount(this.props.mailListLength)}
            </Container>
        );
    }
}

export default SearchBar;