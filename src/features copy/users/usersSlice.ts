import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

const usersAdapter = createEntityAdapter();

export const usersSlice = createSlice({
    name: 'users',
    initialState: usersAdapter.getInitialState({ status: 'idle', error: null }),
    reducers: {
        GET_USERS: (state) => {
            state.status = 'pending';
        },
        GET_USERS_SUCCESS: (state, action) => {
            usersAdapter.upsertMany(state, action.payload.users);
        },
        GET_USERS_FAIL: (state, action) => {
            state.status = 'idle';
            state.error = action.payload.error;
        },
    },
});

export const { GET_USERS, GET_USERS_FAIL, GET_USERS_SUCCESS } =
    usersSlice.actions;
export default usersSlice.reducer;
