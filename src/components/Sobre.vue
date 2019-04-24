<template>
  <div class="sobre row" id="sobre">
    <div class="row mx-auto w-100">
      <div class="col-md-6 col-12 sobre-texto">
        <div class="img-desktop" data-aos="fade-zoom-in">
          <img src="../assets/about.jpg" class="img-fluid sobre-img" alt="Responsive image">
        </div>
      </div>
      <div class="col-md-6 col-12 text-left p-4">
          <h1 class="sobre-header">Sobre</h1>
          <p class="sobre-content">Dr. Pedro Paulo Gaag é formado em Odontologia pela Universidade Potiguar desde 2006 e é especialista em ortodontia pela Academia Norte Riograndense de Odontologia. Pós-graduado em Odontologia Estética, Restaurações Estéticas e em Clareamento Dental, é também autor de diversos artigos relacionados à ortodontia e membro da ABOR. Além disso, cumpre seu papel como cidadão brasileiro a serviço da Marinha do Brasil, onde é Primeiro Tenente.</p>
      </div>
  </div>
  </div>

</template>

<script>
 
</script>

<style scoped>
    
  .sobre {
    padding: 0px 156px;
  }

  .img-desktop{
    width: 80%;
    height: auto;
    padding-top: 80px;
  }

  .sobre-header {
    padding-bottom: 24px;
    padding-top: 60px;
    color: #2e9190;
  }

  .sobre-content {
    padding: 0px 10px;
  }

  
@media only screen and (max-width: 768px) {
    .img-desktop {
      display: none;
    }

    .sobre-texto{
      padding-top: 0px;
      padding-bottom: 0px;
    }

    .sobre {
      padding: 5px;
      padding-bottom: 5px;
    }
    .sobre-header{
      font-size: 30px;
      text-align: center;
      padding-top: 0px;
      padding-bottom: 5px;
    }
  }
</style>