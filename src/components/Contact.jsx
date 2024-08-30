import React from "react";

function Contact() {
  return (
    <div>
      <div class="contact_hello_banner">
        <h2 class="text-secondary">Hello</h2>
        <p class="fs-5">We'd love to hear from you.</p>
      </div>
      <div class="contact_help_container container">
        <div class="contact_address">
          <div class="box1">
            <h4 class="fw-semibold">Mailing address</h4>
            <p class="fw-semibold mb-0">
              FlatMate Technologies India Private Limited
            </p>
            <p>
              375, 5th Main Rd, Sector 6, HSR Layout, Bengaluru, Karnataka
              560102
            </p>
          </div>
          <div class="box2">
            <h4 class=" pb-2 fw-semibold">Any queries</h4>
            <a href="tel:+918880008888" class="nav-link fw-semibold">
              Call: 888 000 88 88
            </a>
            <p class="text-secondary">Available from 11 AM to 8 PM</p>
          </div>
          <div class="box3">
            <h4 class="fw-semibold">Write us an email</h4>
            <div class="boxes">
              <p class="mb-0">For sales enquiry</p>
              <a
                href="mailto:ankitkhera15@gmail.com"
                class="text-decoration-none"
              >
                sales@flatmate.com
              </a>
            </div>
            <div class="boxes pt-3">
              <p class="mb-0">For any issues Send email</p>
              <a
                href="mailto:ankitkhera15@gmail.com"
                class="text-decoration-none"
              >
                care@flatmate.com
              </a>
            </div>
          </div>
        </div>
        <div class="contact_form">
          <h4 class="text-center pb-4">How can we help ?</h4>
          <div class="contact_form_container">
            <label for="">Name</label>
            <input type="text" class="form-control" placeholder="Full Name" />
            <label for="">Email</label>
            <input type="mail" class="form-control" placeholder="Email" />
            <label for="">Mobile Number</label>
            <input
              type="tel"
              class="form-control"
              placeholder="Your Contact number"
            />
            <label for="">City of Interest</label>
            <select name="" id="" class="form-control">
              <option value="" class="fw-semibold">
                Select a city
              </option>
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
            <label for="">Message</label>
            <input type="text" class="form-control" placeholder="Message" />
            <button>Submit</button>
          </div>
        </div>
      </div>

      <div class="contact_map_container container">
        <h4 class="text-center my-4">On the map</h4>
        <iframe
          class="rounded-xl"
          width="100%"
          height="250"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=helloworld%20technology&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
          scrolling="no"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
