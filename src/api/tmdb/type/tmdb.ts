export interface TMDBMovie {
  id: number;
  title: string;
  overview: string;
  release_date: string;
  poster_path: string | null;
  vote_average: number;
}

export interface TMDBMoviesResponse {
  results: TMDBMovie[];
}


export interface TMDBActor {
  id: number;
  name: string;
  birthday: string;
  profile_path: string | null;
  gender: number;
  popularity: number;
}

export interface TMDBActorDetails {


  birthday: string | null;
  biography: string;
  place_of_birth: string | null;
  deathday: string | null;
}

export interface TMDBActorsResponse {
  results: TMDBActor[];
}

export interface TMDBGenre {
  id: number;
  name: string;
}

export interface TMDBGenresResponse {
  genres: TMDBGenre[];
}