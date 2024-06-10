import React from "react";
import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from "react-redux";
import { store } from "./store";
import Welcome from "./components/Welcome";
import App from "./components/App";
import Error from "./components/Error";
import { RouterProvider, createHashRouter } from "react-router-dom";

const router = createHashRouter([
  { path: "/", element: <Welcome />, errorElement: <Error /> },
  { path: "/bill", element: <App /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
