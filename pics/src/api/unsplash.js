import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID 2Pq3sR5w9r7jc6Xev_dYIm-nt3oxmsooTLwWWnKmqmM' 
    }
});