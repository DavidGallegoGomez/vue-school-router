<template>
  <section class="destination">
    <h1>{{ destination.name }}</h1>
    <div class="destination-details">
      <img :src="require(`@/assets/${destination.image}`)" :alt="destination.name">
    </div>
  </section>
</template>

<script>
import store from "@/data/store.js";

export default {
  data: () => ({
    destinationId: this.$route.params.id
  }),
  computed: {
    destination() {
      return store.destinations.find( destination => destination.id === this.destinationId)
    }
  }
}
</script>