<template>
  <h1>Đây là App....</h1>
  <NavApp />
  <router-view />
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import NavApp from "./components/Nav.vue";

export default {
  name: "App",
  components: {
    NavApp,
  },
  created() {
    // chưa truy cập đc vào DOM
    console.log(document.querySelector("h1"));
  },
  mounted() {
    // truy cập đc vào DOM
    console.log(document.querySelector("h1"));
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
