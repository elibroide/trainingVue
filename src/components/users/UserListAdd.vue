<template>
  <div>
    <validation-observer v-slot="{ passes }">
      <form @submit="passes(submitForm)">
        <validation-provider rules="required" v-slot="{ errors }">
          <div class="form-group" :class="{ error: errors.length }">
            <label for="name"><span>Name: </span></label>
            <input id="name" type="text" v-model="name" />
            <span class="error-message">{{ errors[0] }}</span>
          </div>
        </validation-provider>
        <validation-provider rules="required" v-slot="{ errors }">
          <div class="form-group" :class="{ error: errors.length }">
            <label for="username"><span>Username: </span></label>
            <input id="username" type="text" v-model="username" />
            <span class="error-message">{{ errors[0] }}</span>
          </div>
        </validation-provider>
        <validation-provider rules="required|digits:8" v-slot="{ errors }">
          <div class="form-group" :class="{ error: errors.length }">
            <label for="phone"><span>Phone: </span></label>
            <input id="phone" type="text" v-model="phone" />
            <span class="error-message">{{ errors[0] }}</span>
          </div>
        </validation-provider>
        <validation-provider rules="required" v-slot="{ errors }">
          <div class="form-group" :class="{ error: errors.length }">
            <label for="companyName"><span>Company Name: </span></label>
            <input id="companyName" type="text" v-model="companyName" />
            <span class="error-message">{{ errors[0] }}</span>
          </div>
        </validation-provider>

        <button class="button" type="submit">Submit</button>
      </form>
    </validation-observer>
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from "vee-validate";

export default {
  name: "UserAddForm",
  components: { ValidationProvider, ValidationObserver },
  data() {
    return {
      name: "",
      username: "",
      phone: "",
      companyName: ""
    };
  },
  methods: {
    async submitForm() {
      const user = {
        name: this.name,
        username: this.username,
        phone: this.phone,
        companyName: this.companyName
      };
      await this.$store.dispatch("users/" + "addUser", user);

      // TODO: Or maybe back?
      this.$router.push("/users");
    }
  }
};
</script>

<style lang="scss">
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
  display: inline-block;
}
</style>
