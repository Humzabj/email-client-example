import React, {Component, Fragment} from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import './MailList.css';
import {MockMails} from './MockMails';
import mailArchiverLogo from '../../assets/images/logo.png';
import filterArrowIcon from '../../assets/images/icon_arrow01.svg';
import AttachementIcon from '../../assets/images/icon_clip';

const MailBody = props => {
    const {body} = props;
    const {isOpen} = props;

    return(
        <Row className={`px-3 pt-2 pb-1 ${isOpen ? 'd-flex': 'd-none'}`}>
            <Col>{body}
            </Col>
        </Row>
    );
}

const MailItem = props => {
    const {mail} = props;
    const [showBodyFlag, setBodyFlag] = React.useState(false);

    const countAttachments = mail => {
        let attachmentElement = <div></div>;
        if (mail.attachements) attachmentElement = <AttachementIcon />;
        return attachmentElement;
    }

    const countRecipients = mail => {
        let recipientCountElement = <div></div>;
        if (mail.recipient.length > 1) 
            recipientCountElement = <div className="recipient-count-tag">+{(mail.recipient.length - 1)}</div>;
        return recipientCountElement;
    }

    const joinRecipients = mail => {
        return mail.recipient.join().replace(',', ', ');
    }

    const showBody = () => {
        setBodyFlag(!showBodyFlag);
    }

    return (
        <Container
            fluid
            className="mail-item"
            onClick = {() => showBody()}
            >
            <Row className="px-3 pt-2 pb-1 row">
                <Col xs={2} className="mail-item-text">
                    <span>{mail.sender}</span>
                </Col>
                <Col xs={2} className="mail-item-text">
                    <span>{joinRecipients(mail)}</span>
                </Col>
                <Col xs={1} className="mail-item-text text-center">
                    {countRecipients(mail)}
                </Col>
                <Col xs={6} className="mail-item-text">
                    <div className="subject-section">{mail.subject}</div>
                    {countAttachments(mail)}
                </Col>
                <Col xs={1} className="mail-item-text">
                    <span>{mail.date}</span>
                </Col>
            </Row>
            <MailBody body={mail.body} isOpen={showBodyFlag}/>
        </Container>
    );
}

const FilterBar = props => {
    const [dateOrderAscending, setOrder] = React.useState(true);

    const orderByDate = () => {
        dateOrderAscending ? (
            document.getElementById('dateFilterIcon').style.transform= "rotate(180deg)"
        ) : (
            document.getElementById('dateFilterIcon').style.transform= "rotate(0deg)"
        );
        setOrder(!dateOrderAscending);    
    }
    
    return(
        <Container fluid className="filter-box">
            <Row className="p-3">
                <Col xs={2} className="filter-text">From</Col>
                <Col xs={3} className="filter-text">To</Col>
                <Col xs={6} className="filter-text">Subject</Col>
                <Col xs={1} className="filter-text filter-cursor" onClick={() => orderByDate()}>Date
                    <img
                        id="dateFilterIcon"
                        className="ml-2"
                        width="10"
                        src={filterArrowIcon}
                        alt="Filter"
                    />
                </Col>
            </Row>                    
        </Container>
    );    
}

class MailList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEmpty: false,
            dateOrderAscending: true,
            mails: MockMails,
        }
    }

    mailContent() {
        let content =  
        <div className="icon-fix">
            <img src={mailArchiverLogo} alt="Mail Archiver"/>
        </div>
        if (this.state.mails.length > 0) {
            const mailItems = this.state.mails.map((mail, i) => {
                return (<MailItem mail={mail} key={i}/>);
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