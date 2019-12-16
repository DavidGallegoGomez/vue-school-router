<template>
  <div id="app">
    <the-navigation />
    <router-view />
  </div>
</template>

<script>
import TheNavigation from "@/components/TheNavigation";

export default {
  components: {
    TheNavigation
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    padding: 0 10px;

    &.vue-school-active-class {
      color: #ab26ab;
    }
  }
}
</style>
