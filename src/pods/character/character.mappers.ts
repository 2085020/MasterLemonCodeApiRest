import * as apiModel from './api/character.api-model';
import * as viewModel from './character.vm';

export const mapCharacterFromApiToVm = (
  character: apiModel.CharacterEntityApi
): viewModel.CharacterEntityVm => ({
  ...character,
  id: character.id,
  picture: character.image,
  name: character.name,
  description: `${character.name} is a ${character.gender} ${character.species} originary from ${character.origin.name}. Is ${character.status}.`,
  specie: character.species,
  location: character.location.name,
  bestSentences: character.bestSentences,
});

export const mapCharacterFromVmToApi = (character: viewModel.CharacterEntityVm): apiModel.CharacterEntityApi =>
  (({
    ...character,
    id: character.id,
    bestSentences: character.bestSentences
  } as unknown) as apiModel.CharacterEntityApi);
