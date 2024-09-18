import React from "react";

function Footer() {
  return (
    <div className="fluid-container footer_container">
     <div className="footer_inner_container">
     <div className="footer_boxes_1 px-2">
        <div className="footer_box1 mb-5">
          <div className="logo mb-2">
            <span>Flat</span>
            <span className="bg-dark text-white py-1 px-2 d-inline-block">
              Mate
            </span>
          </div>
          <div className="address">
            <p>
              #375, 5th Main Rd, Sector 6, HSR Layout, Bengaluru, Karnataka -
              560102
            </p>
          </div>
        </div>
        <div className="footer_box2">
          <div className="phone d-flex align-items-center gap-2 mb-2">
            <i className="fa-solid fa-phone"></i>
            <span>
              <a href="tel: +918880008888" className="nav-link">
                888 000 88 88
              </a>
            </span>
          </div>
          <div className="email d-flex align-items-center gap-2 mb-2">
            <i className="fa-regular fa-envelope"></i>
            <span>
              <a href="mailto:ankitkhera15@gmail.com" className="nav-link">
                care@flatmate.com
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="footer_boxes_2">
        <p className="fw-semibold">Our cozy homes in</p>
        <div className="footer_cities d-flex gap-5">
          <div className="col_1 me-5">
            <div>
              <a href="" className="nav-link">
                Banglore
              </a>
            </div>
            <div>
              <a href="" className="nav-link">
                Coimbatore
              </a>
            </div>
            <div>
              <a href="" className="nav-link">
                Delhi
              </a>
            </div>
            <div>
              <a href="" className="nav-link">
                Gurugram
              </a>
            </div>
            <div>
              <a href="" className="nav-link">
                Hyderabad
              </a>
            </div>
            <div>
              <a href="" className="nav-link">
                Indore
              </a>
            </div>
            <div>
              <a href="" className="nav-link">
                Jaipur
              </a>
            </div>
            <div>
              <a href="" className="nav-link">
                Kolkata
              </a>
            </div>
            <div>
              <a href="" className="nav-link">
                Kota
              </a>
            </div>
          </div>
          <div className="col_2">
            <div>
              <a href="" className="nav-link">
                Mumbai
              </a>
            </div>
            <div>
              <a href="" className="nav-link">
                Noida
              </a>
            </div>
            <div>
              <a href="" className="nav-link">
                Greater Noida
              </a>
            </div>
            <div>
              <a href="" className="nav-link">
                Pune
              </a>
            </div>
            <div>
              <a href="" className="nav-link">
                Visakhapatnam
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_boxes_3 d-flex gap-5 px-2">
        <div className="footer_product">
          <p className="fw-semibold">Product</p>
          <div>
            <a href="" className="nav-link">
              Coliving
            </a>
          </div>
          <div>
            <a href="" className="nav-link">
              Student Living
            </a>
          </div>
          <div>
            <a href="" className="nav-link">
              Community
            </a>
          </div>
        </div>
        <div className="footer_about">
          <p className="fw-semibold">About</p>
          <div>
            <a href="" className="nav-link">
              About Us
            </a>
          </div>
          <div>
            <a href="" className="nav-link">
              Work with us
            </a>
          </div>
          <div>
            <a href="" className="nav-link">
              For home owners
            </a>
          </div>
          <div>
            <a href="" className="nav-link">
              Contact
            </a>
          </div>
          <div>
            <a href="" className="nav-link">
              Blog
            </a>
          </div>
        </div>
      </div>
     </div>
    </div>
  );
}

export default Footer;
