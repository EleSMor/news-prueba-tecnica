import { Outlet, Link, useLocation } from "react-router-dom";

export default function Root() {
  const location = useLocation();

  const isNewsLocation = location.pathname === "/news";
  const isArchivedNewsLocation = location.pathname === "/archived";

  return (
    <>
      <div id="sidebar">
        <div className="flex justify-between">
          <h1>NEWS APP</h1>
          <Link to={`/create-news`}>
            <button type="submit">Add</button>
          </Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link
                className={`${
                  isNewsLocation && "bg-blue-600"
                } hover:bg-slate-300`}
                to={`/news`}
              >
                <span
                  className={`${
                    isNewsLocation ? "text-white" : "text-blue-600"
                  } font-bold  `}
                >
                  News
                </span>
              </Link>
            </li>
            <li>
              <Link
                className={`${isArchivedNewsLocation && "bg-blue-600"}
                 hover:bg-slate-300`}
                to={`/archived`}
              >
                <span
                  className={`${
                    isArchivedNewsLocation ? "text-white" : "text-blue-600"
                  } font-bold  `}
                >
                  Archived
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
        {location.pathname === "/" && (
          <div className="font-extrabold text-4xl">
            This is News APP for Allfunds
          </div>
        )}
        <Outlet />
      </div>
    </>
  );
}
