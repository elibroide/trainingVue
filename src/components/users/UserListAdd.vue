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

<style lang="scss"></style>
