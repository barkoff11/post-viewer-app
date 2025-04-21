import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../../../entities/post/model/postSlice";
import { debounce, TextField } from "@mui/material";

export const SearchInput: React.FC = () => {
    const dispatch = useDispatch();

    const debouncedSearch = useCallback(
        debounce((value: string) =>{
            dispatch(setSearch(value))
        }, 500),
        []
    )

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        debouncedSearch(e.target.value)
    }

    return (
        <TextField
            label="Поиск"    
            variant="outlined"
            fullWidth
            onChange={handleChange}
        />
    )
}