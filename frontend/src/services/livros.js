import axios from 'axios';

const livrosAPI = axios.create({ baseURL: 'http://localhost:8000/livros'})

async function getLivros() {
    const reponse = await livrosAPI.get('/')

    return reponse.data
}

export {
    getLivros
}