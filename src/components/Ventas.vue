<template>
  <div>
    <Nav></Nav>
    <div class="container">
      <h1 class="text-center">Ventas</h1>

      <section>
        <h3 class="font-weight-bold text-center">
          Cantidad de juegos con stock:
          <span class="text-info">
            {{ $store.getters.juegosConStock.length }}</span
          >
        </h3>
        <!-- <p class="text-center text-danger">
          Total: {{ $store.getters.juegosConStock.length }}
        </p> -->
        <!-- <ListaJuegos :juegos="$store.getters.juegosConStock" /> -->
      </section>
      <br />
      <section>
        <h3 class="font-weight-bold text-center">
          Venta de juegos
        </h3>

        <ListaJuegos
          :juegos="$store.state.juegos"
          mode="vender"
          @vender="$store.dispatch('venderJuego', $event)"
        />
      </section>
    </div>
  </div>
</template>

<script>
import Nav from "./Nav.vue";
import ListaJuegos from "./ListaJuegos.vue";
export default {
  name: "Ventas",
  components: { Nav, ListaJuegos },
  // methods: {
  //   venderJuego(juego) {
  //     // console.log({ juego });
  //     // restar -1 a stock
  //     // this.$store.dispatch("venderJuego", juego);
  //   },
  // },
};
</script>

<style></style>
