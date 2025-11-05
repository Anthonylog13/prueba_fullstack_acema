import axios from 'axios';
export const taskApi = axios.create({
    baseURL: 'http://localhost:3000',
});

export default taskApi;