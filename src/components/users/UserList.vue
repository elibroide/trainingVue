<template>
  <table class="normal-table">
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

<style lang="scss" scoped></style>
