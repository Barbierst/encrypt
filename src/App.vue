<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/atbash">Atbash</router-link>
      <router-link to="/caesar">Caesar</router-link>
      <router-link to="/vigenere">Vigenere</router-link>
    </div>
    <div id="content">
      <transition name="router-animations" enter-active-class="animated fadeIn">  
        <router-view/>
      </transition>
    </div>
  </div>
</template>

<style>
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css";

* {
    margin: 0;
    box-sizing: border-box;
    padding: 0;
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
  z-index: 1;
  width: 10vw;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: linear-gradient(135deg, rgba(47,47,47,1) 0%, rgba(55,55,55,1) 100%);
  -webkit-box-shadow: 2px 0px 7px 0px rgba(115,114,115,1);
  -moz-box-shadow: 2px 0px 7px 0px rgba(115,114,115,1);
  box-shadow: 2px 0px 7px 0px rgba(115,114,115,1);
}

#nav a{
  text-decoration: none;
  color: lightblue;
  font-size: 1.5em;
  text-transform: uppercase;
}

#nav a:hover {
  opacity: 0.8;
}

.page { 
  padding: 5vh;
  position: fixed;
  height: 100vh;
  margin-left: 10vw;
  width: 90vw;
  background: linear-gradient(135deg, rgba(245,245,245,1) 0%, rgba(255,255,255,1) 100%);
}

h1 {
  margin: 20px;
}


</style>
