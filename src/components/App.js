import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";


function App() {
  const [listings, setListings] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(()=>{
    fetch("http://localhost:6001/listings")
      .then((r)=>r.json())
      .then((listings)=>setListings(listings))
  },[])


  return (
    <div className="app">
      <Header search={search} setSearch={setSearch}/>
      <ListingsContainer search={search} listings={listings} setListings={setListings} />
    </div>
  );
}

export default App;
