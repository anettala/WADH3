<template>
<div>
  <top msg="Welcome!"/>
  <router-view />
  <bottom msg="Footer"/>
</div>
</template>

<script>
import top from "@/components/Header.vue";
import bottom from "@/components/Footer.vue";
export default {
  components: {
    top,
    bottom,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
