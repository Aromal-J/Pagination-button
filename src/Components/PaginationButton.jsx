import React, { useState } from "react";

const PaginationButton = ({ currentPage, totalPages, onPageChange }) => {
  //   const [array, setArray] = useState(Array(11).fill(null));

  return (

    <div className="flex justify-center mt-8 ">
      <ul className="pagination">
        {/* Previous button */}
        <li className="inline-block mr-2">
          <button
            className="px-4 py-2 bg-gray-200 text-gray-700 border border-gray-300 rounded cursor-pointer hover:bg-slate-300"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
        </li>

        {/* Page buttons */}
        {[...Array(totalPages)].map((_, index) => {
          const pageNumber = index + 1;
          return (
            <li
              key={pageNumber}
              className={`inline-block mr-2"${
                currentPage === pageNumber ? "active" : ""
              }`}
            >
              <button
                className="px-4 py-2 bg-gray-200 text-gray-700 border border-gray-300 rounded cursor-pointer hover:bg-slate-300"
                onClick={() => onPageChange(pageNumber)}
              >
                {pageNumber}
              </button>
            </li>
          );
        })}

        {/* Next button */}
        <li className="inline-block mr-2">
          <button
            className="px-4 py-2 bg-gray-200 text-gray-700 border border-gray-300 rounded cursor-pointer hover:bg-slate-300"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </li>
      </ul>
    </div>

    // <div className="container mx-auto">
    //   <div className="flex justify-center">
    //     {array.map((_, index) => {
    //       return (
    //         <div key={index} className="bg-blue-200 p-4 m-2">
    //           {index + 1}
    //         </div>
    //       );
    //     })}
    //   </div>
    // </div>
  );
};

export default PaginationButton;
