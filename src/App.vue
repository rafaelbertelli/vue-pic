<template>
  <div>
    <h1>
      {{ titulo }}
    </h1>

    <picture v-for="foto of fotos">
      <img :src="foto.url" :alt="foto.titulo" :title="foto.titulo" />
    </picture>
  </div>
</template>

<script>
export default {
  data() {
    return {
      titulo: "Meu vue-pic",
      fotos: [],
    };
  },

  created() {
    this.$http
      .get("http://localhost:3000/v1/fotos")
      .then((res) => (this.fotos = res.body))
      .catch((err) => console.log(err));
  },
};
</script>

<style lang="scss"></style>
