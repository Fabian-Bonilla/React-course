import { useEffect, useState } from "react";
import useBreedList from "./useBreedList.js";
import Pet from "./Pet";
import Dropdown from "./Dropdown.js";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [breedList] = useBreedList(animal);
  const [pets, setPets] = useState([]); // it is an empty array beacause

  useEffect(() => {
    requestPets();
  }, []); //)if you give it nothing you are saying, hey if any of that changes (location, animal, breed, etc) then call it again

  // start calling an API
  async function requestPets() {
    const response = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const jsonFormat = await response.json();

    setPets(jsonFormat.pets);
  }
  //end of the calling
  
  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>

        <Dropdown
          name="Animal"
          id="animal"
          value={animal}
          onChange={(e) => {
            setAnimal(e.target.value);
            setBreed(breedList);
          }}
          onBlur={(e) => {
            setAnimal(e.target.value);
            setBreed(breedList);
          }}

          dataArray={ANIMALS}
        />

        <Dropdown
          id="breed"
          name="Breed"
          value={breed}
          dataArray={breedList}
          onChange={(e) => setBreed(e.target.value)}
          onBlur={(e) => setBreed(e.target.value)}
        />
        
      </form>
      

    </div>
  );
};

export default SearchParams;
/*


      <label htmlFor="animal">
          Animal
          <select
          id="animal"
          value={animal}
          onchange= {(e) => { 
            setAnimal(e.target.value)
            setBreed(breedList)
          }}
          onBlur= {(e) => {
            setAnimal(e.target.value)
            setBreed(breedList)
          }}
          >
            { ANIMALS.map( (animal) => (
              <option key={animal} value={animal}>{animal}</option>
            )) }
          </select>
        </label>




*/
