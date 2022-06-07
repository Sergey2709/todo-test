<template>
  <div id="app">
    <Login />
    <Todo />
  </div>
</template>

<script>
import Login from "./components/Login.vue";
import Todo from "./components/Todo.vue";
export default {
  name: "App",
  components: {
    Login,
    Todo,
  },
  beforeMount() {
    // localStorage.clear()
    if(localStorage.getItem("auth")) {
      this.$store.dispatch("ADD_visibilityTodo");
      this.$store.dispatch("ADD_visibilityLogin");
    }
  },
};
</script>

<style lang="scss">
@font-face {
  font-family: "Montserrat";
  src: local("Montserrat"),
    url(./fonts/Montserrat/Montserrat-Regular.ttf) format("truetype");
}

@font-face {
  font-family: "Roboto";
  src: local("Roboto"),
    url(./fonts/Roboto/Roboto-Regular.ttf) format("truetype");
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: "Montserrat";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.container {
  width: 100%;
  max-width: 1164px;
  display: flex;
  justify-content: start;
  align-items: center;
  position: relative;
}
</style>
