import { Link } from "react-router-dom";
export default function Header() {
  return (
    <nav className="navbar row">
      <div className="col-12 col-md-3">
        <div className="navbar-brand">
          
          {/* <img width="150px" src="/images/logo.png" /> */}
        </div>
      </div>

      <div className="col-12 col-md-6 mt-2 mt-md-0">
        <div className="input-group">
          <input
            type="text"
            id="search_field"
            className="form-control"
            placeholder="Enter Product Name ..."
          />
          <div className="input-group-append">
            <button id="search_btn" className="btn">
              <i className="fa fa-search" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>

      <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
        {/* <btn className="ml-5 btn btn-danger">
          Logout
        </btn> */}
        <Link to={"/login"} className ="btn btn-danger">
        Logout
        </Link>
        
      </div>
    </nav>
  );
}
