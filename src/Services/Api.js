import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.REACT_APP_HOST,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Accept, Authorization, Content-Type',
    'Access-Control-Allow-Methods': 'PUT, POST, DELETE, GET, OPTIONS'
  },
});