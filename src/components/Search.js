import React,{useState} from "react";

function Search({searchListing}) {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted",searchVal);
    searchListing(searchVal);
  }

  const[searchVal, setSearchVal] = useState("");
  

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchVal}
        onChange={(e) => setSearchVal(e.target.value)}
      />
      <button type="submit">🔍 </button>
    </form>
  );
}

export default Search;
