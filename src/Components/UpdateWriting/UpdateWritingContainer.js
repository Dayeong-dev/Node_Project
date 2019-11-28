import React, { Component } from 'react';
import UpdateWriting from './UpdateWritingPresenter'

class UpdateWritingContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            writingContents: '',
        }
    }
    componentWillMount = () => {
        this.setState({writingContents : this.props.match.params.writingContents});
    }

    putWritingHandler = (e) => {
        e.preventDefault();
        fetch("http://localhost:3000/writing/updateWriting", {
            method: 'PUT',
            headers:{
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify({
                userId : this.props.user.userId,
                topicItemCode : this.props.match.params.topicItemCode, 
                writingContents: this.state.writingContents
            }), 
        }).then((response) => {
            return response.json();
        }).then(res => { 
            if(res.result){
                alert("Success");
                this.props.history.push('/writingDetail/' + `${this.props.match.params.userId}` + "/" + `${this.props.match.params.topicItemCode}`);
            }
            else{
                alert("fail");
            }
        })
    }

    
    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value,

        })
    }


    render() {
        return (
            <div>
                <UpdateWriting
                    {...this.state}
                    putWritingHandler={this.putWritingHandler}
                    changeHandler={this.changeHandler}
                />
            </div>
        );
    }
}

export default UpdateWritingContainer;