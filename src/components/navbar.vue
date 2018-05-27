<template>
    <!-- navbar -->
    <header>
		<div class="wrapper">
			<div class="logo">Seguimiento estudiantil.</div>
			<nav>
        <a v-if="isLoggedIn"><router-link to="/">Home</router-link></a>
				<a v-if="isLoggedIn"><router-link to="/estudiantes">Estudiantes</router-link></a>
				<a v-if="isLoggedIn"><router-link to="/docentes">Docentes</router-link></a>
        <a v-if="isLoggedIn" v-on:click="logout"><a>Logout</a></a>
			</nav>
		</div>
	</header>
</template>
<script>
import firebase from 'firebase';
export default {
	name: 'navbar',
	data() {
    return {
      isLoggedIn: false,
      currentUser: false
    };
  },
  created() {
    if (firebase.auth().currentUser) {
      this.isLoggedIn = true;
      this.currentUser = firebase.auth().currentUser.email;
    }
  },
  methods: {
    logout: function() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.go({ path: this.$router.path });
        });
    }
  }
};
</script>

<style scoped>
header {
	width:100%; /* Establecemos que el header abarque el 100% del documento */
	overflow:hidden; /* Eliminamos errores de float */
	background:#252932;
}
 
.wrapper {
	width:90%; /* Establecemos que el ancho sera del 90% */
	max-width:1000px; /* Aqui le decimos que el ancho máximo sera de 1000px */
	margin:auto; /* Centramos los elementos */
	overflow:hidden; /* Eliminamos errores de float */
}
 
header .logo {
	color:#f2f2f2;
	font-size:25px;
	line-height:75px;
	float:left;
	position: relative;
}

header nav {
	float: right;
	line-height: 100px;
}
 
header nav a {
	display:inline-block;
	color:#fff;
	text-decoration:none;
	padding:10px 20px;
	line-height:normal;
	font-size:20px;
	font-weight:bold;
	-webkit-transition:all 500ms ease;
	-o-transition:all 500ms ease;
	transition:all 500ms ease;
}
 
header nav a:hover {
	background:#f56f3a;
	border-radius:50px;
}

.header2 {
	position: fixed;
	height:100px;
}
 
.header2 .logo {
	line-height:200px;
	font-size:30px;
}
 
.header2 nav {
	line-height:100px;
}

@media screen and (max-width: 1000px) {
	header .logo,
	header nav {
		width:100%;
		text-align:center; /*Centramos el menu y el logotipo*/
		line-height:100px;
	}
 
	.header2 {
		height:auto;
	}
 
	.header2 .logo,
	.header2 nav {
		line-height:50px;
	}
}
</style>


