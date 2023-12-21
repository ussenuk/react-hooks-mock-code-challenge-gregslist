import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({search, listings, setListings}) {


  const filteredListings = listings ? listings.filter(item => item.description.includes(search)) : [];

  const ListingsList = filteredListings.map((item)=>{
    return(
      <ListingCard
      key={item.id}
      listing={item}
      onDeleteListing={handleDeleteListing}

      />
    )
  })

  //add this callback function
  function handleDeleteListing(deletedListing){
    const updatedListings =listings.filter((listing)=> listing.id !== deletedListing.id);
    setListings(updatedListings);
  }


  return (
    <main>
      <ul className="cards">
        {ListingsList}

      </ul>
    </main>
  );
}

export default ListingsContainer;
