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
      <li class="lista-fotos-item" v-for="foto of fotosComFiltro" v-bind:key="foto.url">
        <meu-painel :titulo="foto.titulo">
          <!-- <imagem-responsiva
            v-meu-transform="{ increment: 15, animated: true }"
            :titulo="foto.titulo"
            :src="foto.url"
          /> -->
          <!-- <imagem-responsiva
            v-meu-transform2.animated.reverse="90"
            :titulo="foto.titulo"
            :src="foto.url"
          /> -->
          <!-- <imagem-responsiva
            v-meu-transform3.animated="30"
            :titulo="foto.titulo"
            :src="foto.url"
          /> -->
          <imagem-responsiva
            v-meu-transform3:scale="1.2"
            :titulo="foto.titulo"
            :src="foto.url"
          />
          <meu-botao
            tipo="button"
            rotulo="REMOVER"
            :confirmacao="true"
            @botaoAtivado="remove($event, foto)"
            estilo="perigo"
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
    loadContent() {
      this.resource
        .query()
        .then((res) => res.json())
        .then(
          (fotos) => (this.fotos = fotos),
          (err) => console.log(err)
        );
    },

    remove($event, foto) {
      this.resource.delete({ id: foto._id }).then(
        () => {
          this.fotos.splice(this.fotos.indexOf(foto), 1);
          alert("Removido com sucesso");
        },
        (err) => {
          console.log(err);
        }
      );
    },
  },

  created() {
    this.resource = this.$resource("v1/fotos{/id}");

    this.loadContent();
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
