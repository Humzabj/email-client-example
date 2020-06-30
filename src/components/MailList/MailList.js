import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import './MailList.css';

class MailList extends Component {
    render() {
        return (
            <Row id="MailList" className="mail-box-border">
              <Col>
                <div className="mail-box">
                    {/* Router view here for emails etc. */}
                </div>
              </Col>
            </Row>
        );
    }
}

export default MailList;