import React from 'react'

function Loading() {
    return (
        <div className="flex items-center justify-center h-[50vh]">
            <div className="flex items-center space-x-2">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900"></div>
                <span className="text-gray-900 font-medium">Loading...</span>
            </div>
        </div>
    )
}

export default Loading