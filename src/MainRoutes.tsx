import { useRoutes } from "react-router-dom";
import Planets from "./Planets";

export const MainRoutes = () => {
  return useRoutes([{ path: "/planet/:name", element: <Planets /> }]);
};
