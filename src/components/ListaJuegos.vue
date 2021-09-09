<template>
  <div>
    <!-- si no hay nada en el input que salga un texto para instrucciones. Lo hacemos con v-if y v-else -->
    <ul>
      <li
        v-for="juego in juegos"
        :key="juego.id"
        :style="{ 'background-color': juego.color }"
      >
        {{ juego.id }} | {{ juego.nombre }} | {{ juego.stock }} |
        {{ juego.precio }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ListaJuegos",
  props: {
    juegos: { type: Array, require: true },
  },
};
</script>

<style></style>
