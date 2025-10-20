export interface TMDBMovie {
  id: number;
  title: string;
  overview: string;
  release_date: string;
  poster_path: string | null;
  vote_average: number;
  description: string;
}

export interface TMDBMoviesResponse {
  results: TMDBMovie[];
}


export interface TMDBActor {
  id: number;
  name: string;
//   birth_date: string;
  profile_path: string | null;
  popularity: number;
}

export interface TMDBActorsResponse {
  results: TMDBActor[];
}