import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

const postsAdapter = createEntityAdapter();

export const postsSlice = createSlice({
    name: 'posts',
    initialState: postsAdapter.getInitialState({ status: 'idle', error: null }),
    reducers: {
        GET_POSTS: (state) => {
            state.status = 'pending';
        },
        GET_POSTS_SUCCESS: (state, action) => {
            postsAdapter.upsertMany(state, action.payload.posts);
        },
        GET_POSTS_FAIL: (state, action) => {
            state.status = 'idle';
            state.error = action.payload.error;
        },
    },
});

export const { GET_POSTS, GET_POSTS_FAIL, GET_POSTS_SUCCESS } =
    postsSlice.actions;
export default postsSlice.reducer;
