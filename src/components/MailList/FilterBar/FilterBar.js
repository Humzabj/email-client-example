import React from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import filterArrowIcon from '../../../assets/images/icon_arrow01.svg';

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

export default FilterBar;