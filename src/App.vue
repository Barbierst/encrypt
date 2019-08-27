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
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c2c2c;
  overflow-x: hidden;
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
  min-height: 100vh;
  margin-left: 17vw;
  width: 83%;
  background:linear-gradient(45deg, rgb(173, 216, 230), rgb(165, 205, 225) );
}

h1 {
  margin: 20px;
}

svg {
    height: 100%;
    width: auto;
}

svg:hover {
    cursor: pointer;
    opacity: 0.9;
}

p {
    max-width: 50vw;
    margin: auto;
    padding: 50px;
}

.cipher {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

textarea {
    width: 25vw;
    height: 50vh;
    font-size: 1.3em;
    padding: 10px;
    background:white;
    border: none;
    border-radius: 0 0 0% 0;
    outline: none;
    resize: none;
    -webkit-box-shadow: 2px 2px 2px 0px rgba(186,186,186,1);
    -moz-box-shadow: 2px 2px 2px 0px rgba(186,186,186,1);
    box-shadow: 2px 2px 2px 0px rgba(186,186,186,1);
    /* background-image:url(https://static.tumblr.com/maopbtg/nBUmgtogx/paper.png); */
}

input {
    font-size:0.5em;
    font-family: monospace;
    border: none;
    outline: none;
    resize: none;
    text-align: center;
    width: 10vw;
    -webkit-box-shadow: 2px 2px 2px 0px rgba(186,186,186,1);
    -moz-box-shadow: 2px 2px 2px 0px rgba(186,186,186,1);
    box-shadow: 2px 2px 2px 0px rgba(186,186,186,1);
}

.controls {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    font-size: 5em;
}


@media screen and (max-width: 900px) {
  h1 {
    margin: 0;
  }

  #nav { 
    width: 100%;
    height: 10vh;
  }
  #nav .links {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    height: auto;
  }
  #nav a {
    margin-top: 3%;
  }

  .footer {
    display: none;
  }

  .page {
    margin-top: 10vh;
    padding: 5vh;
    min-height: 100vh;
    margin-left: 0vw;
    width: 100%;
  }

  p {
    max-width: 100vw;
  }

  .cipher {
    flex-direction: column;
  }

  textarea {
    width: 70vw;
  }

  .controls {
    margin: 20px;
    flex-direction: row;
  }

}
  


</style>
