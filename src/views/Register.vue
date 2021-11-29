<template>
  <div>
    <form @submit.prevent="register">
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
        <div
          v-if="password.length > 0 && password.length < 6"
          class="text-danger"
        >
          Minst 6 tecken för lösenord
        </div>
      </div>
      <div class="mb-3">
        <input
          type="password"
          class="form-control"
          id="repeatPassword"
          v-model="repeatPassword"
          placeholder="repetera lösenord..."
          required
        />
      </div>
      <button type="submit" class="btn btn-primary">Registrera</button>
      <div class="text-danger">{{ wrongPassword }}</div>
    </form>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";

export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      repeatPassword: "",
      wrongPassword: "",
    };
  },
  methods: {
    register() {
      if (this.password == this.repeatPassword) {
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .then(() => {
            alert("Konto skapat!");
            this.$router.replace({ name: "login" });
          });
      } else {
        this.wrongPassword = "Lösenorden matchar inte!";
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
