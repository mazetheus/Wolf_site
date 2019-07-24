<template>
  <div class="header container-fluid p-0">
    <nav class="navbar navbar-expand-lg navbar-light w-100">
      <a class="navbar-brand" href="/"><img src="@/assets/logo.png" class="img img-fluid"/></a>
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#collapseNav" aria-controls="collapseNav"
        aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
      <div class="collapse navbar-collapse justify-content-between align-items-center w-100" id="collapseNav">
        <ul class="navbar-nav mt-2 mt-lg-0 ml-auto">
          <li v-for="(item, index) in menu" :key="index" @click="scroll(item, $event)" class="text-uppercase nav-item">
            <a class="nav-link" v-bind:href="item.link">{{item.name}}</a>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="https://www.instagram.com/wolfclubedetiro/" target="_black"><font-awesome-icon class="instagram-icon" :icon="['fab', 'instagram']"></font-awesome-icon></a>
          </li>
        </ul>
      </div>
    </nav>
  <div>
      <b-carousel
        id="carousel-banner"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        background="#ababab"
        img-width="100%"
        img-height="auto"
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <b-carousel-slide
          caption="O CLUBE"
          text="Somos mais que um clube e escola de tiro, somos a melhor opção no Rio Grande do Norte para a prática do esporte do tiro."
          img-src="../assets/banner.jpg"
        ></b-carousel-slide>
      </b-carousel>
    </div>
  </div>
</template>

<script>
import jQuery from 'jquery'
let $ = jQuery

export default {
  data () {
    return {
      menu: [
        {name: 'nosso cursos', link: '#consultorio'},
        {name: 'missao', link: '#missao'},
        {name: 'tratamentos', link: '#servicos'},
        {name: 'contato', link: '#contato'}
      ],
      width: 0,
      height: 0
    }
  },
  created() {
    this.height = $('.slide').height();
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', () => {
        this.width = $('.slide').width();
        this.height = $('.slide').height();
      });
    })
  },
  methods: {
    scroll(obj, e) {
      e.preventDefault();
      var to = obj.link;
      $('html, body').animate({
        scrollTop: $(to).offset().top
      }, 1000);
    }
  }
}
</script>

<style scoped>
  .navbar {
    padding: 5px 48px;
    background: #fff;
    margin-top: 15px;
    color: #2f2f2f;
    z-index: 110; 
    border: none;
    position: absolute;
  }

  .nav-item a {
    color: #2f2f2f !important;
  }

  .navbar-brand {
    width: 10%;
    padding: 5spx;
  }

  .vertical-align {
    position: relative;
    top: 10%;
    margin-top:-50px;
    margin-left:-50px;
    transform: translateY(-50%); /* Adicionar os prefixos dos navegadores */
  }


  @media (max-width: 768px) {
    .navbar-collapse {
      background: #fff;
    }

    .navbar-toggler {
      border: 0px;
    }

    .navbar-brand {
      width: 13%;
      padding: 10px;
    }

    .nav-link {
      color: #000 !important;
    }

    .navbar-brand {
      width: 15vw;
      padding: 8px;
    }

    .arrow-down {
      font-size: 18px;
    }

    .arrow-down .arrow-down-icon {
      padding: 2px;
    }

    .confira {
      padding: 8px 0px;
    }

    .slide-title {
      padding-top: 36px;
    }

    .slide-text {
      padding: 32px;
    }

    .confira strong {
      font-size: 18px;
    }

    .navbar {
      padding: 0px 24px;
    }

    .instagram-icon {
      font-size: 24px;
    }
  }
  
</style>
