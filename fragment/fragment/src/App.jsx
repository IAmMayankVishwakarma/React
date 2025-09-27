import './App.css';
import FoodItems from './component/FoodItems.jsx';
import ErrorMessage from './component/ErrorMessage.jsx';
function App() {
   let foodItems = ["Milk", "Eggs", "Bread", "Butter", "Cheese", "Fruits", "Vegetables", "Meat", "Fish", "Rice", "Pasta", "Cereal"];
  return (
    <>
    <div className="container" >
      <h1 className="text-center">Healthy Foods</h1>
      <ErrorMessage foodItems={foodItems}></ErrorMessage>
      <FoodItems/>
    </div>
    </>
  )
}

export default App
