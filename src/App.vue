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
      fotos: [
        {
          url:
            "https://w7.pngwing.com/pngs/78/91/png-transparent-brown-dog-illustration-dog-puppy-pet-surprise-pet-puppy-animals-carnivoran-dog-like-mammal.png",
          titulo:
            "ilustração de cachorro marrom, cachorro cachorro pet surpresa, filhote de cachorro de estimação, animais, carnívoro, cachorro Como Mamífero png"
        },
        {
          url:
            "https://w7.pngwing.com/pngs/78/91/png-transparent-brown-dog-illustration-dog-puppy-pet-surprise-pet-puppy-animals-carnivoran-dog-like-mammal.png",
          titulo:
            "ilustração de cachorro marrom, cachorro cachorro pet surpresa, filhote de cachorro de estimação, animais, carnívoro, cachorro Como Mamífero png"
        },
        {
          url:
            "https://w7.pngwing.com/pngs/78/91/png-transparent-brown-dog-illustration-dog-puppy-pet-surprise-pet-puppy-animals-carnivoran-dog-like-mammal.png",
          titulo:
            "ilustração de cachorro marrom, cachorro cachorro pet surpresa, filhote de cachorro de estimação, animais, carnívoro, cachorro Como Mamífero png"
        },
        {
          url:
            "https://w7.pngwing.com/pngs/78/91/png-transparent-brown-dog-illustration-dog-puppy-pet-surprise-pet-puppy-animals-carnivoran-dog-like-mammal.png",
          titulo:
            "ilustração de cachorro marrom, cachorro cachorro pet surpresa, filhote de cachorro de estimação, animais, carnívoro, cachorro Como Mamífero png"
        }
      ]
    };
  }
};
</script>

<style lang="scss"></style>
