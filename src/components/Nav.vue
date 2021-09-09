<template>
  <div>
    <div class="container">
      <!-- header -->
      <header class="text-center">
        <h1>32bits</h1>
        <h2>Juegos de PC y consolas</h2>
      </header>
    </div>
    <!-- navbar -->
    <nav class="navbar-dark bg-dark py-2 my-4">
      <ul class="nav justify-content-center">
        <li class="nav-item">
          <router-link to="/inicio" class="nav-link">Inicio</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/busquedad" class="nav-link">Búsquedad</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/ventas" class="nav-link">Ventas</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/total" class="nav-link">Total</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Nav",
};
</script>

<style>
.nav-link {
  color: white;
}

.nav-link:hover {
  color: #b8b8b8;
}
</style>
