<template>
  <div class="container">
    <div class="mb-3">
      <label
        for="exampleFormControlInput1"
        class="form-label d-flex flex-row mb-3"
        >Nombre: {{ nombre }}</label
      >
      <input
        type="text"
        class="form-control"
        id="exampleFormControlInput1"
        placeholder="nombre"
        v-model="nombreUsuario"
      />
    </div>
    <div class="mb-3">
      <label
        for="exampleFormControlTextarea1"
        class="form-label d-flex flex-row mb-3"
        >Opinión:</label
      >
      <textarea
        class="form-control"
        id="exampleFormControlTextarea1"
        rows="3"
        placeholder="Tu opinión debe ir aquí..."
        v-model="comentarioUsuario"
      ></textarea>
      <div class="d-flex flex-row mb-3 mt-3">
        <button
          type="button"
          class="btn btn-info"
          @click.prevent="agregarOpinion()"
        >
          {{ nombreBoton }}
        </button>
      </div>
    </div>
    <div>
      <h2 class="mt-4">A continuación podrás ver tu opinión</h2>
    </div>
    <div class="mt-4">
      <div
        class="alert alert-danger text-start m-4"
        role="alert"
        v-if="numeroOpiniones === 0"
      >
        No existen opiniones para mostrar
      </div>
      <div class="container mb-5" v-if="numeroOpiniones > 0">
        <div class="accordion accordion-flush" id="accordionFlushExample">
          <div
            class="accordion-item"
            v-for="(element, index) in comentarios"
            :key="index"
          >
            <h2 class="accordion-header" id="flush-headingOne">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                Opinión creada por {{ element.nombre }}
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body text-start">
                {{ element.comentario }}
                <div class="mt-3">
                  <button
                    class="btn btn-danger"
                    @click.prevent="eliminarComentario()"
                  >
                    Eliminar
                  </button>
                  <button
                    class="btn btn-warning ms-5"
                    @click.prevent="editarComentario()"
                  >
                    Editar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ComentarioComponent",
  data() {
    return {
      nombreUsuario: "",
      comentarioUsuario: "",
      comentarios: [],
      numeroOpiniones: 0,
      posicionComentario: 0,
      nombreBoton: "Agregar",
    };
  },
  methods: {
    agregarOpinion() {
      if (this.nombreBoton == "Agregar") {
        this.numeroOpiniones++;
        let nuevaOpinion = {
          nombre: this.nombreUsuario,
          comentario: this.comentarioUsuario,
        };
        this.comentarios.push(nuevaOpinion);
        this.nombreUsuario = "";
        this.comentarioUsuario = "";
      } else if (this.nombreBoton == "Actualizar") {
        let actualizarOpinion = {
          nombre: this.nombreUsuario,
          comentario: this.comentarioUsuario,
        };
        this.comentarios.splice(this.posicionComentario, 1, actualizarOpinion);
        this.nombreBoton = "Agregar";
        this.nombreUsuario = "";
        this.comentarioUsuario = "";
      }
    },
    editarComentario(index) {
      this.nombreBoton = "Actualizar";
      this.nombreUsuario = this.comentario[index].nombre;
      this.comentarioUsuario = this.comentario[index].comentario;
      this.posicionComentario = index;
    },
    // this.nombreBoton = "Actualizar";
    // let actualizarOpinion = {
    //   comentario: this.comentarioUsuario,
    // };
    // this.comentarios.push(actualizarOpinion);
    eliminarComentario() {},
  },
};
</script>

<style scoped></style>
<!-- 
Video
Modulo 6
consolidacion 1
1:14:38 (break)  -->
