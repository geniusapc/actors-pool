import React from 'react';
import Loading from './Loading';
import Error from './Error';
import Empty from './Empty';

const DataStatus = ({ isLoading, isError, refetch, empty, emptyComponent: EmptyComponent, children }) => {

    if (isLoading) return <Loading />;
    if (isError) return <Error refetch={refetch} />;
    if (empty) return (
        EmptyComponent ? <EmptyComponent /> : < Empty />
    );

    return children;
};

export default DataStatus;