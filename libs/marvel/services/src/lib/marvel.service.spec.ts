import { marvelService } from './marvel.service';
import * as characters_offsets_0_limit_50 from './fixtures/characters_offsets_0_limit_50.json';
import * as characters_offsets_50_limit_10 from './fixtures/characters_offsets_50_limit_10.json';
import * as character_id_1011334 from './fixtures/character_id_1011334.json';
import { Character } from '@nxrgr/marvel/models';

function removeItems(p: Character) {
  (p.events.items = []),
    (p.stories.items = []),
    (p.comics.items = []),
    (p.series.items = []),
    (p.urls = []);
  return p;
}

describe('marvel/services', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('fetchCharacters', () => {
    const fetchSpy = jest.spyOn(marvelService, 'fetchCharacters');

    it('should return fetchCharacters() success', async () => {
      // arrange
      const expected = characters_offsets_0_limit_50;
      const expectedFiltered = {
        ...expected,
        results: expected.data.results.map(removeItems),
      };

      // act
      const actual = await marvelService.fetchCharacters();
      const actualFiltered = {
        ...actual,
        results: actual.results.map(removeItems),
      };

      //assert
      expect(actualFiltered.results).toEqual(
        expectedFiltered.data.results.map(removeItems)
      );
      expect(fetchSpy).toHaveBeenCalledTimes(1);
    });

    it('should return fetchCharacters() success with parameters', async () => {
      // arrange
      const expected = characters_offsets_50_limit_10;
      expected.data.results.map(removeItems);

      // act
      const actual = await marvelService.fetchCharacters(50, 10);
      actual.results.map(removeItems);

      //assert
      expect(actual.results).toEqual(expected.data.results);
      expect(fetchSpy).toHaveBeenCalledTimes(1);
    });

    it('unexpected error on response interceptor', async () => {
      // arrange
      const error = '500 Internal Server Error';

      fetchSpy.mockRejectedValueOnce(new Error(error));

      // act
      const promiseActual = marvelService.fetchCharacters(0);

      //assert
      await expect(promiseActual).rejects.toThrow(error);
      expect(fetchSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe('fetchCharacter by id', () => {
    const fetchSpy = jest.spyOn(marvelService, 'fetchCharacter');

    it('should return fetchCharacters() success', async () => {
      // arrange
      const expected = character_id_1011334;

      // act
      const actual = await marvelService.fetchCharacter(1011334);

      //assert
      expect(actual.results[0]).toEqual(expected.data.results[0]);
      expect(fetchSpy).toHaveBeenCalledTimes(1);
    });

    it('unexpected error on response interceptor', async () => {
      // arrange
      const error = '404 Not Found';

      fetchSpy.mockRejectedValueOnce(new Error(error));

      // act
      const promiseActual = marvelService.fetchCharacter(0);

      //assert
      await expect(promiseActual).rejects.toThrow(error);
      expect(fetchSpy).toHaveBeenCalledTimes(1);
    });
  });
});
