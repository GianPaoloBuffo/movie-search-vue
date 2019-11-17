<template>
  <header class="app__header">
    <h2>{{ title }}</h2>
  </header>
</template>

<script>
export default {
  name: 'header',
  props: ['title']
}
</script>
