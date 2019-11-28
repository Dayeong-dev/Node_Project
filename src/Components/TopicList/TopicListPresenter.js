import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';

const TopicListPresenter = (props) => {
    return (
        <tr>
            <td><Link to={`/topicDetail/${props.topicCode}`}>{props.topicCode}</Link></td>
            <td><Link to={`/topicDetail/${props.topicCode}`}>{props.topicName}</Link></td>
            <td><Link to={`/topicDetail/${props.topicCode}`}>{props.userId}</Link></td>

        </tr>
    );
};

export default TopicListPresenter;