<template>
    <div class="page">
        <h1> {{title}}</h1>
        <p><i>The Atbash cipher is a particular type of monoalphabetic cipher formed by taking the alphabet (or abjad, syllabary, etc.) and mapping it to its reverse, so that the first letter becomes the last letter, the second letter becomes the second to last letter, and so on.<br/><br/>
Due to the fact that there is only one way to perform this, the Atbash cipher provides no communications security, as it lacks any sort of key. If multiple collating orders are available, which one was used in encryption can be used as a key, but this does not provide significantly more security.</i> - <a href="https://en.wikipedia.org/wiki/Atbash" target="_blank">Wikipedia</a></p>
        <div id="atbash">
            <div class="input">
                <textarea v-model="input"></textarea>
            </div>
            <div class="controls">
                    <font-awesome-icon :icon="['fas', 'lock']" @click="encrypt"/>
                    <!-- <font-awesome-icon :icon="['fas', 'unlock']" @click="decrypt" /> -->
            </div>
            <div class="output">
                <textarea v-model="output"></textarea>
            </div>
        </div>
    </div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLock, faUnlock } from '@fortawesome/free-solid-svg-icons'
import { faSpinner, faAlignLeft, lock } from '@fortawesome/free-solid-svg-icons'

library.add(faLock, faUnlock)
 
library.add(faSpinner, faAlignLeft)

export default {
  name: 'atbash',
  data() {
    return {
      title: 'Atbash',
      input: 'test',
      output: 'test1'
    }
  },
  methods: {
    encrypt() {
      let toEncrypt = this.input;
      let encrypted = '';
      let alphabet = 'abcdefghijklmnopqrstuvwxyz';
      let alphabetReverse = 'zyxwvutsrqponmlkjihgfedcba';
      let toEcryptLength = toEncrypt.length;

      for(let i = 0; i < toEcryptLength; i++) {
        if (toEncrypt[i] !== ' ') {
          let char = toEncrypt[i];
          let indexChar = alphabet.indexOf(char);
          let encryptChar = alphabetReverse[indexChar];
          console.log(encryptChar);
          encrypted += encryptChar; 
        } else {
          encrypted += ' ';
        }
      }
      this.output = encrypted;
    }
  }
  
}
</script>

<style scoped>
#atbash {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

.controls {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    font-size: 5em;
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
    background-image:url(https://static.tumblr.com/maopbtg/nBUmgtogx/paper.png);
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
</style>

