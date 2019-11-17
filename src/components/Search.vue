<template>
  <form class="search__form">
    <input type="text" :value="movieTitle" @keyup="handleChange" />
    <input type="submit" value="SEARCH" @click="handleSubmit" />
  </form>
</template>

<script>
import { ref } from "@vue/composition-api"

export default {
  name: 'search',
  props: ['search'],
  setup({ search }, { emit }) {
    const movieTitle = ref(search)

    return {
      movieTitle,
      handleSubmit(event) {
        event.preventDefault()
        emit('search', movieTitle.value)
      },
      handleChange(event) {
        movieTitle.value = event.target.value
      }
    }
  }
}
</script>
