import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';

const TopicList = (props) => {
    return (
        <tr>
            <td> <Link to={`/topicDetail/${props.topicCode}`}>{props.topicCode}</Link></td>
            <td><Link to={`/topicDetail/${props.topicCode}`}>{props.topicName}</Link></td>
            <td><Link to={`/topicDetail/${props.topicCode}`}>{props.topicWriter}</Link></td>
            <td><Link to={`/topicDetail/${props.topicCode}`}>{props.topicLike}</Link></td>
        </tr>
    );
};

export default TopicList;