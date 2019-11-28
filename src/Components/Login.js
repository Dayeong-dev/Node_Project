import React, { Component } from 'react';
import axios from 'axios'
import { Form, Button } from 'react-bootstrap';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: '',
            userPassword: '',
        }
    }

    loginHandler = (e) => {
        e.preventDefault();
        console.log(this.state.userId + " " + this.state.userPassword)
        axios.post('http://localhost:3000/users/signIn', { userId: this.state.userId, userPassword: this.state.userPassword })
            .then((res) => {
                if (res.data.result) {
                    console.log('sucess');
                    console.log(res.data.data);
                    this.props.loginHandler(res.data.data[0]);
                    this.props.history.push('/');
                } else {
                    console.log('fail')
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
                <h3 style={{ marginLeft: '360px', marginTop: '50px' }}>로그인</h3>
                <Form onSubmit={this.loginHandler} style={{ marginLeft: '360px', marginTop: '50px' }}>
                    <Form.Group controlId="formBasicEmail" style={{ width: '800px' }}>
                        <Form.Label>ID</Form.Label>
                        <Form.Control type="text" placeholder="Enter ID" onChange={this.changeHandler} name="userId" value={this.state.userId} />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword" style={{ width: '800px' }}>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={this.changeHandler} name="userPassword" value={this.state.userPassword} />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
  </Button>
                </Form>


            </div>
        );
    }
}

export default Login;