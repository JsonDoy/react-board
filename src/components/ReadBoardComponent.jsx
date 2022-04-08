import React, {Component} from "react";
import BoardService from "../service/BoardService";

class ReadBoardComponent extends Component{
    constructor(props) {
        super(props);
        console.log("readBoard -> " + this.props.match.params.num);
        this.state = {
            num : this.props.match.params.num,
            stcode : this.props.match.params.stcode,
            board : {}
        }
    }

    componentDidMount() {
        BoardService.getOneBoard(this.state.num, this.state.stcode).then(res => {
           this.setState({board: res.data});
        });
    }

    returnBoardType(typeNo){
        let type = null;
        if(typeNo == 1){
            type = '자유게시판';
        }else if( typeNo == 2){
            type = '질문과 답변 게시판';
        }else {
            type = '타입 미지정';
        }

        return (
            <div className = "row">
                <label> Board Type : </label> {type}
            </div>
        )
    }

    returnDate(cTime) {
        return (
            <div className = "row">
                <label>생성일 : [ {cTime} ] </label>
            </div>
        )
    }

    goToList() {
        this.props.history.push('/board');
    }

    render() {
        return (
            <div>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className ="text-center"> Read Detail</h3>
                    <div className = "card-body">

                        {this.returnBoardType(this.state.board.type)}

                        <div className = "row">
                            <label> stCode </label> : {this.state.board.stCode}
                        </div>

                        <div className = "row">
                            <label> stName </label> : <br></br>
                            <textarea value={this.state.board.stName} readOnly/>
                        </div >

                        <div className = "row">
                            <label> stPrice  </label>:
                            {this.state.board.stPrice}
                        </div>

                        {this.returnDate(this.state.board.regDt) }

                        <button className="btn btn-primary" onClick={this.goToList.bind(this)} style={{marginLeft:"10px"}}>글 목록으로 이동</button>
                    </div>
                </div>

            </div>
        );
    }

}

export default ReadBoardComponent;
