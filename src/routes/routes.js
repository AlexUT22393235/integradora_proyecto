import { createBrowserRouter } from "react-router-dom";

import DashAsesor from "../Pages/DashAsesor";
import DonacionLibro from "../Pages/DonacionLibro";
import Calendario from "../Pages/Calendario"

export const rutas = createBrowserRouter([
    {
      path: "/DashAsesor",
      element: <DashAsesor />
    },
    {
      path: "/DonacionLibro",
      element: <DonacionLibro />
    },
    {
        path: "/Calendario",
        element: <Calendario />
      }

]);
