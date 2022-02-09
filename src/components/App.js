import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

const linkBE = "http://localhost:6001/listings"

function App() {

  const [listings, setListings] = useState([]);

  useEffect(() => {

    fetch(linkBE)
      .then(r => r.json())
      .then(setListings)
  }, [])

  const removeListingFromStateVariable = delListing => {

    console.log("app going to delete it ", delListing)
    fetch(`${linkBE}/${delListing.id}`, {
      method: "DELETE"
    })
      .then(r => r.json())
      .then(console.log())

    fetch(linkBE)
      .then(r => r.json())
      .then(setListings)

  }

const [searchValue,setSearchValue] = useState("");

const searchListing = stringtoSearch => {setSearchValue(stringtoSearch)}

const searchedListings = listings.filter(listing => {
  const lowerName = listing.description.toLowerCase()
  const lowerSearch = searchValue.toLowerCase()
  return lowerName.includes( lowerSearch )
}) 




  return (
    <div className="app">
      <Header searchListing={searchListing} />
      <ListingsContainer listings={searchedListings} removeListingFromStateVariable={removeListingFromStateVariable} />
    </div>
  );
}

export default App;

//======== for deleted server data
// 20220209092837
// http://localhost:6001/listings

// [
//   {
//     "id": 1,
//     "description": "heater",
//     "image": "./images/heater.jpg",
//     "location": "BROOKLYN"
//   },
//   {
//     "id": 2,
//     "description": "2019 Toyota Tacoma grill",
//     "image": "./images/toyota-grill.jpg",
//     "location": "Williamsburg"
//   },
//   {
//     "id": 3,
//     "description": "Free Braun 3735 Electric Toothbrush charger",
//     "image": "./images/toothbrush-charger.jpg",
//     "location": "Williamsburg"
//   },
//   {
//     "id": 4,
//     "description": "FREE Hundreds of DVD/CD Cases - Different Sizes and Colors",
//     "image": "./images/dvd-cases.jpg",
//     "location": "Prospect Heights"
//   },
//   {
//     "id": 5,
//     "description": "wood",
//     "image": "./images/wood.jpg",
//     "location": "Greenpoint"
//   },
//   {
//     "id": 6,
//     "description": "Beautiful couch",
//     "image": "./images/couch.jpg",
//     "location": "Bay Ridge"
//   },
//   {
//     "id": 7,
//     "description": "Treadmill Parts For Free",
//     "image": "./images/treadmill.jpg",
//     "location": "East Flatbush"
//   }
// ]
