import React from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';

const RegisterWritingPresenter = (props) => {
    return (
        <div>
            <h3 style={{ marginLeft: "300px", marginTop: "50px" }}> 글 등록</h3>
            <div style={{ border: "2px solid gray", width: "1000px", marginLeft: "250px", marginTop: "50px" }}>
                <Form onSubmit={props.registerWritingHandler} style={{ margin: "50px 50px" }}>
                    <Form.Group style={{ width: '800px' }}>
                        <Form.Label>글 내용</Form.Label>
                        <FormControl as="textarea" aria-label="With textarea" name="writingContents" style={{ height: "150px" }} placeholder="내용을 입력하시오. " value={props.writingContents} onChange={props.changeHandler} />
                    </Form.Group>
                    <Button variant="primary" type="submit">글 등록</Button>
                </Form>
            </div>
            <br /><br /><br />
        </div>
    );
};

export default RegisterWritingPresenter;