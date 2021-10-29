import React, {Component} from "react";
import BoardService from "../service/BoardService";

class CreateBoardComponent extends Component{

    constructor(props) {
        super(props);

        this.state = {
            stCode : '',
            stName : '',
            stPrice : ''
        }

        this.changeStCodeHandler = this.changeStCodeHandler.bind(this);
        this.changeStNameHandler = this.changeStNameHandler.bind(this);
        this.changeStPriceHandler = this.changeStPriceHandler.bind(this);

    }

    changeStCodeHandler = (evt) =>{
        this.setState({stCode : evt.target.value});
    }

    changeStNameHandler = (evt) =>{
        this.setState({stName : evt.target.value});
    }

    changeStPriceHandler = (evt) => {
        this.setState({stPrice : evt.target.value});
    }

    createBoard = (evt) => {
        evt.preventDefault();
        let board = {
            stCode : this.state.stCode,
            stName : this.state.stName,
            stPrice : this.state.stPrice
        }

        console.log("board -> " + JSON.stringify(board));
        BoardService.createBoard(board).then(res => {
            this.props.history.push('/board');
        });
    }

    cancel(){
        this.props.history.push('/board');
    }

    render() {
        return (
            <div>
                <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">새글을 작성해주세요</h3>
                            <div className = "card-body">
                                <form>
                                    <div className = "form-group">
                                        <label> StCode </label>
                                        <input type="text" placeholder="stCode" name="stCode" className="form-control"
                                               value={this.state.stCode} onChange={this.changeStCodeHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> StName  </label>
                                        <textarea placeholder="stName" name="stName" className="form-control"
                                                  value={this.state.stName} onChange={this.changeStNameHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> StPrice  </label>
                                        <input placeholder="stPrice" name="stPrice" className="form-control"
                                               value={this.state.stPrice} onChange={this.changeStPriceHandler}/>
                                    </div>
                                    <button className="btn btn-success" onClick={this.createBoard}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }



}

export default CreateBoardComponent;
