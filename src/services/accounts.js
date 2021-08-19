import axios from 'axios'
const baseUrl = 'http://localhost:3001/profile'
const getProfile = () => {
  return axios.get(baseUrl)
}

const getAccounts = () => {
  return axios.get(baseUrl).accounts
}

const create = newObject => {
  return axios.post(baseUrl, newObject)
}

export default {
  getProfile: getProfile,
  getAccounts: getAccounts,
  create: create
}