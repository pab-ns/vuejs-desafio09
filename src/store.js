import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// tip! para delay
const delay = (ms) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

const store = new Vuex.Store({
  state: {
    busquedadInput: "",
    juegos: [
      {
        id: "0001",
        nombre: "Sekiro",
        stock: 100,
        precio: 30000,
        color: "red",
        textcolor: "black",
        destacado: true,
      },
      {
        id: "0002",
        nombre: "FIFA 21",
        stock: 100,
        precio: 25000,
        color: "blue",
        textcolor: "white",
        destacado: false,
      },
      {
        id: "0003",
        nombre: "Gears of War 4",
        stock: 100,
        precio: 15000,
        color: "green",
        textcolor: "white",
        destacado: true,
      },
      {
        id: "0004",
        nombre: "Marios Tennis Aces",
        stock: 100,
        precio: 35000,
        color: "yellow",
        textcolor: "black",
        destacado: false,
      },
      {
        id: "0005",
        nombre: "Bloodborn",
        stock: 100,
        precio: 10000,
        color: "blue",
        textcolor: "white",
        destacado: false,
      },
      {
        id: "0006",
        nombre: "Forza Horizon 4",
        stock: 100,
        precio: 20000,
        color: "red",
        textcolor: "black",
        destacado: true,
      },
    ],
    ventas: [],
  },
  getters: {
    // reducir arreglo a un número (listado 2)
    stockTotal(state) {
      return state.juegos.reduce((accumulator, juego) => {
        accumulator = accumulator + juego.stock;

        // Numero que va ir quedando a medida que vaya sumando uno por uno.
        return accumulator;
      }, 0); // 0 Va ser el valor inicial
    },
    // resultado de busquedad
    juegosSegunBusquedad(state) {
      // state.busquedadInput
      // Vaciar lista si no hay texto en la busquedad
      if (state.busquedadInput === "") {
        return [];
      } else {
        // filtrar segun busquedad e ignorar maysucula
        return state.juegos.filter((juego) =>
          juego.nombre
            .toLowerCase()
            .includes(state.busquedadInput.toLowerCase())
        );
      }
    },
    // Parte 2. Mostrar lista stock > 0
    juegosConStock(state) {
      return state.juegos.filter((juego) => juego.stock > 0);
    },
    montoTotalVentas(state) {
      return state.ventas.reduce((accumulator, venta) => {
        accumulator += venta.precio;
        return accumulator;
      }, 0);
    },
  },
  mutations: {
    SET_BUSQUEDAD(state, nuevaBusquedad) {
      state.busquedadInput = nuevaBusquedad;
    },
    SUBS_STOCK(state, indiceJuego) {
      state.juegos[indiceJuego].stock--;
    },
    ADD_STOCK(state, indiceJuego) {
      state.juegos[indiceJuego].stock++;
    },
    ADD_VENTA(state, venta) {
      state.ventas.push(venta);
    },
  },
  actions: {
    setBusquedad(context, nuevaBusquedad) {
      context.commit("SET_BUSQUEDAD", nuevaBusquedad);
    },
    // se utiliza async para que se registre primero una y luego la otra independiente de cuanto se demore
    async venderJuego(context, juego) {
      // console.log("desde store.js ->", juego);
      await context.dispatch("procesarVenta", juego);
      await context.dispatch("registrarVenta", juego);
    },
    // restar -1 a stock
    async procesarVenta(context, juegoAVender) {
      // aplicar delay con tip
      await delay(2000);

      // encontrar indice del juego
      let indiceJuego = context.state.juegos.findIndex(
        (juego) => juego.id === juegoAVender.id
      );
      if (context.state.juegos[indiceJuego].stock > 0) {
        context.commit("SUBS_STOCK", indiceJuego);
        // } else {
        //   console.warn("No se puede restar a 0")
      }
    },
    async registrarVenta(context, juego) {
      await delay(1000);
      // eslint-disable-next-line no-unused-vars
      const { stock, ...datosJuego } = juego;
      context.commit("ADD_VENTA", datosJuego);
    },
  },
});

export default store;
