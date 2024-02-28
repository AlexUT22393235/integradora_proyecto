import { createBrowserRouter } from "react-router-dom";

import Calendario from "../Pages/Calendario";

export const rutas = createBrowserRouter([
    {
      path: "/Calendario",
      element: <Calendario />
    }

]);