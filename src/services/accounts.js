import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/accounts'

const getAll = () => {
  return axios.get(baseUrl)
}

const create = newObject => {
  return axios.post(baseUrl, newObject)
}

const update = (id, newObject) => {
  return axios.put(`${baseUrl}/${id}`, newObject)
}

const deleteAccount = (id) => {
  return axios.delete(`${baseUrl}/${id}`)
}

const updateAll = newObject => {
  return axios.patch(baseUrl, newObject)
}

export default {
  getAll,
  create,
  update,
  deleteAccount,
  updateAll
}