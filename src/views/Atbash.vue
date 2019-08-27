<template>
    <div class="page">
        <h1> {{title}}</h1>
        <p><i>The Atbash cipher is a particular type of monoalphabetic cipher formed by taking the alphabet (or abjad, syllabary, etc.) and mapping it to its reverse, so that the first letter becomes the last letter, the second letter becomes the second to last letter, and so on.<br/><br/>
Due to the fact that there is only one way to perform this, the Atbash cipher provides no communications security, as it lacks any sort of key. If multiple collating orders are available, which one was used in encryption can be used as a key, but this does not provide significantly more security.</i> - <a href="https://en.wikipedia.org/wiki/Atbash" target="_blank">Wikipedia</a></p>
        <div class="cipher">
            <div class="input">
                <textarea v-model="input"></textarea>
            </div>
            <div class="controls">
                    <font-awesome-icon :icon="['fas', 'lock']" @click="encrypt"/>
                    <font-awesome-icon :icon="['fas', 'unlock']" @click="decrypt" />
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
      input: 'Type the text you want to encrypt',
      output: 'gbkv gsv gvcg blf dzmg gl vmxibkg'
    }
  },
  methods: {
    encrypt() {
      let toEncrypt = this.input.toLowerCase();
      let encrypted = '';
      let alphabet = 'abcdefghijklmnopqrstuvwxyz';
      let alphabetReverse = 'zyxwvutsrqponmlkjihgfedcba';
      let toEcryptLength = toEncrypt.length;

      for(let i = 0; i < toEcryptLength; i++) {
        if (toEncrypt[i] !== ' ') {
          let char = toEncrypt[i];
          let indexChar = alphabet.indexOf(char);
          let encryptChar = alphabetReverse[indexChar];
          encrypted += encryptChar; 
        } else {
          encrypted += ' ';
        }
      }
      this.output = encrypted;
    },
    decrypt() {
      let toEncrypt = this.output;
      let encrypted = '';
      let alphabet = 'abcdefghijklmnopqrstuvwxyz';
      let alphabetReverse = 'zyxwvutsrqponmlkjihgfedcba';
      let toEcryptLength = toEncrypt.length;

      for(let i = 0; i < toEcryptLength; i++) {
        if (toEncrypt[i] !== ' ') {
          let char = toEncrypt[i];
          let indexChar = alphabetReverse.indexOf(char);
          let encryptChar = alphabet[indexChar];
          encrypted += encryptChar; 
        } else {
          encrypted += ' ';
        }
      }
      this.input = encrypted;

    }
  }
  
}
</script>

<style scoped>



</style>

