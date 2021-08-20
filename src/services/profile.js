import axios from "axios";
const baseUrl = "http://localhost:3001/profile"

const getAll = () => {
  return axios.get(baseUrl)
}

const updateAll = (newData) => {
  return axios.patch(baseUrl, newData)
}

export default {
  getAll: getAll,
  updateAll: updateAll
}