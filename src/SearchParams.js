import React, { useState } from 'react';
import { ANIMALS } from '@frontendmasters/pet';

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [animal, setAnimal] = useState("dog");
  const [breed, setBreed] = useState();
  const [breeds, setBreeds] = useState([]);

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input id="location"
            value={location}
            placeholder="Location"
            onChange={e => setLocation(e.target.value)}
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select id="animal"
            value={animal}
            onChange={e => setAnimal(e.target.value)}
            onBlur={e => setAnimal(e.target.value)}>
            <option />
            {ANIMALS.map(animalVal => <option key={animalVal} value={animalVal}>{animalVal}</option>)}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select id="breed"
            value={breed}
            onChange={e => setBreed(e.target.value)}
            onBlur={e => setBreed(e.target.value)}
            disabled={breeds.length === 0}>
            <option>All</option>
            {breeds.map(breedName => <option key={breedName}>{breedName}</option>)}
          </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default SearchParams;
