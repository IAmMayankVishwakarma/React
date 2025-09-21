import "./App.css";
import AppName from "./components/AppName.jsx"; 
import AddTodo from "./components/AddTodo.jsx"; 
function App() {
  return (
    <center className="Todo-container">
     <AppName />

      <div className="rounded container">
       <AddTodo />
        {/* ToDO list */}
        <div className="todo-list row p-2 m-2 border border-secondary rounded-3">
          <div className="col-8">
            <p className="">Buy Milk</p>
          </div>
          <div className="col-2">
           <p>12/12/2025</p>  
          </div>
          <div className="col-2">
            <button className="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    </center>
  );
}

export default App;
