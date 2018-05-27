<template>
	<div class="home">
	<main>
	<!-- Template -->
	<div class="container-fluid">
	<div class="row">
                <div class="col-md-4 text-center">
                    <div class="box">
                        <div class="box-content">
								<h1 align="center">Información</h1>
								<hr>
								<p class="lead" align="justify">Bienvenido, acontinuacion podrás ver algunas opciones para seguir tu seguimiento estudiantil a traves de varias opciones en las cuales podrás usar solo si eres un usuario permitido, no se puede hackear esta super protegida asi que no lo intentes, para saber si eres un usuario con privilegios consulta en la informacion en el pie de pagina, si tienes algun error no olvides contactarnos en el pie de pagina esta nuestra informacion gracias por creer en nosotros</p>
								<hr>
								<p class="lead" align="justify">Alternar soluciones es la manera más fácil de hacer las cosas, pero a veces es dificil</p>
								<hr>
								<p class="lead" align="justify">¿Qué es lo que te puedo ofrecer, registra, actualiza, elimina todo al instante!</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 text-center bg-est" style="background-image: url(images/bg-estudiante.gif)" />
                <div class="col-md-4 text-center">
                    <div class="box">
                        <div class="box-content">
                            <h3>Añadir Materia</h3>
    							<form>
    								<label>Nombre </label>
    								<input type="text" v-model="nombre"/>
								<form id="formHor">
    								<label> Horario </label>
									<input  type="time" id="hor1" value="00:00:00" max="22:00:00" min="06:00:00" step="1" v-model="horario1"/>
									<input  type="time" id="hor2" value="00:00:00" max="22:00:00" min="06:00:00" step="1" v-model="horario2"/>
									<button @click="addForm">+</button>
								</form>
								<form id="NewformHor">
								<!-- clonaciones -->
								</form>
                            <br />
                            <a class="btn btn-block btn-primary" @click="addMateria()">Add materia</a>
							</form>
                        </div>
                    </div>
                </div>
            </div>           
        </div>
	</main>
</div>
</template>
<script>
	import { materiaRef } from '../firebase'
	export default {
		data(){
			return {
				nombre: '',
				horario1: '',
				horario2: '',
				horarios: []
			}
		},
		firebase: {
		materiaDates: materiaRef
		},
		methods: {
			addMateria() {
			this.horarios.push(this.horario1, this.horario2)
      		materiaRef.push({ 
				nombre: this.nombre,
        		horario: this.horarios,
        		edit: false
				});
			
			alert('la materia fue añadida');
			},
			addForm: function(){
          		var form = document.getElementById("formHor");
          		var formClone = form.cloneNode(true),
				elChild = document.createElement("form");

          		document.getElementById("NewformHor").appendChild(formClone);
        	},
		}  
	}
</script>
<style module>

input {
	background-color: transparent;
	border: 2px solid black;
}

.bg-est{
	max-width: 600px; 
	height: auto;
	background-position: center;
	background-size: cover;
}
	
</style>