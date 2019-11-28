import React, { Component } from 'react';
import CompleteTopicPresenter from './CompleteTopicPresenter'
import { Table, Button } from 'react-bootstrap'
import { Router, Route, Link } from 'react-router-dom';
import axios from 'axios';

class CompleteTopicContainer extends Component {
    state = {
        completeTopicList: [],
    }

    componentDidMount() {
        this.getCompleteTopicList()

    }

    getCompleteTopicList = () => {
        axios.post('http://localhost:3000/getCompleteTopicList')
            .then((res) => {
                if (res.data.result === 1) {
                    console.log(res.data.data)
                    console.log('sucess');
                    this.setState({
                        completeTopicList: res.data.data
                    })
                } else {
                    console.log('fail')
                    this.props.history.push('/');
                }
            })
    }

    render() {
        const completeTopicList = this.state.completeTopicList.map(topic =>
            (
                <CompleteTopicPresenter
                    key={topic.topicCode}
                    {...topic}
                />
            )
        )
        return (
            <div>
                <h3 style={{ marginLeft: "720px" }}>완결된 책</h3>
                <Table responsive style={{ width: '650px', margin: '10px 470px' }}>
                    <thead>
                        <tr >
                            <th style={{ width: '130px', textAlign: "center" }}>제목(주제)</th>
                            <th style={{ width: '130px', textAlign: "center" }}>주제 작성자</th>
                        </tr>
                    </thead>
                    <tbody>
                        {(completeTopicList)}
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default CompleteTopicContainer;