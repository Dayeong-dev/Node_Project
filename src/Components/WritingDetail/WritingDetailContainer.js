import React, { Component } from 'react';
import WritingDetailPresenter from './WritingDetailPresenter'

class WritingDetailContainer extends Component {
    constructor(props){
        super(props);

        this.state = {
            userId : "",
            topicItemCode : "", 
            topicCode : "",
            topicItemName : "", 
            topicName : "",
            writingContents : "", 
            pickCount : 0,

            userId2 : "", 
            pickState : true
        }
    }

    componentWillMount = () => {
        this.getWritingDetail();
        this.getWritingPick();
        this.setState({userId : this.props.match.params.userId, topicItemCode : this.props.match.params.topicItemCode, userId2 : this.props.user.userId})
    }

    getWritingDetail = () => {
        fetch("http://localhost:3000/writing/getWritingDetail/" + `${this.props.match.params.userId}` + "/" + `${this.props.match.params.topicItemCode}`)
           .then(response => {
               return response.json();
           })
           .then(data => {
                this.setState({
                    topicCode : data[0].topicCode,
                    topicName : data[0].topicName,
                    topicItemName : data[0].topicItemName,
                    writingContents : data[0].writingContents,
                    pickCount : data[0].pickCount
                });
                console.log("3" + data);
        })
    }

    deleteWriting = () => {
        fetch("http://localhost:3000/writing/deleteWriting/" + `${this.props.user.userId}` + "/" + `${this.props.match.params.topicItemCode}`, {
            method: 'DELETE',
            headers:{
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify({ }), 
        }).then((response) => {
            return response.json();
        }).then(res => { 
            if(res.result){
                alert("Success");
                this.props.history.push('/writingList/' + `${this.props.match.params.topicItemCode}`);
            }
            else{
                alert("fail");
            }
        })
    }

    getWritingPick = () => {
        fetch("http://localhost:3000/writing/getWritingPick/" + `${this.props.match.params.userId}` + "/" + `${this.props.match.params.topicItemCode}` + "/" + `${this.props.user.userId}`)
           .then(response => {
               return response.json();
           })
           .then(data => {
                this.setState({
                    pickState : data.result
                });
                console.log("33" + data.result);
        })
    }

    registerWritingPick = () => {
        fetch("http://localhost:3000/writing/registerWritingPick/" , {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify({
                userId : this.props.match.params.userId,
                topicItemCode : this.props.match.params.topicItemCode,
                readerId : this.props.user.userId
            }), 
        }).then((response) => {
            return response.json();
        }).then(res => { 
            if(res.result){
                alert("Success");
                window.location.href = `http://localhost:3001/writingDetail/${this.props.match.params.userId}/${this.props.match.params.topicItemCode}`;
            }
            else{
                alert("fail");
            }
        })
    }

    deleteWritingPick = () => {
        fetch("http://localhost:3000/writing/deleteWritingPick/" + `${this.props.match.params.userId}` + "/" + `${this.props.match.params.topicItemCode}` + "/" + `${this.props.user.userId}`, {
            method: 'DELETE',
            headers:{
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify({ }), 
        }).then((response) => {
            return response.json();
        }).then(res => { 
            if(res.result){
                alert("Success");
                window.location.href = `http://localhost:3001/writingDetail/${this.props.match.params.userId}/${this.props.match.params.topicItemCode}`;
            }
            else{
                alert("fail");
            }
        })
    }

    render() {
        return (
            <div>
                <div>
                    <WritingDetailPresenter
                        {...this.state} deleteWriting = {this.deleteWriting} deleteWritingPick = {this.deleteWritingPick} registerWritingPick = {this.registerWritingPick}
                    />
                </div>
            </div>
        );
    }
}

export default WritingDetailContainer;