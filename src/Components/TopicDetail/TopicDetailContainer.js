import React, { Component } from 'react';
import axios from 'axios';
import TopicDetailPresenter from './TopicDetailPresenter'

class TopicDetailContainer extends Component {

    state = {

        topicCode: '',
        topicName: '',
        topicWriter: '',
        topicLike: '',
        topicName: '',
        topicContents: '',
        topicSubName1: '',
        topicSubName2: '',
        topicSubName3: '',
        topicUpdateReq: '',
        list: [],
        topicItemState: 1
    }

    componentDidMount() {

        this.getTopicDetail()
        this.setState({ topicCode: this.props.match.params.topicCode, topicUpdateReq: this.props.topicUpdateReq })
    }
    a = () => {
        console.log(this.state.list)
    }

    goWritingList1 = () => {
        if (this.state.topicItemState1 == 1) {
            this.props.history.push(`/writingList/${this.state.topicItemCode1}`)
        }
        else {
            alert('기간이 아닙니다')
        }
    }
    goWritingList2 = () => {
        if (this.state.topicItemState2 == 1) {
            this.props.history.push(`/writingList/${this.state.topicItemCode2}`)
        }
        else {
            alert('기간이 아닙니다')
        }
    }
    goWritingList3 = () => {
        if (this.state.topicItemState3 == 1) {
            this.props.history.push(`/writingList/${this.state.topicItemCode3}`)
        }
        else {
            alert('기간이 아닙니다')
        }
    }
    //주제 정보 불러오기
    getTopicDetail = () => {
        axios.get('http://localhost:3000/getTopicDetail/' + `${this.props.match.params.topicCode}`)
            .then((res) => {
                console.log(res.data.data)
                this.setState({
                    topicCode: this.props.match.params.topicCode,
                    topicName: res.data.data[0].topicName,
                    topicWriter: res.data.data[0].userId,
                    topicContents: res.data.data[0].topicContents,
                    topicItemCode1: res.data.data[0].topicItemCode,
                    topicSubName1: res.data.data[0].topicItemName,
                    topicSubName2: res.data.data[1].topicItemName,
                    topicItemCode2: res.data.data[1].topicItemCode,
                    topicSubName3: res.data.data[2].topicItemName,
                    topicItemCode3: res.data.data[2].topicItemCode,
                    topicItemState1: res.data.data[0].topicItemState,
                    topicItemState2: res.data.data[1].topicItemState,
                    topicItemState3: res.data.data[2].topicItemState,
                })
            })

    }



    //주제수정
    updateTopic = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/updateTopic/' + `${this.props.match.params.topicCode}`,
            {
                topicName: this.state.topicName, topicContents: this.state.topicContents
            }
        )
            .then((res) => {
                if (res.data.result === 1) {
                    console.log('sucess');

                } else {
                    console.log('fail')
                    this.props.history.push('/');
                }
            })
        axios.post('http://localhost:3000/updateTopicItem/' + this.state.topicItemCode1,
            {
                topicItemName: this.state.topicSubName1, topicItemState: this.state.topicItemState
            }
        )
            .then((res) => {
                if (res.data.result === 1) {
                    console.log('sucess');

                } else {
                    console.log('fail')
                    this.props.history.push('/');
                }
            })
        axios.post('http://localhost:3000/updateTopicItem/' + this.state.topicItemCode2,
            {
                topicItemName: this.state.topicSubName2, topicItemState: this.state.topicItemState
            }
        )
            .then((res) => {
                if (res.data.result === 1) {
                    console.log('sucess');

                } else {
                    console.log('fail')
                    this.props.history.push('/');
                }
            })
        axios.post('http://localhost:3000/updateTopicItem/' + this.state.topicItemCode3,
            {
                topicItemName: this.state.topicSubName3, topicItemState: this.state.topicItemState
            }
        )
            .then((res) => {
                if (res.data.result === 1) {
                    console.log('sucess');
                    this.props.setTopicUpdateFalseHandler()
                    this.props.history.push('/')
                } else {
                    console.log('fail')
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
                <TopicDetailPresenter
                    {...this.state}
                    getTopicDetail={this.getTopicDetail}
                    updateTopic={this.updateTopic}
                    changeHandler={this.changeHandler}
                    a={this.a}
                    goWritingList1={this.goWritingList1}
                    goWritingList2={this.goWritingList2}
                    goWritingList3={this.goWritingList3}
                />
            </div>
        );
    }
}

export default TopicDetailContainer;