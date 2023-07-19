<template>
  <div class="login">
    <h2>{{ $t("login") }}</h2>
    <form @submit.prevent="handleLogin">
      <div class="form-group">
        <label for="email">{{ $t("email") }}</label>
        <input type="email" id="email" v-model="email" required>
      </div>
      <div class="form-group">
        <label for="password">{{ $t("password") }}</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <div class="form-group">
        <button type="submit">{{ $t("login") }}</button>
      </div>
    </form>
  </div>
</template>

<script>
import usersData from "@/assets/users.json";

export default {
  name: "LoginPage",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    handleLogin() {
      const user = usersData.users.find(
        (user) => user.email === this.email && user.password === this.password
      );

      if (user) {
        const token = "SpjcYz8xQyY7w9Jz-DRU";
        localStorage.setItem("token", token);
        this.$router.push("/dashboard");
      } else {
        alert("Invalid email or password. Please try again.");
      }
    },
  },
};
</script>

<style>
.login {
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10%;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

button {
  display: block;
  width: 100%;
  padding: 10px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
