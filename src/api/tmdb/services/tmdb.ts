export default () => ({
  async getPopularMovies() {
    const apiKey = process.env.TMDB_API_KEY;
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=fr-FR`;
    const response = await fetch(url);
    const data = await response.json();
    return data; 
  },

  async getMovieDetails(movieId: number | string) {
    const apiKey = process.env.TMDB_API_KEY;
    const url = `https://api.themoviedb.org/3/movie/${encodeURIComponent(String(movieId))}?api_key=${apiKey}&language=fr-FR`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  },

  async searchActors(query: string) {
    const apiKey = process.env.TMDB_API_KEY;
    const url = `https://api.themoviedb.org/3/search/person?api_key=${apiKey}&language=fr-FR&query=${encodeURIComponent(query)}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  },
})
    