<template>
  <div class="consultorio row" id="consultorio">
    <div class="row mx-auto w-100">
      <div class="col-12 titulo-consultorio">
        <h1 class="consultorio-header">Conheça nosso consultório</h1>
        <p class="consultorio-content">Equipado com materias de qualidade e estrutura diferenciada, para proporcionar conforto e segurança.</p>
      </div>

        <div class="col-12 fotos">
          <!-- Images used to open the lightbox -->
            <img src="../assets/consultorio1.jpg" class="hover-shadow">
            <img src="../assets/consultorio2.jpg" class="hover-shadow">
            <img src="../assets/consultorio3.jpg" class="hover-shadow">
        </div>
        <div class="col-12 fotos-consultorio">
            <img src="../assets/consultorio5.jpg" class="hover-shadow">
            <img src="../assets/consultorio6.jpg" class="hover-shadow">
            <img src="../assets/consultorio7.jpg" class="hover-shadow">
        </div>

    </div>
  </div>

</template>


<style scoped>

  .fotos-consultorio{
    padding-bottom: 50px;
  }

  .consultorio-header {
    padding-top: 10px;
    color: #2e9190;
  }

  .consultorio-content {
    color: #737373;
    margin: 0px;
  }

  .hover-shadow{
    width: 200px;
    height: auto;
    margin: 5px;
  }

  img.hover-shadow {
    transition: 0.3s;
  }

  .hover-shadow:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
  

  @media (max-width: 768px) {
    .consultorio {
      padding-top: 64px;
      padding-bottom: 0px;
    }

    .fotos-consultorio{
      padding-bottom: 10px;
    }
     .consultorio {
      padding: 0px;
    }

    .consultorio-content {
      width: 100%;
    }

    .hover-shadow{
      width: 100px;
      margin: 2px;
    }
  }
  @media (max-width: 568px) {
    .hover-shadow{
      width: 80px;
    }
  }
  
   
</style>
