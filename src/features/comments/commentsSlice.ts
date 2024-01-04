import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

const commentsAdapter = createEntityAdapter();

export const commentsSlice = createSlice({
    name: 'comments',
    initialState: commentsAdapter.getInitialState({
        status: 'idle',
        error: null,
    }),
    reducers: {
        getCommentsSucces: (state, action) => {
            commentsAdapter.upsertMany(state, action.payload.comments);
            state.status = 'idle';
        },
        getCommentsPending: (state) => {
            state.status = 'pending';
        },
        getCommentsError: (state, action) => {
            state.status = 'idle';
            state.error = action.payload;
        },
    },
});

export const { getCommentsError, getCommentsPending, getCommentsSucces } =
    commentsSlice.actions;
export default commentsSlice.reducer;
