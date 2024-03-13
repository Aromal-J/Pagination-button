import React, { useState } from "react";

function TestPagination() {
  // State to manage current page
  const [currentPage, setCurrentPage] = useState(1);

  // Function to generate an array of numbers for pagination
  const generatePaginationArray = () => {
    const numbers = [];
    for (let i = 1; i <= 100; i++) {
      numbers.push(i);
    }
    return numbers;
  };

  // Function to handle pagination click
  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Render pagination numbers
  const renderPaginationNumbers = () => {
    const numbers = generatePaginationArray();
    const startIndex = (currentPage - 1) * 9;
    const endIndex = Math.min(startIndex + 9, numbers.length);

    return numbers.slice(startIndex, endIndex).map((number) => (
      <div key={number} className="p-2">
        {number}
      </div>
    ));
  };

  return (
    <div className="pagination-container">
      <div className="flex p-2">{renderPaginationNumbers()}</div>
      <div className="pagination-controls">
        <button
          onClick={() => handlePageClick(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <span>{`Page ${currentPage}`}</span>
        <button
          onClick={() => handlePageClick(currentPage + 1)}
          disabled={currentPage === Math.ceil(100 / 9)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default TestPagination;
