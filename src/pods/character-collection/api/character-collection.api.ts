import { CharacterEntityApi } from './character-collection.api-model';
//import { mockHotelCollection } from './hotel-collection.mock-data';

//let hotelCollection = [...mockHotelCollection];

export const getCharacterCollection = async (): Promise<CharacterEntityApi[]> => {
  return fetch(`https://rickandmortyapi.com/api/character`)
    .then((response) => response.json())
    .then((json) => json.results);
};


export const searchAllByPage = (page) =>
  fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
    .then((response) => response.json())
    .then((json) => json.results);

export const searchAllByName = (name) =>
  fetch(`https://rickandmortyapi.com/api/character/?name=${name}`)
    .then((response) => response.json())
    .then((json) => json.results);
