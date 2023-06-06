import React from 'react';
import Loading from './Loading';
import Empty from './Empty';
import PaginationFooter from './PaginationFooter';
import Error from './Error';

function DataController({
    isLoading,
    error,
    emptyComponent: EmptyComponent,
    paginate = false,
    data,
    Render,
    refetch = () => { },
}) {
    if (isLoading) return <Loading />;
    if (error) return <Error refetch={refetch} />;
    if (!data?.length) return (
        EmptyComponent ? <EmptyComponent /> : < Empty />
    );

    return (
        <>
            <Render data={data} />
            {paginate && <PaginationFooter />}
        </>
    );
}

export default DataController;
