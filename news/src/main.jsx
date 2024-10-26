import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import News, {
  loader as newsLoader,
  action as newsAction,
} from "./routes/news";
import ArchivedNews, {
  loader as archivedNewsLoader,
  action as archivedAction,
} from "./routes/archived-news";
import CreateNews, { action as createNewsAction } from "./routes/create-news";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "news",
        element: <News />,
        loader: newsLoader,
        action: newsAction,
      },
      {
        path: "archived",
        element: <ArchivedNews />,
        loader: archivedNewsLoader,
        action: archivedAction,
      },
      {
        path: "create-news",
        element: <CreateNews />,
        action: createNewsAction,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
