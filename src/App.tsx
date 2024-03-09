import React, { Suspense } from 'react'

const UsersTable = React.lazy(() => import('./components/usersTable/UsersTable'))
const SearchBar = React.lazy(() => import('./components/SearchBar'))

function App() {
  return (
    <main className="flex min-h-[100dvh] min-w-[800px] w-full flex-col items-start justify-start p-24 gap-12">
      <b className='text-4xl font-bold text-[24px] leading-[28px]'>Список пользователей</b>
      <Suspense fallback={<p>Loading...</p>}>
        <SearchBar/>
        <UsersTable/>
      </Suspense>
    </main>
  )
}

export default App
