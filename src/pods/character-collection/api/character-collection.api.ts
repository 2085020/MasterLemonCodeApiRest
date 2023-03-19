import { CharacterEntityApi } from './character-collection.api-model';
//import { mockHotelCollection } from './hotel-collection.mock-data';

//let hotelCollection = [...mockHotelCollection];

export const getCharacterCollection = async (): Promise<CharacterEntityApi[]> => {
  return fetch(`http://localhost:3000/characters`)
    .then((response) => response.json())
};

