import React, { useState } from 'react'
import styles from './Pagination.module.css'

const Pagination = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize}) => {

    const pagesCount = Math.ceil(totalItemsCount / pageSize)

    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const portionCount = Math.ceil(pagesCount / portionSize);
    const [portionNumber, setPortionNumber] = useState(1);
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    const rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div>
            {portionNumber > 1 && <button onClick={() => { setPortionNumber(portionNumber - 1) }}>Prev</button>}
            {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => {
                    return <span key={p} className={`${currentPage === p && styles.currentPage} ${styles.pages}`}
                        onClick={() => onPageChanged(p)}>{p}</span>
                })}
            {portionCount > portionNumber && <button onClick={() => { setPortionNumber(portionNumber + 1) }}>Next</button>}

        </div>
    )
}

export default Pagination;