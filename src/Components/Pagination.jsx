import { useEffect, useState } from "react";

const Pagination = () => {
  const [buttonsLength, setButtonsLenth] = useState(Array(9).fill(null));
  const [currentPage, setCurrentPage] = useState(1);

  const selectPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div className="flex justify-center gap-2 ">
      <button
        className={`px-2 bg-slate-200  ${
          currentPage === 1 ? "hover:bg-slate-200" : "hover:bg-slate-300"
        }`}
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage <= 1}
      >
        Previous
      </button>
      <div className="flex p-2 gap-1">
        {buttonsLength.map((_, i) => {
          let pageNumber = i + 1;
          return (
            <div
              key={i}
              className={`p-2 px-4 bg-slate-200 font-medium cursor-pointer hover:bg-slate-300 select-none rounded-lg${
                pageNumber === currentPage
                  ? "bg-red-400 border border-black rounded-lg hover:bg-blue-500 text-white"
                  : ""
              } `}
              onClick={() => selectPage(pageNumber)}
            >
              {pageNumber}
            </div>
          );
        })}
      </div>
      <button
        className={`p-2 bg-slate-200  ${
          currentPage === buttonsLength.length
            ? "hover:bg-slate-200"
            : "hover:bg-slate-300"
        }`}
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === buttonsLength.length}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
