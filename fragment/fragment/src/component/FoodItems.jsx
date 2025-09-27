import Items from "./Item";
const FoodItems = () => {
  let foodItems = [
    "Milk",
    "Eggs",
    "Bread",
    "Butter",
    "Cheese",
    "Fruits",
    "Vegetables",
    "Meat",
    "Fish",
    "Rice",
    "Pasta",
    "Cereal",
  ];   
  return (
    <ul className="list-group">
      {foodItems.map((item, index) => (
        <Items key={index} foodItems={item}></Items>
      ))}
    </ul>
  );
};
export default FoodItems;
