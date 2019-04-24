<template>
	<b-row id="servicos" class="servicos">
		<b-col class="col-12">
			<h1 class="servicos-header text-center">Tratamentos:</h1>
		</b-col>
		<b-col v-for="(servico, index) in servicos" :key="'fazemos-'+index" class="col-md-4 col-sm-12 servico-desktop">
			<h4 class="text-left servico-title"><strong>{{servico.title}}</strong></h4>
			<div class="text-left servico-text">{{servico.text}}</div>
		</b-col>
		<b-card class="servico-mobile">
			<div class="card-header align-sef-center">
				<a @click="proxServ()"><font-awesome-icon class="icon-left" icon="arrow-circle-left"></font-awesome-icon></a>
				<h4 class="servico-title">{{servicos[opcao].title}}</h4>
				<a @click="antServ()"><font-awesome-icon class="icon-right" icon="arrow-circle-right"></font-awesome-icon></a>
			</div>
				<div class="text-left servico-text">{{servicos[opcao].text}}</div>
		</b-card>
	</b-row>
</template>

<script type="text/javascript">
	export default {
		data() {
			return {
				servicos: [
					{
						title: 'Clareamento', 
						text: 'Com a idade e o consumo constante de alimentos e bebidas que possuem corantes em suas composições os dentes começam a escurecer. Nestes casos, o processo de clareamento é indicado para melhorar a estética dos dentes.', 
					},
					{
						title: 'Lentes de Contato', 
						text: 'As lentes de contato são uma solução para quem busca uma alternativa mais rápida em tratamentos estéticos. Elas são indicadas para quem possui formato, cor e tamanho irregular dos dentes.Além de sites completos, desenvolvemos sites rápidos e temporários que podem impulsionar o alcance do seu produto.', 
					},
					{
						title: 'Periodontia', 
						text: 'Trata de problemas na gengiva e na estrutura óssea de suporte dos dentes. É a especialidade de periodontia que realiza gengivoplastia (plástica gengival), harmonizando o contorno dos dentes, entre outros procedimentos.', 
					},
					{
						title: 'Ortodontia', 
						text: 'Cuida do aspecto funcional e estético dos dentes, corrigindo suas posições e restaurando o equilíbrio mastigatório. É realizado em crianças e adultos, utilizando aparelhos fixos ou removíveis, dependendo das necessidades do tratamento.', 
					},
					{
						title: 'Implantes', 
						text: 'É a melhor alternativa para a reposição dos elementos dentários quando perdidos por completo (coroa e raiz), possibilitando o alcance de excelente estética e função.', 
					},
					{
						title: 'Bruxismo e ATM', 
						text: 'Bruxismo é uma desordem funcional que se caracteriza pelo ranger ou apertar dos dentes durante o dia ou, mais comumente, durante o sono. Os principais objetivos do tratamento de bruxismo são reduzir a dor, evitar danos permanentes aos dentes e reduzir o ranger.', 
					},
				],
				opcao: 0,
			}
		},
		methods: {
			proxServ() {
				this.opcao += 1;
				if (this.opcao >= this.servicos.length) {
					this.opcao = 0;
				}
			},
			antServ() {
				this.opcao -= 1;
				if (this.opcao < 0) {
					this.opcao = this.servicos.length - 1;
				}
			},
		}
	}
</script>



<style scoped>
.servicos {
  padding: 32px 100px;
}
.icon-right{
	font-size: 15px;
	position: absolute;
	right: 40px;
}
.icon-left{
	font-size: 15px;
	position: absolute;
	left: 40px;
}
.botao{
	background: #2e9190;
}

.servico-title{
	text-align: center;
}

.servico-title::first-letter {
	border-bottom: 3px solid #2e9190;
}

.servico-text{
	font-size: 15px;
}

.servicos-header {
  padding-bottom: 24px;
  align-content: center;
  color: #2e9190;
}

.servico-desktop {
  padding: 24px 24px;
}

.content {
  padding: 24px 108px;
}

.servico-mobile{
	display: none;
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
	.servicos-header{
		font-size: 30px;
		padding-bottom: 0px;
	}
	.servico-title{
		font-size: 20px;
		padding: 0px 0px;
		display: inline;
	}
	.servico-title::first-letter {
		color: #2e9190;
	}
	.servico-text{
		padding-top: 5px;
	}
}

</style>
