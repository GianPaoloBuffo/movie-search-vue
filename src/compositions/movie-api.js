import { reactive, watch } from '@vue/composition-api'

const API_KEY = 'a5549d08'

export const useMovieApi = () => {
    const state = reactive({
        search: 'Joker',
        loading: true,
        movies: []
    })

    watch(() => {
        const movieApiUrl = `https://www.omdbapi.com/?s=${state.search}&apikey=${API_KEY}`

        fetch(movieApiUrl)
            .then(response => response.json())
            .then(json => {
                state.movies = json.Search
                state.loading = false
            })
    })

    return state
}
