import axios from 'axios';

const baseUrl = `http://localhost:3001/persons`;

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then(response => response.data);
}

const create = (entry) => {
  const request = axios.post(baseUrl, entry);
  return request.then(response => response.data);
}

const deleteItem = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`);
}

const change = (id, changedPerson) => {
  const request = axios.put(`${baseUrl}/${id}`, changedPerson);
  return request.then(response => response.data)
}

export default {
  getAll,
  create,
  deleteItem,
  change
}