import React from "react";

const Pagination = () => {
  return (
    <div className="flex items-center space-x-2">
      {/* Previous Button */}
      <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 text-gray-700 hover:bg-orange-500 hover:text-white">
        &lt;
      </button>

      {/* Page Numbers */}
      <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-orange-500 text-white font-bold  hover:bg-orange-500 hover:text-white">
        01
      </button>
      <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 text-gray-700  hover:bg-orange-500 hover:text-white">
        02
      </button>

      {/* Dots */}
      <span className="w-10 h-10 flex items-center justify-center text-gray-700  hover:bg-orange-500 hover:text-white">
        ...
      </span>

      {/* Last Page */}
      <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 text-gray-700  hover:bg-orange-500 hover:text-white">
        12
      </button>

      {/* Next Button */}
      <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 text-gray-700  hover:bg-orange-500 hover:text-white">
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
