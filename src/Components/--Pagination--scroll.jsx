import React, { useEffect, useState } from "react";

function Pagination({ currentPage, totalPages, onPageChange }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let ticking = false; // Prevents excessive function calls

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollTop = window.scrollY;
          const scrollBottom = window.innerHeight + scrollTop;
          
          // Load NEXT page when user reaches near the bottom
          if (scrollBottom >= document.body.offsetHeight - 100 && !loading && currentPage < totalPages) {
            setLoading(true);
            onPageChange(currentPage + 1);
          }

          // Load PREVIOUS page when user scrolls near the top
          if (scrollTop <= 100 && !loading && currentPage > 1) {
            setLoading(true);
            onPageChange(currentPage - 1);
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentPage, totalPages, loading, onPageChange]);

  useEffect(() => {
    setLoading(false); // Reset loading state when page changes
  }, [currentPage]);

  return (
    <div className="text-center mt-3">
      {loading && <span className="spinner-border text-primary"></span>}
    </div>
  );
}

export default Pagination;
