import React from 'react';
import { Link } from 'react-router-dom';

const WritingListPresenter = (props) => {
    return (
        <tr>
            <td><Link to={`/writingDetail/${props.userId}/${props.topicItemCode}`}>{props.topicName}</Link></td>
            <td><Link to={`/writingDetail/${props.userId}/${props.topicItemCode}`}>{props.topicItemName}</Link></td>
            <td><Link to={`/writingDetail/${props.userId}/${props.topicItemCode}`}>{props.userId}</Link></td>
            <td><Link to={`/writingDetail/${props.userId}/${props.topicItemCode}`}>{props.pickCount}</Link></td>
        </tr>
    );
};

export default WritingListPresenter;