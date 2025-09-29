function AddTodo(){
return (
   <div className="todo-form row">
          <div className="col-8">
            <input
              className="form-control"
              type="text"
              name="todoName"
              id="todoName"
              placeholder="To-Do Name"
            />
          </div>
          <div className="col-2">
            <input
              className="form-control"
              type="date"
              name="todoDate"
              id="todoDate"
            />
          </div>
          <div className="col-2">
            <button className="btn btn-success">Add To-Do</button>
          </div>
        </div>
)
}

export default AddTodo;