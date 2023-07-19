<template>
  <div class="dashboard">
    <h2>{{ $t("dashboard") }}</h2>
    <table>
      <thead>
        <tr>
          <th>{{ $t("tableHeaderName") }}</th>
          <th>{{ $t("tableHeaderAge") }}</th>
          <th>{{ $t("tableHeaderCountry") }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in users" :key="index">
          <td>{{ user.name }}</td>
          <td>{{ user.age }}</td>
          <td>{{ user.country }}</td>
        </tr>
      </tbody>
    </table>
    <button @click="handleSignOut">{{ $t("signOut") }}</button>
  </div>
</template>

<script>
import usersData from "@/assets/users.json";

export default {
  name: "DashboardPage",
  data() {
    return {
      users: usersData.users,
    };
  },
  methods: {
    handleSignOut() {
      localStorage.removeItem("token");
      this.$router.push("/login");
    },
  },
  created() {
    if (!localStorage.getItem("token")) {
      this.$router.push("/login");
    }
  },
};
</script>

<style>
.dashboard {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.dashboard button{
  margin-top: 20px;
}

.dashboard table{
  width: 100%;
  text-align: left;
}
</style>
