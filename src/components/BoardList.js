import React, {Component} from "react";
import PropTypes from 'prop-types';

const propTypes = {
    boardList : PropTypes.array,
    onBoardView : PropTypes.func.isRequired,
    totalRow : PropTypes.number.isRequired,
    page : PropTypes.number.isRequired,
    rowCount : PropTypes.number.isRequired,
}

const defaultProps = {
    boardList : [],
}

class BoardList extends Component{

    constructor(props) {
        super(props);
        console.log('constructor');
        this.handlerBoardView = this.handlerBoardView.bind(this);
    }

    componentWillMount() {
        console.log('componentWillMount');
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate');
        return true / false;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    handlerBoardView(e, boardIdx, stcode){
        e.preventDefault();
        this.props.onBoardView(boardIdx,stcode);
    }

    render() {
        const virtualSeq = this.props.totalRow - (this.props.rowCount * (this.props.page - 1));

        return(
            <table className="table table-hover">
                <colgroup>
                    <col width="50" />
                    <col width="100" />
                    <col width="100" />
                    <col width="100" />
                    <col width="100" />
                </colgroup>
                <thead>
                <tr>
                    <th scope="col">번호</th>
                    <th scope="col">종목번호</th>
                    <th scope="col">종목명</th>
                    <th scope="col">가격</th>
                    <th scope="col">등록일</th>
                </tr>
                </thead>
                <tbody>
                {
                    this.props.boardList.map((board, i) => (
                        <tr key={board.num}>
                            <td className="text-center">{virtualSeq - i}</td>
                            <td><a href="" onClick={e => this.handlerBoardView(e, board.num, board.stCode)}>{board.stCode}</a></td>
                            <td>{board.stName}</td>
                            <td>{board.stPrice}</td>
                            <td>{board.regDt}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        )
    }

}

BoardList.propTypes = propTypes;

BoardList.defaultProps = defaultProps;

export default BoardList;
