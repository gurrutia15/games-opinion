<template>
  <div>
    <div
      class="row d-flex flex-row mb-3 justify-content-center flex-wrap align-content-center p-4"
    >
      <div
        v-for="(game, index) in games"
        :key="index"
        class="card m-2"
        style="width: 18rem"
      >
        <img
          :src="game.background_image"
          class="card-img-top rounded mx-auto d-block img-fluid image"
          alt="game.name"
        />
        <div class="card-body">
          <h5 class="card-title">{{ game.name }}</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            Rating: <span class="ms-5">{{ game.rating }}</span>
          </li>
          <li class="list-group-item">Released: {{ game.released }}</li>
          <li class="list-group-item">Update: {{ game.updated }}</li>
        </ul>
        <div class="card-body">
          <button class="btn btn-primary me-2" @click="opiniones(game.name)">
            Opinar
          </button>
          <span class="ms-2 heart" @click="favorito(game.name)">
            <!-- <i id="heart" class="fa-regular fa-heart icono fa-xl"></i> -->
            <img src="@/assets/img/heart.svg" alt="" />
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ListGamesComponent",
  data() {
    return {
      numeroJuegos: 0,
      games: [],
    };
  },
  methods: {
    gamesList() {
      let url =
        "https://api.rawg.io/api/games?key=46eb88c42a544cec839dab94f2738872";
      axios
        .get(url)
        .then((res) => {
          this.numeroJuegos = res.data.results.length;
          for (let i = 0; i < this.numeroJuegos; i++) {
            this.games.push(res.data.results[i]);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    opiniones(nameGame) {
      this.$router.push(`/opiniones/${nameGame}`);
    },
    favorito(nameGame) {
      this.$router.push(`/administracion/${nameGame}`);
    },
  },
  created() {
    this.gamesList();
  },
};
</script>

<style scoped>
/* .image {
  width: 100%;
  height: auto;
  display: block;
} */
</style>

<!-- <span><iconify-icon
              icon="mdi:heart"
              width="50"
              height="50"
            ></iconify-icon></span
        > -->
