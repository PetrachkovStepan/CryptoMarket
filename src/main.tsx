import { StrictMode } from "react";

import { Provider } from "react-redux";
import { RouterProvider } from "react-router";

import { createRoot } from "react-dom/client";

import { router } from "./Routes/Routes.tsx";
import { setupStore } from "./store/store.ts";

import "./index.css";
const store = setupStore();
const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
);
