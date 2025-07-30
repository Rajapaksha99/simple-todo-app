import { useEffect, useState } from "react";
import ToDo from "./components/ToDo";
import { addToDO, getAllToDo, deleteToDo, updateTodo } from "./utils/HandleApi";

function App() {

  const [toDo, setToDo] = useState([]);
  const [text, setText] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [toDoId, setToDoId] = useState("");

  useEffect(() => {
    getAllToDo(setToDo);
  }, []);

  const updateMode = (_id, text) => {
    setIsUpdating(true);
    setText(text);
    setToDoId(_id);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>ToDo Application</h1>
        <div className="top">
          <input
            type="text"
            placeholder="Add ToDos..."
            value={text || ""}
            onChange={(e) => setText(e.target.value)}
          />
          <div
            className="add"
            onClick={
              isUpdating
                ? () => updateTodo(toDoId, text, setToDo, setText, setIsUpdating)
                : () => addToDO(text, setToDo, setText) // <-- FIXED parameter order here
            }
          >
            {isUpdating ? "UPDATE" : "Add"}
          </div>
        </div>

        <div className="list">
          {/* Defensive rendering FFto avoid error if toDo is not an array */}
          {Array.isArray(toDo) ? (
            toDo.map((item) => (
              <ToDo
                key={item._id}
                text={item.text}
                updateMode={() => updateMode(item._id, item.text)}
                deleteToDo={() => deleteToDo(item._id, setToDo)}
              />
            ))
          ) : (
            <p>Loading ToDos to ...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
