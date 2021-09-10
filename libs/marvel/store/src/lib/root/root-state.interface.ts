import { CharactersState } from '../characters/characters-state.interface';
import { CharacterState } from '../character/character-state.interface';

export interface RootState {
  error: Error | string | null;
  characters: CharactersState;
  character: CharacterState;
}
