import MailRecipientIcon from '../../../assets/images/icon_mail_sp.svg';
import AttachementIcon from '../../../assets/images/icon_clip';
import React from 'react';
import {Row, Col, Container} from 'react-bootstrap';

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
            recipientCountElement = <div className="recipient-count-tag-mobile">+{(mail.recipient.length - 1)}</div>;
        return recipientCountElement;
    }

    const joinRecipients = mail => {
        return mail.recipient.join().replace(',', ', ');
    }

    const showBody = () => {
        setBodyFlag(!showBodyFlag);
    }

    // useEffect hook

    return (
        <Container
            fluid
            className="mail-item"
            onClick = {() => showBody()}
            >
            <Row className="pt-2 pb-1 row mobile-content">
                <Col xs={1} className="mt-2">
                    <img alt="Mail Recipient" src={MailRecipientIcon} width="12"/>
                </Col>
                <Col xs={11} className="pl-0">
                    <Row>
                        <Col xs={8} className="mail-item-text text-bold">
                            <span>{mail.sender}</span>
                        </Col>
                        <Col xs={4} className="mail-item-text text-right">
                            <span>{mail.date}</span>
                        </Col>    
                    </Row>
                    <Row className="content-gap mt-1">
                        <Col xs={10} className="mail-item-text">
                            <span>{joinRecipients(mail)}</span>
                        </Col>
                        <Col xs={2} className="mail-item-text text-center">
                            {countRecipients(mail)}
                        </Col>
                    </Row>
                    <Row>
                        <div className="subject-section" style={{width: '100%'}}>{mail.subject}</div>    
                    </Row>
                </Col>
            </Row>
            <Row className="px-3 pt-2 pb-1 row desktop-content">
                {/* For desktop view */}
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
                {/* For desktop view */}
            </Row>
            <MailBody body={mail.body} isOpen={showBodyFlag}/>
        </Container>
    );
}

const MailBody = props => {
    const {body} = props;
    const {isOpen} = props;

    return(
        <Row className={`px-3 pt-2 pb-1 ${isOpen ? 'd-flex': 'd-none'}`}>
            <Col>
                {body}
            </Col>
        </Row>
    );
}

export default MailItem;