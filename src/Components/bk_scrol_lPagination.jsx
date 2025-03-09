import React, { useEffect, useState } from "react";

function Pagination({ currentPage, totalPages, onPageChange }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 &&
        !loading &&
        currentPage < totalPages
      ) {
        setLoading(true);
        onPageChange(currentPage + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentPage, totalPages, loading, onPageChange]);

  useEffect(() => {
    setLoading(false);
  }, [currentPage]);

  return (
    <div className="text-center mt-3">
      {loading && <span className="spinner-border text-primary"></span>}
    </div>
  );
}

export default Pagination;
