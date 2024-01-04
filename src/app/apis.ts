import axios from 'axios';

export function getPosts() {
    return axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            throw err;
        });
}

export function getComments() {
    return axios
        .get('https://jsonplaceholder.typicode.com/comments')
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            throw err;
        });
}

export function getUsers() {
    return axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            throw err;
        });
}
