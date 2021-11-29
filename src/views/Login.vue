<template>
  <form @submit.prevent="login">
    <div class="mb-3">
      <input
        type="email"
        class="form-control"
        id="email"
        placeholder="emailadress..."
        v-model="email"
        required
      />
    </div>
    <div class="mb-3">
      <input
        type="password"
        class="form-control"
        id="password"
        placeholder="lösenord..."
        v-model="password"
        required
      />
    </div>
    <button type="submit" class="btn btn-primary">Logga in</button>
    <div class="text-danger">{{ wrongPassword }}</div>
  </form>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";

export default {
  data() {
    return {
      email: "",
      password: "",
      wrongPassword: "",
    };
  },
  methods: {
    async login() {
      try {
        await firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password);
        this.$router.replace({ name: "signed" });
      } catch (error) {
        console.log(error.message);
        this.wrongPassword = "Fel lösenord";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
input {
  font-size: 21px;
}
</style>
