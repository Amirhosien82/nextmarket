"use client";

import axios from "axios";

const initialApi = axios.create({ baseURL: process.env.BASE_API });

export default initialApi;
