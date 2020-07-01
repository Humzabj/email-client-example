import React, {Component, Fragment} from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import './MailList.css';
import mailArchiverLogo from '../../assets/images/logo.png';
import filterArrow from '../../assets/images/icon_arrow01.svg';

function MailItem(props) {
    return (
        <Container fluid>
            <Row className="p-3">
                <Col xs={2} className="mail-item-text">
                    <span>{props.mail.sender}</span>
                </Col>
                <Col xs={3} className="mail-item-text">
                    <span>{props.mail.recipient}</span>
                </Col>
                <Col xs={6} className="mail-item-text">
                    <span>{props.mail.subject}</span>
                </Col>
                <Col xs={1} className="mail-item-text">
                    <span>{props.mail.date}</span>
                </Col>
            </Row>
        </Container>
    );
}

class FilterBar extends Component {
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
                    <Col xs={3} className="filter-text">To</Col>
                    <Col xs={6} className="filter-text">Subject</Col>
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
            dateOrderAscending: true,
            mails: [
                {
                    recipient: [
                        'xkcdf@hotmail.com',
                        'frosterman@hotmail.com',
                        'jane@hotmail.com',
                    ],
                    sender: 'ppp.ppp@gmail.com',
                    subject: '[Github] Change Request for POC',
                    date: new Date().toJSON().slice(0,10).replace(/-/g,'/')
                },
                {
                    recipient: [
                        'doe@hotmail.com',
                        'jon@hotmail.com',
                        'someone@hotmail.com',
                    ],
                    sender: 'rando_advert@gmail.com',
                    subject: 'Nougat chocolate special sale 50% off',
                    date: new Date().toJSON().slice(0,10).replace(/-/g,'/')
                }
            ]
        }
    }

    mailContent() {
        let content =  
        <div className="icon-fix">
            <img src={mailArchiverLogo} alt="Mail Archiver"/>
        </div>
        if (this.state.mails.length > 0) {
            const mailItems = this.state.mails.map((mail, i) => {
                // Have to make a deep copy. Shallow copy overrights iterations
                let mailCopy = JSON.parse(JSON.stringify(mail));
                mailCopy.recipient = mailCopy.recipient.join().replace(',', ', ');
                console.log(mailCopy.recipient);
                return (<MailItem mail={mailCopy} key={i}/>);
            });
            content = 
            <Fragment>
                <FilterBar />
                {mailItems}
            </Fragment>
        }
        return content;
    }

    render() {

        const mailContent = this.mailContent();
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