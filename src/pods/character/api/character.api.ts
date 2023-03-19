import { CharacterEntityApi } from './character.api-model';

export const getCharacter = async (id:string): Promise<CharacterEntityApi> => {
  return fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
}


export const saveHotel = async (hotel: CharacterEntityApi): Promise<boolean> => {
  return true;
};


