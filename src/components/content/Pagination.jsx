export const Pagination = ({ pageInfo, currentPage, onPageChange }) => {
  const totalPages = pageInfo.pages || 1;

  //https://www.w3schools.com/jsref/met_win_scrollto.asp
  const handlePrevious = () => {
    if (pageInfo.prev) {
      onPageChange(currentPage - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleNext = () => {
    if (pageInfo.next) {
      onPageChange(currentPage + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handlePageClick = (page) => {
    onPageChange(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Sayfa numaralarını hesapla (max 7 sayfa göster)
  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 7;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 4) {
        for (let i = 1; i <= 5; i++) pages.push(i);
        pages.push("...");
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 3) {
        pages.push(1);
        pages.push("...");
        for (let i = totalPages - 4; i <= totalPages; i++) pages.push(i);
      } else {
        pages.push(1);
        pages.push("...");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) pages.push(i);
        pages.push("...");
        pages.push(totalPages);
      }
    }
    return pages;
  };

  return (
    <div className="flex items-center justify-center gap-2 py-8">
      {/* Previous Button */}
      <button
        onClick={handlePrevious}
        disabled={!pageInfo.prev}
        className="px-4 py-2 bg-slate-800 border border-cyan-500/30 text-cyan-400 rounded hover:bg-cyan-400 hover:text-black transition disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-slate-800 disabled:hover:text-cyan-400"
      >
        Previous
      </button>

      {/* Page Numbers */}
      {getPageNumbers().map((page, index) =>
        page === "..." ? (
          <span key={`ellipsis-${index}`} className="px-3 py-2 text-gray-500">
            ...
          </span>
        ) : (
          <button
            key={page}
            onClick={() => handlePageClick(page)}
            className={`px-4 py-2 rounded transition ${
              currentPage === page
                ? "bg-cyan-400 text-black font-semibold"
                : "bg-slate-800 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-400 hover:text-black"
            }`}
          >
            {page}
          </button>
        )
      )}

      {/* Next Button */}
      <button
        onClick={handleNext}
        disabled={!pageInfo.next}
        className="px-4 py-2 bg-slate-800 border border-cyan-500/30 text-cyan-400 rounded hover:bg-cyan-400 hover:text-black transition disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-slate-800 disabled:hover:text-cyan-400"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
