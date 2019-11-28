import React from 'react';
import { Col, Image, Container, Row, Button, Form } from 'react-bootstrap';
import { InputGroup, FormControl } from 'react-bootstrap';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';

const TopicDetailPresenter = (props) => {
    const styles = {
        width: '500px',
        marginLeft: '150px'
    }
    const styles2 = {
        marginTop: '90px',
        marginLeft: '20px',
        listStyle: 'none'
    }

    return (
        <div>
            {props.topicUpdateReq === true ? (
                <div>
                    <Button onClick={props.a}>df</Button>

                    <Form onSubmit={props.updateTopic} style={{ marginLeft: '360px', marginTop: '50px' }}>
                        <Form.Group style={{ width: '800px' }}>
                            <Form.Label>연제할 주제 제목</Form.Label>
                            <Form.Control type="text" name="topicName" placeholder="topicName" value={props.topicName} onChange={props.changeHandler} />
                        </Form.Group>
                        <Form.Group style={{ width: '800px' }}>
                            <Form.Label>목차1(1주차)</Form.Label>
                            <Form.Control type="text" placeholder="topicSubName1" name="topicSubName1" value={props.topicSubName1} onChange={props.changeHandler} />
                        </Form.Group>
                        <Form.Group style={{ width: '800px' }}>
                            <Form.Label>목차2(2주차)</Form.Label>
                            <Form.Control type="text" placeholder="topicSubName2" name="topicSubName2" value={props.topicSubName2} onChange={props.changeHandler} />
                        </Form.Group>
                        <Form.Group style={{ width: '800px' }}>
                            <Form.Label>목차3(3주차)</Form.Label>
                            <Form.Control type="text" placeholder="topicSubName3" name="topicSubName3" value={props.topicSubName3} onChange={props.changeHandler} />
                        </Form.Group>
                        <Form.Group style={{ width: '800px' }}>
                            <Form.Label>연제할 주제 설명</Form.Label>
                            <Form.Control as="textarea" aria-label="With textarea" name="topicContents" style={{ height: "150px" }} placeholder="topicContents" value={props.topicContents} onChange={props.changeHandler} />
                            {/* <Form.Control type="text" name="topicContents" style={{ height: "150px" }} placeholder="topicContents" value={props.topicContents} onChange={props.changeHandler} /> */}
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
  </Button>
                    </Form>
                </div>
            ) : (<Container>
                <Row >
                    <Col xs={6} md={40}>
                        <Button onClick={props.a}>df</Button>
                        <ul style={styles2}>
                            <li>연재할 주제 제목 : {props.topicName}</li><br />
                            <li>글쓴이 : {props.topicWriter}</li><br />
                            <li>목차1(1주차) : {props.topicSubName1} &nbsp;&nbsp;&nbsp;&nbsp; <Button onClick={props.goWritingList1}>글보기</Button></li><br />
                            <li>목차2(2주차):{props.topicSubName2} &nbsp;&nbsp;&nbsp;&nbsp; <Button onClick={props.goWritingList2}>글보기</Button></li><br />
                            <li>목차3(3주차):{props.topicSubName3} &nbsp;&nbsp;&nbsp;&nbsp; <Button onClick={props.goWritingList3}>글보기</Button></li><br />
                            <li>주제설명:{props.topicContents}</li>
                            <br />
                        </ul>
                    </Col>
                </Row>
            </Container>)}

        </div>
    );
};

export default TopicDetailPresenter;