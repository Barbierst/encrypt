<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/caesar">Caesar</router-link>
    </div>
    <div id="content">
      <router-view/>
    </div>
  </div>
</template>

<style>
* {
    margin: 0;
    box-sizing: border-box;
    padding: 0;
}

h1 {
  padding: 20px;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav { 
  margin: 0;
  position: fixed;
  width: 17vw;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: #c1c1c1;
}

#content {
  background-color: #f4f4f4;
  height: 100vh;
  margin-left: 17vw;
  padding: 50px;
}
</style>
