import React, {Component} from "react";
import BoardService from '../service/BoardService';

class ListBoardComponent extends Component{

    constructor(props) {
        super(props);

        this.state = { boards : [], page : 1, limit : 10}

        this.createBoard = this.createBoard.bind(this);
    }

    componentDidMount() {
        BoardService.getBoards().then((res) => {
            this.setState({ boards: res.data});
        });
    }

    createBoard(){
        this.props.history.push('/create-board/');
    }

    readBoard(num,stcode){
        this.props.history.push(`/read-board/${num}/${stcode}`);
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Boards List</h2>
                <div className = "row">
                    <button className="btn btn-primary" onClick={this.createBoard}> 글 작성</button>
                </div>
                <div className ="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                        <tr>
                            <th>글 번호</th>
                            <th>stock번호 </th>
                            <th>stock명 </th>
                            <th>가격 </th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.boards.map(
                                board =>
                                    <tr key = {board.num}>
                                        <td> <a onClick = {() => this.readBoard(board.num, board.stCode)}>{board.num} </a> </td>
                                        <td> {board.stCode} </td>
                                        <td> {board.stName} </td>
                                        <td> {board.stPrice} </td>
                                    </tr>
                            )
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListBoardComponent;
