<template>
    <div class="app">
      <Header title="Composition Api" />
      <Search :search="state.search" @search="handleSearch" />
      <p class="app__intro">Sharing a few of our facourite movies</p>
      <div class="app__movies">
        <Movie v-for="movie in state.movies" :movie="movie" :key="movie.imdbID" />
      </div>
    </div>
</template>

<script>
import { useMovieApi } from './compositions/movie-api'

import Header from './components/Header.vue'
import Search from './components/Search.vue'
import Movie from './components/Movie.vue'

export default {
  name: 'app',
  components: { Header, Search, Movie },
  setup() {
    const state = useMovieApi()

    return {
      state,
      handleSearch(searchTerm) {
        state.loading = true
        state.search = searchTerm
      }
    }
  }
}
</script>
