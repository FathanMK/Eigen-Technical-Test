import React from "react";
import ReactDOM from "react-dom/client";
import { ConfigProvider } from "antd";
import { RouterProvider } from "react-router-dom";

import "./styles/index.css";
import "./styles/reset.css";
import theme from "./themes/index.ts";
import routes from "./routes/index.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ConfigProvider theme={theme}>
        <RouterProvider router={routes} />
      </ConfigProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
