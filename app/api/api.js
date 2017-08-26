import axios from 'axios';

const baseUrl = 'https://ghibliapi.herokuapp.com/'

export const fetchLists = (list) => {
  let url = (baseUrl + list)
  return axios.get(url)j
      .then((response) => {
        return response.data;
      });
}

export const fetchId = (id) => {
  return axios.get(url + '/' + id)
  .then((response) => {
    return response.data
  })
}
