<template>
  <div class="status">
    <button v-if="loggedIn" @click="signOut" class="btn btn-primary signout">
      Logga ut
    </button>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";

export default {
  data() {
    return {
      loggedIn: false,
    };
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.loggedIn = true;
      } else {
        this.loggedIn = false;
      }
    });
  },
  methods: {
    signOut() {
      firebase.auth().signOut();
      this.$router.replace({ name: "login" });
    },
  },
};
</script>

<style lang="scss" scoped>
.status {
  font-size: 22px;
}
.signout {
  margin-top: 10px;
  position: relative;
}
</style>
