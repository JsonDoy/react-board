import React, {Component} from "react";
import BoardService from "../service/BoardService";
import DelivaryResult from "./DelivaryResult";

class DelivaryComponent extends Component{

    constructor(props) {
        super(props);

        this.OPTIONS = [
            {value : "kr.cjlogistics" , name : "CJ대한통운"},
            {value : "kr.epost" , name : "우체국 택배"},
            {value : "kr.hanjin" , name : "한진택배"},
            {value : "kr.logen" , name : "로젠택배"},
            {value : "kr.lotte" , name : "롯데택배"}
        ];

        this.state = {
                delyCode: this.OPTIONS[0].value,
                delyName: '',
                inputLinkClicked: false
        };

        this.changeDelyCodeHandler = this.changeDelyCodeHandler.bind(this);
        this.changeDelyNameHandler = this.changeDelyNameHandler.bind(this);
    }

    componentWillMount(){
        //this.props.getSelectOptions();

    }

    changeDelyNameHandler = (evt) => {
        this.setState({delyName : evt.target.value});
    }

    changeDelyCodeHandler = (evt) =>{
        this.setState({delyCode : evt.target.value});
    }

    delivaryList = (evt) => {
        evt.preventDefault();
        let deli = {delyCode : this.state.delyCode, delyName : this.state.delyName};
        BoardService.getDelivary(deli).then(res => {
            console.log(res);
            if(res.data.statusCode != '999'){
                this.setState({
                    toId : res.data.toId,
                    toText : res.data.toText,
                    stateId : res.data.stateId,
                    stateText : res.data.stateText,
                    progressList : res.data.progressList,
                    carrierId : res.data.carrierId,
                    carrierName : res.data.carrierName,
                    carrierTel : res.data.carrierTel,
                    inputLinkClicked: true
                });
            }else{
                this.setState({
                    message : res.data.message,
                    inputLinkClicked: false
                })
            }
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
                            <h3 className="text-center">택배번호를 조회해 주세요</h3>
                            <div className = "card-body">
                                <div className = "form-group">
                                    <label> 택배번호 </label>
                                    <select style={{ width:'200px' , marginLeft : '10px'}}  onChange={this.changeDelyCodeHandler}>
                                        {this.OPTIONS.map((option) =>(
                                            <option key={option.value} value={option.value}>
                                                {option.name}
                                            </option>
                                        ))}
                                    </select>
                                    <input type="text" placeholder="택배번호" name="stCode" value={this.state.delyName} onChange={this.changeDelyNameHandler} className="form-control" style={{display:'inline-block',width:'200px' , marginLeft : '10px'}} />
                                    <button className="btn btn-success" onClick={this.delivaryList} style={{display:'inline-block', marginLeft : '10px' , marginBottom : '7px'}}>조회</button>
                                </div>
                            </div>
                        </div>
                        <div>
                            {this.state.inputLinkClicked? <DelivaryResult items={this.state} />:<div><p style={{textAlign : 'center', fontSize : '20px'}}><strong>{this.state.message}</strong></p></div>}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default DelivaryComponent;
