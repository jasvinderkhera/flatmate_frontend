import React from "react";
import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import banglore from '../assets/location_images/png_images/banglore.png'
import coimbatore from '../assets/location_images/svg_images/coimbatore.svg'
import delhi from '../assets/location_images/svg_images/delhi.svg'
import gurugram from '../assets/location_images/svg_images/gurugram.svg'
import hyderabad from '../assets/location_images/svg_images/hyderabad.svg'
import indore from '../assets/location_images/svg_images/indore.svg'
import jaipur from '../assets/location_images/svg_images/jaipur.svg'
import kolkata from '../assets/location_images/svg_images/kolkata.svg'
import kota from '../assets/location_images/svg_images/kota.svg'
import mumbai from '../assets/location_images/svg_images/mumbai.svg'
import noida from '../assets/location_images/svg_images/noida.svg'
import greater_noida from '../assets/location_images/svg_images/greater_noida.svg'
import pune from '../assets/location_images/svg_images/pune.svg'
import visakhapatnam from '../assets/location_images/svg_images/visakhapatnam.svg'

function Header() {
  let decisionInput = useLocation();
    const [navbar,setNavbar] = useState("hide")
    const [locationModal,setLocationModal] = useState("hide")
    const [filterModal,setFilterModal] = useState("hide")
    const [sortModal,setSortModal] = useState("hide")

  return (
    <div className="fixed_container">
      <nav className="py-3 px-3">
        <div className="navbar_left d-flex align-items-center gap-4">
          <Link to="/" className="logo nav-link">
            <span>Flat</span>
            <span className="bg-dark text-white py-1 px-2 d-inline-block">
              Mate
            </span>
          </Link>
          <div className="location_details gap-3 align-items-center" onClick={()=>{
            setLocationModal("block")
          }}>
            <div className="fa_icon">
              <i className="fa-solid fa-location-dot fs-5"></i>
            </div>
            <div className="location_name">
              <span className="text-secondary">You are in</span>
              <p className="mb-0 fw-bold">Delhi</p>
            </div>
          </div>
        </div>
        <div className="navbar_right d-flex align-items-center gap-4">
          <div className="search_input">
            <i className="fa-solid fa-magnifying-glass search_input_icon"></i>
            <input type="text" placeholder="Search location" />
          </div>
          <div className="menu_bar" onClick={()=> setNavbar("block")}>
            <i className="fa-solid fa-bars fs-5 menu_bar_icon"></i>
          </div>
        </div>
      </nav>

      {/* -----------------------------------------MODAL SECTION--------------------------------------- */}

      <div className="modals" style={navbar == "hide" ? {display: "none"} : {display: "block"}}>
        <div className="menu_overlay">
          <div className="menu_modal_content bg-white">
            <div className="modal_menu">
              <div className="box1">
                <div onClick={() => setNavbar("hide")}>
                  <Link to="/" >Home</Link>
                  {/* <a href="./index.html">Home</a> */}
                </div>
                <div>
                  <a href="">Work with us</a>
                </div>
                <div>
                  <a href="">Blog</a>
                </div>
                <div>
                  <a href="">Tenacy Policy</a>
                </div>
              </div>
              <div className="box2">
                <div onClick={() => setNavbar("hide")}>
                  <a href="">About</a>
                </div>
                <div onClick={() => setNavbar("hide")}>
                  <Link to="/homeowner">For home owners</Link>
                </div>
                <div onClick={() => setNavbar("hide")}>
                  <Link to="/privacypolicy">Privacy Policy</Link>
                </div>
                <div onClick={() => setNavbar("hide")}>
                  <Link to="/contact">Contact</Link>
                </div>
              </div>
            </div>
            <i className="fa-solid fa-x modal_cross_icon" onClick={() => setNavbar("hide")}></i>
          </div>
        </div>
      </div>

      <div className="filter_modals" style={filterModal == "hide" ? {display: "none"} : {display: "block"}}>
        <div className="filter_menu_overlay">
          <div className="filter_menu_modal_content bg-white">
            <div className="filter_modal_menu">
              <h6>Filters</h6>
              <div className="filter_options_menu"></div>
            </div>
            <i className="fa-solid fa-x filter_modal_cross_icon" onClick={()=>{
                setFilterModal("hide")
            }}></i>
          </div>
        </div>
      </div>

      <div className="sort_modals" style={sortModal == "hide" ? {display: "none"} : {display: "block"}}>
        <div className="sort_menu_overlay">
          <div className="sort_menu_modal_content bg-white">
            <div className="sort_modal_menu">
              <h6 className="ms-3">Sort</h6>
              <div className="sort_options_menu"></div>
            </div>
            <i className="fa-solid fa-x sort_modal_cross_icon" onClick={()=>{
                setSortModal("hide")
            }}></i>
          </div>
        </div>
      </div>

      <div className="location_modals" style={locationModal == "hide" ? {display: "none"} : {display: "block"}}>
        <div className="location_menu_overlay">
          <div className="location_menu_modal_content bg-white">
            <div className="location_heading">
              <h6>Choose your City</h6>
              <i className="fa-solid fa-x location_modal_cross_icon" onClick={()=>{
                setLocationModal("hide")
              }}></i>
            </div>
            <div className="location_modal_menu">
              <div className="location_options_menu">
                <a href="JavaScript:void(0)" className=" location_div">
                  <img
                    src={banglore}
                    alt=""
                  />
                  <div className="location_name pt-2">
                    <h6>Banglore</h6>
                  </div>
                </a>
                <a href="JavaScript:void(0)" className=" location_div">
                  <img
                    src={coimbatore}
                    alt=""
                  />
                  <div className="location_name pt-2">
                    <h6>Coimbatore</h6>
                  </div>
                </a>
                <a href="JavaScript:void(0)" className=" location_div">
                  <img
                    src={delhi}
                    alt=""
                  />
                  <div className="location_name pt-2">
                    <h6>Delhi</h6>
                  </div>
                </a>
                <a href="JavaScript:void(0)" className=" location_div">
                  <img
                    src={gurugram}
                    alt=""
                  />
                  <div className="location_name pt-2">
                    <h6>Gurugram</h6>
                  </div>
                </a>
                <a href="JavaScript:void(0)" className=" location_div">
                  <img
                    src={hyderabad}
                    alt=""
                  />
                  <div className="location_name pt-2">
                    <h6>Hyderabad</h6>
                  </div>
                </a>
                <a href="JavaScript:void(0)" className=" location_div">
                  <img
                    src={indore}
                    alt=""
                  />
                  <div className="location_name pt-2">
                    <h6>Indore</h6>
                  </div>
                </a>
                <a href="JavaScript:void(0)" className=" location_div">
                  <img
                    src={jaipur}
                    alt=""
                  />
                  <div className="location_name pt-2">
                    <h6>Jaipur</h6>
                  </div>
                </a>
                <a href="JavaScript:void(0)" className=" location_div">
                  <img
                    src={kolkata}
                    alt=""
                  />
                  <div className="location_name pt-2">
                    <h6>Kolkata</h6>
                  </div>
                </a>
                <a href="JavaScript:void(0)" className=" location_div">
                  <img
                    src={kota}
                    alt=""
                  />
                  <div className="location_name pt-2">
                    <h6>Kota</h6>
                  </div>
                </a>
                <a href="JavaScript:void(0)" className=" location_div">
                  <img
                    src={mumbai}
                    alt=""
                  />
                  <div className="location_name pt-2">
                    <h6>Mumbai</h6>
                  </div>
                </a>
                <a href="JavaScript:void(0)" className=" location_div">
                  <img
                    src={noida}
                    alt=""
                  />
                  <div className="location_name pt-2">
                    <h6>Noida</h6>
                  </div>
                </a>
                <a href="JavaScript:void(0)" className=" location_div">
                  <img
                    src={greater_noida}
                    alt=""
                  />
                  <div className="location_name pt-2">
                    <h6>Greater Noida</h6>
                  </div>
                </a>
                <a href="JavaScript:void(0)" className=" location_div">
                  <img
                    src={pune}
                    alt=""
                  />
                  <div className="location_name pt-2">
                    <h6>Pune</h6>
                  </div>
                </a>
                <a href="JavaScript:void(0)" className=" location_div">
                  <img
                    src={visakhapatnam}
                    alt=""
                  />
                  <div className="location_name pt-2">
                    <h6>Visakhapatnam</h6>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*----------------------------------------------- MODAL SECTION END -------------------------------------------------*/}

      {decisionInput.pathname === "/" ? <div className="fluid-container flatmate_spaces border border-1">
        <div className="leftside">
          <h5 className="mb-1">FlatMate Spaces in Delhi</h5>
          <p className="mb-0">17 spaces available</p>
        </div>
        <div className="rightside d-flex align-items-center gap-md-3">
          <div className="select_options">
            <label for="cars" className="text-secondary fw-bold mb-0">
              Sort By:
            </label>
            <select name="cars" id="sortData" className="fw-bold pe-2">
              <option value="Popularity">Popularity</option>
              <option value="lowToHigh">Price: Low to High</option>
              <option value="highToLow">Price: High to Low</option>
            </select>
          </div>
          <div className="mob_location_details d-md-none gap-1 align-items-center border border-1 rounded-2" onClick={()=>{
            setLocationModal("block")
          }}>
            <div className="fa_icon">
              <i className="fa-solid fa-location-dot fs-5"></i>
            </div>
            <div className="mob_location_name">
              <p className="mb-0 fw-bold">Delhi</p>
            </div>
          </div>
          <div className="mob_sort d-md-none d-sm-flex gap-3 px-2 py-2 border border-1 rounded-2" onClick={()=>{
            setSortModal("block")
          }}>
            <i className="fa-solid fa-bars-staggered pe-1"></i>
            <span className="fw-semibold">Sort</span>
          </div>
          <div className="filters fw-bold d-flex justify-content-between gap-md-3 gap-sm-1" onClick={()=>{
            setFilterModal("block")
          }}>
            <div className="filter_icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.90693 3.9999C9.93791 3.99996 9.96894 4.00001 10 4.00001C10.0311 4.00001 10.0621 3.99996 10.0931 3.9999C10.4618 3.99929 10.8242 3.99869 11.147 4.08519C12.0098 4.31636 12.6836 4.99023 12.9148 5.85296C13.0013 6.1758 13.0007 6.53821 13.0001 6.90693C13.0001 6.93792 13 6.96895 13 7.00001H21C21.5523 7.00001 22 7.44772 22 8.00001C22 8.55229 21.5523 9.00001 21 9.00001H13C13 9.03107 13.0001 9.0621 13.0001 9.09309C13.0007 9.46181 13.0013 9.82422 12.9148 10.1471C12.6836 11.0098 12.0098 11.6837 11.147 11.9148C10.8242 12.0013 10.4618 12.0007 10.0931 12.0001C10.0621 12.0001 10.0311 12 10 12C9.96894 12 9.93791 12.0001 9.90692 12.0001C9.5382 12.0007 9.17579 12.0013 8.85295 11.9148C7.99022 11.6837 7.31635 11.0098 7.08519 10.1471C6.99868 9.82421 6.99928 9.46181 6.9999 9.09308C6.99995 9.0621 7 9.03106 7 9.00001H5C4.44772 9.00001 4 8.55229 4 8.00001C4 7.44772 4.44772 7.00001 5 7.00001H7C7 6.96895 6.99995 6.93792 6.9999 6.90693C6.99928 6.53821 6.99868 6.1758 7.08519 5.85296C7.31635 4.99023 7.99022 4.31636 8.85295 4.08519C9.17579 3.99869 9.5382 3.99929 9.90693 3.9999ZM9.49861 6.00536C9.39195 6.01022 9.36685 6.01805 9.37059 6.01704C9.19804 6.06328 9.06327 6.19805 9.01704 6.3706C9.0162 6.37411 9.00963 6.40483 9.00535 6.49861C9.00024 6.61064 9 6.75845 9 7.00001V9.00001C9 9.24156 9.00024 9.38937 9.00535 9.5014C9.01021 9.60806 9.01804 9.63315 9.01704 9.62942C9.06327 9.80196 9.19804 9.93674 9.37059 9.98297C9.36685 9.98197 9.39195 9.98979 9.49861 9.99466C9.61063 9.99977 9.75844 10 10 10C10.2416 10 10.3894 9.99977 10.5014 9.99466C10.608 9.98979 10.6331 9.98197 10.6294 9.98297C10.802 9.93674 10.9367 9.80196 10.983 9.62942C10.982 9.63315 10.9898 9.60806 10.9946 9.5014C10.9998 9.38937 11 9.24156 11 9.00001V7.00001C11 6.75845 10.9998 6.61064 10.9946 6.49861C10.9898 6.39196 10.982 6.36686 10.983 6.3706M9.49861 6.00536C9.61063 6.00025 9.75844 6.00001 10 6.00001L9.49861 6.00536ZM10 6.00001C10.2416 6.00001 10.3894 6.00025 10.5014 6.00536L10 6.00001ZM10.5014 6.00536C10.5952 6.00963 10.6259 6.0162 10.6294 6.01704L10.5014 6.00536ZM10.6298 6.01713C10.6298 6.01713 10.6296 6.0171 10.6294 6.01704L10.6298 6.01713ZM15.9069 11.9999C15.9379 12 15.9689 12 16 12C16.0311 12 16.0621 12 16.0931 11.9999C16.4618 11.9993 16.8242 11.9987 17.147 12.0852C18.0098 12.3164 18.6836 12.9902 18.9148 13.853C19.0013 14.1758 19.0007 14.5382 19.0001 14.9069C19.0001 14.9379 19 14.9689 19 15H21C21.5523 15 22 15.4477 22 16C22 16.5523 21.5523 17 21 17H19C19 17.0311 19.0001 17.0621 19.0001 17.0931C19.0007 17.4618 19.0013 17.8242 18.9148 18.1471C18.6836 19.0098 18.0098 19.6837 17.147 19.9148C16.8242 20.0013 16.4618 20.0007 16.0931 20.0001C16.0621 20.0001 16.0311 20 16 20C15.9689 20 15.9379 20.0001 15.9069 20.0001C15.5382 20.0007 15.1758 20.0013 14.853 19.9148C13.9902 19.6837 13.3164 19.0098 13.0852 18.1471C12.9987 17.8242 12.9993 17.4618 12.9999 17.0931C12.9999 17.0621 13 17.0311 13 17H5C4.44772 17 4 16.5523 4 16C4 15.4477 4.44772 15 5 15H13C13 14.969 12.9999 14.9379 12.9999 14.9069C12.9993 14.5382 12.9987 14.1758 13.0852 13.853C13.3164 12.9902 13.9902 12.3164 14.853 12.0852C15.1758 11.9987 15.5382 11.9993 15.9069 11.9999ZM15.4986 14.0054C15.392 14.0102 15.3669 14.018 15.3706 14.017C15.198 14.0633 15.0633 14.1981 15.017 14.3706C15.018 14.3669 15.0102 14.392 15.0054 14.4986C15.0002 14.6106 15 14.7585 15 15V17C15 17.2416 15.0002 17.3894 15.0054 17.5014C15.0102 17.6081 15.018 17.6332 15.017 17.6294C15.0633 17.802 15.198 17.9367 15.3706 17.983C15.3669 17.982 15.392 17.9898 15.4986 17.9947C15.6106 17.9998 15.7584 18 16 18C16.2416 18 16.3894 17.9998 16.5014 17.9947C16.608 17.9898 16.6331 17.982 16.6294 17.983C16.802 17.9367 16.9367 17.802 16.983 17.6294C16.982 17.6332 16.9898 17.6081 16.9946 17.5014C16.9998 17.3894 17 17.2416 17 17V15C17 14.7585 16.9998 14.6106 16.9946 14.4986C16.9898 14.392 16.982 14.3669 16.983 14.3706C16.9367 14.1981 16.802 14.0633 16.6294 14.017C16.6331 14.018 16.608 14.0102 16.5014 14.0054C16.3894 14.0002 16.2416 14 16 14C15.7584 14 15.6106 14.0002 15.4986 14.0054Z"
                ></path>
              </svg>
            </div>
            <span>Filters</span>
          </div>
        </div>
      </div> : ""}
    </div>
  );
}

export default Header;
