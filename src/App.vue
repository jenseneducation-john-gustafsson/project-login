<template>
  <div id="app">
    <div id="nav">
      <router-link v-if="!loggedIn" to="/">Logga in</router-link>
      <router-link v-if="loggedIn" to="/signed">Inloggad</router-link>
      <router-link to="/register">Registrera</router-link>
      <logged-status></logged-status>
    </div>
    <router-view />
  </div>
</template>

<script>
import LoggedStatus from "./components/Logged-Status";
import firebase from "firebase/app";
import "firebase/auth";

export default {
  data() {
    return {
      loggedIn: false,
    };
  },
  components: { "logged-status": LoggedStatus },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.loggedIn = true;
      } else {
        this.loggedIn = false;
      }
    });
  },
};
</script>

<style lang="scss">
body {
  background-color: rgb(214, 214, 214);
}

#app {
  width: 400px;
  margin: 200px auto 0 auto;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  color: #2c3e50;
}

#nav {
  margin: 50px auto 20px auto;
}

a {
  margin: 30px;
  font-weight: bold;
  font-size: 22px;
  color: #2c3e50;
  text-decoration: none;

  &.router-link-exact-active {
    color: #1567e2;
  }
}
</style>
