import "./App.css";
import AppName from "./components/AppName.jsx";
import AddTodo from "./components/AddTodo.jsx";
import TodoItems from "./components/TodoItems.jsx";

function App() {
  const todoItems = [
    { name: "Buy Milk", dueDate: "4/10/2025" },
    { name: "Go to Gym", dueDate: "5/10/2025" },
    { name: "Study React", dueDate: "6/10/2025" },
  ];

  return (
    <center className="Todo-container">
      <AppName />
      <div className="rounded container">
        <AddTodo />
        <TodoItems todoItems={todoItems} />
      </div>
    </center>
  );
}

export default App;
