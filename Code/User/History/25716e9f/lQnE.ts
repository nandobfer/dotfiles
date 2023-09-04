import axios from "axios"

export const api = axios.create({
    baseURL: "http://localhost:4105",
    timeout: 1000 * 10,
})
