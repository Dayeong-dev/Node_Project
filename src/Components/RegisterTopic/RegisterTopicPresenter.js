import React from 'react';
import { Button, Form, InputGroup, FormControl } from 'react-bootstrap';

//주제등록화면
const RegisterTopicPresenter = (props) => {
    return (
        <div>
            <h3 style={{ marginLeft: "300px", marginTop: "50px" }}> 연재주제 등록</h3>
            <div style={{ border: "2px solid gray", width: "1000px", marginLeft: "250px", marginTop: "50px" }}>
                <Form onSubmit={props.registerTopicHandler} style={{ margin: "50px 50px" }}>
                    {/* <input type="file" name="file" onChange={props.handleFileInput} /> */}
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
                    {/* <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text>With textarea</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl as="textarea" aria-label="With textarea" />
                    </InputGroup> */}

                    <Form.Group style={{ width: '800px' }}>
                        <Form.Label>연제할 주제 설명</Form.Label>
                        <FormControl as="textarea" aria-label="With textarea" name="topicContents" style={{ height: "150px" }} placeholder="topicContents" value={props.topicContents} onChange={props.changeHandler} />
                        {/* <Form.Control type="text" name="topicContents" style={{ height: "150px" }} placeholder="topicContents" value={props.topicContents} onChange={props.changeHandler} /> */}
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        주제등록
  </Button>

                </Form>
                <Button onClick={props.a}>console topicItem</Button>
            </div>
            <br /><br /><br />
        </div>
    );
};

export default RegisterTopicPresenter;