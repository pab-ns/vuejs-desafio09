<template>
  <div>
    <Nav></Nav>
    <div class="container">
      <h1 class="text-center">Búsquedad</h1>
      <br />

      <div class="row">
        <!-- filtro -->
        <div class="col-md-12">
          <h3 class="font-weight-bold text-center">Filtro</h3>
          <!-- No v-model. Reemplazamos por Value y @input (que finalmente es lo mismo que un v-model) -->
          <!-- Cada vez que alguien escriba algo, va a guardarlo en busquedadInput -->
          <input
            type="text"
            placeholder="¿Qué juego buscas..?"
            :value="$store.state.busquedadInput"
            @input="$store.dispatch('setBusquedad', $event.target.value)"
          />

          <!-- si no hay nada en el input que salga un texto para instrucciones. Lo hacemos con v-if y v-else -->
          <ul v-if="$store.getters.juegosSegunBusquedad.length > 0">
            <li
              v-for="juego in $store.getters.juegosSegunBusquedad"
              :key="juego.id"
              :style="{ 'background-color': juego.color }"
            >
              {{ juego.id }} | {{ juego.nombre }} | {{ juego.stock }} |
              {{ juego.precio }}
            </li>
          </ul>

          <!-- texto instruccion v-else -->
          <small v-else>Escribe en el buscador el juego </small>
        </div>
        <!-- cantidad -->
        <div class="col-md-6">
          <h3 class="font-weight-bold text-center">
            Juegos totales y stock inicial
          </h3>
          <ul>
            <li>Juegos Totales: {{ $store.state.juegos.length }}</li>
            <li>Stock Total: {{ $store.getters.stockTotal }}</li>
          </ul>
        </div>
        <!-- listado -->
        <div class="col-md-6 text-center">
          <h3 class="font-weight-bold ">
            Listado de Juegos
          </h3>
          <br />
          <ul>
            <!-- :style -->
            <li
              v-for="juego in $store.state.juegos"
              :key="juego.id"
              :style="{ 'background-color': juego.color }"
            >
              {{ juego.id }} | {{ juego.nombre }} | {{ juego.stock }} |
              {{ juego.precio }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "./Nav.vue";
export default {
  name: "Busquedad2",
  components: { Nav },
};
</script>

<style></style>

<style scoped>
.search {
  display: inline-block;
  float: none;
  margin: 0 auto;
  text-align: center;
}
</style>
