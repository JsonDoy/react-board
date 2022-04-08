import React, {Component} from "react";

class DelivaryResult extends Component{
    render() {
        const {items} = this.props;
        return(
            <div className = "form-group">
                <label style={{fontSize : '30px'}}> 상품진행상태 </label>
                <input type="text" placeholder="상품진행상태" name="" disabled={true} defaultValue={items.stateText} className="form-control"/>
                <input type="text" name="" defaultValue={items.toId} disabled={true} className="form-control"/>
                <input type="text" name="" defaultValue={items.toText} disabled={true} className="form-control"/>
                <input type="text" name="" defaultValue={items.stateId} disabled={true} className="form-control"/>
                <input type="text" name="" defaultValue={items.stateText} disabled={true} className="form-control"/>
                <input type="text" name="" defaultValue={items.carrierId} disabled={true} className="form-control"/>
                <input type="text" name="" defaultValue={items.carrierName} disabled={true} className="form-control"/>
                <input type="text" name="" defaultValue={items.carrierTel} disabled={true} className="form-control"/>
                {items.progressList && items.progressList.length > 0 ?
                    items.progressList.map((data,i) => (
                        <li key={i} style={{ display: 'block', border : '1px solid #ddd', margin: '10px 0'}}>
                            <p>시간 : <span>{data.time}</span></p>
                            <p>상품상태코드 : <span>{data.statusId}</span></p>
                            <p>상품상태명 : <span>{data.statusText}</span></p>
                            <p>상품위치 : <span>{data.location}</span></p>
                            <p>기타 : <span>{data.description}</span></p>
                        </li>

                    ))
                    : <div></div>
                }
            </div>
        )
    }
}

export default DelivaryResult;
