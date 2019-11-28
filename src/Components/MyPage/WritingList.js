import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';

const WritingList = (props) => {
    return (
        <tr>
            <td style={{ width: '130px', textAlign: "center" }}><Link to={`/writingDetail/${props.userId}/${props.topicItemCode}`}>{props.topicName}</Link></td>
            <td style={{ width: '130px', textAlign: "center" }}><Link to={`/writingDetail/${props.userId}/${props.topicItemCode}`}>{props.topicItemName}</Link></td>
            <td style={{ width: '130px', textAlign: "center" }}><Link to={`/writingDetail/${props.userId}/${props.topicItemCode}`}>{props.userId}</Link></td>
        </tr>
    );
};

export default WritingList;