import React, { useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DataTable from 'react-data-table-component';
import Moment from 'react-moment';

import { useTalentsData } from '../../../hooks/useTalentData';
import { AdminDirectoryHeader } from '../../../components/Directory';



function Talents() {
    const navigate = useNavigate()
    const [param, setParam] = useState()
    const [selectedTalent, setSelectedTalent] = useState([])

    const searchParam = (value) => {
        setParam(value)

    }

    const query = {
        select: 'photo,firstname,lastname,profession,activeSince,username,status,isProfileVisible',
        q: param,
    };

    const { data, isLoading, refetch } = useTalentsData({ query });
    const talents = data?.data?.data?.talent;

    const showOutsourceDetailsHandler = (talent) => {
        navigate(`${talent?.username}`)
    }


    // eslint-disable-next-line react-hooks/exhaustive-deps
    const columns = useMemo(() => getColumn({ showOutsourceDetailsHandler }), [])
    const onSelectedRowsChangeHandler = (e) => setSelectedTalent(e?.selectedRows)

    return (
        <>
            <AdminDirectoryHeader selectedTalent={selectedTalent} setFilter={searchParam} refetchTalent={refetch} />
            <DataTable
                data={talents}
                pagination={true}
                progressPending={isLoading}
                columns={columns}
                customStyles={{ headCells: { style: { color: '#334D6E', fontSize: '13px' } } }}
                responsive
                striped
                dense
                actions
                selectableRows
                onSelectedRowsChange={onSelectedRowsChangeHandler}
            />
        </>
    );
}

export default Talents;



const getColumn = () => {
    const columns = [
        {
            name: 'No',
            cell: function cell(_, index) {
                return index + 1;
            },
            width: '80px',
        },
        {
            name: 'Name',
            sortable: true,
            selector: (row) => row?.firstname,
            cell: function cell(row) {
                return <Link className='underline' to={row?.username}>{row?.firstname} {row?.lastname}</Link>;
            },
        },
        {
            name: 'Username',
            sortable: true,
            selector: (row) => row?.username,
            cell: function cell(row) {
                return <div>{row?.username}</div>;
            },
        },
        {
            name: 'Profession',
            sortable: true,
            selector: (row) => row?.profession,
            cell: function cell(row) {
                return <div>{row?.profession}</div>;
            },
        },
        {
            name: 'Active Since',
            sortable: true,
            selector: (row) => row?.profession,
            cell: function cell(row) {
                return <Moment format="MMM YYYY">{row?.activeSince}</Moment>;
            },
        },
        {
            name: 'Status',
            sortable: true,
            selector: (row) => row?.status,
            cell: function cell(row) {
                return <div>{row?.status?.replace(/_/g, ' ')}</div>;
            },
        },
        {
            name: 'Visible',
            sortable: true,
            selector: (row) => row?.isProfileVisible,
            cell: function cell(row) {
                return <div>{row?.isProfileVisible ? "Yes" : "No"}</div>;
            },
        }
    ];

    return columns;
};

