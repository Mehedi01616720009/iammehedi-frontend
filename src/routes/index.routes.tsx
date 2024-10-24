import { createBrowserRouter } from "react-router-dom";
import { userRoutes } from "./user.routes";

const router = createBrowserRouter([...userRoutes]);

export default router;
