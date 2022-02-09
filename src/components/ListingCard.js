import React,{useState} from "react";

function ListingCard({listing,removeListingFromStateVariable} ) {
  const [isFav,setIsFav] = useState(false);

  const deleteListing = () =>{
    removeListingFromStateVariable(listing)
  }
 
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={listing.description} />
      </div>
      <div className="details">
        {isFav ? (
          <button onClick ={()=>setIsFav(false)} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick ={()=>setIsFav(true)} className="emoji-button favorite">☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button className="emoji-button delete" onClick={()=>deleteListing()}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
