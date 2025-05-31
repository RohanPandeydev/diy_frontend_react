import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import './App.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ContextWrapper } from "./contexts/Context.jsx";
import { HelmetProvider } from "react-helmet-async";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>

    <HelmetProvider>
      <BrowserRouter>
        <ContextWrapper>
          <App />
        </ContextWrapper>
      </BrowserRouter>
    </HelmetProvider>
  </QueryClientProvider>
);
