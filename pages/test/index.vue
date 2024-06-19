<template>
  <div>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <h1>data example</h1>
      <p>id: {{ data.id }}</p>
      <img :src="data.poster_path" :alt="data.title" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
      data: [],
    }
  },
  async mounted() {
    try {
      await this.$fetch()
    } catch (error) {}
  },
  methods: {
    async $fetch() {
      try {
        const response = await fetch(
          'https://nomad-movies.nomadcoders.workers.dev/movies/1011985'
        )
        const temp = await response.json()
        this.data = temp
        this.loading = false
      } catch (error) {
        // console.error('Error fetching movie data:', error);
      }
    },
  },
}
</script>

<style></style>
