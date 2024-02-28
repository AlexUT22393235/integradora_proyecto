import { createBrowserRouter } from "react-router-dom";

import DashAsesor from "../pages/DashAsesor";
import DonacionLibro from "../pages/DonacionLibro";
import Calendario from "../pages/Calendario";


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
