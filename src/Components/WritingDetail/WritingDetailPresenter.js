import React from 'react';
import { Col, Image, Container, Row, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const WritingDetailPresenter = (props) => {
    const styles = {
        marginTop: '90px',
        marginLeft: '20px',
        listStyle: 'none'
    }

    return (
        <div>
            <Container>
                <Row >
                    <Col xs={6} md={40}>
                        <ul style={styles}>
                            <li>주제명 : {props.topicName}</li><br />
                            <li>챕터명 : {props.topicItemName}</li><br />
                            <li>작성자 : {props.userId}</li><br />
                            <li>추천 수: {props.pickCount}</li><br />
                            <li>글 내용: {props.writingContents}</li>
                            <br />
                        </ul>
                    </Col>
                </Row>
                {props.userId == props.userId2 ?
                <div>
                <Link to = {"/updateWriting/" +  `${props.userId}` + "/" + `${props.topicItemCode}` + "/" + `${props.writingContents}`}><Button>수정하기</Button></Link>
                <Button onClick = {props.deleteWriting}>삭제하기</Button>
                </div>:
                <div>
                {props.pickState ? 
                    <Button onClick = {props.registerWritingPick}>좋아요</Button>:
                    <Button onClick = {props.deleteWritingPick}>좋아요 취소</Button>
                }
                </div>
                }
                <Link to = {"/writingList/" +  `${props.topicItemCode}`}><Button>목록</Button></Link>
            </Container>
        </div>
    );
};

export default WritingDetailPresenter;