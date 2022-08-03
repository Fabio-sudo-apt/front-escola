import axios from "axios";
export default axios.create({
    baseURL: `https://escola-server.herokuapp.com/api/`
})