const keys = {
  characters: (search: string, gender: string, page: number) => ['characters', search, gender, page],
  singleCharacter: (id?: number) => ['character', id],
  interestingCharacters: (charactersList: number[]) => ['interestingCharacters', charactersList],
  episodes: (episodeList: string[]) => ['episodes', ...episodeList]
}

export default keys