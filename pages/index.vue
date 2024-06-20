<template>
  <div class="login-container">
    <h2>LOG IN</h2>
    <form>
      <input
        v-model="user_email"
        type="email"
        placeholder="USER EMAIL"
        required
      />
      <input
        v-model="password"
        type="password"
        placeholder="PASSWORD"
        required
      />
      <button @click="login">LOG IN</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user_email: '',
      password: '',
    }
  },
  methods: {
    login() {
      // this.$router.push('/main')
    },
  },
}
</script>

<style>
.login-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 8px;
  padding: 40px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  max-height: 300px;
  text-align: center;
  box-shadow: 0 2px 1px rgba(0, 0, 0, 0.09), 0 4px 2px rgba(0, 0, 0, 0.09),
    0 8px 4px rgba(0, 0, 0, 0.09), 0 16px 8px rgba(0, 0, 0, 0.09),
    0 32px 16px rgba(0, 0, 0, 0.09);
}

.login-container h2 {
  margin-bottom: 35px;
  font-size: 36px;
  font-weight: 800;
}

.login-container input[type='email'],
.login-container input[type='password'],
.login-container button {
  width: calc(100% - 20px);
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  box-sizing: border-box;
}

.login-container button {
  background-color: #2d6da9;
  font-size: 21px;
  font-weight: 500;
  color: #fff;
  border: none;
  cursor: pointer;
}

.login-container button:hover {
  background-color: #024fa7;
}
</style>
