import axios from 'axios';

export function getPosts() {
    return axios
        .get('http://localhost:3000/posts')
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            throw err;
        });
}

export function getComments() {
    return axios
        .get('http://localhost:3000/comments')
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            throw err;
        });
}

export function getUsers() {
    return axios
        .get('http://localhost:3000/users')
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            throw err;
        });
}
