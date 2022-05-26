import axios from 'axios';

export const api = axios.create({
  baseURL: "https://localhost:7003/api",
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Methods': 'PUT, POST, DELETE, GET, OPTIONS'
  },
});