import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavDropdown, Nav, Form, FormControl, Button } from 'react-bootstrap';

const Header = props => {

    const { user } = props;

    return (
        <div>
            <Navbar bg="white" expand="lg" style={{ marginLeft: '50px', marginTop: '40px' }}>
                <Navbar.Brand style={{ fontSize: '30pt' }}><Link to="/">Union Writing System</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className="mr-auto">
                        {
                            user === null ?
                                (
                                    <React.Fragment>
                                        <Nav.Link >
                                            <Link to="/login">로그인</Link>&nbsp;&nbsp;
                                            <Link to="/join">회원가입</Link>&nbsp;&nbsp;
                                            <Link to="/topicList" >주제목록</Link>&nbsp;&nbsp;
                                            {/* <Link to="/mypage" >마이페이지</Link>&nbsp;&nbsp; */}
                                        </Nav.Link>

                                    </React.Fragment>
                                )
                                :
                                (
                                    <React.Fragment>
                                        <Nav.Link >{user.userId}&nbsp;&nbsp;&nbsp;&nbsp;
                                                <Link to="/mypage" >마이페이지</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                <Link to="/topicList" >주제목록</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                <Link to="/completeTopic">완결된 책</Link>

                                        </Nav.Link>
                                        <Button variant="link" onClick={props.logoutHandler}>logout</Button>

                                    </React.Fragment>
                                )
                        }

                    </Nav>
                    <Form inline>
                        <Form.Control type="text" className="mr-sm-2" name="searchWord" placeholder="Search" />
                        <Nav.Link ><Link to="/search"><Button variant="outline-primary">Search</Button></Link></Nav.Link>
                    </Form>
                </Navbar.Collapse>

            </Navbar>

        </div >
    );
}

export default Header;
