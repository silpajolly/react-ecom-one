import React from "react";

function Pagination({ currentPage, totalPages, onPageChange }) {
  const visiblePages = 3;
  let startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));
  let endPage = Math.min(totalPages, startPage + visiblePages - 1);

  if (endPage - startPage < visiblePages - 1) {
    startPage = Math.max(1, endPage - visiblePages + 1);
  }

  return (
    <div className="d-flex justify-content-center">
      <button
        className="btn btn-primary me-2"
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
      >
        First
      </button>
      <button
        className="btn btn-primary me-2"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>

      {startPage > 1 && <span className="mx-2"></span>}
      {[...Array(endPage - startPage + 1)].map((_, i) => {
        const pageNumber = startPage + i;
        return (
          <button
            key={pageNumber}
            className={`btn btn-light mx-1 ${currentPage === pageNumber ? "active" : ""}`}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </button>
        );
      })}
      {endPage < totalPages && <span className="mx-2"></span>}

      <button
        className="btn btn-primary ms-2"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
      <button
        className="btn btn-primary ms-2"
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
      >
        Last
      </button>
    </div>
  );
}

export default Pagination;
