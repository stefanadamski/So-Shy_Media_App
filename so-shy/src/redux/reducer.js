import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const addPostReducer = createSlice({
    name: "posts",
    initialState,
    reducers: {
        addPosts: (state, action) => {
            state.push(action.payload);
            return state;
        },
        removePosts: (state, action) => {
            return state.filter((item) => item.id !== action.payload);
        },
    },
});

export const {
    addPosts,
    removePosts,
} = addPostReducer.actions;

export const reducer = addPostReducer.reducer;
