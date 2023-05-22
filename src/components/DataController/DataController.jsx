import React from 'react'
import Loading from '../Loading/Loading'
import Empty from '../Empty/Empty'
import PaginationFooter from '../Pagination/PaginationFooter'

function DataController({ isLoading, error, empty, children, paginate = false }) {
    if (isLoading) return <Loading />
    if (error) return <div>error</div>
    if (empty) return <Empty />

    return (
        <>
            {children}

            {paginate && <PaginationFooter />}
        </ >

    )
}

export default DataController