import { createEntityAdapter, createSlice, EntityId } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface Post {
    ids: EntityId;
    id: string;
    title: string;
    body: string;
    userId: string;
}

const postsAdapter = createEntityAdapter<Post>();

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
export const { selectAll: selectAllPost, selectById: selectPostById } =
    postsAdapter.getSelectors((state: RootState) => state.posts);
export default postsSlice.reducer;
