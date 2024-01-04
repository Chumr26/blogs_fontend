import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

const usersAdapter = createEntityAdapter();

export const usersSlice = createSlice({
    name: 'users',
    initialState: usersAdapter.getInitialState({ status: 'idle', error: null }),
    reducers: {
        getUsersSucces: (state, action) => {
            usersAdapter.upsertMany(state, action.payload.users);
            state.status = 'idle';
        },
        getUsersPending: (state) => {
            state.status = 'pending';
        },
        getUsersError: (state, action) => {
            state.status = 'idle';
            state.error = action.payload;
        },
    },
});

export const { getUsersError, getUsersPending, getUsersSucces } =
    usersSlice.actions;
export default usersSlice.reducer;
