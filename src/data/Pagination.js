import React, { useEffect, useState } from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }
    let startPagesIndex =0;
    let endPagesIndex = 20;
    // const [startPagesIndex, setStartPagesIndex] = useState(0);
    // const [endPagesIndex, setEndPagesIndex] = useState(10);
    let currentStreamOfPages = pageNumbers.slice(startPagesIndex, endPagesIndex);
    // const [currentStreamOfPages, setCurrenStreamOfPages] = useState([]);
    
    useEffect(() => {
         }, []);
    
    const handleStreamOfPages = (pageNumber, index) => {
        if (index == currentStreamOfPages.length - 1) {
            startPagesIndex = 10;
            endPagesIndex = 20;
            currentStreamOfPages.push(pageNumbers.slice(10,20))
        }
        paginate(pageNumber);
    };
 
    const renderPageNumbers =  currentStreamOfPages.slice(startPagesIndex, endPagesIndex).map((number, index) => {
           return(<li key={number} className='page-item '>
                <a onClick={() => handleStreamOfPages(number, index)} className='page-link '>
                    {number}
                </a>
            </li> 
        )});
        
    return (
        <nav>
            <ul className='pagination justify-content-center'>
                {renderPageNumbers}
            </ul>
        </nav>
    );
};

export default Pagination;