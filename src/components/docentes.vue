<template>
	<div id="docentes">
	<main>
	<!-- Template -->
	<div class="container-fluid">
	<div class="row">
                <div class="col-md-4 text-center">
                    <div class="box">
                        <div class="box-content">
						<p class="lead">
							Bienvenido a la seccion docente por favor siga el seguimiento estudiantil.
						</p>
						<hr />
						<button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
    					Añadir docente
 					</button>

					<div class="collapse" id="collapseExample">
  						<div class="card card-body">
							<h3>Añadir docente</h3>
    						<form>
    						<label>Nombre </label>
    						<input type="text" v-model="nombre"/>
    						<label> Apellido</label>
    						<input type="text" v-model="apellido" />
							<label>Cedula </label>
							<input type="num" maxlength="13" v-model="cedula" />
							<label> materia que dicta </label>
    						<select v-model="materiaDoc">
								<option value=""></option> 
								<option v-for="materia of materiaDates" v-bind:key="materia['.key']">
									{{ materia.nombre }}
								</option>
							</select>
    						<label>Telefono </label>
    						<input type="num" maxlength="10" v-model="telefono" />
    						<button @click="addDocente()">Add</button>
    						</form>
  						</div>
					</div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 text-center bg-est" style="background-image: url(images/bg-estudiante.gif)" />
                <div class="col-md-4 text-center">
                    <div class="box">
                        <div class="box-content">
                           <div class="section-content">
						<h3>Seguimeinto estudiantil</h3>
					</div>
					<div class="contact-section">
						<form>
							<div class="col-md-6 form-line">
			  					<div class="input-group">
  									<div class="input-group-prepend">
    									<span class="input-group-text" id="">Informacion básica</span>
  									</div>
  									<input type="text" class="form-control">
									</div>
				  				<div class="form-group">
					    			<label for="exampleInputEmail">Email Address</label>
					    			<input type="email" class="form-control" id="exampleInputEmail" placeholder=" Enter Email id">
					  			</div>	
					  			<div class="form-group">
					    			<label for="telephone">Mobile No.</label>
					    			<input type="tel" class="form-control" id="telephone" placeholder=" Enter 10-digit mobile no.">
			  					</div>
			  					<div class="form-group">
			  						<label for ="description"> Message</label>
			  			 			<textarea  class="form-control" id="description" placeholder="Enter Your Message"></textarea>
			  					</div>
			  					<div>
			  						<button type="button" class="btn btn-default submit"><i class="fa fa-paper-plane" aria-hidden="true"></i>  Send</button>
			  					</div>
								<hr />
									<div>
			  							<button type="button" class="btn btn-default" @click="seguimiento()"><i class="fa fa-paper-plane" aria-hidden="true"></i>View seguiment</button>
			  						</div>
								</div>
							</form>
                        </div>
                    </div>
                </div>
            </div>           
        </div>
	</div>
	</main>
	</div>
</template>
<script>
import { docenteRef } from "../firebase";
import { materiaRef } from "../firebase";
import { seguimientoRef } from "../firebase";
import VueRouter from "vue-router";

export default {
  name: "docentes",
  data() {
    return {
      nombre: "",
      apellido: "",
      cedula: "",
      materiaDoc: "",
      telefono: "",
      materiaDates: {}
    };
  },
  firebase: {
    docenteDates: {
      docenteRef,
      // Optional, allows you to handle any errors.
      cancelCallback(err) {
        console.error(err);
      }
    },
    materiaDates: {
      materiaRef,
      // Optional, allows you to handle any errors.
      cancelCallback(err) {
        console.error(err);
      }
	},
	seguimientoDates: {
      seguimientoRef,
      // Optional, allows you to handle any errors.
      cancelCallback(err) {
        console.error(err);
      }
    }
  },
  methods: {
    addDocente() {
      docenteRef.push({
        nombre: this.nombre,
        apellido: this.apellido,
        cedula: this.cedula,
        materia: this.materiaDoc,
        telefono: this.telefono,
        edit: false
      });
      alert("el docente se añadio");
      this.$router.push("/docentes");
    },
    removeEstudiante(key) {
      docenteRef.child(key).remove();
    },
    setEditEstudiante(key) {
      docenteRef.child(key).update({ edit: true });
    },
    cancelEdit(key) {
      docenteRef.child(key).update({ edit: false });
    },
    saveEdit(docente) {
      const key = docente[".key"];
      docenteRef.child(key).set({
        nombre: this.nombre,
        apellido: this.apellido,
        cedula: this.cedula,
        materia: this.materiaDoc,
        telefono: this.telefono,
        edit: false
      });
	},
	seguimiento(){
		this.$router.push('/seguimiento');
	}
  }
};
</script>
<style module>
/*Contact sectiom*/
.content-header {
  font-family: "Oleo Script", cursive;
  color: #fcc500;
  font-size: 45px;
}

.section-content {
  text-align: center;
}
#contact {
  font-family: "Teko", sans-serif;
  padding-top: 60px;
  width: 100%;
  width: 100vw;
  height: 550px;
  background: #3a6186; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to left,
    #3a6186,
    #89253e
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to left,
    #3a6186,
    #89253e
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  color: #fff;
}
.contact-section {
  padding-top: 40px;
}
.contact-section .col-md-6 {
  width: 50%;
}

.form-line {
  border-right: 1px solid #b29999;
}

.form-group {
  margin-top: 10px;
}
label {
  font-size: 1.3em;
  line-height: 1em;
  font-weight: normal;
}
.form-control {
  font-size: 1.3em;
  color: #080808;
}
textarea.form-control {
  height: 135px;
  /* margin-top: px;*/
}

.submit {
  font-size: 1.1em;
  float: right;
  width: 150px;
  background-color: transparent;
  color: #fff;
}
</style>