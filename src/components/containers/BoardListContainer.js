import React, {Component} from "react";
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import BoardList from "../BoardList";
import PagingNation from "../PagingNation";
import BoardService from "../../service/BoardService";
import { createBrowserHistory  } from 'history'

const browserHistory = createBrowserHistory();

const propTypes = {
    location : PropTypes.object.isRequired,
}

class BoardListContainer extends Component{
    constructor(props) {
        super(props);
        this.boardView = this.boardView.bind(this);
        this.pageChange = this.pageChange.bind(this);

        this.state = {
            page: 1,
            boardList: [],
            totalRow: 0,
            pageCount: 10,
            rowCount: 10,
        };

    }

    componentDidMount() {
        this.pageChange(PagingNation.getPage(this.state.page));
    }

    boardView(num){
        browserHistory.push({pathname : `/${num}`, query : this.props.location.query});
    }

    pageChange(page, limit){
        BoardService.getBoardList(page, limit).then((res) => {
            this.setState({page, boardList : res.data.content, totalRow : res.data.totalElements});
        });

        PagingNation.updateBrowserHistory(page, browserHistory);
    }

    render() {
        return (
            <div>
                <BoardList boardList={this.state.boardList} onBoardView={this.boardView}
                           totalRow={this.state.totalRow} page={this.state.page}
                           pageCount={this.state.pageCount} rowCount={this.state.rowCount} />
                <PagingNation className="text-center"
                              page={this.state.page}
                              totalRow={this.state.totalRow}
                              pageCount={this.state.pageCount}
                              rowCount={this.state.rowCount}
                              onPageChange={this.pageChange} />
                <Link className="btn btn-default btn-sm" to="/post">
                    <i className="fa fa-bars" /> 등록
               </Link>
            </div>
        );
    }
}

BoardListContainer.propTypes = propTypes;

export default BoardListContainer;
