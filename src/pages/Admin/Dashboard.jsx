import React, { useEffect, useState } from 'react';
import { AdminLayout } from '../../components/Layout';
import { ReactComponent as UserIcon } from '../../assets/icons/user.svg';
import { useDashbordStatData } from '../../hooks/useStats';

const Dashboard = () => {
    const defaultStats = {
        nUser: 0,
        nTalent: 0,
        nUsersWithProfile: 0,
    };
    const [stats, setStats] = useState(defaultStats);
    const { data } = useDashbordStatData();


    useEffect(() => {
        const statsData = data?.data?.data
        if (statsData) setStats(statsData)
    }, [data])


    return (
        <AdminLayout className={'mt-10'}>
            <div className="grid grod-cols-1 md:grid-cols-3 space-y-4 md:space-y-0 md:space-x-4">
                <div className="flex flex-col shadow-md items-center py-4 space-y-2">
                    <UserIcon className=" w-10 h-10 text-gray-400" />
                    <div className=" text-primary text-xl font-semibold">{stats.nUser}</div>
                    <div className="text-gray300">Users</div>
                </div>
                <div className="flex flex-col shadow-md items-center py-4 space-y-2">
                    <UserIcon className=" w-10 h-10 text-gray-400" />
                    <div className=" text-primary text-xl font-semibold">{stats.nTalent}</div>
                    <div className="text-gray300">Total Talents</div>
                </div>
                <div className="flex flex-col shadow-md items-center py-4 space-y-2">
                    <UserIcon className=" w-10 h-10 text-gray-400" />
                    <div className=" text-primary text-xl font-semibold">{stats.nUsersWithProfile}</div>
                    <div className="text-gray300">Users with profile</div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default Dashboard;
