import axios from "axios";

export const create = ({title, body, userId}) => {
    //return Promise.reject();

    return axios.post('https://jsonplaceholder.typicode.com/posts', {title, body, userId})
    .then(res =>{
        const {data} = res;
        return data;
    })
}

export const getAll = () => {
    return axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
        const {data} = res;
        return data;
    })
}