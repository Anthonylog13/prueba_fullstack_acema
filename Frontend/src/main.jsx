import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { TaskProvider } from "./TaskManager/context/TaskContext.js";
import { AppRouter } from "./TaskManager/router/AppRouter.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TaskProvider>
      <AppRouter />
    </TaskProvider>
  </React.StrictMode>
);
