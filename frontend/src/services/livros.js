import axios from 'axios';

const livrosAPI = axios.create({ baseURL: 'http://localhost:8000/livros'})

function getLivros() {
    const reponse = livrosAPI.get('/')

    return reponse.data
}

export {
    getLivros
}