/* eslint-disable no-mixed-spaces-and-tabs */
import { createBrowserRouter,} from "react-router-dom";
import App from "../App";
import Dashboard from "../pages/Dashboard";
import Error from "../pages/Error";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
	  {
		path:"*",
		element:<Error />,
	  }
    ],
  },
]);

export default router;
