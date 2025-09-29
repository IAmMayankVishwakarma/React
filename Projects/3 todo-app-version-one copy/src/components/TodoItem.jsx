function TodoItem({ todoName, todoDate }) {
  return (
    <div className="todo-list row p-2 m-2 border border-secondary rounded-3">
      <div className="col-8">
        <p>{todoName}</p>
      </div>
      <div className="col-2">
        <p>{todoDate}</p>
      </div>
      <div className="col-2">
        <button className="btn btn-danger">Delete</button>
      </div>
    </div>
  );
}

export default TodoItem;
