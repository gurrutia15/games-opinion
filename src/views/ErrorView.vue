<template>
  <div class="container rounded padre">
    <div class="alert alert-success" role="alert">
      <h4 class="alert-heading error">404</h4>
      <p class="parrafo">NOT FOUND</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ErrorView",
};
</script>

<style scoped>
* {
  background-color: violet;
}
.padre {
  background-color: violet;
  width: 30%;
  height: auto;
  margin-top: 50px;
  padding: 30px 0 50px 0;
}
.alert {
  border: none;
}
.error {
  background-color: violet;
  color: white;
  font-size: 100px;
  font-weight: 900;
  text-align: center;
}

.parrafo {
  background-color: violet;
  color: white;
  font-size: 30px;
}
</style>

<!-- Ingreso API con facebook -->
<!-- GET https://api.rawg.io/api/platforms?key=46eb88c42a544cec839dab94f2738872 -->
<!-- GET https://api.rawg.io/api/games?key=46eb88c42a544cec839dab94f2738872&dates=2019-09-01,2019-09-30&platforms=18,1,7 -->
