<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import "~@/styles/tooltip.scss";
@import "~@/styles/normalTable.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.button {
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}

.form-group {
  color: #333;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 13px;
  line-height: 20px;
  margin: 0 20px 10px;
  padding: 0 0 0 10px;
}

input[type="text"] {
  background: #fff;
  border: 1px solid #999;
  float: left;
  font-size: 13px;
  height: 33px;
  margin: 0;
  padding: 0 0 0 15px;
  width: 100%;
}

.error-message {
  color: #cc0033;
  display: inline-block;
  font-size: 12px;
  line-height: 15px;
  margin: 5px 0 0;
}

.input-group .error-message {
  display: none;
}

/* Error Styling */

.error input[type="text"] {
  background-color: #fce4e4;
  border: 1px solid #cc0033;
  outline: none;
}

.error .error-message {
  display: block;
}
</style>
