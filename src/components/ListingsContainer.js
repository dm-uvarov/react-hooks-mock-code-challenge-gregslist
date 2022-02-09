import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, removeListingFromStateVariable}) {
  // console.log("listings incame:",listings)
  return (
    <main>
      <ul className="cards">
        {listings.map(listing=>{
          return <ListingCard key = {listing.id} listing = {listing} 
          removeListingFromStateVariable={removeListingFromStateVariable}/>
        }

        )}
        {/* use the ListingCard component to display listings */}
      </ul>
    </main>
  );
}

export default ListingsContainer;
