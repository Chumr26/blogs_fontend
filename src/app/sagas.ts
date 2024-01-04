import { call, put, take, fork } from 'redux-saga/effects';

import { getPosts, getComments, getUsers } from './apis';
import {
    GET_COMMENTS_FETCH,
    GET_POSTS_FETCH,
    GET_USERS_FETCH,
} from './actions';
import {
    getPostSucces,
    getPostPending,
    getPostError,
} from '../features/posts/postsSlice';
import {
    getCommentsError,
    getCommentsSucces,
} from '../features/comments/commentsSlice';
import { getUsersError, getUsersSucces } from '../features/users/usersSlice';

function* getPostsSaga(): Generator {
    while (true) {
        try {
            console.log('getPosts action ready...');
            yield take(GET_POSTS_FETCH);
            console.log('getPosts action started...');
            yield put(getPostPending());
            const posts = yield call(getPosts);
            console.log('getPosts action fetched...');
            yield put(getPostSucces({ posts }));
            console.log('getPosts action finished...');
        } catch (error) {
            console.log('getPosts action failed...');
            yield put(getPostError({ error: (error as Error).message }));
            console.log('getPosts action error finished...');
        }
    }
}

function* getCommentsSaga(): Generator {
    while (true) {
        try {
            yield take(GET_COMMENTS_FETCH);
            const comments = yield call(getComments);
            yield put(getCommentsSucces({ comments }));
        } catch (error) {
            yield put(getCommentsError({ error: (error as Error).message }));
        }
    }
}

function* getUsersSaga(): Generator {
    while (true) {
        try {
            yield take(GET_USERS_FETCH);
            const users = yield call(getUsers);
            yield put(getUsersSucces({ users }));
        } catch (error) {
            yield put(getUsersError({ error: (error as Error).message }));
        }
    }
}

export default function* rootSaga(): Generator {
    yield fork(getPostsSaga);
    yield fork(getCommentsSaga);
    yield fork(getUsersSaga);
}