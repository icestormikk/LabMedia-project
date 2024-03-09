import React, { Suspense } from 'react'

const UsersTable = React.lazy(() => import('./components/usersTable/UsersTable'))
const SearchBar = React.lazy(() => import('./components/SearchBar'))

function App() {
  return (
    <main className="flex min-h-[100dvh] flex-col items-center justify-start p-24 w-full gap-12">
      <SearchBar/>
      <Suspense fallback={<p>Loading...</p>}>
        <UsersTable/>
      </Suspense>
    </main>
  )
}

export default App
