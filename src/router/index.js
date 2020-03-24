import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "@/views/Home.vue";
import UserList from "@/components/users/UserList";
import UserListAdd from "@/components/users/UserListAdd";
import Users from "@/views/Users";

Vue.use(VueRouter);

const routes = [
  {
    path: "/users",
    name: "Users",
    component: Users,
    children: [
      {
        path: "add",
        name: "Add",
        component: UserListAdd
      },
      {
        path: "",
        name: "List",
        component: UserList
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
