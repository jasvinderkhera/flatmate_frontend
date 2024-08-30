import React from 'react'
import { useState, useEffect } from 'react'

function Home() {
  const[data1,setData1] = useState([])
  const[data2,setData2] = useState([])

  useEffect(()=>{
    fetch("https://raw.githubusercontent.com/jasvinderkhera/Fake-Server/main/FlatMateFlats.json").then(response => response.json()).then((data) => {
    console.log(data)
    
    })
  },[])
  return (
    <div>
        <div className="container spaces_container py-5">
        <div className="flats_container d-flex flex-wrap gap-3">
       
       
        </div>
      </div>

      <div className="cant_find_container">
        <h4>Can't find your perfect home?</h4>
        <p>Let us do the searching for you</p>
        <div className="cant_find_inputs d-flex gap-2 py-4">
          <input
            type="text"
            className="px-4 py-2 rounded-2"
            placeholder="Full name"
          />
          <input
            type="text"
            className="px-4 py-2 rounded-2"
            placeholder="Mobile number"
          />
          <div className="cant_find_location">
            <i className="fa-solid fa-magnifying-glass cant_find_location_icon"></i>
            <input
              type="text"
              className="ps-5 pe-3 py-2 rounded-2"
              placeholder=" location"
            />
          </div>
          <button className="btn px-4 py-2 bg-black text-white">Submit</button>
        </div>
      </div>

      <div className="container about_flatmate_container">
        <div className="faq pb-3">
          <p className="fw-bold">What is FlatMate?</p>
          <hr />
          <p>
            Co-living is a new way of living inspired by the old, with community
            and collective experiences at its core. Starting with the basics, it
            offers shared spaces such as a bar, restaurant, gym, library,
            laundry, roof terraces, hot desks and more. Using this space to
            bring everyone together, Hello World creating collaborative and fun
            environments that expose members to new people, new ideas and new
            experiences.
          </p>
        </div>

        <div className="faq pb-3">
          <p className="fw-bold">Why is FlatMate better than PG in delhi?</p>
          <hr />
          <p>
            PG in delhi do not provide high quality living experience with lot
            of amenities and community events like HelloWorld FlatMate.
          </p>
        </div>
        <div className="faq pb-3">
          <p className="fw-bold">
            How is the food compared in FlatMate compared to other PG in delhi
            and Hostels in delhi
          </p>
          <hr />
          <p>
            FlatMate provides healthy and tasty foods served hot. We make sure
            food quality is ensured at all times of the day.
          </p>
        </div>

        <div className="faq pb-3">
          <p className="fw-bold">
            What does rent include in FlatMate Spaces in delhi?
          </p>
          <hr />
          <p>
            While PG in delhi just includes food & stay, FlatMate in delhi
            provides Wifi, High Quality Food, 24/7 Hot Water Supply & House
            keeping services included in the rent.
          </p>
        </div>
        <div className="faq pb-3">
          <p className="fw-bold">Can I have friends to visit & stay?</p>
          <hr />
          <p>
            This is your home, so yes! You can have visitors to stay in your
            room, with a prior notice to the management.
          </p>
        </div>
        <div className="faq pb-3">
          <p className="fw-bold">What are Community Events?</p>
          <hr />
          <p>
            Unlike PG in delhi , FlatMate in delhi conducts regular social
            community events like Music Shows, Movie Screening & Outdoor/Indoor
            games.
          </p>
        </div>
        <div className="faq pb-3">
          <p className="fw-bold">Is there 24/7 concierge?</p>
          <hr />
          <p>
            Yes, there will always be our Property Manager at the front desk to
            help with any enquiries you may have.
          </p>
        </div>
        <div className="faq pb-3">
          <p className="fw-bold">
            Is there any difference in payment terms of FlatMate in delhi
            compared to PG in delhi?
          </p>
          <hr />
          <p>
            A token amount of minimum Rs. 999 will confirm your booking. Token
            will be adjusted against your first month's rent. This is a
            non-refundable token in case of cancellation of booking. Refundable
            security deposit and rent for the current month will have to be paid
            before moving-in to your new home. Rent (including any charges on
            actuals) are payable before the 5th of every month to avoid late-fee
            charges.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home