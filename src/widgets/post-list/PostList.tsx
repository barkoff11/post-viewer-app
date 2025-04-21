import React from 'react'

import styles from './PostList.module.scss'
import { Typography } from '@mui/material'
import { useGetPostsQuery } from '../../entities/post/api/postApi'
import { useAppSelector } from '../../shared/lib/hooks/redux'
import { PaginationControls } from '../pagination/PaginationControls'
import { lightMatches } from '../../shared/lib/light/lightMatches'

export const PostList: React.FC = () => {
  const { data, isLoading, isError } = useGetPostsQuery()
  const { search, page } = useAppSelector((state) => state.post)

  const filtered = data?.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase()) ||
    post.body.toLowerCase().includes(search.toLowerCase())
  ) || []

  const pageSize = 10
  const paginated = filtered.slice((page - 1) * pageSize, page * pageSize)

  if (isLoading) return <Typography>Loading...</Typography>
  if (isError || !data) return <Typography>Error fetching posts.</Typography>
  if (!filtered.length) return <Typography>Ничего не найдено</Typography>

  return (
    <div className={styles.wrapper}>
    {paginated.map((post) => (
      <div key={post.id} className={styles.post}>
          <h3>{lightMatches(post.title, search)}</h3>
          <p>{lightMatches(post.body, search)}</p>
        </div>
      ))}

    <PaginationControls totalCount={filtered.length} />
    </div>
  )
}
