import axios from 'axios';
export default axios.create(
    {
        baseURL: "https://8850f292-f255-4a3e-815e-331d6e396028.mock.pstmn.io",
        headers: { "ngrok-skip-browser-warning": "true" }
    }

)
