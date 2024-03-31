import { Main } from "./src/main";
import { createRoot } from "react-dom/client";

function loadConfig() {
  return fetch("config.json?" + Date.now())
    .then((config) => config.json())
    .then((config) => {
      window.config = config;
    });
}

const root = (document.getElementById("root") as HTMLElement) || null;

if (!root) throw new Error("root not found");

const container = createRoot(root);

loadConfig().then(() => container.render(<Main />));