import React, {Component} from "react";

class DelivaryResult extends Component{
    render() {
        const {items} = this.props;
        return(
                <div className = "form-group">
                    <label> 상품진행상태 </label>
                    <input type="text" placeholder="상품진행상태" name="" defaultValue={items.stateText} className="form-control"/>
                    <input type="text" name="" defaultValue={items.toId} className="form-control"/>
                    <input type="text" name="" defaultValue={items.toText} className="form-control"/>
                    <input type="text" name="" defaultValue={items.stateId} className="form-control"/>
                    <input type="text" name="" defaultValue={items.stateText} className="form-control"/>
                    <input type="text" name="" defaultValue={items.carrierId} className="form-control"/>
                    <input type="text" name="" defaultValue={items.carrierName} className="form-control"/>
                    <input type="text" name="" defaultValue={items.carrierTel} className="form-control"/>
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
                        : <div>데이터가 존재하지 않습니다.</div>
                    }
                </div>
        )
    }
}

export default DelivaryResult;
