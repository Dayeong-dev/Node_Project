import React, { Component } from 'react';
import axios from 'axios'
import { Table, Button } from 'react-bootstrap';
import { Router, Route, Link } from 'react-router-dom';
import TopicListPresenter from './TopicListPresenter'

class TopicListContainer extends Component {

    state = {
        topicData: [
            { topicCode: "1", topicName: "윤다영바보", topicWriter: "김선민", topicLike: "30" }
        ]

    }

    componentDidMount() {
        this.getTopicData();
    }

    //주제 리스트 불러오기
    getTopicData = () => {
        axios.get('http://localhost:3000/getTopicList2')
            .then((res) => {
                if (res.data.result === 1) {
                    console.log('sucess');
                    this.setState({
                        topicData: res.data.data
                    })

                } else {
                    console.log('fail')
                    this.props.history.push('/');
                }
            })
    }

    render() {
        const topicList = this.state.topicData.map(topic =>
            (
                <TopicListPresenter
                    key={topic.topicCode}
                    {...topic}

                />
            )
        )
        return (
            <div>

                <br /><br />
                <h3 style={{ marginLeft: "700px" }}>주제목록</h3>
                <Table responsive style={{ width: '800px', margin: '10px 380px' }}>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>주제</th>
                            <th>주제작성자</th>

                        </tr>
                    </thead>
                    <tbody>
                        {(topicList)}
                    </tbody>
                </Table>
                <Link to="/registerTopic" style={{ marginLeft: "1050PX" }}><Button>등록하기</Button></Link>
                <br />   <br />

            </div>
        );
    }
}

export default TopicListContainer;