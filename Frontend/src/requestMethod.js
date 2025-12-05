import axios from "axios";
import { React } from 'react';
const BASE_URL = `${import.meta.env.VITE_API_URL}/api/`;

export const publicRequest = axios.create({
    baseURL: BASE_URL
})

export const userRequest = axios.create({
    
    baseURL: BASE_URL
})