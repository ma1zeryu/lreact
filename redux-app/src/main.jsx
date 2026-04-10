import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import App from "./components/app";

//reducer
const f1 = (state = 1, action) => {
  switch (action.type) {
    case "add":
      return state + action.value;
    case "sub":
      return state - action.value;
    default:
      return state;
  }
};

const f2 = (state = "hello", action) => {
  switch (action.type) {
    case "concat":
      return state + action.character;
    default:
      return state;
  }
};

const f3 = combineReducers({
  number: f1,
  string: f2,
});

const store = configureStore({
  reducer: f3,
});

// store.subscribe(() => {
//   console.log(store.getState());
// });

// store.dispatch({ type: "add", value: 100 });
// store.dispatch({ type: "add", value: 1 });
// store.dispatch({ type: "add", value: -1000 });
// store.dispatch({ type: "concat", character: "yxc" });
// console.log(store.getState());

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>,
);
