import * as React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const elem = document.getElementById("root");

if (!elem) {
  throw new Error("Template is invalid");
}

const root = createRoot(elem);

root.render(<App />);
