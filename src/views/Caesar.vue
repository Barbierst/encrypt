<template>
    <div class="page">
        <h1> {{title}}</h1>
        <p><i>In cryptography, a Caesar cipher, also known as Caesar's cipher, the shift cipher, Caesar's code or Caesar shift, is one of the simplest and most widely known encryption techniques. It is a type of substitution cipher in which each letter in the plaintext is replaced by a letter some fixed number of positions down the alphabet. For example, with a left shift of 3, D would be replaced by A, E would become B, and so on. The method is named after Julius Caesar, who used it in his private correspondence.</i> - <a href="https://en.wikipedia.org/wiki/Caesar_cipher" target="_blank">Wikipedia</a></p>
        <div id="ceasar">
            <div class="input">
                <textarea v-model="input"></textarea>
            </div>
            <div class="controls">
                    <font-awesome-icon :icon="['fas', 'lock']" @click="encrypt"/>
                    <input type="number" min="0" max="15" v-model="key"> 
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
    name: 'Caesar',
    data() {
        return {
            title: 'Caesar cypher',
            input: 'Type the text you want to encrypt',
            output: 'Uzqf uif ufyu zpv xbou up fodszqu',
            key: 1
        }
    },
    methods: {
        encrypt() {
            let str = this.input;
            let amount = parseInt(this.key);
            let out= '';
            for (let i = 0; i < str.length; i++) {
                let number = str.charCodeAt(i);
                console.log(number)

                if (number >= 97 && number <= 122) {
                number = (((number + amount) - 97)%26) + 97;
                } else if (number >= 65 && number <= 90){
                number = (((number + amount) - 65)%26) + 65;
                }

            let char = String.fromCharCode(number);
            out += char;
            }
            this.output = out;
        },
        decrypt() {
            let str = this.output;
            let amount = parseInt(this.key);
            let out= '';
            for (let i = 0; i < str.length; i++) {
                let number = str.charCodeAt(i);
                console.log(number)

                if (number >= 97 && number <= 122) {
                number = (((number - amount) - 97 + 26)%26) + 97;
                } else if (number >= 65 && number <= 90){
                number = (((number - amount) - 65 + 26)%26) + 65;
                }

            let char = String.fromCharCode(number);
            out += char;
            }
            this.input = out;
        }
    }
}

</script>

<style scoped>

#ceasar {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

.controls {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    font-size: 3em;
}

textarea {
    width: 25vw;
    height: 50vh;
    font-size: 1.3em;
    padding: 10px;
    background:white;
    border: none;
    border-radius: 0 0 10% 0;
    outline: none;
    resize: none;
    -webkit-box-shadow: inset 2px 2px 4px 0px rgba(186,186,186,1);
    -moz-box-shadow: inset 2px 2px 4px 0px rgba(186,186,186,1);
    box-shadow: inset 2px 2px 4px 0px rgba(186,186,186,1);
}

input {
    font-size:1.2em;
    border: none;
    outline: none;
    resize: none;
    width: 3vw;
    border-radius: 30%;
    text-align: center;
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

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
}

input[type=number] {
    -moz-appearance:textfield; /* Firefox */
}


</style>




