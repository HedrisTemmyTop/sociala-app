import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./container/App";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducer from "./store/reducer/reducer";
import thunk from "redux-thunk";

const logger2 = (store) => (next) => (action) => {
  // console.log("action", action);
  next(action);
};

const store = createStore(reducer, applyMiddleware(logger2, thunk));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
