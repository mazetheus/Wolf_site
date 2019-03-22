<template>
  <div class="header container-fluid p-0">
    <div class="slide">
    </div>
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
            <a class="nav-link" style="color: #bbb !important;" href="https://www.instagram.com/dr.pedropaulogaag/" target="_black"><font-awesome-icon class="instagram-icon" :icon="['fab', 'instagram']"></font-awesome-icon></a>
          </li>
        </ul>
      </div>
    </nav>
    <div class="">
      <img class="img-banner" src="../assets/banner2.jpg"/>
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
        {name: 'nosso consultorio', link: '#consultorio'},
        {name: 'sobre', link: '#sobre'},
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
    padding: 0px 48px;
    background: #fff;
    color: #414141;
    z-index: 110; 
    border: none;
  }

  .logo-banner{
    width: 10%;
    height: auto;
  }

  .img-banner{
    width: 100%;
    height: auto;
  }

  .carousel-item {
    border: none;
  }

  .nav-item a {
    color: #414141 !important;
  }

  .navbar-brand {
    width: 5%;
    padding: 5spx;
  }

  .slide-text {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    padding-left: 156px;
  }

  .vertical-align {
    position: relative;
    top: 10%;
    margin-top:-50px;
    margin-left:-50px;
    transform: translateY(-50%); /* Adicionar os prefixos dos navegadores */
  }

  .slide-text h1 {
    font-size: 5vw;
  }

  .slide-text a {
    color: #fff;
    text-decoration: none;
  }

  .confira {
    font-size: 2vw;
    padding: 32px 0px;
  }

  .confira strong {
    font-size: 24px;
  }

  .btn-link {
    border: none;
    color: #fff;
    text-decoration: none;
    cursor: pointer;
  }

  .btn-link:hover .arrow-down {
    background: #fff;
    transition: background 0.2s ease;
  }

  .btn-link:hover .arrow-down-icon {
    color: #000;

    transition: color 0.2s ease;
  }

  @media (max-width: 991px) {
    .navbar-collapse {
      background: #fff;
    }

    .navbar-toggler {
      border-color: #414141;
    }

    .navbar-brand {
      width: 13%;
      padding: 10px;
    }

    .nav-link {
      color: #000 !important;
    }
  }

  @media (max-width: 768px) {
    .slide-text {
      padding: 0px 0px 0px 108px;
    }
  }

  @media (max-width: 576px) {
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
  }

  .instagram-icon {
    font-size: 24px;
  }
  
</style>
