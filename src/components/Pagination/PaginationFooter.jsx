import React, { useState } from 'react'

function PaginationFooter({ visiblePages = 20, totalCount = 100 }) {

    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = totalCount / visiblePages



    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        // Perform any additional logic or API calls for fetching data based on the new page number
    };
    const getPaginationRange = () => {
        const halfVisiblePages = Math.floor(visiblePages / 2);
        let start = currentPage - halfVisiblePages;
        let end = currentPage + halfVisiblePages;

        if (start < 1) {
            start = 1;
            end = Math.min(visiblePages, totalPages);
        }

        if (end > totalPages) {
            end = totalPages;
            start = Math.max(1, totalPages - visiblePages + 1);
        }

        return Array.from({ length: Math.min(end - start + 1, totalPages) }, (_, index) => start + index);
    };

    const isFirstPage = currentPage === 1;
    const isLastPage = currentPage === totalPages;
    const isLastRange = currentPage * visiblePages >= totalCount;

    return (
        <div className="flex justify-center mt-4">
            <button
                className="mx-2 px-3 py-1 rounded bg-gray-200 text-gray-700"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={isFirstPage}
            >
                Previous
            </button>
            {getPaginationRange().map((pageNumber) => (
                <button
                    key={pageNumber}
                    className={`mx-2 px-3 py-1 rounded ${pageNumber === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
                        }`}
                    onClick={() => handlePageChange(pageNumber)}
                >
                    {pageNumber}
                </button>
            ))}
            <button
                className="mx-2 px-3 py-1 rounded bg-gray-200 text-gray-700"
                disabled={isLastPage || isLastRange}
                onClick={() => handlePageChange(currentPage + 1)}
            >
                Next
            </button>
            <p className="mx-4 text-gray-700">
                Showing {(currentPage - 1) * visiblePages + 1} - {currentPage * visiblePages} of {totalCount} items
            </p>
        </div>
    );

}

export default PaginationFooter