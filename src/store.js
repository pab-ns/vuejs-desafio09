import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

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
        destacado: true,
      },
      {
        id: "0002",
        nombre: "FIFA 21",
        stock: 100,
        precio: 25000,
        // color: "blue",
        color: "aqua",
        destacado: false,
      },
      {
        id: "0003",
        nombre: "Gears of War 4",
        stock: 100,
        precio: 15000,
        color: "green",
        destacado: true,
      },
      {
        id: "0004",
        nombre: "Marios Tennis Aces",
        stock: 100,
        precio: 35000,
        color: "yellow",
        destacado: false,
      },
      {
        id: "0005",
        nombre: "Bloodborn",
        stock: 100,
        precio: 10000,
        // color: "blue",
        color: "aqua",
        destacado: false,
      },
      {
        id: "0006",
        nombre: "Forza Horizon 4",
        stock: 100,
        precio: 20000,
        color: "red",
        destacado: true,
      },
    ],
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
  },
  mutations: {
    SET_BUSQUEDAD(state, nuevaBusquedad) {
      state.busquedadInput = nuevaBusquedad;
    },
  },
  actions: {
    setBusquedad(context, nuevaBusquedad) {
      context.commit("SET_BUSQUEDAD", nuevaBusquedad);
    },
  },
});

export default store;
