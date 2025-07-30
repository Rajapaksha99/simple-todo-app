import axios from 'axios';

const baseUrl = "http://localhost:5000";

// Fetch all ToDos from the server
export const getAllToDo = (setToDo) => {
  axios.get(baseUrl)
    .then(({ data }) => {
      console.log('Fetched ToDos:', data);
      // Suppose the array is inside data.todos
      if (Array.isArray(data)) {
        setToDo(data);
      } else if (data && Array.isArray(data.todos)) {
        setToDo(data.todos);
      } else {
        console.error("Unexpected data format", data);
        setToDo([]);
      }
    })
    .catch((err) => {
      console.error("Error fetching ToDos:", err);
      setToDo([]);
    });
};


// Function to add a new ToDo
const addToDO = (text, setToDo, setText) => {
  axios
  .post(`${baseUrl}/save`, { text })
  .then(({ data }) => {
    console.log('Added ToDo:', data);
    setText("");
    getAllToDo(setToDo)
  })
  .catch((err) => console.log(err))
};

const updateTodo = (toDoId, text, setToDo, setText, setIsUpdating) => {
  axios
   .post(`${baseUrl}/update`, {_id: toDoId, text})
   .then((data) => {
    setText("")
    setIsUpdating(false)
    getAllToDo(setToDo)
   })
   .catch((err) => console.log(err))
}

const deleteToDo = (_id, setToDo) => {
  axios
   .post(`${baseUrl}/delete`, {_id})
   .then((data) => {
    console.log(data)
    getAllToDo(setToDo)
   })
   .catch((err) => console.log(err))
}

export {addToDO, updateTodo, deleteToDo}

// Export the functions as separate named exports
