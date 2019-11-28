import React, { Component } from 'react';
import RegisterTopicRegister from './RegisterTopicPresenter'
import axios from 'axios'
import { Form, Button } from 'react-bootstrap';

class RegisterTopicContainer extends Component {
    state = {
        topicName: '',
        topicContents: '',
        topicSubName1: '',
        topicSubName2: '',
        topicSubName3: '',
        topicItem: [],
        i: 1
    }

    registerTopicHandler = (e) => {
        e.preventDefault();
        this.setState({
            topicItem: [
                ...this.state.topicItem,
                { topicItemName: this.state.topicSubName1 },
                { topicItemName: this.state.topicSubName2 },
                { topicItemName: this.state.topicSubName3 }
            ]
        })
        var d = new Date();
        const topicCode = d.getTime();
        console.log('주제,목차등록하기')
        axios.post('http://localhost:3000/registerTopic', {
            topicCode: topicCode, userId: this.props.user.userId, topicName: this.state.topicName,
            topicCompletionState: 0
        })
            .then((res) => {
                if (res.data.result === 1) {
                    this.state.topicItem.map(item => {
                        axios.post('http://localhost:3000/registerTopicItem', { topicItemName: item.topicItemName, topicItemState: this.state.i--, topicCode: topicCode })
                            .then((res) => {
                                if (res.data.result === 1) {
                                    console.log('sucess');
                                    this.props.history.push('/');
                                } else {
                                    console.log('fail')
                                    this.props.history.push('/');
                                }
                            })
                    })
                } else {
                    console.log('fail')
                    this.props.history.push('/');
                }
            })

    }
    a = () => {
        console.log(this.state.topicItem)
    }


    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value,

        })
    }

    render() {
        return (
            <div>
                <RegisterTopicRegister
                    {...this.state}
                    registerTopicHandler={this.registerTopicHandler}
                    changeHandler={this.changeHandler}
                    a={this.a}
                />
            </div>
        );
    }
}

export default RegisterTopicContainer;