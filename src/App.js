import React, { Component } from 'react';
import history from './history';
import { Router, Route } from 'react-router-dom';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';

import Main from './Components/Main';
import Header from './Components/Header';
import Login from './Components/Login';
import Join from './Components/Join';
import RegisterTopic from './Components/RegisterTopic';
import TopicList from './Components/TopicList';
import TopicDetail from './Components/TopicDetail';
import MyPage from './Components/MyPage';
import CompleteTopic from './Components/CompleteTopic';
import RegisterWriting from './Components/RegisterWriting';
import WritingDetail from './Components/WritingDetail';
import WritingList from './Components/WritingList';
import UpdateWriting from './Components/UpdateWriting';



class App extends Component {
  state = {
    user: null,
    //주제글 수정 요구 상태
    topicUpdateReq: false,
  }

  async componentWillMount() {
    await this._getUserSession();

  }

  //세션관리
  _getUserSession = () => {
    if (window.sessionStorage.getItem('user')) {
      this.setState({
        user: JSON.parse(window.sessionStorage.getItem('user'))
      })
    }
  }

  loginHandler = (item) => {
    this.setState({
      user: item,
    })
    window.sessionStorage.setItem('user', JSON.stringify(this.state.user));

  }

  logoutHandler = (item) => {
    this.setState({
      user: null
    })
    history.push('/');
    window.sessionStorage.clear();
  }

  setTopicUpdateTrueHandler = () => {
    this.setState({ topicUpdateReq: true })
  }

  setTopicUpdateFalseHandler = () => {
    this.setState({ topicUpdateReq: false })
  }



  render() {
    const { user } = this.state;
    return (
      <Router history={history}>
        <Header user={user} logoutHandler={this.logoutHandler} />
        <Route exact path="/" render={(props) => <Main {...props} {...this.state} />} />
        <Route path="/join" render={(props) => <Join {...props} />} />
        <Route path="/login" render={(props) => <Login {...props} loginHandler={this.loginHandler} />} />
        <Route path="/registerTopic" render={(props) => <RegisterTopic {...props} {...this.state} />} />
        <Route path="/registerWriting/:topicItemCode" render={(props) => <RegisterWriting {...props} {...this.state} />} />
        <Route path="/topicList" render={(props) => <TopicList {...props} {...this.state} />} />
        <Route path="/writingList/:topicItemCode" render={(props) => <WritingList {...props} {...this.state} />} />
        <Route path="/topicDetail/:topicCode" render={(props) => <TopicDetail {...props} {...this.state} setTopicUpdateFalseHandler={this.setTopicUpdateFalseHandler} />} />
        <Route path="/writingDetail/:userId/:topicItemCode" render={(props) => <WritingDetail {...props} {...this.state} />} />
        <Route path="/mypage" render={(props) => <MyPage {...props} {...this.state} setTopicUpdateTrueHandler={this.setTopicUpdateTrueHandler} />} />
        <Route path="/completeTopic" render={(props) => <CompleteTopic {...props} {...this.state} />} />
        <Route path="/updateWriting/:userId/:topicItemCode/:writingContents" render={(props) => <UpdateWriting {...props} {...this.state} />} />
      </Router>
    );
  }
}

export default App;