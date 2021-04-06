import { useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { addNumber, addFood, deleteFood } from "./redux/actions/food";

function App() {
  const foodList = useSelector((state) => state.food.foodList);
  console.log("foodlist", foodList);
  const dispatch = useDispatch();
  const [food, setFood] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addFood(food));
    setFood("");
  };

  const handleDelete = (key) => {
    return foodList.filter((list) => list.key !== key);
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="todoapp"
            onChange={(e) => setFood(e.target.value)}
            placeholder=""
            value={food}
          />
          <input type="button" value="Submit" onClick={handleSubmit} />
          {/* <input type="button" value="Delete" onClick={handleDelete} /> */}
        </div>
      </form>
      {foodList &&
        foodList.map((food) => {
          return (
            <div key={food.key}>
              <h2>
                <button
                  onClick={() => dispatch(deleteFood(handleDelete(food.key)))}
                >
                  delete
                </button>
              </h2>
              <h1>{food.name}</h1>
            </div>
          );
        })}
    </div>
  );
}

export default App;
