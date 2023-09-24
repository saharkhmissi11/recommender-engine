import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:8080/" 
});

export const headers = {
    'Content-Type': 'application/json',
    Authorization: '',
};

export const config = { headers: headers };

export default client;