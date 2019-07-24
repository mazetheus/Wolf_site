<template>
  <b-row class="contato align-middle" id="contato">
    <b-col class="col-12 col-lg-5 text-left informacoes justify-content-lg-center">
      <p><span>TELEFONE</span> – (84) 99949-3200 <br>
        <span>EMAIL</span> – wolf@clubedetiro.com.br<br>
        <span>INSTAGRAM</span> - @wolfclubedetiro<br>
        <span>ENDEREÇO</span> – BR 304, Parque de Exposições, Parnamirim / RN
      </p>
    </b-col>
    <b-col class="col-12 col-lg-4 local">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3968.7758036064506!2d-35.27440568523245!3d-5.887093995734885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwNTMnMTMuNSJTIDM1wrAxNicyMC4wIlc!5e0!3m2!1spt-BR!2sbr!4v1557425213822!5m2!1spt-BR!2sbr" width="100%" height="100%" frameborder="0" style="border:0" allowfullscreen></iframe>
    </b-col>
    <b-col class="col-12 col-lg-3 horarios text-center">
      <b-img center class="logo" src="../assets/logo-horario.png" />
      <table>
      <tr>
        <th>Segunda</th>
        <th>08h00 &gt; 18h00</th>
      </tr>
      <tr>
        <td>Terça</td>
        <td>08h00 &gt; 18h00</td>
      </tr>
      <tr>
        <td>Quarta</td>
        <td>08h00 &gt; 18h00</td>
      </tr>
      <tr>
        <td>Quinta</td>
        <td>08h00 &gt; 18h00</td>
      </tr>
      <tr>
        <td>Sexta</td>
        <td>08h00 &gt; 18h00</td>
      </tr>
      <tr>
        <td>Sábado</td>
        <td>08h00 &gt; 18h00</td>
      </tr>
    </table>
    </b-col>
  </b-row>
</template>



<style>
.contato{
  padding-top: 40px;
  align-items: center;
  justify-content: center;
}
.informacoes{
  padding: 50px;
  color: #2f2f2f;
}
.local{
  padding: 10px;
  filter: grayscale(100%);
}
.horarios{
  background-color: #9b9b9b;
  padding: 0px;
  color: white;
}
td, th {
  border: none;
}
tr:nth-child(even) {
  background-color: #2f2f2f;
}
.logo{
  width: 20%;
  padding-top: 20px;
}
  
</style>
