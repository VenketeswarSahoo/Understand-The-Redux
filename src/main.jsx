import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createStore } from "redux";
import myReducers from "./context/reducers/index.js";
import { Provider } from "react-redux";

// // =============================================
// import { createStore } from "redux";

// // actions
// const increment = () => {
//   return {
//     type: "INCREMENT"
//   };
// };

// const decrement = () => {
//   return {
//     type: "DECREMENT"
//   };
// };

// // reducer
// const counter = (state = 0, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return state + 1;
//     case "DECREMENT":
//       return state - 1;
//     default:
//       return state;
//   }
// };

// // store -> Globalized State [use to combine all reducers files]
// const store = createStore(counter);

// // display
// store.subscribe(() => console.log(store.getState()));

// // dispatch
// store.dispatch(increment());
// store.dispatch(increment());
// store.dispatch(increment());
// store.dispatch(decrement());
// // ============================================

const store = createStore(
  myReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
