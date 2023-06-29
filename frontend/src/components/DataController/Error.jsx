import React from 'react';

function Error() {
    return (
        <div className="flex items-center justify-center h-[50vh]">
            <div className="flex flex-col items-center space-x-2">
                <span className="text-gray-900 font-medium">Oops something went wrong</span>
                <button>Retry</button>
            </div>
        </div>
    );
}

export default Error;
