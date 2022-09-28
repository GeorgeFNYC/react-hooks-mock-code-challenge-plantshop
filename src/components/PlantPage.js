import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plantList, setPlantList] = useState([]);
  const [search, setSearch] = useState("");


  useEffect(() => {
    fetch('http://localhost:6001/plants')
    .then(res => res.json())
    .then(plant => setPlantList(plant))
  }, []);

  const filtered = plantList.filter((plant) =>
    plant.name.toLowerCase().includes(search.toLowerCase())
  );

return (
    <main>
      <NewPlantForm plantList = { plantList } setPlantList = { setPlantList }/>
      <Search setSearch = { setSearch }/>
      <PlantList plantList = { filtered }/>
    </main>
  );
}

export default PlantPage;
