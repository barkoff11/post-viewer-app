import React from 'react'
import { Provider } from 'react-redux'
import { store } from './app/store/store'
import { SearchInput } from './features/search/UI/SearchInput'
import { PostList } from './widgets/post-list/PostList'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div style={{ padding: '24px' }}>
        <h1>Просмотр постов</h1>
        <SearchInput />
        <PostList />
      </div>
    </Provider>
  )
}

export default App
