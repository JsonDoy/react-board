import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { createBrowserHistory  } from 'history'

import 'bootstrap/dist/css/bootstrap.css';

import ListBoardComponent from "./components/ListBoardComponent";
import HeaderComponents from "./components/HeaderComponents";
import FooterComponents from "./components/FooterComponents";
import CreateBoardComponent from "./components/CreateBoardComponent";
import ReadBoardComponent from "./components/ReadBoardComponent";
import PostList from "./components/PostList";
import BoardListContainer from "./components/containers/BoardListContainer";
import DelivaryComponent from "./components/DelivaryComponent";
import updateView from "./components/UpdateView";
import BoardReduxList from "./components/BoardReduxList";

const browserHistory = createBrowserHistory();

function App() {
    return (
        <div>
            <Router>
                <HeaderComponents />
                <div className="container">
                    <Switch>
                        <Route path = "/" exact component = {ListBoardComponent}></Route>
                        <Route path="/board" component = {ListBoardComponent}></Route>
                        <Route path = "/create-board" component = {CreateBoardComponent}></Route>
                        <Route path = "/read-board/:num/:stcode" component = {ReadBoardComponent}></Route>
                        <Route path = "/postList" component = {PostList}></Route>
                        <Route path = "/boardList" component = {BoardListContainer}></Route>
                        <Route path = "/delivary" component = {DelivaryComponent}></Route>
                        <Route path = "/updateView/:num/:stcode" component={updateView}></Route>
                        <Route path = "/boardReduxList" component={BoardReduxList}></Route>
                    </Switch>
                </div>
                <FooterComponents/>
            </Router>
        </div>
    );
}

export default App;
