import React from 'react';

interface PaginationProps {
  currentPage: number
  elementsPerPage: number
  totalElementsCount: number
  onPageChanged: (pageIndex: number) => void
}

/**
 * A list of controls that divide the list into pages and provide the ability to navigate between them
 * @return {JSX.Element} 
 */
function Pagination({ currentPage, elementsPerPage, totalElementsCount, onPageChanged }: PaginationProps): JSX.Element {
  const pages = React.useMemo(
    () => {
      const pagesCount = Math.ceil(totalElementsCount / elementsPerPage)
      return Array.from({length: pagesCount}, (_, i) => i + 1)
    },
    [elementsPerPage, totalElementsCount]
  )

  return (
    <div className='flex flex-row justify-center items-center gap-2 overflow-y-hidden overflow-x-auto'>
      {
        pages.map((page, index) => (
          <button 
            key={index} 
            className={`w-8 aspect-square font-semibold bg-transparent border-username border-[1px] rounded-full ${page === currentPage ? 'bg-username text-white' : 'bg-transparent'}`}
            onClick={() => onPageChanged(page)}
          >
            {page}
          </button>
        ))
      }
    </div>
  );
}

export default Pagination;