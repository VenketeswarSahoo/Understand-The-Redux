import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, setUserAction } from "./context/actions";

const App = () => {
  const counter = useSelector(state => state.counter);
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>React Redux</h1>
      <h1>
        Counter {counter}
      </h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>

      <br />

      {!user &&
        <button
          onClick={() => dispatch(setUserAction({ id: 1, name: "Venkatesh" }))}
        >
          Set User
        </button>}

      {user &&
        <p>
          {user.name}
        </p>}
    </div>
  );
};

export default App;
