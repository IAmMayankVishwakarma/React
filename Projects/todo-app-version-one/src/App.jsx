import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem1 from "./components/TodoItem1";
import TodoItem2 from "./components/TodoItem2";
import "./App.css";
function App() {
  return (
    <center className="todo-container">
      <AppName />
      <div className="container ">
       {/* first row */}
        <AddTodo />
     </div>
     <div className="items-container">
 {/* second row */}
 <TodoItem1 />
       {/* third row */}
        <TodoItem2 />
      
      </div>
    </center>
  );
}

export default App;
