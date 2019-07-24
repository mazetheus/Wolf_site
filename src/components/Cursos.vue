<template>
  <b-row class="cursos" id="cursos">
    <b-col class="col-12">
      <h1 class="cursos-header">CURSOS</h1>
    </b-col>
    <b-col class="col-lg-4 col-12 curso">
      <img class="curso-imagem" src="../assets/cursos-1.jpg" />
      <p class="curso-titulo"></p>
      <p class="text-left curso-descricao"> Básico (Revolver ou Pistola)<br><br>
          Voltado para quem ainda não teve contato com arma de fogo.<br>
	        •	Regras de Segurança<br>
          •	Legislação<br>
          •	Fundamentos
          •	Comandos de Tiro<br>
          •	Tiro de Ação Simples<br>
          •	Tiro de Ação Dupla<br>
          50 Disparos – Carga horária de 10h<br> </p>
    </b-col>
    <b-col class="col-lg-4 col-12 curso">
      <img class="curso-imagem" src="../assets/cursos-2.jpg" />
      <p class="text-left curso-descricao"> Combat Handgun - Ironside Academy<br><br>
      <div id="box-toggle">
        <p class="text-left curso-descricao">
          O projeto é composto de 3 módulos, cada um com carga horária de 10h e inter-relacionados, você poderá escolher fazer um ou mais módulos de acordo com o seu tempo disponível e o seu nível de conhecimento prévio.<br>
          •	Modulo Fundament – é onde você irá criar a base fundamental e a mentalidade necessária para o sistema de combate empregado no curso<br>
        </p>
      </div>
      <div>
        <div class="smallfont"><input value="Ler mais" style="margin: 0px; padding: 0px; width: 55px; font-size: 11px;" onclick="if (this.parentNode.parentNode.getElementsByTagName('div')[1].getElementsByTagName('div')[0].style.display != '') { this.parentNode.parentNode.getElementsByTagName('div')[1].getElementsByTagName('div')[0].style.display = ''; this.innerText = ''; this.value = 'Ler menos'; } else { this.parentNode.parentNode.getElementsByTagName('div')[1].getElementsByTagName('div')[0].style.display = 'none'; this.innerText = ''; this.value = 'Ler mais'; }" type="buttom">
        </div>
        <div class="alt2" style="border: none ; margin: 0px; padding: 0px;">
        <div style="display: none;">

        <p class="text-left curso-descricao">
          •	Modulo Concealed – é onde veremos tudo sobre o combate dinâmico com o uso velado do armamento. (Uso velado do armamento, Disparos em movimento, Disparos em múltiplos alvos, TRTP Tempo de reação a percepção do almo, Uso aplicado do SACP).<br>
          •	Modulo Defense – se concentra em Closed Quarter Combat (Posições não convencionais, Uso de cobertura e abrigo, Defesa veicular, Defesa em casa).<br></p>

        <br>
        </div>
        </div>
      </div>
    </b-col>
    <b-col class="col-lg-4 col-12 curso">
      <img class="curso-imagem" src="../assets/cursos-3.jpg" />
      <p class="text-left curso-descricao">Cursos de IPSC<br><br>
          Cursos voltado para aqueles que querem se aperfeiçoar no esporte de tiro mais praticado no Brasil, o IPSC.<br>
          •	Básico de IPSC – Indicado para aqueles que estão iniciando no esporte, nesse curso são abordados tópicos como: Regulamento, Equipamentos, Fundamentos do tiro, técnicas de treinamento e de competição.<br></p>
          <div>
        <div class="smallfont"><input value="Ler mais" style="margin: 0px; padding: 0px; width: 55px; font-size: 11px;" onclick="if (this.parentNode.parentNode.getElementsByTagName('div')[1].getElementsByTagName('div')[0].style.display != '') { this.parentNode.parentNode.getElementsByTagName('div')[1].getElementsByTagName('div')[0].style.display = ''; this.innerText = ''; this.value = 'Ler menos'; } else { this.parentNode.parentNode.getElementsByTagName('div')[1].getElementsByTagName('div')[0].style.display = 'none'; this.innerText = ''; this.value = 'Ler mais'; }" type="buttom">
        </div>
        <div class="alt2" style="border: none ; margin: 0px; padding: 0px;">
        <div style="display: none;">

        <p class="text-left curso-descricao">
         •	Intermediário de IPSC – Curso para atletas que já praticam o tiro ou que fizeram o módulo básico de ipsc, os tópicos abordados são: Atirar em movimento, Mão forte/fraca, Entrada e saída do posto de tiro, Barricada, Deitado, Ajoelhado, Aspectos emocionais e de estratégia para a competição.<br>
          •	Avançado de IPSC – Destinado para atletas experientes que querem aperfeiçoar suas técnicas para competição de tiro.</p>
        <br>
        </div>
        </div>
      </div>
    </b-col>
  </b-row>
</template>





<style scoped>

  .cursos {
    margin-top: 20px;
    padding-bottom: 0px;
    margin: 10px 40px;
  }
  .curso-imagem{
    width: 100%;
    padding-bottom: 20px;
  }
  .curso-descricao{
    padding: 0px 30px;
  }
  .curso{
    padding: 0px 50px;
  }
  .curso:after {
    position: absolute;
    content: '';
    border-bottom: 3px solid #2f2f2f;
    width: 50%;
    transform: translateX(-50%);
    bottom: -15px;
    left: 50%;
  }
  .cursos-header {
    padding-top: 10px;
    padding-left: 40px;
    padding-bottom: 20px;
    font-size: 20px !important;
    color: #2f2f2f;
    text-align: left;
  }
  #more {display: none;}


  @media (max-width: 768px) {
    .cursos {
      padding-top: 10px;
      padding-bottom: 20px;
      margin: 0px 0px;
    }
    .curso-descricao{
      padding: 0px 5px;
    }
    .curso{
      padding: 0px 10px;
      padding-bottom: 20px;
    }
    .cursos-header {
      padding-top: 10px;
      padding-left: 0px;
      padding-bottom: 20px;
      font-size: 20px !important;
      color: #2f2f2f;
      text-align: left;
      margin-left: -20px !important;
    }

  }
  
   
</style>
