import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { App } from "./components/App";

addEventListener("load", () => {
    const container = document.getElementById("root");
    if (container) {
        createRoot(container).render(
            <StrictMode>
                <App />
            </StrictMode>,
        );
    }
});
