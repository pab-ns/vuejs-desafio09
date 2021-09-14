<template>
  <div>
    <Nav></Nav>
    <div class="container">
      <h1 class="text-center">Total</h1>
      <section>
        <h3 class="font-weight-bold text-center">
          Listado total de ventas (cart)
        </h3>
        <ListaJuegos :juegos="$store.state.ventas" />
      </section>
      <br />
      <section class="text-center">
        <h3 class="font-weight-bold">
          Monto total de ventas: $<span class="text-info">
            {{ $store.getters.montoTotalVentas }}
          </span>
        </h3>
        <!-- <p>Total: {{ $store.getters.montoTotalVentas }}</p> -->
      </section>
    </div>
  </div>
</template>

<script>
import Nav from "./Nav.vue";
import ListaJuegos from "./ListaJuegos.vue";
export default {
  name: "Total",
  components: { Nav, ListaJuegos },
};
</script>

<style></style>
