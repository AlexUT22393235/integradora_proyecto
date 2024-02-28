import { createBrowserRouter } from "react-router-dom";

import DashAsesor from "../pages/DashAsesor";

export const rutas = createBrowserRouter([
    {
      path: "/DashAsesor",
      element: <DashAsesor />
    }

]);
