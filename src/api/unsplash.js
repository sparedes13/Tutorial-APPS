import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID IPmaWp-nq7kNsFysjSJvEcOPBIm7snHxkZ3DUytykkk'
    }
});