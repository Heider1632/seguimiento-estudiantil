import Vue from 'vue';
import VueRouter from 'vue-router'
import home from '../components/home';
import estudiantes from '../components/estudiantes';
import docentes from '../components/docentes';
import registrer from '../components/registrer';
import login from '../components/login';
import seguimiento from '../components/seguimiento'
import firebase from 'firebase'

Vue.use(VueRouter);

let router = new VueRouter({
	routes: [
		{
			path : '/',
			name: 'home', 
			component: home,
			meta: {
				requiresAuth: true
			  }
		},
		{
			path: '/registrer', 
			name: 'registrer',
			component: registrer,
			meta: {
				requiresGuest: true
			  }
		},
		{
			path: '/login',
			name: 'login',
			component: login,
			meta: {
				requiresGuest: true
			  }
		},
		{
			path: '/estudiantes', 
			name: 'estudiantes',
			component: estudiantes,
			meta: {
				requiresAuth: true
			  }
		},
		{
			path: '/docentes', 
			name: 'docentes',
			component: docentes,
			meta: {
				requiresAuth: true
			  }
		},
		{
			path: '/seguimiento', 
			name: 'seguimiento',
			component: seguimiento,
			meta: {
				requiresAuth: true
			  }
		}

	]
});

// Nav Guard
router.beforeEach((to, from, next) => {
	// Check for requiresAuth guard
	if (to.matched.some(record => record.meta.requiresAuth)) {
	  // Check if NO logged user
	  if (!firebase.auth().currentUser) {
		// Go to login
		next({
		  path: '/login',
		  query: {
			redirect: to.fullPath
		  }
		});
	  } else {
		// Proceed to route
		next();
	  }
	} else if (to.matched.some(record => record.meta.requiresGuest)) {
	  // Check if NO logged user
	  if (firebase.auth().currentUser) {
		// Go to login
		next({
		  path: '/',
		  query: {
			redirect: to.fullPath
		  }
		});
	  } else {
		// Proceed to route
		next();
	  }
	} else {
	  // Proceed to route
	  next();
	}
  });
  
  export default router;