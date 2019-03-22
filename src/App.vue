<template>
  <div id="app">
    <navbar/>
    <div class="container-fluid">
      <consultorio/>
      <sobre/>
      <servicos/>
      <contato/>
    </div>
    <Footer/>
  </div>

</template>

<script>
import Navbar from './components/Navbar.vue'
import Consultorio from './components/Consultorio.vue'
import Sobre from './components/Sobre.vue'
import Servicos from './components/Servicos.vue'
import Contato from './components/Contato.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    Navbar,
    Consultorio,
    Sobre,
    Servicos,
    Contato,
    Footer
  },
  data() {
    return {
      padding: 0
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Lato');

#app {
  font-family: 'Lato', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/*.content-margin {
  padding: 0px 96px;
}*/

.content-margin {
  padding: var(--padding);
}

.orange-col {
  color: #fb9527;
}

.orange-bg {
  background: #fb9527;
}

.gray-bg {
  background: #ebebeb;
}
.p-top {
  padding: 24px 0px;
}

@media (max-width: 768px) {
    .content {
      padding: 24px 108px !important;
    }
  }
</style>
