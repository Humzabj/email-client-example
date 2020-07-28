import React, { Component, Fragment } from "react";
import { Row, Col } from "react-bootstrap";
import "./MailList.css";
// import {MockMails} from './MockMails';
import mailArchiverLogo from "../../assets/images/logo1.png";
import MailItem from "./MailItem/MailItem.js";
import FilterBar from "./FilterBar/FilterBar.js";

class MailList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEmpty: false,
      dateOrderAscending: true,
      mails: [],
      mailsCopy: [],
    };
  }

  mailContent() {
    let content = (
      <div className="icon-fix">
        <img width="150" src={mailArchiverLogo} alt="Mail Archiver" />
      </div>
    );
    if (this.state.mails.length > 0) {
      const mailItems = this.state.mails.map((mail, i) => {
        return <MailItem mail={mail} key={i} />;
      });
      content = (
        <Fragment>
          <FilterBar />
          {mailItems}
        </Fragment>
      );
    }
    return content;
  }

  updateMailList(searchTerm, prevMails) {
    searchTerm = searchTerm.toLowerCase();
    if (searchTerm !== "") {
      let tempMails = this.state.mailsCopy;
      let newMailList = [];
      for (let i = 0; i < tempMails.length; i++) {
        if (
          tempMails[i].sender.toLowerCase().includes(searchTerm) ||
          tempMails[i].subject.toLowerCase().includes(searchTerm) ||
          tempMails[i].body.toLowerCase().includes(searchTerm) ||
          JSON.stringify(tempMails[i].recipient)
            .toLowerCase()
            .includes(searchTerm)
        ) {
          newMailList.push(tempMails[i]);
        }
      }
      if (JSON.stringify(prevMails) !== JSON.stringify(newMailList)) {
        this.setState({
          mails: newMailList,
        });
      }
    } else {
      if (JSON.stringify(prevMails) !== JSON.stringify(this.state.mailsCopy)) {
        this.setState({
          mails: this.state.mailsCopy,
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

  componentWillMount() {
    this.initialDataFetch();
  }

  initialDataFetch() {
    fetch("http://192.168.1.129:3001/")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            mails: result.Items,
            mailsCopy: result.Items,
          });
        },
        (error) => {
          console.log(error);
        }
      );
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
