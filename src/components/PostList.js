import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import CommonTable from "./table/CommonTable";
import CommonTableColumn from "./table/CommonTableColumn";
import CommonTableRow from "./table/CommonTableRow";
import Pagination from "./Pagination";
import {postList} from "../Data";
import './Post.css'

import data from "bootstrap/js/src/dom/data";

const PostList = props => {
    const [dataList, setDataList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState(15);

    useEffect(() =>{
        setDataList(postList);
    }, [ ])

    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const curreptPosts = dataList.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = pageNum => setCurrentPage(pageNum);

    return (
        <>
            <div className="containers">
            <CommonTable headersName={['글번호', '제목', '등록일', '조회수']}>
                {
                    dataList ? dataList.map((item, index) => {
                        return (
                            <CommonTableRow key={index}>
                                <CommonTableColumn>{ item.no }</CommonTableColumn>
                                <CommonTableColumn>
                                    <Link to={`/postView/${item.no}`}>{ item.title }</Link>
                                </CommonTableColumn>
                                <CommonTableColumn>{ item.createDate }</CommonTableColumn>
                                <CommonTableColumn>{ item.readCount }</CommonTableColumn>
                            </CommonTableRow>
                        )
                    }) : ''
                }
            </CommonTable>
            <Pagination postsPerPage={postPerPage} totalPosts={dataList.length} paginate={paginate} />
            </div>
        </>
    )
}

export default PostList;
