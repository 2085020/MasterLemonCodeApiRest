export interface CharacterEntityVm {
  id: string;
  picture: string;
  name: string;
  description: string;
  specie: string;
  location: string;
  bestSentences:string;
}

export const createEmptyCharacter = (): CharacterEntityVm => ({
  id: '',
  name: '',
  description: '',
  picture: '',
  specie: '',
  location: '',
  bestSentences: '',
});
