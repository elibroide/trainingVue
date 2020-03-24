<template>
  <div class="users">
    <div id="nav">
      <router-link class="button" to="/users">Show All Users</router-link> |
      <router-link class="button" to="/users/add">Add</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Users"
};
</script>

<style scoped></style>
