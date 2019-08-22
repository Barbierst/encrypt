<template>
  <div id="app">
    <div id="nav">
      <div class="links">
        <router-link to="/">Home</router-link>
        <router-link to="/atbash">Atbash</router-link>
        <router-link to="/caesar">Caesar</router-link>
        <router-link to="/vigenere">Vigenere</router-link>
      </div>
      <div class="footer">
        <Trgt />
        <Socials />
      </div>
    </div>
    <div id="content">
      <transition name="router-animations" enter-active-class="animated fadeIn">  
        <router-view/>
      </transition>
    </div>
  </div>
</template>

<script>
import Trgt from './components/Trgt';
import Socials from './components/Socials';

export default {
  name: 'App',
  components: {
    Trgt,
    Socials
  } 
  
}
</script>

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
  width: 17%;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  background: linear-gradient(90deg, rgba(70,70,70,1) 0%, rgba(85,85,85,1) 100%);
  -webkit-box-shadow: 2px 0px 7px 0px rgba(115,114,115,1);
  -moz-box-shadow: 2px 0px 7px 0px rgba(115,114,115,1);
  box-shadow: 2px 0px 7px 0px rgba(115,114,115,1);
}

.links {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 50vh;
}

#nav a{
  text-decoration: none;
  color: lightblue;
  font-size: 1.5em;
  text-transform: uppercase;
  transition: 0.4s ease-in;
}

#nav a:hover {
  opacity: 0.8;
  color: rgba(65,65,65,1); 
  background: lightblue;
  border-left: 5px solid white;
}

.router-link-active {
  opacity: 0.8;
  color: rgba(65,65,65,1)!important;
  background: lightblue;
  border-left: 5px solid white;
}

.footer{
  display: flex;
  flex-direction: column;
  height: 40vh;
  justify-content: flex-end;
  max-width: 100%;

}

.page { 
  padding: 5vh;
  position: fixed;
  height: 100vh;
  margin-left: 17vw;
  width: 83%;
  background: linear-gradient(135deg, rgba(245,245,245,1) 0%, rgba(255,255,255,1) 100%);
}

h1 {
  margin: 20px;
}


</style>
