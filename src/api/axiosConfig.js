import axios from 'axios';
export default axios.create(
    {
        baseURL: "https://97bd-170-238-41-250.ngrok-free.app/",
        headers: { "ngrok-skip-browser-warning": "true" }
    }

)
