<template>
  <div class="login container">
    <form @submit.prevent="login" class="card-panel">
      <h2 class="center deep-purple-text">Login</h2>
      <div class="field">
        <label for="email">Email:</label>
        <input type="email" name="email" v-model="email" />
      </div>
      <div class="field">
        <label for="password">Password:</label>
        <input type="password" name="password" v-model="password" />
      </div>
      <div class="field center">
        <p v-if="feedback" class="red-text">{{ feedback }}</p>
        <button class="btn button deep-purple">Login</button>
      </div>
    </form>
  </div>
</template>

<script>
/* eslint-disable */
import db from "@/firebase/config";
import firebase from "firebase/app";
import auth from "firebase/auth";

export default {
  name: "Login",
  data() {
    return {
      email: null,
      password: null,
      feedback: null
    };
  },
  methods: {
    login() {
      if (!this.email || !this.password)
        return (this.feedback = "You must fill both fields");
      this.feedback = null;
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => this.$router.push({ name: "Home" }))
        .catch(err => (this.feedback = err.message));
    }
  }
};
</script>

<style scoped>
.login {
  max-width: 400px;
  margin-top: 60px;
}
.login h2 {
  font-size: 2.4em;
}
.login .field {
  margin-bottom: 16px;
}
.login .button {
  margin-top: 16px;
}
</style>
