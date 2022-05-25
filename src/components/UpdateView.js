import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import BoardService from "../service/BoardService";

const UpdateView = ({history, location, match}) => {

    const [data, setData] = useState('');
    const {num, stcode} = match.params;

    useEffect(() => {
        BoardService.getOneBoard(num, stcode).then(res => {
            setData(res.data);
        });
    },[]);

    const changeInput = e => {
        setData({
            ...data,
            [e.target.name] : e.target.value
        })
    }

    const updateBoard = e => {
        e.preventDefault();
        BoardService.updateBoard(data).then(res => {
            console.log("data getNum =" + data);
            this.props.history.push('/boardReduxList');
        });
    }

    return (
        <>
            <h2 align="center">게시글 상세정보</h2>

            <div className="post-view-wrapper">
                {
                    data ? (
                        <>
                            <div className="post-view-row">
                                <label>게시글 번호</label>
                                <input type="text" name="num" className="" value={data.num}  onChange={changeInput}/>
                            </div>
                            <div className="post-view-row">
                                <label>주식 번호</label>
                                <input type="text" name="stCode" className="" value={data.stCode} onChange={changeInput}/>
                            </div>
                            <div className="post-view-row">
                                <label>주식명</label>
                                <input type="text" name="stName" className="" value={data.stName} onChange={changeInput}/>
                            </div>
                            <div className="post-view-row">
                                <label>주식가격</label>
                                <input type="text" name="stPrice" className="" value={data.stPrice} onChange={changeInput}/>
                            </div>
                            <div className="post-view-row">
                                <label>등록일</label>
                                <label>{ data.regDt }</label>
                            </div>
                        </>
                    ) : '해당 게시글을 찾을 수 없습니다.'
                }
                <button className="post-view-go-list-btn" onClick={() => history.goBack()}>목록으로 돌아가기</button>
                <button className="btn btn-success" onClick={updateBoard}>수정</button>
            </div>
        </>
    )

}

export default UpdateView;
