<template>
    <div class="page">
        <h1> {{title}}</h1>
        <p><i>The Vigenère cipher (French pronunciation: ​[viʒnɛːʁ]) is a method of encrypting alphabetic text by using a series of interwoven Caesar ciphers, based on the letters of a keyword. It employs a form of polyalphabetic substitution.<br/><br/>

First described by Giovan Battista Bellaso in 1553, the cipher is easy to understand and implement, but it resisted all attempts to break it until 1863, three centuries later. This earned it the description le chiffre indéchiffrable (French for 'the indecipherable cipher'). Many people have tried to implement encryption schemes that are essentially Vigenère ciphers.[3] In 1863, Friedrich Kasiski was the first to publish a general method of deciphering Vigenère ciphers.</i> - <a href="https://en.wikipedia.org/wiki/Vigen%C3%A8re_cipher" target="_blank">Wikipedia</a></p>
        <div id="ceasar">
            <div class="input">
                <textarea v-model="input"></textarea>
            </div>
            <div class="controls">
                    <font-awesome-icon :icon="['fas', 'lock']" @click="encrypt"/>
                    <input type="text" v-model="key"> 
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
    name: 'Vigenere',
    data() {
        return {
            title: 'Vigenere cypher',
            input: 'Type the text you want to encrypt',
            output: '3CNA Kko RALK IsS KrqD RK vqmvWLH',
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

            for (let i = 0, j = 0; i < inputLength ; i++, j++) {
                let number = toEncrypt.charCodeAt(i);
                let amount = keyword.charCodeAt(j);
                if (j >= keyLength) {
                    j = 0;
                    if (toEncrypt[i] !== ' ') {
                        if (number >= 97 && number <= 122) {
                            number = (((number + amount) - 97)%26) + 97;
                        } else if (number >= 65 && number <= 90){
                            number = (((number + amount) - 65)%26) + 65;
                        }
                        let char = String.fromCharCode(number);
                        encrypted += char;
                    } else {
                        encrypted += ' ';
                        j--;
                    }
                } else {
                    if (toEncrypt[i] !== ' ') {
                        if (number >= 97 && number <= 122) {
                            number = (((number + amount) - 97)%26) + 97;
                        } else if (number >= 65 && number <= 90){
                            number = (((number + amount) - 65)%26) + 65;
                        }
                        let char = String.fromCharCode(number);
                        encrypted += char;
                    } else {
                        encrypted += ' ';
                        j--;
                    }
                }
            }

            this.output = encrypted;
        },
        // decrypt() {
        //     let word = this.output;
        //     let keyword = this.key;
        //     var alphabet = "abcdefghijklmnopqrstuvwxyz";
        //     var decryptWord = "";
        //     for (var i = 0;i < word.length;i++) {
        //         if (word[i] !== ' ') {
        //             decryptWord += alphabet.charAt(((alphabet.indexOf(word.charAt(i)) + alphabet.length) - alphabet.indexOf(keyword.charAt(i % keyword.length))) % alphabet.length);
        //         } else {
        //             decryptWord += ' ';  
        //         }
        //     }
        //     this.input = decryptWord;
        //     }
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
    align-items: center;
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
    font-size:0.8em;
    border: none;
    outline: none;
    resize: none;
    width: 10vw;
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




