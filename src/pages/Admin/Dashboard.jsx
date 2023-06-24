import React, { useEffect, useState } from 'react';

import { ReactComponent as UserIcon } from '../../assets/icons/user.svg';
import { useDashbordStatData } from '../../hooks/useStats';
import StatsCard from '../../components/AdminDashbord/StatsCard';

const Dashboard = () => {
    const defaultStats = {
        nAdmins: 0,
        nUsers: 0,
        nTalents: 0,
        nUsersWithProfile: 0,
    };
    const [stats, setStats] = useState(defaultStats);
    const { data } = useDashbordStatData();


    useEffect(() => {
        const statsData = data?.data?.data
        if (statsData) setStats(statsData)
    }, [data])


    return (
        <div className="grid grod-cols-1 md:grid-cols-4 space-y-4 md:space-y-0 md:space-x-4">
            <StatsCard title={"Admin"} value={stats.nAdmins} icon={UserIcon} />
            <StatsCard title={"User"} value={stats.nUsers} icon={UserIcon} />
            <StatsCard title={"Total Talents"} value={stats.nTalents} icon={UserIcon} />
            <StatsCard title={"Users with profile"} value={stats.nUsersWithProfile} icon={UserIcon} />
        </div>
    );
};

export default Dashboard;
