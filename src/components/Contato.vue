<template>
  <div class="contato text-left row" id="contato">
    <div class="row mx-auto w-100 p-0">
      <div class="info col-12 col-md-6 align-self-center">
        <div class="mx-auto">
          <div class="row">
            <div class="col-10 col-md-11">
              <h6 class="">(84) 99452-4755 <a href="https://api.whatsapp.com/send?phone=5584994524755" target="_blank"><font-awesome-icon class="fa-icon whats" :icon="['fab', 'whatsapp']"></font-awesome-icon></a></h6>
              <h6 class="rua"><strong>ED. TIROL WAY, TORRE OFFICE<br>SALA 601</strong></h6>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6 p-0">
        <iframe class="w-100 mx-auto mapa" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15877.344136342035!2d-35.2037009!3d-5.808129!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x73a82f2812300476!2sTirol+way+office!5e0!3m2!1spt-BR!2sbr!4v1553097285630" frameborder="0" style="border:0" allowfullscreen></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contato"
}
</script>

<style scoped>
  .contato {
    padding: 15px;
    -webkit-box-shadow: 0px -5px 10px -5px rgba(46,145,144,0.5);
    -moz-box-shadow: 0px -5px 10px -5px rgba(46,145,144,0.5);
    box-shadow: 0px -5px 10px -5px rgba(46,145,144,0.5);
  }

 .whats{
    position:relative;
    width:30px;
    height:30px;
    background-color:#25d366;
    color:#FFF;
    border-radius:50px;
    text-align:center;
    font-size:60px;
    box-shadow: 2px 2px 3px #999;
    z-index:100000;
  }


  .whats:hover {
    color: #fff;
    box-shadow: 2px 2px 3px #666;
    background-color: #1ea851;
  }

  .mapa{
    height: 300px;
    padding-right: 100px;
  }

  .rua {
    font-size: 25px;
    color: #2e9190;
    padding-top: 5px;
  }

  .info {
    text-align: right;
  }

  .map-icon {
    color: #fb9527;
    font-size: 28px;
  }

  @media only screen and (max-width: 768px) {
    .mapa{
      padding: 5px 5px;
      height: 100px;
    }

    .info {
      text-align: center;
      padding: 10px;
      padding-left: 40px;
      padding-right: 0px;
    }
  }
</style>
