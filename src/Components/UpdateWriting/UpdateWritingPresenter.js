import React from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';

const UpdateWritingPresenter = (props) => {
    return (
        <div>
            <h3 style={{ marginLeft: "300px", marginTop: "50px" }}> 글 수정</h3>
            <div style={{ border: "2px solid gray", width: "1000px", marginLeft: "250px", marginTop: "50px" }}>
                <Form onSubmit={props.putWritingHandler} style={{ margin: "50px 50px" }}>
                    <Form.Group style={{ width: '800px' }}>
                        <Form.Label>글 내용</Form.Label>
                        <FormControl as="textarea" aria-label="With textarea" name="writingContents" style={{ height: "150px" }}  value={props.writingContents} onChange={props.changeHandler} />
                    </Form.Group>
                    <Button variant="primary" type="submit">글 수정</Button>
                </Form>
            </div>
            <br /><br /><br />
        </div>
    );
};

export default UpdateWritingPresenter;