import { useRef, useState, useEffect } from "react";

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    const itemRef = useRef();
  
    const enterPressed = (e) => {
      if (e.key === "Enter") {
        setTodos([
          ...todos,
          { text: e.target.value, id: e.target.value, completed: false },
        ]);
        itemRef.current.value = "";
      }
    };
  
    const handleDelete = (id) => {
      const filter = todos.filter((x) => id !== x.id);
      setTodos(filter);
    };
  
    return (
      <div className="App">
        <div className="todo">
          <input
            className="add"
            type="text"
            onKeyDown={(e) => enterPressed(e)}
            ref={itemRef}
          />
          {todos.map((item) => (
            <Item
              key={item.id}
              name={item}
              completed={item.completed}
              deleteFn={handleDelete}
            />
          ))}
        </div>
      </div>
    );
}

const Item = ({ name, completed, deleteFn }) => {
    const [radioBtn, setRadioBtn] = useState("");
    const [complete, setComplete] = useState(false);
  
    useEffect(() => {
      if (radioBtn) console.log(radioBtn);
    }, [radioBtn]);
  
    function checkedVal(e) {
      setRadioBtn(e.target.value);
      setComplete(!completed);
    }
  
    return (
      <div className="todo-list">
        <div
          className={complete ? `todo-item-complete` : `todo-item`}
          onChange={checkedVal}
        >
          <input id="items" type="radio" value={name.text} /> {name.text}
        </div>
        <button className="delete" onClick={() => deleteFn(name.id)}>
          Delete
        </button>
      </div>
    );
  };

export default TodoList;