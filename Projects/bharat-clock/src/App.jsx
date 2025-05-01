import "./App.css";
// import './App.js'
function App() {
  let time = new Date();

  return (
    <div>
      <h1 className="text-center fw-bolder">Bharat Clock</h1>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h2>Current Time in India</h2>
            <p id="time">{time.toLocaleString()}</p>
            <p>current time :- {time.toLocaleTimeString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
