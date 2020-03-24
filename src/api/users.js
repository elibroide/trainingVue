import http from "@/api/http";

const USERS_ENDPOINT = "users";

const latency = 100;
let count = 200;
let users = [];
let isInstantiated = false;
export default {
  async getUsers() {
    if (!isInstantiated) {
      isInstantiated = true;
      let remoteUsers = await http
        .get(USERS_ENDPOINT)
        .then(response => response.data); // response => response.data Could be moved a const
      users = users.concat(remoteUsers);
    }
    return users.slice();
  },

  async addUser(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // simulate random checkout failure.
        if (Math.random() > 222) {
          return reject();
        }
        user.id = count++; // Simulate increment user id
        console.log("Api User added: " + JSON.stringify(user));

        const newUser = {
          id: user.id,
          name: user.name,
          username: user.username,
          phone: user.phone,
          company: {
            name: user.companyName
          }
        };
        users.unshift(newUser);
        return resolve(newUser);
      }, latency);
    });
  },

  async removeUser(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // simulate random checkout failure.
        if (Math.random() > 222) {
          return reject();
        }
        console.log("Api User removed: " + id);
        users = users.filter(user => user.id !== id);
        return resolve();
      }, latency);
    });
  }
};
