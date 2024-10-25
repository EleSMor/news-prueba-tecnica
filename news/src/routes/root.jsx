import { Outlet, Link } from "react-router-dom";

export default function Root() {
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
              <Link to={`/news`}>News</Link>
            </li>
            <li>
              <Link to={`/archived`}>Archived</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
