import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import "./index.css";
import MoviePage from "./pages/moviePage";
import ProgramacaoPage from "./pages/programacao";
import ComprarIngresso from "./pages/comprarIngressos";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <App />
    ),
  },
  {
    path: "/filmes/sobre/:id",
    element: (
      <MoviePage />
    ),
  },
  {
    path: "/programacao",
    element: (
      <ProgramacaoPage />
    )
  },
  {
    path: "/comprar-ingressos",
    element: (
      <ComprarIngresso />
    )
  }
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);