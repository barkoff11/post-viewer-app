import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface PostState {
    page: number
    search: string
}

const initialState: PostState = {
    page: 1,
    search: ''
}

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload
        },
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload
            state.page = 1
        }
    }
})

export const {setPage, setSearch} = postSlice.actions
export default postSlice.reducer