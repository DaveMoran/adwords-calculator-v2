import axios from "axios";
const baseUrl = "/api/profile"

const getAll = () => {
  return axios.get(baseUrl)
}

const updateAll = (newData) => {
  return axios.patch(baseUrl, newData)
}

export default { getAll, updateAll }