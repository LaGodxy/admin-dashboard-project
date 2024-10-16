import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Pagination = ({ routes }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = routes.length; 
  const navigate = useNavigate();

  const handleClick = (page) => {
    setCurrentPage(page);
    navigate(routes[page - 1]); 
  };

  return (
    <div className="flex justify-center items-center py-4 space-x-4">
      {/* Previous button */}
        <button
        className={`px-4 py-2 rounded-lg text-sm font-medium text-gray-500 ${
            currentPage === 1 ? 'cursor-not-allowed' : 'hover:text-blue-600'
        }`}  
        onClick={() => handleClick(currentPage - 1)}
        disabled={currentPage === 1}
        >
        Previous
        </button>


      {/* Pagination buttons */}
      {routes.map((_, index) => {
        const pageNumber = index + 1;
        return (
          <button
            key={index}
            onClick={() => handleClick(pageNumber)}
            className={`w-10 h-10 rounded-lg text-center text-sm font-medium ${
              currentPage === pageNumber
                ? 'bg-blue-700 text-white'
                : 'bg-gray-100 text-black hover:bg-gray-200'
            }`}
          >
            {pageNumber}
          </button>
        );
      })}

      {/* Next button */}
      <button
        className={`px-4 py-2 rounded-lg text-sm font-medium text-gray-500 ${currentPage === totalPages ? 'cursor-not-allowed' : 'hover:text-blue-600'}`}
        onClick={() => handleClick(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;