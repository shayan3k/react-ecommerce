import React, { Component } from "react";
import "@fortawesome/fontawesome-free/css/all.css";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container-fluid p-0">
        <div className="row d-flex justify-content-center align-items-center flex-column flex-md-row pt-3">
          <div className="col-5 d-flex justify-content-start align-items-center">
            <img src="https://via.placeholder.com/200x100" alt="" srcset="" />
          </div>
          <div className="col-5 d-flex justify-content-end align-items-center">
            <a
              href="#"
              className="mr-3 text-black text-decoration-none links-black"
            >
              My Account
            </a>
            <a
              href="#"
              className="mr-3 text-black text-decoration-none links-black"
            >
              Wishlist
            </a>

            <select class="border-0 mr-3 text-black text-decoration-none links-black">
              <option value="GBP" selected>
                GBP
              </option>
              <option value="EURO">EURO</option>
              <option value="DOLLOR">DOLLOR</option>
              <option value="LIRA">LIRA</option>
            </select>
          </div>
        </div>

        <nav class="w-100 navbar navbar-expand-lg navbar-light bg-dark">
          <button
            class="navbar-toggler border-0 ml-sm-5 "
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fa fa-bars"></i>
          </button>

          <div
            class="collapse navbar-collapse  ml-sm-5"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link text-white" href="#">
                  Home <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link  text-white" href="#">
                  Link
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle  text-white"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item  text-black" href="#">
                    Action
                  </a>
                  <a class="dropdown-item  text-black" href="#">
                    Another action
                  </a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item  text-black" href="#">
                    Something else here
                  </a>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled  text-white" href="#">
                  Disabled
                </a>
              </li>
            </ul>
          </div>
          <form class="form-inline my-2 my-lg-0  mr-sm-5">
            <div className="input-group">
              <input
                class="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />

              <div class="input-group-append">
                <button class="btn btn-outline-dark my-0" type="submit">
                  <i class="fa fa-search  text-white p-1"></i>
                </button>
              </div>
            </div>
          </form>
        </nav>
      </div>
    );
  }
}
