import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "@/views/Home.vue";
import UserList from "@/components/UserList";
import UserListAdd from "@/components/UserListAdd";

Vue.use(VueRouter);

const routes = [
  {
    path: "/users",
    name: "Users",
    component: UserList
  },
  {
    path: "/users/add",
    name: "Add",
    component: UserListAdd
  }
];

const router = new VueRouter({
  routes
});

export default router;
