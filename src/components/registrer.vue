<template>
	<main>
  <!-- regsitrer form -->
  <div class="limiter">
    <div class="container-login100">
      <div class="wrap-login100">
        <form action="index.html" class="login100-form validate-form">
          <span class="login100-form-title p-b-43" v-on:click="volverLogin()">
            Registrer
          </span>
          
          
          <div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
            <input class="input100" type="text" id="email" v-model="email">
            <span class="focus-input100"></span>
            <span class="label-input100">Email</span>
          </div>
          
          
          <div class="wrap-input100 validate-input" data-validate="Password is required">
            <input class="input100" type="password" id="password" v-model="password">
            <span class="focus-input100"></span>
            <span class="label-input100">Password</span>
          </div>
     
          <div class="container-login100-form-btn">
            <button class="login100-form-btn" v-on:click="register">
              registrer
            </button>
          </div>
        </form>

        <div class="login100-more" style="background-image: url('images/bg-01.jpg');">
        </div>
      </div>
    </div>
  </div>
  </main>
  </template>
  <script>
  import firebase from 'firebase';
  export default {
    name: 'registrer',
    data: function() {
      return {
        email: '',
        password: '',
      };
    },
     methods: {
    register: function(e) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            // console.log(user);
            alert(`Account Created for ${user.email}`);
            this.$router.go({ path: this.$router.path });
          },
          err => {
            alert(err.message);
          }
        );
      e.preventDefault();
    },
    volverLogin(){
      this.$router.go(-1)
    }
  }
};
  </script>
  <style>
  </style>
  
  