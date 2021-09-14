<template>
  <div>
    <!-- si no hay nada en el input que salga un texto para instrucciones. Lo hacemos con v-if y v-else -->
    <ul>
      <li
        v-for="juego in juegos"
        :key="juego.id"
        :style="{ 'background-color': juego.color, color: juego.textcolor }"
      >
        {{ juego.id }} | {{ juego.nombre }} | {{ juego.stock }} |
        {{ juego.precio }} |
        <!-- condicional para que solo aparezca cuando modo sea vender. Se come a lo que viene por defecto en props -->
        <button
          v-if="mode === 'vender'"
          class="btn btn-light btn-sm m-2"
          @click="$emit('vender', juego)"
          :disabled="juego.stock <= 0"
        >
          Comprar
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ListaJuegos",
  props: {
    juegos: { type: Array, require: true },
    // agregar más cosas a un componente en un lugar específico
    mode: { type: String, default: "esconder" },
  },
};
</script>

<style></style>
