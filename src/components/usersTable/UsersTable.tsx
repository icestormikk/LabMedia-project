import React from 'react';
import { User } from '../../data/User';
import DeleteUserModal from '../modal/DeleteUserModal';
import { useAppDispatch, useAppSelector } from '../../libs/redux/hooks';
import { SortingMode, getUsersThunk, setUsers } from '../../libs/redux/slices/userTableSlice';
import Pagination from '../Pagination';
import SortingVariants from './SortingVariants';

/**
 * A component that displays all available objects of the @see{@link User} class and provides options for managing them
 * @return {JSX.Element} 
 */
function UserTable(): JSX.Element {
  const dispatch = useAppDispatch();
  const { users, sorting } = useAppSelector((state) => state.userTable);
  const { query } = useAppSelector((state) => state.searchBar);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [selectedUser, setSelectedUser] = React.useState<User>();
  const [currentPage, setCurrentPage] = React.useState(1);

  const shownUsers = React.useMemo(
    () => {
      const usersPerPage = import.meta.env.VITE_MAX_ELEMENTS_PER_PAGE;
      const lastCountryIndex = currentPage * usersPerPage;
      const firstCountryIndex = lastCountryIndex - usersPerPage;
      const filteredUsers = users.filter((item) => item.email.toLowerCase().includes(query) || item.username.toLowerCase().includes(query));

      if (sorting) {
        filteredUsers.sort((u1, u2) => {
          const { type, direction } = sorting;
          switch (type) {
            case SortingMode.BY_REGISTRATION_DATE: {
              return direction === 'asc'
                ? (u1.registrationDate.getTime() - u2.registrationDate.getTime())
                : (u2.registrationDate.getTime() - u1.registrationDate.getTime());
            }
            case SortingMode.BY_RATING: {
              return direction === 'asc'
                ? (u1.rating - u2.rating)
                : (u2.rating - u1.rating);
            }
          }
        });
      }

      return filteredUsers.slice(firstCountryIndex, lastCountryIndex);
    },
    [currentPage, users, sorting, query]
  );

  const onUserDelete = React.useCallback(
    () => {
      if (!selectedUser) return

      dispatch(
        setUsers(
          users.filter((user) => user.id !== selectedUser?.id)
        )
      );
    },
    [selectedUser, dispatch, users]
  );

  React.useEffect(
    () => {
      dispatch(getUsersThunk())
    },
    [dispatch]
  );

  return (
    <>
      <div className='w-full'>
        <SortingVariants/>
        <div className='w-full bg-white p-4 rounded-md'>
          <Pagination
            currentPage={currentPage}
            elementsPerPage={import.meta.env.VITE_MAX_ELEMENTS_PER_PAGE}
            totalElementsCount={users.length}
            onPageChanged={setCurrentPage} />
          <table className='user-table'>
            <thead>
              <tr>
                <th>Имя пользователя</th>
                <th>E-mail</th>
                <th>Дата регистрации</th>
                <th>Рейтинг</th>
              </tr>
            </thead>
            <tbody>
              {shownUsers.map((user) => (
                <tr key={user.id}>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.registrationDate.toLocaleDateString('ru')}</td>
                  <td>{user.rating}</td>
                  <td>
                    <button
                      className='w-6 aspect-square flex justify-center users-center bg-transparent text-black'
                      onClick={() => {
                        setSelectedUser(user);
                        setIsModalOpen(true);
                      }}
                    >
                      <img src="/cancel.svg" alt="close_icon" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {(isModalOpen && selectedUser !== undefined) && (
        <DeleteUserModal
          isOpen={isModalOpen}
          onOpen={() => setIsModalOpen(true)}
          onClose={() => setIsModalOpen(false)}
          onAccept={() => { onUserDelete(); setIsModalOpen(false); }}
          onCancel={() => setIsModalOpen(false)} />
      )}
    </>
  );
}

export default UserTable