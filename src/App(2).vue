<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" width="250" />
    <ul>
      <li><router-link :to="{ name: 'inicio' }">Inicio</router-link></li>
    </ul> -->
    <transition name="vista">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.vista-enter-active,
.vista-leave-active {
  transition: opacity 0.1s;
}
.vista-enter,
.vista-leave-to {
  opacity: 0;
}
</style>
