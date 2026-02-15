import { Global } from "@emotion/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import MainRoutes from "./routes/MainRoutes";

const queryClient = new QueryClient();
export default function MyProject() {
  return (
    <QueryClientProvider client={queryClient}>
      <Global />
      <ToastContainer />
      <BrowserRouter>       

        <MainRoutes />

      </BrowserRouter>
    </QueryClientProvider>
  )
}
