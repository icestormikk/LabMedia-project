/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_USERS_MOCK_URL: string
  readonly VITE_MAX_ELEMENTS_PER_PAGE: number
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}