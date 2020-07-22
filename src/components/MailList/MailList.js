import React, {Component, Fragment} from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import './MailList.css';
import {MockMails} from './MockMails';
import mailArchiverLogo from '../../assets/images/logo1.png';
import filterArrowIcon from '../../assets/images/icon_arrow01.svg';
import MailRecipientIcon from '../../assets/images/icon_mail_sp.svg';
import AttachementIcon from '../../assets/images/icon_clip';

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

const FilterBar = props => {
    const [filterState, setOrder] = React.useState({
        senderFilter: {
            active: false,
            isAscending: false
        },
        recipientFilter: {
            active: false,
            isAscending: false
        },
        subjectFilter: {
            active: false,
            isAscending: false
        },
        dateFilter: {
            active: true,
            isAscending: false
        }
    });

    const senderFilterIcon = 
    <img
        className={`ml-2
            ${(filterState.senderFilter.active ? 'd-inline-block filter-text-selected' : 'd-none')}
            ${(filterState.senderFilter.isAscending? 'ascending-icon' : 'descending-icon')}
        `}
        width="10"
        src={filterArrowIcon}
        alt="Filter"
    />;

    const recipientFilterIcon = 
    <img
        className={`ml-2
            ${(filterState.recipientFilter.active ? 'd-inline-block filter-text-selected' : 'd-none')}
            ${(filterState.recipientFilter.isAscending? 'ascending-icon' : 'descending-icon')}
        `}
        width="10"
        src={filterArrowIcon}
        alt="Filter"
    />;

    const subjectFilterIcon =
    <img
        className={`ml-2
            ${(filterState.subjectFilter.active ? 'd-inline-block filter-text-selected' : 'd-none')}
            ${(filterState.subjectFilter.isAscending? 'ascending-icon' : 'descending-icon')}
        `}
        width="10"
        src={filterArrowIcon}
        alt="Filter"
    />;

    const dateFilterIcon = 
    <img
        className={`ml-2
            ${(filterState.dateFilter.active ? 'd-inline-block filter-text-selected' : 'd-none')}
            ${(filterState.dateFilter.isAscending? 'ascending-icon' : 'descending-icon')}
        `}
        width="10"
        src={filterArrowIcon}
        alt="Filter"
    />;

    const changeOrder = (w, x, y, z, dataW, dataX, dataY, dataZ) => {
        setOrder({
            senderFilter: {
                active: w,
                isAscending: dataW
            },
            recipientFilter: {
                active: x,
                isAscending: dataX
            },
            subjectFilter: {
                active: y,
                isAscending: dataY
            },
            dateFilter: {
                active: z,
                isAscending: dataZ
            }
        });
    }

    const orderBySender = () => {
        changeOrder(true, false, false, false, !filterState.senderFilter.isAscending, false, false, false);
        console.log(filterState); 
    }

    const orderByRecipient = () => {
        changeOrder(false, true, false, false, false, !filterState.recipientFilter.isAscending, false, false);
        console.log(filterState); 
    }

    const orderBySubject = () => {
        changeOrder(false, false, true, false, false, false, !filterState.subjectFilter.isAscending, false);
        console.log(filterState); 
    }

    const orderByDate = () => {
        changeOrder(false, false, false, true, false, false, false, !filterState.dateFilter.isAscending); 
    }

    return(
        <Container fluid className="filter-box">
            <Row className="p-3 desktop-content">
                <Col xs={2} className="filter-text filter-cursor"  onClick={() => orderBySender()}>From
                    {senderFilterIcon}
                </Col>
                <Col xs={3} className="filter-text filter-cursor"  onClick={() => orderByRecipient()}>To
                    {recipientFilterIcon}
                </Col>
                <Col xs={6} className="filter-text filter-cursor"  onClick={() => orderBySubject()}>Subject
                    {subjectFilterIcon}
                </Col>
                <Col xs={1} className="filter-text filter-cursor" onClick={() => orderByDate()}>Date
                    {dateFilterIcon}
                </Col>
            </Row>                    
            <Row className="p-3 mobile-content">
                <div className="filter-text filter-border filter-cursor pr-2" onClick={() => orderBySender()}>From
                    {senderFilterIcon}
                </div>
                <div className="filter-text filter-border filter-cursor pr-2 pl-2" onClick={() => orderByRecipient()}>To
                    {recipientFilterIcon}
                </div>
                <div className="filter-text filter-border filter-cursor pr-2 pl-2" onClick={() => orderBySubject()}>Subject
                    {subjectFilterIcon}
                </div>
                <div className="filter-text filter-cursor pl-2" onClick={() => orderByDate()}>Date
                    {dateFilterIcon}
                </div>
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
            <img width="150" src={mailArchiverLogo} alt="Mail Archiver"/>
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

    updateMailList(searchTerm, prevMails) {
        searchTerm = searchTerm.toLowerCase();
        if (searchTerm !== '') {
            let tempMails = MockMails;
            let newMailList = [];
            for (let i = 0; i < tempMails.length; i++) {
                if (tempMails[i].sender.toLowerCase().includes(searchTerm) ||
                    tempMails[i].subject.toLowerCase().includes(searchTerm) ||
                    tempMails[i].body.toLowerCase().includes(searchTerm) ||
                    JSON.stringify(tempMails[i].recipient).toLowerCase().includes(searchTerm)) {
                        newMailList.push(tempMails[i]);
                }
            }
            if (JSON.stringify(prevMails) !== JSON.stringify(newMailList)) {
                this.setState({
                    mails: newMailList
                });
            }
        } else {
            if (JSON.stringify(prevMails) !== JSON.stringify(MockMails)) {
                this.setState({
                    mails: MockMails
                });
            }
        }
    }

    componentWillUpdate(nextProps, nextStates) {
        this.updateMailList(nextProps.searchTerm, nextStates.mails);
    }

    componentDidUpdate() {
        this.props.mailListFunction(this.state.mails.length);
    }

    componentDidMount() {
        this.props.mailListFunction(this.state.mails.length);
    }

    render() {
        const mailContent = this.mailContent();
        console.log(this.searchTerm);
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