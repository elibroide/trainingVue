<template>
  <table class="userList">
    <thead>
      <tr>
        <th>Name</th>
        <th>Phone</th>
        <th>Company</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="user in userList"
        :key="user.id"
        v-tooltip.top-center="user.username"
      >
        <td>{{ user.name }}</td>
        <td>{{ user.phone }}</td>
        <td>{{ user.company.name }}</td>
        <td><button @click="removeUser(user.id)">Clear</button></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapState, mapActions } from "vuex";

// TODO: What is the best way to handle refactors (e.x: changing 'userList' to 'usersList' in users module will break this)
export default {
  name: "UserList",
  computed: {
    ...mapState("users", ["userList"])
  },
  methods: {
    ...mapActions("users", ["removeUser"])
  },
  mounted() {
    this.$store.dispatch("users/" + "getUsers");
  }
};
</script>

<style lang="scss">
@import "~@/styles/tooltip.scss";

.userList {
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

.userList td,
.userList th {
  border: 1px solid #ddd;
  padding: 8px;
}

.userList tr:nth-child(even) {
  background-color: #f2f2f2;
}

.userList tr:hover {
  background-color: #ddd;
}

.userList th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #4caf50;
  color: white;
}
</style>
