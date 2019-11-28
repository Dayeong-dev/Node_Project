import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';

const WritingList = (props) => {
    return (
        <tr>
            <td style={{ width: '130px', textAlign: "center" }}><Link to={`/topicDetail/${props.topicItemCode}`}>{props.topicItemName}</Link></td>
            <td style={{ width: '130px', textAlign: "center" }}><Link to={`/topicDetail/${props.topicItemCode}`}>{props.userId}</Link></td>
            <td style={{ width: '130px', textAlign: "center" }}><Link to={`/topicDetail/${props.topicItemCode}`} ><Button style={{ width: "100px" }} onClick={props.setTopicUpdateReq}>수정하기</Button></Link></td>
            <td style={{ width: '130px', textAlign: "center" }}><Button style={{ width: "100px" }} onClick={() => props.deleteTopic(props.topicItemCode)}>삭제하기</Button></td>
        </tr>
    );
};

export default WritingList;