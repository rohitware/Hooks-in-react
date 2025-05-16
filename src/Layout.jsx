import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="use-state">
                Use State
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="use-effect">
                Use Effect
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <div style={{ marginLeft: "20px", paddingLeft: "10px" }}>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
