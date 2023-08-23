import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import DataTable from 'react-data-table-component';
import Moment from 'react-moment';

import { useTalentsData } from '../../../hooks/useTalentData';
import { DirectoryHeader } from '../../../components/Directory';
import Button from '../../../components/Button/Button';

function Talents() {
    const location = useLocation();
    const navigate = useNavigate()
    const params = new URLSearchParams(location.search);
    const paramValue = params.get('q');
    const query = {
        select: 'photo,gallery,firstname,lastname,profession,activeSince,username,status,visibility',
        q: paramValue,
    };

    const { data, isLoading } = useTalentsData({ query });
    const talents = data?.data?.data?.talent;

    const showOutsourceDetailsHandler = (talent) => {
        navigate(`${talent?.username}`)
    }
    const columns = getColumn({ showOutsourceDetailsHandler })

    return (
        <>
            <DirectoryHeader hideProjectButton />

            <DataTable
                data={talents}
                pagination={true}
                progressPending={isLoading}
                columns={columns}
                customStyles={{ headCells: { style: { color: '#334D6E', fontSize: '13px' } } }}
                responsive
                striped
            />
        </>
    );
}

export default Talents;



const getColumn = ({ showOutsourceDetailsHandler }) => {
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
                return <div>{row?.firstname} {row?.lastname}</div>;
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
                return <div>{row?.status}</div>;
            },
        },
        {
            name: 'Visible',
            sortable: true,
            selector: (row) => row?.visibility,
            cell: function cell(row) {
                return <div>{row?.visibility ? "Yes" : "No"}</div>;
            },
        },
        {
            name: 'Action',
            cell: function cell(row) {
                return (
                    <div className='py-2'>
                        <Button variant='outlined' onClick={() => showOutsourceDetailsHandler(row)} size="xsmall">
                            View
                        </Button>
                    </div>
                );
            },
        },


    ];

    return columns;
};

