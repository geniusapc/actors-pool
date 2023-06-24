import React from 'react';

function StatsCard({ title, value, icon: Icon }) {
    return (
        <div className="flex flex-col shadow-md items-center py-4 space-y-2">
            <Icon className=" w-10 h-10 text-gray-400" />
            <div className=" text-primary text-xl font-semibold">{value}</div>
            <div className="text-gray300">{title}</div>
        </div>
    );
}

export default StatsCard;
