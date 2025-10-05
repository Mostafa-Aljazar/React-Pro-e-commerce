import Providers from "@/providers/providers";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ROUTES from ".";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Providers>
      <ROUTES />
    </Providers>
  </StrictMode>
);
