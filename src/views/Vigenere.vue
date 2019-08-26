<template>
    <div class="page">
        <h1> {{title}}</h1>
        <p><i>The Vigenère cipher (French pronunciation: ​[viʒnɛːʁ]) is a method of encrypting alphabetic text by using a series of interwoven Caesar ciphers, based on the letters of a keyword. It employs a form of polyalphabetic substitution.<br/><br/>

First described by Giovan Battista Bellaso in 1553, the cipher is easy to understand and implement, but it resisted all attempts to break it until 1863, three centuries later. This earned it the description le chiffre indéchiffrable (French for 'the indecipherable cipher'). Many people have tried to implement encryption schemes that are essentially Vigenère ciphers.[3] In 1863, Friedrich Kasiski was the first to publish a general method of deciphering Vigenère ciphers.</i> - <a href="https://en.wikipedia.org/wiki/Vigen%C3%A8re_cipher" target="_blank">Wikipedia</a></p>
        <div id="vigenere">
            <div class="input">
                <textarea v-model="input"></textarea>
            </div>
            <div class="controls">
                    <font-awesome-icon :icon="['fas', 'lock']" @click="encrypt"/>
                    <input type="text" v-model="key" minlength="1" maxlength="10"> 
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
    name: 'Vigenere',
    data() {
        return {
            title: 'Vigenere cypher',
            input: 'Type the text you want to encrypt',
            output: 'Dcna hyh divp mfx gelp hf hxgpudk',
            key: 'keyword'
        }
    },
    methods: {
        encrypt() {
            let toEncrypt = this.input;
            let keyword = this.key;
            let keyLength = keyword.length;
            let inputLength = toEncrypt.length;
            let encrypted = "";

            for (let i = 0, j = 0; i < inputLength ; i++) {
                let number = toEncrypt.charCodeAt(i);
                let amount = keyword.charCodeAt(j);
                if (toEncrypt[i] == ' ') {
                    encrypted += ' ';
                } else {
                    if (number >= 97 && number <= 122) {
                        number = (((number - 97) + (amount - 97)) %26) + 97;
                    } else if (number >= 65 && number <= 90){
                        number = (((number - 65) + (amount - 97)) %26) + 65;
                    }
                    let char = String.fromCharCode(number);
                    encrypted += char;
                    j++;
                }
                if (j >= keyLength) {
                    j = 0;
                }
            }
            this.output = encrypted;
        },
        decrypt() {
            let toDecrypt = this.output;
            let keyword = this.key;
            let keyLength = keyword.length;
            let inputLength = toDecrypt.length;
            let decrypted = "";

            for (let i = 0, j = 0; i < inputLength ; i++) {
                let number = toDecrypt.charCodeAt(i);
                let amount = keyword.charCodeAt(j);
                if (toDecrypt[i] == ' ') {
                    decrypted += ' ';
                } else {
                    if (number >= 97 && number <= 122) {
                        number = (((number - 97) - (amount - 97) + 26) %26) + 97;
                    } else if (number >= 65 && number <= 90){
                        number = (((number - 65) - (amount - 97) +26 ) %26) + 65;
                    }
                    let char = String.fromCharCode(number);
                    decrypted += char;
                    j++;
                }
                if (j >= keyLength) {
                    j = 0;
                }
            }
            this.input = decrypted;
        }
    }
}


</script>

<style scoped>

#vigenere {
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
    height: 45vh;
    font-size: 1.3em;
    padding: 10px;
    background:white;
    border: none;
    border-radius: 0 0 0 0;
    outline: none;
    resize: none;
    -webkit-box-shadow: 2px 2px 2px 0px rgba(186,186,186,1);
    -moz-box-shadow: 2px 2px 2px 0px rgba(186,186,186,1);
    box-shadow: 2px 2px 2px 0px rgba(186,186,186,1);
    background-image:url(https://static.tumblr.com/maopbtg/nBUmgtogx/paper.png);
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




