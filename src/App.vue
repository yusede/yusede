<template>
  <nav>
    <router-link to="/">firstComp</router-link>
    |
    <router-link to="/secondeComp">secondComp</router-link>|
    <router-link to="/thirdComp">thirdComp</router-link>
    |
    <router-link to="/fourthComp">fourthComp</router-link>
  </nav>
  <router-view />
</template>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  color: rgb(216, 231, 244);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: linear-gradient(45deg, rgb(99, 99, 183), rgb(57, 144, 202), rgb(180, 190, 230));
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #becfe4;
    }
  }
}
</style>
