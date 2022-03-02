import axios from "axios"

export default axios.create({
  baseURL: 'http://blog-backend.test/api',
});