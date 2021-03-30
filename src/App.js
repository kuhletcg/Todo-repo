import { useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { addNumber, addFood, deleteFood } from "./redux/actions/food";

function App() {
  const foodList = useSelector((state) => state.foodList.foodList);
  const dispatch = useDispatch();
  const [food, setFood] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addFood(food));
    setFood("");
  };

  return (
    <div className="App">
      <h1>Dell</h1>
      <button onClick={() => dispatch(addFood())}>addFood</button>
      <button onClick={() => dispatch(deleteFood())}>DeleteFood</button>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          onChange={(e) => setFood(e.target.value)}
          value={food}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default App;
