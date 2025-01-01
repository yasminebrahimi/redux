import { useDispatch, useSelector } from "react-redux";
import { buyMilk } from "../redux/milk/milkActions";

function MilkContainer() {
  const milk = useSelector((state) => state.milk); // Ensure this points to the milk reducer state
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Milk Number: {milk.numOfMilks}</h2> {/* Accessing the correct property */}
      <button onClick={() => dispatch(buyMilk())}>Buy Milk</button>
    </div>
  );
}

export default MilkContainer;
