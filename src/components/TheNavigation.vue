<template>
  <nav id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/brazil">Brazil</router-link>
    <router-link to="/panama">Panama</router-link>
    <router-link to="/hawaii">Hawaii</router-link>
    <router-link to="/Jamaica">Jamaica</router-link>
  </nav>
</template>

<script>
export default {
  name: "TheNavigation"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
#nav {
  display: flex;
  justify-content: center;
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
