import React from 'react'
import { Pagination } from '@mui/material'                    // компонент из MUI
import { useAppDispatch, useAppSelector } from '../../shared/lib/hooks/redux'
import { setPage } from '../../entities/post/model/postSlice'

interface Props {
  totalCount: number
  pageSize?: number
}

export const PaginationControls: React.FC<Props> = ({ totalCount, pageSize = 10 }) => {
  const dispatch = useAppDispatch()
  const page = useAppSelector(state => state.post.page)

  const totalPages = Math.ceil(totalCount / pageSize)

  const handleChange = (_: React.ChangeEvent<unknown>, value: number) => {
    dispatch(setPage(value)) 
  }

  if (totalPages <= 1) return null

  return (
    <Pagination
      count={totalPages}      
      page={page}             
      onChange={handleChange} 
      color="primary"         
      shape="rounded"        
      sx={{ mt: 2 }}          
    />
  )
}

