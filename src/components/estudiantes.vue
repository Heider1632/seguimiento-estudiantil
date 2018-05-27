<template>
	<div id="estudiantes">
	<main>
	<!-- template estudiante -->
	<div class="container-fluid">
	<div class="row">
                <div class="col-md-4 text-center">
                    <div class="box">
                        <div class="box-content">
						<h1>Bienvenido a la seccion estudiantil</h1>
						<h3>por favor siga el seguimiento estudiantil.</h3>
						<hr />
						<p class="lead">
							En esta seccion podrás agregar a todos lo estudiantes que sean necesarios teniendo en cuenta que estos no estaran asociados a ninguna materia estrictamente
						</p>
						<hr />
						<p class="lead">
							En caso de presentar problemas no olvide contactarnos en la parte de abajo a traves de nuestras diferente redes sociales o por un correo
						</p>
						<hr />
						<p class="lead">
							¿Qué es lo que te puedo ofrecer, registra, actualiza, elimina todo al instante!
						</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 text-center bg-est" style="background-image: url(images/bg-estudiante.gif)" />
                <div class="col-md-4 text-center">
                    <div class="box">
                        <div class="box-content">
                            <h1>Añadir estudiante</h1>
							<hr />
    						<form>
							<div class="row">
								<label>Nombre </label>
   								<div class="col">
      								<input type="text" class="form-control" v-model="nombre">
    							</div>
								<label> Apellido</label>
    							<div class="col">
     								 <input type="text" class="form-control" v-model="apellido">
    							</div>
  							</div>
							<hr />
							<div class="row">
								<label>Ciudad </label>
   								<div class="col">
      								<input type="text" class="form-control" v-model="ciudad">
    							</div>
								<label> Telefono</label>
    							<div class="col">
     								 <input type="num"  class="form-control" maxlength="10" v-model="telefono">
    							</div>
  							</div>
                            <br />
                            <a class="btn btn-block btn-primary" @click="addEstudiante()">Add estudiante</a>
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
	import { estudianteRef } from '../firebase'
	
	export default {
	data() {
		return {
			nombre: '',
			apellido: '',
			ciudad: '',
			telefono: ''
		}
	},
	firebase: {
    	estudianteDates: estudianteRef
  	},
  	methods: {
    addEstudiante() {
      estudianteRef.push({ 
        apellido : this.apellido, 
        nombre: this.nombre,
		ciudad: this.ciudad,
		telefono: this.telefono,
        edit: false
        });
    },
    removeEstudiante(key){
      estudianteRef.child(key).remove();
    },
    setEditEstudiante(key){
      estudianteRef.child(key).update({ edit: true });
    },
    cancelEdit(key){
      estudianteRef.child(key).update({ edit: false});
    },
    saveEdit(estudiante){
      const key = estudiante['.key'];
      estudianteRef.child(key).set({
                                    nombre: this.nombre, 
                                    apellido: this.apellido, 
                                    ciudad: this.ciudad,
									telefono: this.telefono,
                                    edit: false
                                    });
    		}
  		}
	}
</script>
<style scoped>
	/*header .logo{
		line-height:200px;
	}*/
</style>
