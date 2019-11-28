import React, { Component } from 'react';
import { Table, Button } from 'react-bootstrap';
import WritingListPresenter from './WritingListPresenter'
import { Link } from 'react-router-dom';

class WritingListContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            writingData : [],
        }
    }

    componentDidMount() {
        this.getWritingData();
    }

    getWritingData = () => {
        console.log("e")
        fetch("http://localhost:3000/writing/getWriting/" + `${this.props.match.params.topicItemCode}`)
           .then(response => {
               return response.json();
           })
           .then(data => {
                this.setState({writingData : data});
                console.log("3" + this.state.writingData)
        })
    }

    render() {
        return (
            <div>
                <br /><br />
                <h3 style={{ marginLeft: "700px" }}>글목록</h3>
                {this.state.writingData == [] ?
                <div>
                    <Table responsive style={{ width: '800px', margin: '10px 380px' }}>
                    <thead>
                        <tr>
                            <th>주제이름</th>
                            <th>주제목차</th>
                            <th>작성자</th>
                            <th>추천 수</th>
                        </tr>
                    </thead>
                    </Table>
                </div> : 
                <div>
                    <Table responsive style={{ width: '800px', margin: '10px 380px' }}>
                    <thead>
                        <tr>
                            <th>주제이름</th>
                            <th>주제목차</th>
                            <th>작성자</th>
                            <th>추천 수</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.writingData.map(writing =>
                            (
                                <WritingListPresenter
                                    key={writing.topicItemCode}
                                    {...writing}
                                />
                            )
                        )}
                    </tbody>
                    </Table>
                </div>
                }
                <Link to={"/registerWriting/" + this.props.match.params.topicItemCode} style={{ marginLeft: "1050PX" }}><Button>등록하기</Button></Link>
                <br/><br/>
            </div>
        );
    }
}

export default WritingListContainer;