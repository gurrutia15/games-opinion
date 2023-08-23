<template>
  <div>
    <h2 class="mt-5">Escribe tu opinión para el juego: {{ nombre }}</h2>
    <ComentarioComponent />
  </div>
</template>

<script>
import ComentarioComponent from "@/components/ComentarioComponent.vue";
export default {
  name: "OpinionsView",
  props: ["nombre"],
  components: {
    ComentarioComponent,
  },
};
</script>

<style scoped></style>
