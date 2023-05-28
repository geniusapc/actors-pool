import React from 'react';
import Loading from './Loading';
import Empty from './Empty';
import PaginationFooter from './PaginationFooter';
import Error from './Error';

function DataController({
    isLoading,
    error,
    empty,
    children,
    paginate = false,
    refetch = () => { },
}) {
    if (isLoading) return <Loading />;
    if (error) return <Error refetch={refetch} />;
    if (empty) return <Empty />;

    return (
        <>
            {children}
            {paginate && <PaginationFooter />}
        </>
    );
}

export default DataController;
