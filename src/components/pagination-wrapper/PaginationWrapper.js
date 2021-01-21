import React from "react";

export const PaginationWrapper = ({
                                      children,
                                      onPrevClick,
                                      onNextClick,
                                      totalPages,
                                      currentPage,
                                      onFirstPage,
                                      onLastPage
                                  }) => {

    const handlePrevPage = () => {
        if (currentPage - 1 >= 0) {
            onPrevClick && onPrevClick(currentPage - 1)
        }
    }

    const handleNextPage = () => {
        if (currentPage + 1 <= totalPages) {
            onNextClick && onNextClick(currentPage + 1)
        }
    }

    const handleFirstPage = () => {
        onFirstPage && onFirstPage(1)
    }
    const handleLastPage = () => {
        onLastPage && onLastPage(totalPages)
    }

    return (
        <div>
            <div>
                <button disabled={currentPage === 1} onClick={handleFirstPage}>First page</button>

                <button disabled={currentPage <= 1} onClick={handlePrevPage}>Prev</button>

                <span>{currentPage} of {totalPages}</span>

                <button disabled={currentPage >= totalPages} onClick={handleNextPage}>Next</button>

                <button disabled={currentPage === totalPages} onClick={handleLastPage}>Last page</button>
            </div>
            {children}
        </div>
    );
}

