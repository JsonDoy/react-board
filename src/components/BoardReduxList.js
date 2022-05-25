import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {Link} from 'react-router-dom';
import BoardService from "../service/BoardService";

const BoardReduxList = () => {

    const [boardList, setBoardList] = useState([])

    useEffect( () => {
        BoardService.getBoards().then((res) => {
            setBoardList(res.data);
        });
    },[]);

    return(
        <>
            <h2 align="center">게시판</h2>
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
                    boardList.map((board, i) => (
                        <tr key={board.num}>
                            <td className="text-center">{board.num}</td>
                            <td><Link to={`/updateView/${board.num}/${board.stCode}`}>{ board.stCode }</Link></td>
                            <td>{board.stName}</td>
                            <td>{board.stPrice}</td>
                            <td>{board.regDt}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </>
    )
}

export default BoardReduxList;
