<template>
  <div>
    <h1 class="centralizado">{{ titulo }}</h1>

    <input
      type="search"
      class="filtro"
      v-on:input="filtro = $event.target.value"
      placeholder="filtre por título"
    />

    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for="foto of fotosComFiltro">
        <meu-painel :titulo="foto.titulo">
          <imagem-responsiva :titulo="foto.titulo" :src="foto.url" />
          <meu-botao
            tipo="button"
            rotulo="REMOVER"
            @botaoAtivado="remove($event, foto)"
          />
        </meu-painel>
      </li>
    </ul>
  </div>
</template>

<script>
import Botao from "../shared/botao/Botao.vue";
import Painel from "../shared/painel/Painel.vue";
import ImagemResponsiva from "../shared/imagem-responsiva/ImagemResponsiva.vue";

export default {
  components: {
    "meu-botao": Botao,
    "meu-painel": Painel,
    "imagem-responsiva": ImagemResponsiva,
  },

  data() {
    return {
      titulo: "Alurapic",
      fotos: [],
      filtro: "",
    };
  },

  computed: {
    fotosComFiltro() {
      if (this.filtro) {
        return this.fotos.filter((foto) =>
          foto.titulo.toLowerCase().includes(this.filtro.toLowerCase())
        );
      }

      return this.fotos;
    },
  },

  methods: {
    remove($event, foto) {
      alert(`Removendo ${$event} ${foto.titulo}`);
    },
  },

  created() {
    this.$http
      .get("http://localhost:3000/v1/fotos")
      .then((res) => res.json())
      .then(
        (fotos) => (this.fotos = fotos),
        (err) => console.log(err)
      );
  },
};
</script>

<style>
.centralizado {
  text-align: center;
}

.lista-fotos {
  list-style: none;
}

.lista-fotos .lista-fotos-item {
  display: inline-block;
}

.filtro {
  display: block;
  width: 100%;
}
</style>
