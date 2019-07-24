<template>
<div id="servicos" class="servicos">
	<b-row justify-content-md-center>
		<b-col class="col-lg-4 col-12 isblack">
			<img class="icone" src="../assets/icone-1.png" />
			<p class="servico-text text-center align-self-center">O Clube conta com 12 estandes destinados a prática do tiro, em breve teremos a expansão para 16.</p>
		</b-col>
		<b-col class="col-lg-4 col-12 isgray">
			<img class="icone" src="../assets/icone-2.png" />
			<p class="servico-text text-center align-self-center">Oferecemos cursos para a prática do tiro na área esportiva, defesa e forças de segurança.</p>
		</b-col>
		<b-col class="col-lg-4 col-12 isblack">
			<img class="icone" src="../assets/icone-3.png" />
			<p class="servico-text text-center align-self-center">Temos a maior área para o esporte de tiro do estado, e também oferecemos um amplo salão de apoio para os nossos filiados.</p>
		</b-col>
	</b-row>
	<b-row justify-content-md-center>
		<b-col class="col-lg-4 col-12 isgray">
			<img class="icone" src="../assets/icone-4.png" />
			<p class="servico-text text-center align-self-center">Todos os meses, provas de várias modalidades são oferecidas no clube para que nossos filiados possam por em prática seus treinos.</p>
		</b-col>
		<b-col class="col-lg-4 col-12 isblack">
			<img class="icone" src="../assets/icone-5.png" />
			<p class="servico-text text-center align-self-center">Serviço de assessoria (Despachante) juntos aos órgãos competentes, como Exército Brasileiro e Polícia Federal para o conforto dos nossos filiados.</p>
		</b-col>
		<b-col class="col-lg-4 col-12 isgray">
			<img class="icone" src="../assets/icone-6.png" />
			<p class="servico-text text-center align-self-center">Parcerias com lojas de armas e assessórios para os nossos filiados.</p>
		</b-col>
	</b-row>
</div>
</template>



<style scoped>

.isblack{
	background-color: #2f2f2f;
}
.isgray{
	background-color: #9b9b9b;
}
.icone{
	width: 50px;
	padding-top: 30px;
}
.servico-text{
	font-size: 15px;
	color: white;
	padding: 20px;
	text-align: center;
}
.servicos{
	display: inline;
}

.servico-desktop {
  padding: 24px 24px;
}


@media only screen and (max-width: 768px) {
  .servico-desktop {
    display: none;
  }
	.servico-mobile{
		display: inline;
	}
	.servicos{
		padding: 5px;
		padding-bottom: 20px;
		height: 300px;
	}
	.servico-text{
		padding-top: 5px;
	}
}

</style>
