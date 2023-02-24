import React, { useState } from "react";
import ReactPaginate from "react-paginate";

import { busData } from "../Data/Busdata";

// eslint-disable-next-line no-unused-vars

const Paginate = () => {
  const pageSize = 3; // number of items to show per page
  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }
  const displayedData = busData.slice(
    currentPage * pageSize,
    (currentPage + 1) * pageSize
  );
  const [currentPage, setCurrentPage] = useState(0);
  return (
    <div>
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={Math.ceil(busData.length / pageSize)}
        onPageChange={handlePageClick}
        containerClassName={"pagination flex justify-center"}
        activeClassName={"bg-blue-500 text-white"}
        previousClassName={
          "bg-gray-300 px-3 py-2 rounded-l-md cursor-pointer hover:bg-gray-400"
        }
        nextClassName={
          "bg-gray-300 px-3 py-2 rounded-r-md cursor-pointer hover:bg-gray-400"
        }
        disabledClassName={"opacity-50 cursor-not-allowed"}
        breakClassName={"bg-gray-300 px-3 py-2 cursor-pointer"}
        pageClassName={"bg-gray-300 px-3 py-2 cursor-pointer hover:bg-blue-400"}
        activeLinkClassName={"bg-blue-500 text-white"}
        previousLinkClassName={"block"}
        nextLinkClassName={"block"}
        breakLinkClassName={"block"}
      />
    </div>
  );
};

export default Paginate;
