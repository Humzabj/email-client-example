import React, {Component} from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import './MailList.css';
import mailArchiverLogo from '../../assets/images/logo.png';
import filterArrow from '../../assets/images/icon_arrow01.svg';

function mailItem(props) {
    return (
        <Container fluid>
            <Row className="p-3">
                <Col xs={2} className="filter-text">{props.from}</Col>
                <Col xs={2} className="filter-text">{
                     () => {
                        if(props.to.length > 1) {
                            return(
                                <h5>More than 1 recipient</h5>
                            );
                        }
                    }
                }</Col>
                <Col xs={7} className="filter-text">{props.subject}</Col>
                <Col xs={1} className="filter-text">{props.date}</Col>
            </Row>
        </Container>
    );
}

class filterBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dateOrderAscending: true
        }
    }

    orderByDate() {
        console.log(this.state.dateOrderAscending);
        this.state.dateOrderAscending ? (
            document.getElementById('dateFilterIcon').style.transform= "rotate(180deg)"
        ) : (
            document.getElementById('dateFilterIcon').style.transform= "rotate(0deg)"
        );
        this.setState(
            {
                dateOrderAscending: !this.state.dateOrderAscending
            }
        )    
    }

    render() {
        return(
            <Container fluid className="filter-box">
                <Row className="p-3">
                    <Col xs={2} className="filter-text">From</Col>
                    <Col xs={2} className="filter-text">To</Col>
                    <Col xs={7} className="filter-text">Subject</Col>
                    <Col xs={1} className="filter-text filter-cursor" onClick={() => this.orderByDate()}>Date
                        <img
                            id="dateFilterIcon"
                            className="ml-2"
                            width="10"
                            src={filterArrow}
                            alt="Filter"
                        />
                    </Col>
                </Row>                    
            </Container>
        );
    }
}

class MailList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEmpty: false,
            dateOrderAscending: true
        }
    }

    render() {
        const mailContent = (this.state.isEmpty ?
            (
                <div className="icon-fix">
                    <img src={mailArchiverLogo} alt="Mail Archiver"/>
                </div>
            ) :
            (
                <filterBar />
            ) 
        );
        return (
            <Row id="MailList" className="mail-box-border">
              <Col className="p-0">                
                {/* Router view here for emails etc. */}
                {mailContent}
              </Col>
            </Row>
        );
    }
}

export default MailList;