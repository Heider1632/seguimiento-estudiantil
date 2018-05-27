<template>
    <!-- Login form -->
    <div class="limiter">
    <div class="container-login100">
      <div class="login wrap-login100">
        <form action="index.html" class="login100-form validate-form">
          <span class="login100-form-title p-b-43">
            Login to continue
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

          <div class="flex-sb-m w-full p-t-3 p-b-32">
            <div class="contact100-form-checkbox">
              <input class="input-checkbox100" id="ckb1" type="checkbox" name="remember-me">
              <label class="label-checkbox100" for="ckb1">
                Remember me
              </label>
            </div>

            <div>
              <a href="#" class="txt1">
                Forgot Password?
              </a>
            </div>
          </div>
      

          <div class="container-login100-form-btn">
            <button v-on:click="login" class="login100-form-btn">
              Login
            </button>
          </div>
          
          <div class="text-center p-t-46 p-b-20">
            <span class="txt2" @click="register()">
              register
            </span>
          </div>
        </form>

        <div class="login100-more" style="background-image: url('images/bg-01.jpg');">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase';
export default {
    name: 'login',
    data: function(){
        return {
            email: '',
            password: '',
        }
    },
    methods: {
    login: function(e) {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            alert(`You are logged in as ${user.email}`);
            this.$router.go({ path: this.$router.path });
          },
          err => {
            alert(err.message);
          }
        );
      e.preventDefault();
    },
    register(){
        this.$router.push('/registrer');
    }
  }
};
</script>
