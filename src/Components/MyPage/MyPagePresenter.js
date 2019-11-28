import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';

const MyPagePresenter = (props) => {
    return (
        <tr>
            <td style={{ width: '130px', textAlign: "center" }}><Link to={`/topicDetail/${props.topicCode}`}>{props.topicCode}</Link></td>
            <td style={{ width: '130px', textAlign: "center" }}><Link to={`/topicDetail/${props.topicCode}`}>{props.topicName}</Link></td>
            <td style={{ width: '130px', textAlign: "center" }}><Link to={`/topicDetail/${props.topicCode}`}>{props.userId}</Link></td>
            <td style={{ width: '130px', textAlign: "center" }}><Link to={`/topicDetail/${props.topicCode}`} ><Button style={{ width: "100px" }} onClick={props.setTopicUpdateReq}>수정하기</Button></Link></td>
            <td ><Button style={{ width: "100px" }} onClick={() => props.deleteTopic(props.topicCode)}>삭제하기</Button></td>
        </tr>
    );
};

export default MyPagePresenter;