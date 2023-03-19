import { CharacterEntityApi } from './character-collection.api-model';
//import { mockHotelCollection } from './hotel-collection.mock-data';

//let hotelCollection = [...mockHotelCollection];

export const getCharacterCollection = async (): Promise<
  CharacterEntityApi[]
> => {
  return getFromGraphQL(`{
    characters {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        image
        gender
        species
        origin {
          name
        }
        status
        location {
          name
        }
      }
    }
  }`);
};

const getFromGraphQL = async (query): Promise<CharacterEntityApi[]> => {
  return fetch('https://rickandmortyapi.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: query,
    }),
  }).then((res) => res.json())
  .then((res) => res.data.characters.results);
};
