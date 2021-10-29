import React from "react";

const Pagination = ({postsPerPage, totalPosts, currentPage, paginate}) => {
    const pageNumbers = [];

    for(let i=0; i <= Math.ceil(totalPosts/postsPerPage); i++){
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} >
                        <a onClick={() => paginate(number)} href='!#'>
                            {number}
                        </a>
                    </li>
                ))}            </ul>
        </nav>
    )
}

export default Pagination
