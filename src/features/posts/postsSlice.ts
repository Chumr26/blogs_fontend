import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

const postsAdapter = createEntityAdapter();

export const postsSlice = createSlice({
    name: 'posts',
    initialState: postsAdapter.getInitialState({ status: 'idle', error: null }),
    reducers: {
        getPostSucces: (state, action) => {
            postsAdapter.upsertMany(state, action.payload.posts);
            state.status = 'idle';
            state.error = null;
        },
        getPostPending: (state) => {
            state.status = 'pending';
        },
        getPostError: (state, action) => {
            state.status = 'idle';
            state.error = action.payload.error;
        },
    },
});

export const { getPostSucces, getPostError, getPostPending } =
    postsSlice.actions;
export default postsSlice.reducer;
