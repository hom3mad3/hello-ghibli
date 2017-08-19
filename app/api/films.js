import axios from 'axios';

const url = 'https://ghibliapi.herokuapp.com';

export const getFilms = () => {
  return axios.get(url + '/films/')
    .then(response => response.data);
};
