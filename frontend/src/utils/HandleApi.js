import axios from 'axios';

const baseUrl = "http://localhost:5000";

export const getAllToDo = (setToDo) => {
  axios
    .get(baseUrl)
    .then(({ data }) => {
      console.log('data--->', data);
      setToDo(data); // Set the state here
    })
    .catch((err) => console.log(err)); 
};
