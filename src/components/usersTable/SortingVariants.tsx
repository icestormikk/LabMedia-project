import { SortingMode, setSorting } from '../../libs/redux/slices/userTableSlice';
import { useAppDispatch, useAppSelector } from '../../libs/redux/hooks';

/**
 * A component that displays all the available sorting types of the list
 * @return {JSX.Element} 
 */
function SortingVariants(): JSX.Element {
  const { sorting } = useAppSelector((state) => state.userTable)
  const dispatch = useAppDispatch()

  return (
    <div className='flex w-full gap-4 text-names-tablet pb-4 text-sm'>
      <p>Сортировка:</p>
      {Object.values(SortingMode).map((mode, index) => (
        <p
          key={index}
          className={`border-b-2 border-dashed cursor-pointer ${sorting && sorting.type === mode ? 'text-black border-b-black' : 'border-b-names-tablet'}`}
          onClick={() => {
            dispatch(setSorting(mode));
          }}
        >
          {mode}
        </p>
      ))}
    </div>
  );
}

export default SortingVariants;