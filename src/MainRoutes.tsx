import { useRoutes } from "react-router-dom";
import Planets from "./Planets";
import Header from "./components/Header/Header";

export const MainRoutes = () => {
  return useRoutes([
    { path: "/", element: <Header /> },
    { path: "/planet/:name", element: <Planets /> },
  ]);
};
