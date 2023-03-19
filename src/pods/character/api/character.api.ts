import { CharacterEntityApi } from './character.api-model';

export const getCharacter = async (id:string): Promise<CharacterEntityApi> => {
  return fetch(`http://localhost:3000/characters/${id}`)
      .then((response) => response.json())
}


export const saveCharacter = async (character: CharacterEntityApi): Promise<boolean> => {
  fetch(`http://localhost:3000/characters/${character.id}`, {
  method: 'PATCH',
  body: JSON.stringify({
    bestSentences: character.bestSentences,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json());
  return true;
};


