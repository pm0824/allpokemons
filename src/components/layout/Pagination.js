import React from 'react'

const Pagination = ({ gotoNextPage, gotoPrevPage }) => {
    return (
        <div>
            {gotoPrevPage && <button onClick={gotoPrevPage}>PREVIOUS</button>}
            {gotoNextPage && <button onClick={gotoNextPage}>NEXT</button>}
        </div>
    )
}

export default Pagination
