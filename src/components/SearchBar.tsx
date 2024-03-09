import React from 'react';
import { useAppDispatch, useAppSelector } from '../libs/redux/hooks';
import { setQuery } from '../libs/redux/slices/searchBarSlice';
import { setSorting } from '../libs/redux/slices/userTableSlice';

/**
 * A Search Bar that can be used to filter the list of objects
 * @return {JSX.Element} 
 */
function SearchBar(): JSX.Element {
  const dispatch = useAppDispatch()
  const { query } = useAppSelector((state) => state.searchBar)
  const { sorting } = useAppSelector((state) => state.userTable)

  const onQueryClear = React.useCallback(
    () => {
      dispatch(setQuery(''))
      dispatch(setSorting(undefined))
    },
    [dispatch]
  )

  return (
    <div className='bg-white text-base w-full p-4 rounded-md block space-y-8'>
      <div className='bg-[#ECEFF0] flex justify-start items-center p-2 rounded-md gap-2 focus-visible:outline-0 focus-visible:border-none'>
        <img src="/search.svg" alt="search_icon" />
        <input 
          type='text'
          name="query"
          id="query"
          className='bg-transparent w-full'
          value={query}
          onChange={(event) => dispatch(setQuery(event.target.value))}
          placeholder='Поиск по имени или e-mail'
        />
      </div>
      {
        (query !== '' || sorting) && (
          <button 
            className='flex justify-center items-center gap-2 text-sm px-2 bg-transparent'
            onClick={onQueryClear}
          >
            <img src="/clean.svg" alt="clean_icon" />
            Очистить фильтр
          </button>
        )
      }
    </div>
  );
}

export default SearchBar;