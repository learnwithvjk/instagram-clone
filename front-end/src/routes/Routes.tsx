import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from '@src/contexts/app/App.tsx'
import ErrorPage from '@src/global-components/error-handlers/RouteErrorHandler.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    // children: [
    //   {
    //     path: "home",
    //     element: <HomePage />,
    //   },
    // ],
  },
]);

export default function Routes() {
    return <RouterProvider router={router} />;
}
