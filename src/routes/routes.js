import { createBrowserRouter } from "react-router-dom";

import DashAsesor from "../pages/DashAsesor";
import InfoProyecto from "../pages/InfoProyecto";

export const rutas = createBrowserRouter([
    {
      path: "/DashAsesor",
      element: <DashAsesor />
    },
    {
      path: "/InfoProyecto",
      element: <InfoProyecto />
    },

]);
