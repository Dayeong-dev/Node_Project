import React, { Component } from 'react';
import axios from 'axios'
import { Form, Button } from 'react-bootstrap';
class Join extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: '',
            userPassword: '',
            userName: '',

        }
    }
    joinHandler = (e) => {
        e.preventDefault();
        console.log(this.state.userId + " " + this.state.userPassword + " " + this.state.userName)
        axios.post('http://localhost:3000/join', { userId: this.state.userId, userPassword: this.state.userPassword, userName: this.state.userName })
            .then((res) => {
                if (res.data.result === 1) {
                    console.log('sucess')
                    this.props.history.push('/');
                }
            })

    }
    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div>
                <br />
                <h3 style={{ marginLeft: '360px', marginTop: '50px' }}>회원가입</h3>

                <Form onSubmit={this.joinHandler} style={{ marginLeft: '360px', marginTop: '50px' }}>
                    <Form.Group controlId="formBasicEmail" style={{ width: '800px' }}>
                        <Form.Label>ID</Form.Label>
                        <Form.Control type="text" placeholder="Enter ID" onChange={this.changeHandler} name="userId" value={this.state.userId} />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword" style={{ width: '800px' }}>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={this.changeHandler} name="userPassword" value={this.state.userPassword} />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword" style={{ width: '800px' }}>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="userName" onChange={this.changeHandler} name="userName" value={this.state.userName} />
                    </Form.Group>


                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    <br /><br /><br /><br /><br />
                </Form>
            </div>
        );
    }
}

export default Join;