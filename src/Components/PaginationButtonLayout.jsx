import React, { useState } from 'react'
import PaginationButton from './PaginationButton';


const PaginationButtonLayout = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 10; // Example: Total number of pages
  
    const handlePageChange = (page) => {
      setCurrentPage(page);
      // You can implement logic to fetch data for the selected page here
    };
  
  return (
    <div className="container mx-auto">
    {/* Your content goes here */}
    <PaginationButton
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={handlePageChange}
    />
  </div>

  )
}

export default PaginationButtonLayout