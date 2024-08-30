import React from 'react'

function HomeOwner() {
  return (
    <div className='home_owner'>
        <div className="fluid_container owner_parallax">
          <h2>Your property is our responsibility</h2>
          <p className="fs-4 text-white">Sit back and relax</p>
          <div className="home_owner_banner_img_box"></div>
        </div>
        <div className="fluid-container owner_different">
            <div className="container">
                <div className="top text-center">
                    <h2>How is FlatMate different?</h2>
                <p className="fs-5">India's leading Property Management Service</p>
                </div>
                <div className="boxex">
                    <div className="owner_box1">
                        <div className="boxes d-flex justify-content-center align-items-center flex-column">
                            <img src="https://thehelloworld.com/_next/static/media/owner-icon1.5d41d286.svg" alt="" />
                            <h5>Guided House Visits</h5>
                            <p className="text-secondary">We give guided tour of your house to interested tenants</p>
                        </div>
                        <div className="boxes d-flex justify-content-center align-items-center flex-column">
                            <img src="https://thehelloworld.com/_next/static/media/owner-icon2.453216c5.svg" alt="" />
                            <h5>Rent On Time</h5>
                            <p className="text-secondary">We guarantee timely rent, every month</p>
                        </div>
                        <div className="boxes d-flex justify-content-center align-items-center flex-column">
                            <img src="https://thehelloworld.com/_next/static/media/owner-icon3.6b43d5ae.svg" alt="" />
                            <h5>Zero Paperwork</h5>
                            <p className="text-secondary">We do all the paperwork for you like agreement creation</p>
                        </div>
                    </div>
                    <div className="owner_box2">
                        <div className="boxes d-flex justify-content-center align-items-center flex-column">
                            <img src="https://thehelloworld.com/_next/static/media/owner-icon4.7551da96.svg" alt="" />
                            <h5>House Safety</h5>
                            <p className="text-secondary">We ensure to keep your house in good condition</p>
                        </div>
                        <div className="boxes d-flex justify-content-center align-items-center flex-column">
                            <img src="https://thehelloworld.com/_next/static/media/owner-icon5.fdc03dd6.svg" alt="" />
                            <h5>House Maintenance</h5>
                            <p className="text-secondary">We provide on-demand & periodic house repairs</p>
                        </div>
                        <div className="boxes d-flex justify-content-center align-items-center flex-column">
                            <img src="https://thehelloworld.com/_next/static/media/owner-icon6.fcc7dee7.svg" alt="" />
                            <h5>Marketing & promotion</h5>
                            <p className="text-secondary">We promote through Ads & other rental platforms</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="list_property_container">
            <h2 className="text-center pb-2">Be a part. Don’t miss out.</h2>
            <h5 className="text-center">list your property</h5>
            <div className="list_property_form border border-1">
                <div className="input_div">
                  <label for="">Name <span className=" imp_sign text-danger">★</span></label>
                <input type="text" className="form-control" placeholder="Enter full Name" />
                </div>
                <div className="input_div">
                  <label for="">Phone <span className=" imp_sign text-danger">★</span></label>
                  <input type="tel" className="form-control" placeholder="Enter Phone Number" />
                </div>
                <div className="input_div">
                  <label for="">Email</label>
                  <input type="mail" className="form-control" placeholder="Enter Email Address" />
                </div>
                <div className="input_div">
                  <label for="">City <span className=" imp_sign text-danger">★</span></label>
                  <select name="" id="" className="form-control">
                    <option value="" className="fw-semibold">Select a city</option>
                    <option value="Banglore">Banglore</option>
                    <option value="Coimbatore">Coimbatore</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Gurugram">Gurugram</option>
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Indore">Indore</option>
                    <option value="Jaipur">Jaipur</option>
                    <option value="Kolkata">Kolkata</option>
                    <option value="Kota">Kota</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Noida">Noida</option>
                    <option value="Greater Noida">Greater Noida</option>
                    <option value="Pune">Pune</option>
                    <option value="Visakhapatnam">Visakhapatnam</option>
                  </select>
                </div>
                <div className="input_div">
                  <label for="">if Other, Which City ?</label>
                  <input type="text" className="form-control" placeholder="Enter City Name" />
                </div>
                <div className="input_div">
                  <label for="">Location</label>
                  <input type="text" className="form-control" placeholder="Enter Location" />
                </div>
                <button className="btn btn-dark my-4">Submit</button>
               
            </div>

        </div>
    </div>
  )
}

export default HomeOwner