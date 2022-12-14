import { useState, useEffect } from "react";

const localCache = {};

export default function useBreedList(animal) {
  const [breedList, setBreedList] = useState([]);
  const [status, setStatus] = useState("unloaded");

  useEffect(() => {
    if (!animal) {
      setBreedList([]);
    } else if (localCache[animal]) {
      setBreedList(localCache[animal]);
    } else {
      requestListFromAPI();
    }

    async function requestListFromAPI() {
      setBreedList([]);
      setStatus("loading");

      const response = await fetch(
        `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
      );
      const jsonFormat = await response.json();

      localCache[animal] = jsonFormat.breeds || [];
      setBreedList(localCache[animal]);

      setStatus("loaded");
    }
  }, [animal]);
  
  return [breedList, status];
}
