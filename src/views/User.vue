<template>
  <div>
    <h1>Welcome {{ user }}</h1>
    <p>
      <router-link :to="{name: 'invoices'}">Invoices</router-link>
    </p>
    <button @click="logOut" class="btn">Log out</button>
  </div>
</template>

<script>
import store from "@/data/store.js";

export default {
  methods: {
    logOut() {
      store.user = null;
      this.$router.push("/")
    }
  },
  data: () => ({
    user: store.user
  })
}
</script>

<style lang="sass" scoped>

</style>