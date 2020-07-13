import Vue from 'vue'
import axios from 'axios'

const BASEURL = 'https://geek-jokes.sameerkumar.website'
const TIMEOUT = 5000

const axiosInstance = axios.create({
  baseURL: BASEURL,
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  },
  timeout: TIMEOUT
})

axiosInstance.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    return Promise.reject(error)
  }
)

export { axiosInstance }

Vue.prototype.$axios = axios
