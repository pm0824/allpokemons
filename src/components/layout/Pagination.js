import React from 'react'

const Pagination = ({ gotoNextPage, gotoPrevPage }) => {
    return (
        <div className='pagination'>
            {gotoPrevPage &&
                <button
                    className='pagination__btn'
                    onClick={gotoPrevPage}>
                    PREVIOUS
                </button>}
            {gotoNextPage &&
                <button
                    className='pagination__btn'
                    onClick={gotoNextPage}>
                    NEXT
                </button>}
        </div>
    )
}

export default Pagination
