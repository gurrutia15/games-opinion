<template>
  <div class="home">
    <h1 class="text-center mt-4 mb-2">Lista de Juegos Disponibles</h1>
    <ListGamesComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import ListGamesComponent from "@/components/ListGamesComponent.vue";
export default {
  name: "HomeView",
  components: {
    ListGamesComponent,
  },
};
</script>
